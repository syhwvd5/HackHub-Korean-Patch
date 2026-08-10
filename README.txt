HackHub 비공식 한국어 개선 패치 v1.0.0

[설치]
1. 게임을 완전히 종료합니다.
2. Hackhub\resources 폴더에 아래 두 파일을 넣습니다.
   - HackHub_Korean_Patch.ps1
   - Restore_Original.ps1
3. 해당 폴더에서 PowerShell을 열고 실행합니다.

   powershell -ExecutionPolicy Bypass -File ".\HackHub_Korean_Patch.ps1"

4. "패치 완료!"가 나오면 게임을 실행합니다.

[복구]
powershell -ExecutionPolicy Bypass -File ".\Restore_Original.ps1"

[지원 원본 SHA-256]
ba5fafafff663ef8f1d8874c50beb2bc94e555e177fc21c5d5b96fb772420d64

게임 업데이트로 SHA-256이 달라지면 패처가 중단됩니다.
이 패치는 비공식 사용자 제작 패치이며 원본 게임 파일을 포함하지 않습니다.
