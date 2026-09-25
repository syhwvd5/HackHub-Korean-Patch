# HackHub New Update Korean Patch - Final Rebuild Audit
# ASCII-only / Windows PowerShell 5.1 compatible.
# Audit-only: this script NEVER modifies app.asar.

$ErrorActionPreference = "Stop"

$Root = $PSScriptRoot
$AsarPath = Join-Path $Root "app.asar"
$CandidatePath = Join-Path $Root "HackHub_New_Rebase_Audit\index.candidate.js"
$TempPath = Join-Path $Root "app.asar.new-rebase.audit.tmp"

$ExpectedCleanAsarSha256 = "DA7DDCB04537B09DE5DDAFCA785FB265174979786EB2CCF7406ABB33BD9B34CB"
$ExpectedCleanAsarSize = 469447928

$ExpectedCleanIndexSha256 = "5FC130D9F0D9049C01169CA8A456AFBE453DD95662A3794B91EC0EEDF5193045"
$ExpectedCleanIndexSize = 22048466

$ExpectedCandidateIndexSha256 = "144FED4A6A7CEE51CD744FE935222425C6A6E35C454BD5EC0D3A057CC4C34B62"
$ExpectedCandidateIndexSize = 22048366

$ExpectedRebuiltAsarSize = 469447828
$BlockSize = 4194304
$Utf8NoBom = New-Object System.Text.UTF8Encoding($false)

function Get-FileSha256([string]$Path) {
    return (Get-FileHash -LiteralPath $Path -Algorithm SHA256).Hash.ToUpperInvariant()
}

function Get-BytesSha256([byte[]]$Bytes) {
    $sha = [Security.Cryptography.SHA256]::Create()
    try {
        return ([BitConverter]::ToString($sha.ComputeHash($Bytes))).Replace("-", "").ToUpperInvariant()
    }
    finally {
        $sha.Dispose()
    }
}

function Read-ExactBytes([System.IO.Stream]$Stream, [int]$Length) {
    [byte[]]$buffer = New-Object byte[] $Length
    $read = 0

    while ($read -lt $Length) {
        $n = $Stream.Read($buffer, $read, $Length - $read)
        if ($n -le 0) {
            throw "Unexpected EOF."
        }
        $read += $n
    }

    return $buffer
}

function Copy-StreamBytes(
    [System.IO.Stream]$Source,
    [System.IO.Stream]$Destination,
    [Int64]$Count
) {
    [byte[]]$buffer = New-Object byte[] 8388608
    [Int64]$remaining = $Count

    while ($remaining -gt 0) {
        $want = [int][Math]::Min([Int64]$buffer.Length, $remaining)
        $n = $Source.Read($buffer, 0, $want)

        if ($n -le 0) {
            throw "Unexpected EOF while copying ASAR payload."
        }

        $Destination.Write($buffer, 0, $n)
        $remaining -= $n
    }
}

function Get-AsarEntry($Header, [string[]]$PathParts) {
    $node = $Header

    foreach ($part in $PathParts) {
        $filesProperty = $node.PSObject.Properties["files"]

        if ($null -eq $filesProperty) {
            throw "ASAR header path has no files object: $part"
        }

        $files = $filesProperty.Value
        $partProperty = $files.PSObject.Properties[$part]

        if ($null -eq $partProperty) {
            throw "ASAR header entry not found: $part"
        }

        $node = $partProperty.Value
    }

    return $node
}

Write-Host ""
Write-Host "HackHub New Update - Final Rebuild Audit"
Write-Host "-----------------------------------------"
Write-Host ""
Write-Host "This audit does NOT modify app.asar."

if (-not (Test-Path -LiteralPath $AsarPath)) {
    throw "app.asar was not found."
}

if (-not (Test-Path -LiteralPath $CandidatePath)) {
    throw "Candidate index.js was not found: $CandidatePath"
}

$currentSize = [Int64](Get-Item -LiteralPath $AsarPath).Length
$currentHash = Get-FileSha256 $AsarPath

Write-Host ""
Write-Host "Clean app.asar:"
Write-Host "  Size   : $currentSize"
Write-Host "  SHA256 : $currentHash"

if (($currentSize -ne $ExpectedCleanAsarSize) -or ($currentHash -ne $ExpectedCleanAsarSha256)) {
    throw "app.asar is not the supported clean new HackHub build."
}

$candidateSize = [Int64](Get-Item -LiteralPath $CandidatePath).Length
$candidateHash = Get-FileSha256 $CandidatePath

Write-Host ""
Write-Host "Candidate index.js:"
Write-Host "  Size   : $candidateSize"
Write-Host "  SHA256 : $candidateHash"

if (($candidateSize -ne $ExpectedCandidateIndexSize) -or ($candidateHash -ne $ExpectedCandidateIndexSha256)) {
    throw "Candidate index.js verification failed."
}

[byte[]]$candidateBytes = [IO.File]::ReadAllBytes($CandidatePath)

