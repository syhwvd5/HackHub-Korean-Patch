# Changelog

## v1.0.0

첫 공개 통합 배포 버전입니다.

### 번역

- 미션 핵심 검색어/명령어 보존 및 설명문 자연화
- Handbook 명령어 및 Online World 문서 전반 개선
- 메일 / Kisscord 대화 문맥과 띄어쓰기 개선
- 게임플레이 의미가 달라진 오역 교정
- 설정 화면 옵션명과 툴팁 정밀교정
- 메인 메뉴와 뉴스 UI 마무리 교정

### 게임플레이 호환성

- root / true / false 등 실제 값 원문 유지
- 명령어, 옵션, 파일명, 도메인, username, 코드 및 placeholder 보존
- lynx 검색 등 실제 입력이 필요한 키워드의 영어 표기 유지

### 배포

- 기존 여러 단계 패치를 하나의 `HackHub_Korean_Patch.ps1`로 통합
- 순정 `app.asar` SHA-256 검사 추가
- 자동 원본 백업 및 복구 스크립트 제공
- `index.js` 크기 변화 시 ASAR offset / integrity를 자동 재구성
