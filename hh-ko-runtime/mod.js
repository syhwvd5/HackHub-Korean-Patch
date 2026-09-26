"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

var index_exports = {};
__export(index_exports, {
  default: () => HhKoRuntime
});
module.exports = __toCommonJS(index_exports);

var import_hackhub_content_sdk = require("@hotbunny/hackhub-content-sdk");

var RUNTIME_TRANSLATIONS = new Map(Object.entries({"더 읽기":"More","Steam 클라우드에서 저장 데이터 업데이트가 발견되었습니다. 동기화하시겠습니까?":"Steam Cloud에서 저장 데이터 업데이트가 발견되었습니다. 동기화하시겠습니까?","Steam 클라우드 저장":"Steam Cloud 저장","저장 데이터를 Steam 클라우드에 자동 동기화합니다.":"저장 데이터를 Steam Cloud와 자동으로 동기화합니다.","알겠습니다. 계속 진행하겠습니다.":"계속하기","그들은 인터폴에서 Jihad 그룹에 대한 모든 정보를 삭제하고 싶어 했다.":"그들은 interpol에서 Jihad group에 대한 모든 정보를 삭제하고 싶어 했다.","국제 경찰에서 일하는 사람을 찾으세요.":"Interpol에서 일하는 사람을 찾으세요.","안드레아의 컴퓨터로 전송될 맬웨어를 조리하다.":"Andrea의 컴퓨터로 전송될 맬웨어를 조리하다.","Metasploit을 열고 안드레아의 컴퓨터를 해킹하기 위한 멀웨어를 만드세요.":"Metasploit을 열고 Andrea의 컴퓨터를 해킹하기 위한 멀웨어를 만드세요.","내가 너에게 증거를 없애는 것을 도와주길 원했기 때문에. 인터폴 서버의 파일들, 내 연결들, 나를 그들과 연관시킬 수 있는 모든 것들. 만약 내가 모든 것을 지울 수 있다면, 나는 드디어 자유로워질 수 있을 거라고 생각했어. 나는 Alina를 되찾고, 이것이 모두 끔찍한 오해라고 말하고, 우리 둘 다 다시 시작할 수 있을 거라고 생각했어.":"내가 너에게 증거를 없애는 것을 도와주길 원했기 때문에. Interpol 서버의 파일들, 내 연결들, 나를 그들과 연관시킬 수 있는 모든 것들. 만약 내가 모든 것을 지울 수 있다면, 나는 드디어 자유로워질 수 있을 거라고 생각했어. 나는 Alina를 되찾고, 이것이 모두 끔찍한 오해라고 말하고, 우리 둘 다 다시 시작할 수 있을 거라고 생각했어.","당신은 선택권이 있습니다. 저를 도와 인터폴 서버에서 모든 Jihad 데이터를 삭제할 수 있습니다. 그들에게 대한 저의 모든 연결 흔적을 지워주세요. 저를 그들의 기록에서 사라지게 도와주셔서 저는 마침내 자유롭고 제 여동생을 안전하게 되찾을 수 있습니다. 아니면... 모든 것을 폭로할 수 있습니다. 저를 신고하고, 진실을 세상에 드러내고, 정의가 그 과정을 밟게 하세요. 하지만 그렇게 한다면, Alina가 그녀의 오빠가 누구인지 알게 되고, 저는 그녀를 그 결과로부터 결코 보호할 수 없게 될 것입니다.":"당신은 선택권이 있습니다. 저를 도와 Interpol 서버에서 모든 Jihad 데이터를 삭제할 수 있습니다. 그들에게 대한 저의 모든 연결 흔적을 지워주세요. 저를 그들의 기록에서 사라지게 도와주셔서 저는 마침내 자유롭고 제 여동생을 안전하게 되찾을 수 있습니다. 아니면... 모든 것을 폭로할 수 있습니다. 저를 신고하고, 진실을 세상에 드러내고, 정의가 그 과정을 밟게 하세요. 하지만 그렇게 한다면, Alina가 그녀의 오빠가 누구인지 알게 되고, 저는 그녀를 그 결과로부터 결코 보호할 수 없게 될 것입니다.","나 는 당신 이 Jihad 조직 과 연결 되어 있다는 것 을 압니다 . 나 는 당신 이 자신의 여동생 의 유괴 를 계획 했다는 것 을 압니다 . 나는 메시지 로그 를 보 았어요 , Harvey . 당신 의 이름 이 그 안에 있었어요 .":"나 는 당신 이 Jihad organization 과 연결 되어 있다는 것 을 압니다 . 나 는 당신 이 자신의 여동생 의 유괴 를 계획 했다는 것 을 압니다 . 나는 메시지 로그 를 보 았어요 , Harvey . 당신 의 이름 이 그 안에 있었어요 .","이 던  피싱  이메일을  보내서  이든을  온라인으로  만드세요.":"Ethan에게 피싱 이메일을 보내서 Ethan을 온라인으로 만드세요.","마지막 작업을 받았어. 인터폴에 해킹해서 Jihad 그룹에 대한 모든 정보를 삭제할 거야.":"마지막 작업을 받았어. Interpol에 해킹해서 Jihad group에 대한 모든 정보를 삭제할 거야.","이 thumb_up e-mail 계정에 로그인하십시오.":"Ethan의 e-mail 계정에 로그인하십시오.","인터폴에 해킹해서 Jihad 그룹에 대한 모든 정보를 삭제해.":"Interpol에 해킹해서 Jihad group에 대한 모든 정보를 삭제해.","경쟁사 를 조사 하다 .":"경쟁사를 조사하세요.","입력 모드":"텍스트 입력 단위","헤이  형,  나는  너의  도움이  필요해  뭔가.":"형, 부탁 하나만 들어줘.","경쟁사 를 파괴 하다 .":"경쟁사를 방해하세요.","무슨 일이야 ? 무슨 문제야 ?":"무슨 일이야? 무슨 문제 있어?","단어":"단어 단위","I  will  do  it.  But  you  will  help  me.":"할게. 대신 너도 나를 도와줘.","BearOS 시스템을 배우기 위해":"BearOS 시스템과 기능을 배우고 익힙니다.","Firebear 브라우저":"Firebear Browser","나 는 그들이 원하는 것이 무엇인지 물어봤다 , 그들은 나에게 3 가지 일을 원한다 . 하지만 그들은 나에게 단지 하나만 말했다 . 내가 할 수 있다면 , 그들은 나에게 나머지를 말해줄 것이다 . 그리고 그것이 끝나면 , 그들은 소녀를 풀어줄 것이라고 한다 .":"그들이 원하는 게 뭔지 물어봤어. 내게 세 가지 일을 시키려는데, 지금은 하나만 알려 줬어. 이걸 해내면 다음 일을 알려 주고, 전부 끝나면 그 소녀를 풀어주겠대.","첫 번째로, 당신의 첫 번째 작업부터 시작합시다. 우리는 당신이 BCC 뉴스 웹사이트에서 우리의 이름으로 뉴스 기사를 공유하기를 원합니다.":"첫 번째로, 당신의 첫 번째 작업부터 시작합시다. 우리는 당신이 BCC News 웹사이트에서 우리의 이름으로 뉴스 기사를 공유하기를 원합니다.","그들은 나에게 BCC 뉴스 해킹을 시켜 그들에 대한 뉴스 기사를 입력하게 하려 한다. 그들은 이메일로 뉴스를 보냈다.":"그들은 나에게 BCC News 해킹을 시켜 그들에 대한 뉴스 기사를 입력하게 하려 한다. 그들은 이메일로 뉴스를 보냈다.","제가 당신을 위해 할 일이 있어요. 저를 kisscord에 추가하세요: {{username}}":"제가 당신을 위해 할 일이 있어요. 저를 Kisscord에 추가하세요: {{username}}","Eppenstein Foundation 뒤의 핵심 인물에 대한 정보 찾기":"Eppenstein Foundation 배후의 핵심 인물에 대한 정보를 찾으세요.","증거 찾기":"증거를 찾으세요.","캐릭터":"글자 단위","Online World":"온라인 월드","파이썬  모듈":"Python 모듈","명령":"명령어","내용":"목차","<title>현재 파일/폴더를 삭제합니다.</title><usage /><code>rm [파일/폴더 이름]</code>":"<title>현재 파일/폴더를 삭제합니다.</title><usage /><code>rm [file/folder name]</code>","<title>Secure Shell (SSH)는 원격 컴퓨터에 안전하게 접근할 수 있는 프로토콜입니다. 이 프로토콜을 사용하면 시스템에 원격으로 로그인하고 마치 콘솔 앞에 앉아있는 것처럼 명령을 실행할 수 있습니다. 중요한 것은 플래그입니다. ssh에서는 일반적인 사용법을 사용하지 않습니다. -h 플래그에서는 사용자 이름과 IP 주소를 조합해야 합니다 (포트 없이). 예: root@192.168.1.1</title><usage/><code>ssh -h [username@ip] -p [password]</code>":"<title>Secure Shell (SSH)는 원격 컴퓨터에 안전하게 접근할 수 있는 프로토콜입니다.이 프로토콜을 사용하면 시스템에 원격으로 로그인하고 마치 콘솔 앞에 앉아있는 것처럼 명령을 실행할 수 있습니다. 중요한 것은 플래그입니다. ssh에서는 일반적인 사용법을 사용하지 않습니다. -h 플래그에서는 사용자 이름과 IP 주소를 조합해야 합니다 (포트 없이). 예: root@192.168.1.1</title><usage/><code>ssh -h [username@ip] -p [password]</code>","선명한 가장자리":"선명한 경계","품질 최적화":"품질 우선","속도 최적화":"속도 우선","픽셀화된":"픽셀화","Featured Mods":"추천 모드","See all":"모두 보기","View on Steam":"Steam에서 보기","판매 주소가 누구에게 등록되어 있는지 확인하세요.":"판매 주소가 누구 명의로 등록되어 있는지 알아보세요.","도메인 소유자를 검색하세요.":"domain 소유자를 찾아보세요.","결과를 검색하고 진짜 마약 딜러를 찾으세요.":"검색 결과를 확인해 실제 마약 판매자를 찾으세요.","대상에 대해 조사하세요.":"대상을 조사하세요.","대상 IP 주소에서 열린 포트를 찾으세요.":"대상 IP 주소에서 열린 port를 찾아보세요.","대상의 이메일을 찾으세요.":"대상의 email을 찾으세요.","대상을 조사하십시오.":"대상을 조사하세요.","대상이 꾸준히 관심을 가질 만한 것을 조사하십시오.":"대상이 꾸준히 관심을 보이는 주제를 조사하세요.","타겟의 전화번호를 찾아라.":"대상의 전화번호를 찾으세요.","저는 오늘 #Bitvista 덕분에 백만장자가 되었습니다! 噫腸":"저는 오늘 #Bitvista 덕분에 백만장자가 되었습니다! 🚀💰","적절한 exploit 를 찾으면, 그것을 사용하라.":"올바른 exploit을 찾으면 사용하세요.","교수의 이름 찾기":"교수의 이름을 찾으세요.","교수에 대해 조사하고 연결된 장소에서 IP 주소를 찾아보세요.":"교수를 조사하고, 연결된 장소에서 IP 주소를 찾아보세요.","하나씩 시도해서 올바른 대상을 찾으세요.":"하나씩 시도해 올바른 대상을 찾으세요.","클라이언트의 네트워크를 찾고 모뎀 인터페이스에 액세스하세요.":"의뢰인의 네트워크를 찾아 modem interface에 접속하세요.","핫스팟으로 휴대폰에 연결하세요.":"휴대폰의 핫스팟에 연결하세요.","저장된 pcap 파일을 사용하여 Wi-Fi 네트워크의 비밀번호를 찾으십시오.":"저장된 pcap 파일을 사용해 Wi-Fi 네트워크의 비밀번호를 알아내세요.","대상 도메인의 IP 주소를 찾으세요.":"대상 domain의 IP 주소를 찾으세요.","IP 주소로 열린 데이터베이스 포트를 찾으세요.":"IP 주소를 이용해 열린 database port를 찾으세요.","brute-force 도구 hydra를 사용하여 학교 데이터베이스의 로그인 정보를 찾으세요.":"brute-force 도구 hydra를 사용해 학교 database의 login 정보를 찾으세요.","BCC 뉴스 를 확인 하세요.":"BCC News 를 확인 하세요.","Popstar Games 연구.":"Popstar Games를 조사하세요.","Popstar 의 다가오는 'Giga Theft Auto 6' 에서 확인된 스크린샷이 필요합니다. 찾아서 추출한 다음 익명으로 보내세요.":"Popstar의 차기작 'Giga Theft Auto 6'에서 확인 가능한 screenshot이 필요합니다. 찾아서 추출한 뒤 익명으로 보내세요.","터미널에서 python3 스크립트를 실행하려면 다음을 사용하십시오:<code>python3 [경로/스크립트 파일]</code><br />가끔 스크립트에는 추가 인수가 필요할 수 있습니다. 이 퀘스트에서는 Sparrow Wifi 스크립트를 성공적으로 실행하려면 옆에 IP 주소를 추가해야 합니다.<br />따라서 마지막 단계에서 우리의 명령은 <code>python3 [스크립트 파일 경로] [ip 주소]</code>가 됩니다.<br />예를 들어: <code>python3 ./downloads/sparrow-wifi.py 192.168.1.1</code>":"터미널에서 python3 script를 실행하려면 다음 형식을 사용하세요:<code>python3 [path to script file]</code><br />이 quest처럼 script에 추가 인자가 필요한 경우도 있습니다. Sparrow Wifi script를 정상적으로 실행하려면 뒤에 IP 주소를 추가해야 합니다.<br />따라서 마지막 단계의 명령은 <code>python3 [path to script file] [ip address]</code>가 됩니다.<br />예: <code>python3 ./downloads/sparrow-wifi.py 192.168.1.1</code>","테두리 모드에서 사용 가능":"이 설정은 창 모드에서만 사용할 수 있습니다.","오디오":"Audio","Terminal":"터미널","바탕화면에 쓸 배경을 선택하세요.":"바탕화면에 사용할 배경화면을 선택합니다.","활성 테마를 덮어씁니다. 초기화하면 다시 테마를 따릅니다.":"여기서 지정한 색상은 현재 테마의 색상보다 우선 적용됩니다. 초기화하면 다시 테마 색상을 사용합니다.","바탕화면 아이콘 글자":"바탕화면 아이콘 글자색","바탕화면 아이콘을 삭제하지 않고 모두 숨깁니다.":"아이콘을 삭제하지 않고 바탕화면에서 모두 숨깁니다.","AM/PM 대신 24시간 형식으로 시간을 표시합니다.":"시간을 AM/PM 대신 24시간 형식으로 표시합니다.","인터페이스의 애니메이션과 전환을 최소화합니다.":"UI 애니메이션과 화면 전환 효과를 줄입니다.","창을 화면 가장자리나 모서리로 끌면 스냅되고, 최대화 버튼 위에 마우스를 올리면 레이아웃이 나타납니다.":"창을 화면 가장자리나 모서리로 끌어 스냅할 수 있습니다. 최대화 버튼에 마우스를 올리면 스냅 레이아웃이 표시됩니다.","스냅된 창과 화면 가장자리 사이의 간격입니다.":"스냅된 창 사이와 화면 가장자리에 적용할 간격을 설정합니다.","최신 터미널 프롬프트 스타일을 사용합니다.":"모던 스타일의 터미널 프롬프트를 사용합니다.","Appearance":"모양","Font":"글꼴","터미널 텍스트에 사용되는 서체입니다.":"터미널에 표시할 글꼴을 선택합니다.","Font size":"글꼴 크기","픽셀 단위 글자 크기입니다. 줄 간격도 함께 조절됩니다.":"터미널 글자 크기를 픽셀 단위로 설정합니다. 줄 간격도 함께 조정됩니다.","터미널의 기본 글자 색상입니다. 투명 배경이나 이미지 배경 때문에 글자가 잘 보이지 않을 때 유용합니다.":"터미널의 기본 글자 색상을 설정합니다. 투명 배경이나 이미지 배경에서 글자가 잘 보이지 않을 때 조정하세요.","이미지를 고르거나 직접 가져오세요.":"배경 이미지를 선택하거나 직접 가져옵니다.","활성 테마가 이 터미널 색상을 설정했습니다. 이전 색상은 아래에 저장되어 있습니다.":"현재 테마가 터미널 색상을 지정하고 있습니다. 이전에 설정한 색상은 아래에 보관되어 있습니다.","시작할 때":"시작 시","테두리 창":"창 모드","대화 볼륨":"대사 볼륨","표시":"Display","플래시 스크린 닫기 Windows":"플래시 화면 표시 시 모든 창 닫기","플래시 화면이 표시되면 열려 있는 모든 창을 자동으로 닫습니다.":"플래시 화면이 나타나면 열려 있는 모든 창을 자동으로 닫습니다.","IP와 메일 주소를 짧은 라벨 뒤로 숨겨 시청자가 방송에서 읽을 수 없게 합니다. 게임은 여전히 실제 주소로 작동하며, 숨겨진 주소를 복사하면 실제 값이 들어옵니다.":"IP 주소와 이메일 주소를 짧은 별칭으로 가려 방송 화면에 실제 주소가 노출되지 않도록 합니다. 게임에서는 원래 주소가 그대로 사용되며, 가려진 주소를 복사하면 원래 주소가 복사됩니다.","방송 모드":"스트리밍 모드","게임 플레이":"Gameplay","시작 시 scoutify 열기.":"시작 시 scoutify 열기","게임이 시작되면, Hackhub에 사용 가능한 퀘스트가 있는지 확인하세요.":"시작 시 Hackhub의 새 퀘스트 확인","게임 시작 시 Hackhub에서 완료 대기 중인 퀘스트가 있는지 확인하십시오.":"시작 시 Hackhub의 미완료 퀘스트 확인","게임 시작 시 Kisscord에 보류 중인 메시지가 있는지 확인하세요.":"시작 시 Kisscord의 새 메시지 확인","그래픽스":"Graphics","이미지 렌더링":"이미지 렌더링 방식","키다운 소리":"키 입력음","마우스 클릭 소리 효과":"마우스 클릭 효과음","해결책":"해상도","화면":"모니터","인터페이스의 응답성을 유지하려면 게임이 진행 중일 때 화면을 변경할 수 없습니다.":"게임 진행 중에는 안정성을 위해 모니터를 변경할 수 없습니다.","SFX 볼륨 (GUI)":"UI 효과음 볼륨","클릭 시 터미널 포커스":"클릭 시 터미널 입력창 포커스","터미널의 빈 영역을 클릭하면 포커스가 자동으로 명령 입력 필드로 이동합니다.":"터미널의 빈 공간을 클릭하면 커서가 자동으로 명령어 입력창으로 이동합니다.","텍스트 렌더링":"텍스트 렌더링 방식","UI 크기":"UI 배율","커스텀 배경화면 가져오기는 전체 버전에서 스토어 구매가 활성화된 경우에 가능합니다.":"사용자 지정 배경화면 가져오기는 정식 버전에서 Store 구매를 통해 사용할 수 있습니다.","배경 이미지 제거":"배경화면 제거","이 배경 이미지는 게임에서 제거되며, 디스크의 배경 이미지 폴더에 있는 파일도 영구적으로 삭제됩니다. 이 작업은 취소할 수 없습니다.":"이 배경화면을 게임에서 제거하고, 디스크의 배경화면 폴더에 있는 파일도 영구 삭제합니다. 이 작업은 되돌릴 수 없습니다.","창 스타일":"화면 모드","컨트롤바 색상":"컨트롤 바 색상","바탕 화면 아이콘 색상":"바탕화면 아이콘 색상","Titlebar 색상 #1":"제목 표시줄 색상 #1","앱 스토어 다운로드":"App Store 다운로드","앱 스토어에서 애플리케이션을 다운로드할 수 있습니다.":"App Store에서 애플리케이션을 다운로드할 수 있습니다.","스카이퍼스카이는 닫힌 후에는 작동하지 않습니다. 해킹으로부터 시스템을 보호하려면 스카이퍼스카이를 열어 두어야 합니다.":"Skypersky는 닫힌 후에는 작동하지 않습니다. 해킹으로부터 시스템을 보호하려면 Skypersky를 열어 두어야 합니다.","터미널 또는 패키지에서 종료합니다.":"Downloads and installs a package from the apt registry. Usage: apt-get install <package>","가독성 최적화":"가독성 우선","2025  최상위  납세  회사  공개":"2025년 주요 법인 납세 기업 공개","열린 포트를 찾으세요.":"열린 port를 찾으세요.","출처: 국제 보안 기관 보고서":"출처: International Security Agency Report","출처: 국제 테러 연구소":"출처: International Institute for the Study of Terrorism","출처: 유럽 보안 기관 (ESA)":"출처: European Security Agency (ESA)","세부사항: {{terrorGroup_name}} 조직은 유럽에서 많은 테러 행위에 관여해 왔습니다. 특히 2007년 비엔나에서의 폭탄 공격은 서방 세계에서 조직에 큰 반향을 일으켰습니다. 이번 공격은 조직이 대륙에서 장기적인 작전을 수행하고 있음을 드러냈고, {{terrorPerson1_fullname}}와 같은 중요한 인물들이 이 행동에 관여한 것으로 확인되었습니다.":"세부사항: {{terrorGroup_name}} Organization은 유럽에서 많은 테러 행위에 관여해 왔습니다. 특히 2007년 비엔나에서의 폭탄 공격은 서방 세계에서 조직에 큰 반향을 일으켰습니다. 이번 공격은 조직이 대륙에서 장기적인 작전을 수행하고 있음을 드러냈고, {{terrorPerson1_fullname}}와 같은 중요한 인물들이 이 행동에 관여한 것으로 확인되었습니다.","출처: 지역 보안 부대":"출처: Local Security Forces","{{terrorGroup_cityName}}는 {{terrorGroup_name}} 조직의 주요 기지 중 하나로 알려져 있습니다. 이 조직은 도시 내 지하 셀 구조를 통해 무기 및 폭발물 밀수, 전투원 훈련 및 정보 활동을 수행합니다. {{terrorPerson1_fullname}}와 같은 주요 인물들이 이 지역에서 중요한 작전을 주도했습니다.":"{{terrorGroup_cityName}}는 {{terrorGroup_name}} Organization의 주요 기지 중 하나로 알려져 있습니다. 이 조직은 도시 내 지하 셀 구조를 통해 무기 및 폭발물 밀수, 전투원 훈련 및 정보 활동을 수행합니다. {{terrorPerson1_fullname}}와 같은 주요 인물들이 이 지역에서 중요한 작전을 주도했습니다.","출처: 미국 대테러 사무소":"출처: US Counterterrorism Office","{{terrorGroup_name}} 조직은 미국 국무부에 의해 테러 조직으로 지정되었습니다. 이 조직은 글로벌 테러 네트워크와의 연결을 가지고 있는 것으로 보이며, 특히 시리아, 이라크, 예멘과 같은 분쟁 지역에서 활발히 활동하고 있습니다. 또한 급진적 선전 및 서방 국가에 대한 재정 지지 모색으로도 주목받고 있습니다.":"{{terrorGroup_name}} Organization은 US State Department에 의해 테러 조직으로 지정되었습니다. 이 조직은 글로벌 테러 네트워크와의 연결을 가지고 있는 것으로 보이며, 특히 시리아, 이라크, 예멘과 같은 분쟁 지역에서 활발히 활동하고 있습니다. 또한 급진적 선전 및 서방 국가에 대한 재정 지지 모색으로도 주목받고 있습니다.","세부사항: {{terrorPerson1_fullname}}는 2007년 오스트리아 비엔나에서 폭탄 테러를 계획한 테러리스트 중 한 명으로 지목되었습니다. 공격으로 인해 도시의 역사적인 중심지에 있는 카페에서 폭발이 발생하여 35명이 사망했습니다. {{terrorGroup_name}} 테러 조직은 이번 사건의 책임을 주장했으며, 알-카림은 공격에 필요한 폭발물을 제공한 것으로 보고되었습니다.":"세부사항: {{terrorPerson1_fullname}}는 2007년 오스트리아 비엔나에서 폭탄 테러를 계획한 테러리스트 중 한 명으로 지목되었습니다. 공격으로 인해 도시의 역사적인 중심지에 있는 카페에서 폭발이 발생하여 35명이 사망했습니다. {{terrorGroup_name}} terrorist organization은 이번 사건의 책임을 주장했으며, Al-Karim은 공격에 필요한 폭발물을 제공한 것으로 보고되었습니다.","출처: 지역 정보 기관":"출처: Regional Intelligence Agency","출처: 국가 대테러 부대":"출처: National Counter-Terrorism Unit","목록을 검토하여 여자가 묵고 있는 방 번호를 찾으세요.":"목록을 확인해 소녀가 묵고 있는 방 번호를 찾으세요.","여자 방 옆에 머물고 있는 사람들의 이름을 조사하세요.":"소녀의 옆방에 묵고 있는 사람들의 이름을 조사하세요.","발견한 사람들이 소속된 그룹을 조사하세요.":"찾아낸 사람들이 소속된 단체를 조사하세요.","중요한 정보를 포함한 패킷을 검토하세요.":"중요한 정보가 들어 있는 packet을 확인하세요.","IP 주소로 대상의 위치 정보를 찾으세요.":"IP 주소를 이용해 대상의 위치 정보를 찾으세요.","이 위치의 모든 장치를 찾으세요.":"이 위치에 있는 모든 device를 찾으세요.","인터폴에서 임원 비서로 일합니다.":"Interpol에서 임원 비서로 일합니다.","고 양 에 대한 사랑 으로 유명 하다.":"고양이를 무척 좋아하는 것으로 알려져 있다.","20 년 이상 국제 기관에 기밀 케이터링 서비스를 제공하는 고급 공급업체로, INTERPOL 을 포함합니다. 고객의 비밀을 최우선으로 생각합니다.":"INTERPOL을 포함한 국제 기관에 20년 넘게 기밀 catering service를 제공해 온 유명 업체. 고객 정보 보호를 최우선으로 한다고 주장한다.","충격적인 혐의 기자 Harvey Mack에 대한: Jihad 조직과의 연관성 및 조직적인 납치":"충격적인 혐의 기자 Harvey Mack에 대한: Jihad Organization과의 연관성 및 조직적인 납치","Disconnected":"연결 끊김","Connection lost":"연결이 끊어졌습니다","Chat":"채팅","표시 크기":"화면 크기","네트워크 모니터":"Network Monitor"}));
var TRANSLATABLE_ATTRIBUTES = ["placeholder", "title", "aria-label", "alt"];

