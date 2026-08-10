# HackHub Korean Improvement Patch - Integrated Build
# Unofficial community translation improvement patch.
# Applies all previous translation improvements plus the final naming/localization policy.
# Patch data only: no original HackHub app.asar or other original game files are embedded.

$ErrorActionPreference = "Stop"
$AsarPath = Join-Path $PSScriptRoot "app.asar"
$BackupPath = Join-Path $PSScriptRoot "app.asar.original.bak"
$TempPath = Join-Path $PSScriptRoot "app.asar.korean-patch.tmp"
$ExpectedAsarSha256 = "ba5fafafff663ef8f1d8874c50beb2bc94e555e177fc21c5d5b96fb772420d64"
$ExpectedAsarSize = 468688937
$ExpectedIndexSha256 = "d1ce62dc4a3d3f3ae1d99f2a3386472778461196b515f3cb326ae5fc58e4a116"
$ExpectedFinalIndexSha256 = "553533b4a4c83ca6bdb1726c57b18bac1036d957ec4a9a9c5be3a6390b18d7f8"
$ExpectedPatchPayloadSha256 = "054e15c9b5f0902ba4ec4b38521d2521167d31061f227933d772c611bc710ad1"
$ExpectedPatchCount = 318
$KnownIndexOffset = 344085596
$BlockSize = 4194304

# GZip-compressed HKPD1 direct delta table.
# Each record stores source offset, source byte length, and replacement bytes only.
$PatchPayloadBase64 = @"
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
6FOj+AAA
"@

function Get-Sha256Hex([byte[]]$Bytes) {
    $sha=[System.Security.Cryptography.SHA256]::Create()
    try { return ([BitConverter]::ToString($sha.ComputeHash($Bytes))).Replace("-","").ToLowerInvariant() }
    finally { $sha.Dispose() }
}

function Read-UInt32([byte[]]$Data,[ref]$Position) {
    if ($Position.Value + 4 -gt $Data.Length) { throw "패치 payload가 중간에서 끝났습니다." }
    $v=[BitConverter]::ToUInt32($Data,[int]$Position.Value)
    $Position.Value += 4
    return $v
}

function Read-Patches() {
    $b64=($PatchPayloadBase64 -replace "\s","")
    [byte[]]$compressed=[Convert]::FromBase64String($b64)
    $input=New-Object System.IO.MemoryStream(,$compressed)
    $gzip=New-Object System.IO.Compression.GZipStream($input,[System.IO.Compression.CompressionMode]::Decompress)
    $raw=New-Object System.IO.MemoryStream
    try { $gzip.CopyTo($raw) } finally { $gzip.Dispose(); $input.Dispose() }
    [byte[]]$data=$raw.ToArray(); $raw.Dispose()
    if ((Get-Sha256Hex $data) -ne $ExpectedPatchPayloadSha256) { throw "패치 payload SHA-256 검증에 실패했습니다." }

    [int]$pos=0
    if ($data.Length -lt 9) { throw "패치 payload가 너무 짧습니다." }
    $magic=[System.Text.Encoding]::ASCII.GetString($data,0,5); $pos=5
    if ($magic -ne "HKPD1") { throw "패치 payload 형식이 올바르지 않습니다." }
    $count=Read-UInt32 $data ([ref]$pos)
    if ($count -ne $ExpectedPatchCount) { throw "패치 항목 수 검증에 실패했습니다: $count" }

    $items=New-Object System.Collections.ArrayList
    for ($i=0;$i -lt $count;$i++) {
        $offset=Read-UInt32 $data ([ref]$pos)
        $oldLen=Read-UInt32 $data ([ref]$pos)
        $newLen=Read-UInt32 $data ([ref]$pos)
        if ($pos + $newLen -gt $data.Length) { throw "패치 payload가 중간에서 끝났습니다." }
        [byte[]]$new=New-Object byte[] ([int]$newLen)
        if ($newLen -gt 0) { [Array]::Copy($data,$pos,$new,0,[int]$newLen); $pos += [int]$newLen }
        [void]$items.Add([pscustomobject]@{ Offset=[int]$offset; OldLength=[int]$oldLen; New=$new })
    }
    if ($pos -ne $data.Length) { throw "패치 payload 끝에 예상하지 못한 데이터가 있습니다." }
    return [object[]]$items.ToArray()
}