if (Test-Path -LiteralPath $TempPath) {
    Remove-Item -LiteralPath $TempPath -Force
}

$src = $null
$dst = $null

try {
    $src = [IO.File]::Open(
        $AsarPath,
        [IO.FileMode]::Open,
        [IO.FileAccess]::Read,
        [IO.FileShare]::Read
    )

    [byte[]]$preamble = Read-ExactBytes $src 16

    $headerPickleSize = [BitConverter]::ToUInt32($preamble, 4)
    $jsonLength = [BitConverter]::ToUInt32($preamble, 12)
    [Int64]$payloadStart = 8 + [Int64]$headerPickleSize

    [byte[]]$headerBytes = Read-ExactBytes $src ([int]$jsonLength)
    $headerText = $Utf8NoBom.GetString($headerBytes)
    $headerObject = $headerText | ConvertFrom-Json

    $indexEntry = Get-AsarEntry $headerObject @("dist", "assets", "index.js")

    [Int64]$indexOffset = [Int64]::Parse([string]$indexEntry.offset)
    [Int64]$currentIndexSize = [Int64]$indexEntry.size

    if ($currentIndexSize -ne $ExpectedCleanIndexSize) {
        throw "Embedded clean index.js size mismatch."
    }

    if ($null -eq $indexEntry.integrity) {
        throw "index.js has no ASAR integrity metadata."
    }

    if ([string]$indexEntry.integrity.algorithm -ne "SHA256") {
        throw "Unsupported ASAR integrity algorithm."
    }

    if ([int]$indexEntry.integrity.blockSize -ne $BlockSize) {
        throw "Unexpected ASAR integrity block size."
    }

    [Int64]$indexAbsoluteOffset = $payloadStart + $indexOffset

    Write-Host ""
    Write-Host "Dynamic ASAR location:"
    Write-Host "  Payload start : $payloadStart"
    Write-Host "  Index offset  : $indexOffset"
    Write-Host "  Index size    : $currentIndexSize"

    $src.Position = $indexAbsoluteOffset
    [byte[]]$cleanIndexBytes = Read-ExactBytes $src ([int]$currentIndexSize)
    $cleanIndexHash = Get-BytesSha256 $cleanIndexBytes

    Write-Host ""
    Write-Host "Embedded clean index.js SHA256:"
    Write-Host "  $cleanIndexHash"

    if ($cleanIndexHash -ne $ExpectedCleanIndexSha256) {
        throw "Embedded clean index.js SHA256 mismatch."
    }

    [Int64]$delta = [Int64]$candidateBytes.Length - $currentIndexSize

    Write-Host ""
    Write-Host "index.js: $currentIndexSize -> $($candidateBytes.Length) bytes (delta $delta)"

    if ($delta -ne -100) {
        throw "Unexpected candidate index.js size delta: $delta"
    }

    $blockHashes = New-Object System.Collections.Generic.List[string]

    for ($offset = 0; $offset -lt $candidateBytes.Length; $offset += $BlockSize) {
        $length = [Math]::Min($BlockSize, $candidateBytes.Length - $offset)
        [byte[]]$block = New-Object byte[] $length
        [Array]::Copy($candidateBytes, $offset, $block, 0, $length)
        $blockHashes.Add((Get-BytesSha256 $block).ToLowerInvariant())
    }

    $blockJson = ($blockHashes | ForEach-Object { '"' + $_ + '"' }) -join ","

    $indexOffsetText = $indexOffset.ToString()
    $currentIndexSizeText = $currentIndexSize.ToString()

    $metaPattern =
        '"size":' +
        [regex]::Escape($currentIndexSizeText) +
        ',"offset":"' +
        [regex]::Escape($indexOffsetText) +
        '","integrity":\{' +
        '"algorithm":"SHA256",' +
        '"hash":"(?<hash>[0-9a-fA-F]{64})",' +
        '"blockSize":' +
        $BlockSize +
        ',"blocks":\[(?<blocks>[^\]]*)\]' +
        '\}'

    $metaMatches = [regex]::Matches($headerText, $metaPattern)

    if ($metaMatches.Count -ne 1) {
        throw "Could not uniquely locate dist/assets/index.js metadata."
    }

    $oldMeta = $metaMatches[0].Value
    $offsetPattern = '"offset":"(\d+)"'

    $offsetEvaluator = [Text.RegularExpressions.MatchEvaluator]{
        param($match)

        [Int64]$value = [Int64]::Parse($match.Groups[1].Value)

        if ($value -gt $indexOffset) {
            $value += $delta
        }

        return '"offset":"' + $value.ToString() + '"'
    }

    $shiftedHeader = [regex]::Replace($headerText, $offsetPattern, $offsetEvaluator)

    $newMeta =
        '"size":' +
        $candidateBytes.Length +
        ',"offset":"' +
        $indexOffset +
        '","integrity":{' +
        '"algorithm":"SHA256",' +
        '"hash":"' +
        $ExpectedCandidateIndexSha256.ToLowerInvariant() +
        '",' +
        '"blockSize":' +
        $BlockSize +
        ',"blocks":[' +
        $blockJson +
        ']}'

    $metaPosition = $shiftedHeader.IndexOf($oldMeta, [StringComparison]::Ordinal)

    if ($metaPosition -lt 0) {
        throw "Could not locate index.js metadata after offset adjustment."
    }

    $newHeaderText =
        $shiftedHeader.Substring(0, $metaPosition) +
        $newMeta +
        $shiftedHeader.Substring($metaPosition + $oldMeta.Length)

    [byte[]]$newHeaderBytes = $Utf8NoBom.GetBytes($newHeaderText)

    if ($newHeaderBytes.Length -ne $jsonLength) {
        throw "ASAR JSON header length changed."
    }

    Write-Host ""
    Write-Host "Rebuilding temporary app.asar..."

    $dst = [IO.File]::Open(
        $TempPath,
        [IO.FileMode]::CreateNew,
        [IO.FileAccess]::ReadWrite,
        [IO.FileShare]::None
    )

    $dst.Write($preamble, 0, $preamble.Length)
    $dst.Write($newHeaderBytes, 0, $newHeaderBytes.Length)

    [Int64]$paddingLength = $payloadStart - 16 - $jsonLength

    if ($paddingLength -lt 0) {
        throw "Invalid ASAR header layout."
    }

    if ($paddingLength -gt 0) {
        $src.Position = 16 + $jsonLength
        Copy-StreamBytes $src $dst $paddingLength
    }

    $src.Position = $payloadStart
    Copy-StreamBytes $src $dst $indexOffset

    $dst.Write($candidateBytes, 0, $candidateBytes.Length)

    $src.Position = $indexAbsoluteOffset + $currentIndexSize
    [byte[]]$copyBuffer = New-Object byte[] 8388608

    while (($read = $src.Read($copyBuffer, 0, $copyBuffer.Length)) -gt 0) {
        $dst.Write($copyBuffer, 0, $read)
    }

    $dst.Flush()

    if ($dst.Length -ne $ExpectedRebuiltAsarSize) {
        throw "Rebuilt ASAR size mismatch. Expected $ExpectedRebuiltAsarSize, got $($dst.Length)."
    }
}
finally {
    if ($dst) {
        $dst.Dispose()
    }

    if ($src) {
        $src.Dispose()
    }
}

