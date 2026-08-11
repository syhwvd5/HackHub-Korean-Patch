# HackHub 비공식 한국어 개선 패치

HackHub의 기존 한국어 번역에서 어색한 기계번역, 오역, 과도한 띄어쓰기와 게임 진행에 영향을 주는 번역을 개선하는 비공식 사용자 제작 패치입니다.

> **현재 배포 버전:** v1.0.3  
> **지원 원본 `app.asar` SHA-256:** `ba5fafafff663ef8f1d8874c50beb2bc94e555e177fc21c5d5b96fb772420d64`

## 주요 개선 내용

- 미션 설명은 자연스러운 한국어로 번역하면서 실제 검색어/명령어는 영어 원문 유지
- `lynx`, `hydra`, `nmap`, `root`, `true`, `false`, 파일명, 도메인, 옵션, 코드 등의 게임플레이 토큰 보존
- Handbook 명령어/온라인 월드 문서 전반 교정
- 메일과 Kisscord 대화의 문맥, 말투, 띄어쓰기 개선
- 설정 화면 및 마우스 오버 툴팁 교정
- 설정 탭 `Gameplay / Display / Graphics / Audio`는 영어 표기 유지
- 메인 메뉴 `계속하기`, 뉴스 버튼 `More` 등 UI 마무리 교정

## 다운로드

### [⬇️ HackHub 비공식 한국어 개선 패치 v1.0.3 다운로드](https://github.com/syhwvd5/HackHub-Korean-Patch/releases/download/v1.0.2/HackHub-Korean-Patch-v1.0.2.zip)

일반 사용자는 위 링크에서 `HackHub-Korean-Patch-v1.0.3.zip`을 바로 다운로드할 수 있습니다.

## 설치 방법

1. Steam에서 HackHub를 설치하고 **게임을 완전히 종료**합니다.
2. Steam 라이브러리에서 HackHub를 우클릭하여 로컬 파일 열기.
3. 다음 폴더로 이동합니다.

   ```text
   Hackhub\resources
   ```

4. Release에서 받은 `HackHub_Korean_Patch_v1.0.3.ps1`을 `app.asar`와 같은 폴더에 넣습니다.
5. 해당 폴더에서 PowerShell을 열고 아래 명령을 실행합니다.

   ```powershell
   powershell -ExecutionPolicy Bypass -File ".\HackHub_Korean_Patch_v1.0.3.ps1"
   ```

6. `패치 완료!`가 표시되면 게임을 실행합니다.

패처는 실행 전에 순정 `app.asar`의 SHA-256을 검사하며, 호환되는 파일일 때만 진행합니다. 원본은 `app.asar.original.bak`으로 자동 백업됩니다.

## 원상복구

Steam의 **설치된 파일 → 게임 파일 무결성 검사**를 이용할 수 있습니다.

## 번역 원칙

읽는 문장은 한국어로 자연스럽게 다듬되, 플레이어가 게임에서 직접 입력하거나 검색해야 하는 문자열은 가능한 한 원문을 유지합니다.

예를 들어 아래 항목은 번역하지 않거나 필요한 경우 영어 표기를 함께 유지합니다.

- 터미널 명령어와 옵션
- `lynx`, `hydra`, `nmap`, `bettercap` 등 도구명
- `root`, `true`, `false` 같은 실제 값
- IP 주소, 도메인, username, 파일명
- 코드, 함수명, placeholder
- 미션에서 그대로 검색해야 하는 핵심 키워드

## 호환성 / 주의사항

- 이 패치는 **특정 HackHub 빌드의 순정 `app.asar`**만 지원합니다.
- 게임 업데이트 후 SHA-256이 달라지면 패처가 자동으로 중단됩니다. 새 버전 호환 패치가 나올 때까지 적용하지 마세요.
- 이미 수정된 `app.asar`에는 통합 패처를 적용하지 마세요. Steam 무결성 검사 후 적용하는 것이 가장 안전합니다.
- Steam 무결성 검사를 실행하면 한국어 개선 패치가 제거될 수 있습니다.
- 이 프로젝트는 비공식 팬 프로젝트이며 HackHub 개발사와 관련이 없습니다.
- 이 저장소에는 HackHub의 원본 `app.asar` 또는 원본 게임 파일을 포함하지 않습니다.

## 번역 오류 제보

Issues에서 다음 정보를 함께 남겨 주세요.

- 문제가 발생한 화면/앱/미션 이름
- 현재 표시되는 한국어
- 가능하다면 영어 원문
- 원하는 번역 또는 문제 설명
- 스크린샷

특히 게임에서 **검색하거나 입력해야 하는 단어가 번역되어 진행이 막히는 문제**는 우선적으로 제보해 주세요.

## 설치 파일

일반 사용자는 GitHub의 **Releases**에서 최신 ZIP을 받는 것을 권장합니다.

```text
HackHub-Korean-Patch-v1.0.3.zip
├─ HackHub_Korean_Patch_v1.0.3.ps1
└─ README.txt
```

## 저작권 안내

HackHub 및 원본 게임 리소스의 권리는 해당 권리자에게 있습니다. 이 저장소는 원본 게임을 재배포하지 않으며, 사용자가 보유한 정품 게임 파일에 번역 수정 사항을 적용하는 패처만 제공합니다.