function Apply-Patches([byte[]]$Source,[object[]]$Patches) {
    [Int64]$finalLen=$Source.Length
    $lastEnd=0
    foreach ($p in $Patches) {
        $off=[int]$p.Offset; $oldLen=[int]$p.OldLength
        if ($off -lt $lastEnd -or $off -lt 0 -or $off + $oldLen -gt $Source.Length) { throw "패치 offset 범위가 올바르지 않습니다. offset=$off" }
        $finalLen += ([byte[]]$p.New).Length-$oldLen
        $lastEnd=$off+$oldLen
    }
    [byte[]]$result=New-Object byte[] ([int]$finalLen)
    $srcPos=0; $dstPos=0
    foreach ($p in $Patches) {
        $off=[int]$p.Offset; $oldLen=[int]$p.OldLength; [byte[]]$new=$p.New
        $copyLen=$off-$srcPos
        if ($copyLen -gt 0) { [Array]::Copy($Source,$srcPos,$result,$dstPos,$copyLen); $dstPos+=$copyLen }
        if ($new.Length -gt 0) { [Array]::Copy($new,0,$result,$dstPos,$new.Length); $dstPos+=$new.Length }
        $srcPos=$off+$oldLen
    }
    $tailLen=$Source.Length-$srcPos
    if ($tailLen -gt 0) { [Array]::Copy($Source,$srcPos,$result,$dstPos,$tailLen); $dstPos+=$tailLen }
    if ($dstPos -ne $result.Length) { throw "통합 index.js 조립 길이가 일치하지 않습니다." }
    return $result
}

Write-Host "HackHub 비공식 한국어 개선 통합 패치"
Write-Host "지원되는 순정 app.asar인지 확인합니다..."
if (-not (Test-Path -LiteralPath $AsarPath)) { throw "app.asar를 찾지 못했습니다. 이 스크립트를 Hackhub\resources 폴더에 넣어 주세요." }
$actualSize=(Get-Item -LiteralPath $AsarPath).Length
$actualSha=(Get-FileHash -LiteralPath $AsarPath -Algorithm SHA256).Hash.ToLowerInvariant()
if ($actualSize -ne $ExpectedAsarSize -or $actualSha -ne $ExpectedAsarSha256) {
    throw @"
지원되지 않는 app.asar입니다.
지원 SHA256: $ExpectedAsarSha256
현재 SHA256: $actualSha
Steam에서 파일 무결성 검사를 하여 순정 파일로 복구한 뒤 다시 실행하세요.
"@
}
if (-not (Test-Path -LiteralPath $BackupPath)) {
    Write-Host "원본 백업 생성: app.asar.original.bak"
    Copy-Item -LiteralPath $AsarPath -Destination $BackupPath
} else {
    $backupSha=(Get-FileHash -LiteralPath $BackupPath -Algorithm SHA256).Hash.ToLowerInvariant()
    if ($backupSha -ne $ExpectedAsarSha256) { throw "기존 app.asar.original.bak이 지원 원본과 다릅니다. 안전을 위해 중단합니다." }
    Write-Host "기존 원본 백업 유지: app.asar.original.bak"
}
if (Test-Path -LiteralPath $TempPath) { Remove-Item -LiteralPath $TempPath -Force }

