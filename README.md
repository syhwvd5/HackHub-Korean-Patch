# HackHub Korean Improvement Patch - Restore original app.asar
$ErrorActionPreference = "Stop"
$AsarPath = Join-Path $PSScriptRoot "app.asar"
$BackupPath = Join-Path $PSScriptRoot "app.asar.original.bak"
$ExpectedOriginalSha256 = "ba5fafafff663ef8f1d8874c50beb2bc94e555e177fc21c5d5b96fb772420d64"

Write-Host "HackHub 원본 복구"
if (-not (Test-Path -LiteralPath $BackupPath)) { throw "app.asar.original.bak을 찾지 못했습니다." }
$backupSha=(Get-FileHash -LiteralPath $BackupPath -Algorithm SHA256).Hash.ToLowerInvariant()
if ($backupSha -ne $ExpectedOriginalSha256) { throw "백업 파일이 지원되는 순정 app.asar와 일치하지 않습니다. 안전을 위해 중단합니다." }
Copy-Item -LiteralPath $BackupPath -Destination $AsarPath -Force
Write-Host "복구 완료: app.asar.original.bak -> app.asar" -ForegroundColor Green