var HhKoRuntime = class extends import_hackhub_content_sdk.Bootstrap {
  constructor() {
    super(...arguments);
    this.observer = null;
    this.lastTextOutput = new WeakMap();
    this.lastAttributeOutput = new WeakMap();
  }

  async OnModPackageLoaded() {
    const doc = globalThis.document;
    if (!doc?.documentElement) {
      console.error("[hh-ko-runtime] Main HackHub DOM is not accessible.");
      return;
    }

    this.translateSubtree(doc.documentElement);

    this.observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") {
          this.translateTextNode(mutation.target);
          continue;
        }

        if (mutation.type === "attributes") {
          if (mutation.attributeName)
            this.translateAttribute(mutation.target, mutation.attributeName);
          continue;
        }

        for (const node of mutation.addedNodes)
          this.translateSubtree(node);
      }
    });

    this.observer.observe(doc.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: TRANSLATABLE_ATTRIBUTES
    });

    console.log(`[hh-ko-runtime] Runtime Korean patch loaded (${RUNTIME_TRANSLATIONS.size} exact rules).`);
  }

  OnModPackageUnloaded() {
    this.observer?.disconnect();
    this.observer = null;
    console.log("[hh-ko-runtime] Runtime Korean patch unloaded.");
  }

  translateSubtree(root) {
    if (root.nodeType === Node.TEXT_NODE) {
      this.translateTextNode(root);
      return;
    }

    if (root.nodeType !== Node.ELEMENT_NODE &&
        root.nodeType !== Node.DOCUMENT_NODE &&
        root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE)
      return;

    if (root.nodeType === Node.ELEMENT_NODE)
      this.translateElementAttributes(root);

    const doc = root.ownerDocument ??
      (root.createTreeWalker ? root : document);

    const walker = doc.createTreeWalker(
      root,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
    );

    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.TEXT_NODE)
        this.translateTextNode(node);
      else if (node.nodeType === Node.ELEMENT_NODE)
        this.translateElementAttributes(node);
    }
  }

  translateTextNode(node) {
    const original = node.nodeValue;
    if (!original) return;

    if (this.lastTextOutput.get(node) === original)
      return;

    const leading = original.match(/^\s*/)?.[0] ?? "";
    const trailing = original.match(/\s*$/)?.[0] ?? "";
    const core = original.slice(leading.length, original.length - trailing.length);
    if (!core) return;

    const translated = RUNTIME_TRANSLATIONS.get(core);
    if (translated === void 0 || translated === core) {
      this.lastTextOutput.delete(node);
      return;
    }

    const output = leading + translated + trailing;
    this.lastTextOutput.set(node, output);
    node.nodeValue = output;
  }

  translateElementAttributes(element) {
    for (const name of TRANSLATABLE_ATTRIBUTES)
      this.translateAttribute(element, name);
  }

  translateAttribute(element, name) {
    if (!element.hasAttribute(name)) return;

    const original = element.getAttribute(name);
    if (!original) return;

    let outputs = this.lastAttributeOutput.get(element);
    if (!outputs) {
      outputs = new Map();
      this.lastAttributeOutput.set(element, outputs);
    }

    if (outputs.get(name) === original)
      return;

    const translated = RUNTIME_TRANSLATIONS.get(original);
    if (translated === void 0 || translated === original) {
      outputs.delete(name);
      return;
    }

    outputs.set(name, translated);
    element.setAttribute(name, translated);
  }
};

HhKoRuntime = __decorateClass([
  import_hackhub_content_sdk.RegisterModPackage
], HhKoRuntime);