$srcFs=$null
try {
    $patches=Read-Patches
    $utf8=New-Object System.Text.UTF8Encoding($false)
    $srcFs=[System.IO.File]::Open($AsarPath,[System.IO.FileMode]::Open,[System.IO.FileAccess]::Read,[System.IO.FileShare]::Read)
    [byte[]]$preamble=New-Object byte[] 16
    if ($srcFs.Read($preamble,0,16) -ne 16) { throw "ASAR preamble을 읽지 못했습니다." }
    $headerPickleSize=[BitConverter]::ToUInt32($preamble,4)
    $jsonLength=[BitConverter]::ToUInt32($preamble,12)
    [Int64]$payloadStart=8+[Int64]$headerPickleSize
    [byte[]]$headerBytes=New-Object byte[] $jsonLength
    $srcFs.Position=16
    if ($srcFs.Read($headerBytes,0,$headerBytes.Length) -ne $headerBytes.Length) { throw "ASAR JSON header를 읽지 못했습니다." }
    $headerText=$utf8.GetString($headerBytes)
    $metaPattern='"size":(?<size>\d+),"offset":"'+$KnownIndexOffset+'","integrity":\{"algorithm":"SHA256","hash":"(?<hash>[0-9a-f]{64})","blockSize":4194304,"blocks":\[(?<blocks>[^\]]*)\]\}'
    $metaMatches=[regex]::Matches($headerText,$metaPattern)
    if ($metaMatches.Count -ne 1) { throw "dist/assets/index.js 메타데이터를 찾지 못했습니다." }
    $meta=$metaMatches[0]
    [Int64]$currentIndexSize=[Int64]::Parse($meta.Groups['size'].Value)
    [Int64]$indexAbsoluteOffset=$payloadStart+[Int64]$KnownIndexOffset
    [byte[]]$indexBytes=New-Object byte[] $currentIndexSize
    $srcFs.Position=$indexAbsoluteOffset
    $got=0
    while ($got -lt $indexBytes.Length) { $n=$srcFs.Read($indexBytes,$got,$indexBytes.Length-$got); if ($n -le 0) { throw "index.js를 완전히 읽지 못했습니다." }; $got+=$n }
    if ((Get-Sha256Hex $indexBytes) -ne $ExpectedIndexSha256) { throw "순정 index.js SHA-256이 예상값과 다릅니다." }

    [byte[]]$newIndex=Apply-Patches $indexBytes $patches
    $newHash=Get-Sha256Hex $newIndex
    if ($newHash -ne $ExpectedFinalIndexSha256) { throw "최종 통합 index.js SHA-256 검증에 실패했습니다." }
    [Int64]$delta=[Int64]$newIndex.Length-$currentIndexSize
    Write-Host "index.js: $currentIndexSize -> $($newIndex.Length) bytes (delta $delta)"

    $newBlocks=@()
    for ($offset=0;$offset -lt $newIndex.Length;$offset+=$BlockSize) {
        $len=[Math]::Min($BlockSize,$newIndex.Length-$offset); [byte[]]$block=New-Object byte[] $len
        [Array]::Copy($newIndex,$offset,$block,0,$len); $newBlocks+=(Get-Sha256Hex $block)
    }
    $blockJson=($newBlocks | ForEach-Object { '"'+$_+'"' }) -join ','
    $offsetPattern='"offset":"(\d+)"'
    $offsetEvaluator=[System.Text.RegularExpressions.MatchEvaluator]{ param($m); [Int64]$n=[Int64]::Parse($m.Groups[1].Value); if ($n -gt [Int64]$KnownIndexOffset) { $n+=$delta }; return '"offset":"'+$n.ToString()+'"' }
    $headerShifted=[regex]::Replace($headerText,$offsetPattern,$offsetEvaluator)
    $newMeta='"size":'+$newIndex.Length+',"offset":"'+$KnownIndexOffset+'","integrity":{"algorithm":"SHA256","hash":"'+$newHash+'","blockSize":4194304,"blocks":['+$blockJson+']}'
    if ($headerShifted.IndexOf($meta.Value,[StringComparison]::Ordinal) -lt 0) { throw "index.js 메타데이터 교체 위치를 찾지 못했습니다." }
    $newHeaderText=$headerShifted.Replace($meta.Value,$newMeta)
    [byte[]]$newHeader=$utf8.GetBytes($newHeaderText)
    if ($newHeader.Length -ne $jsonLength) { throw "ASAR header 길이가 달라졌습니다. 안전을 위해 중단합니다." }

    $dstFs=[System.IO.File]::Open($TempPath,[System.IO.FileMode]::CreateNew,[System.IO.FileAccess]::ReadWrite,[System.IO.FileShare]::None)
    try {
        $dstFs.Write($preamble,0,$preamble.Length); $dstFs.Write($newHeader,0,$newHeader.Length)
        [Int64]$paddingLen=$payloadStart-16-$jsonLength
        if ($paddingLen -gt 0) { [byte[]]$padding=New-Object byte[] $paddingLen; $srcFs.Position=16+$jsonLength; if ($srcFs.Read($padding,0,$padding.Length) -ne $padding.Length) { throw "header padding을 읽지 못했습니다." }; $dstFs.Write($padding,0,$padding.Length) }
        $srcFs.Position=$payloadStart; [Int64]$remaining=[Int64]$KnownIndexOffset; [byte[]]$buf=New-Object byte[] 8388608
        while ($remaining -gt 0) { $want=[int][Math]::Min([Int64]$buf.Length,$remaining); $n=$srcFs.Read($buf,0,$want); if ($n -le 0) { throw "index.js 이전 payload 복사 중 EOF입니다." }; $dstFs.Write($buf,0,$n); $remaining-=$n }
        $dstFs.Write($newIndex,0,$newIndex.Length)
        $srcFs.Position=$indexAbsoluteOffset+$currentIndexSize
        while (($n=$srcFs.Read($buf,0,$buf.Length)) -gt 0) { $dstFs.Write($buf,0,$n) }
        $dstFs.Flush()
        if ($dstFs.Length -ne $srcFs.Length+$delta) { throw "재구성된 ASAR 크기가 예상과 다릅니다." }
    } finally { if ($dstFs) { $dstFs.Dispose() } }

    $srcFs.Dispose(); $srcFs=$null
    Remove-Item -LiteralPath $AsarPath -Force
    Move-Item -LiteralPath $TempPath -Destination $AsarPath
    Write-Host ""; Write-Host "통합 패치 완료!" -ForegroundColor Green
    Write-Host "적용된 패치 블록: $($patches.Count) 항목"
    Write-Host "원본 백업: app.asar.original.bak"
}
catch {
    Write-Host ""; Write-Host "패치 실패: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "검증 완료 전에는 기존 app.asar를 교체하지 않습니다."
    if (Test-Path -LiteralPath $TempPath) { Remove-Item -LiteralPath $TempPath -Force -ErrorAction SilentlyContinue }
    throw
}
finally { if ($srcFs) { $srcFs.Dispose() } }