Write-Host ""
Write-Host "Validating reconstructed app.asar..."

$tempSize = [Int64](Get-Item -LiteralPath $TempPath).Length
$tempHash = Get-FileSha256 $TempPath

Write-Host "  Size   : $tempSize"
Write-Host "  SHA256 : $tempHash"

$verify = $null

try {
    $verify = [IO.File]::Open(
        $TempPath,
        [IO.FileMode]::Open,
        [IO.FileAccess]::Read,
        [IO.FileShare]::Read
    )

    [byte[]]$verifyPreamble = Read-ExactBytes $verify 16
    $verifyPickleSize = [BitConverter]::ToUInt32($verifyPreamble, 4)
    $verifyJsonLength = [BitConverter]::ToUInt32($verifyPreamble, 12)
    [Int64]$verifyPayloadStart = 8 + [Int64]$verifyPickleSize

    [byte[]]$verifyHeaderBytes = Read-ExactBytes $verify ([int]$verifyJsonLength)
    $verifyHeaderText = $Utf8NoBom.GetString($verifyHeaderBytes)
    $verifyHeader = $verifyHeaderText | ConvertFrom-Json
    $verifyEntry = Get-AsarEntry $verifyHeader @("dist", "assets", "index.js")

    [Int64]$verifyOffset = [Int64]::Parse([string]$verifyEntry.offset)
    [Int64]$verifySize = [Int64]$verifyEntry.size

    if ($verifySize -ne $ExpectedCandidateIndexSize) {
        throw "Rebuilt ASAR index.js size verification failed."
    }

    $verify.Position = $verifyPayloadStart + $verifyOffset
    [byte[]]$verifyIndex = Read-ExactBytes $verify ([int]$verifySize)
    $verifyIndexHash = Get-BytesSha256 $verifyIndex

    if ($verifyIndexHash -ne $ExpectedCandidateIndexSha256) {
        throw "Rebuilt ASAR index.js SHA256 verification failed."
    }

    if (([string]$verifyEntry.integrity.hash).ToUpperInvariant() -ne $ExpectedCandidateIndexSha256) {
        throw "Rebuilt ASAR integrity metadata SHA256 mismatch."
    }
}
finally {
    if ($verify) {
        $verify.Dispose()
    }
}

Remove-Item -LiteralPath $TempPath -Force

Write-Host ""
Write-Host "FINAL REBUILD AUDIT PASS" -ForegroundColor Green
Write-Host ""
Write-Host "Deterministic patched app.asar:"
Write-Host "  Size   : $tempSize"
Write-Host "  SHA256 : $tempHash"
Write-Host ""
Write-Host "No installed game file was modified."
Write-Host ""
