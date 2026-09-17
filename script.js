/* =========================================================
   한국사이상현상연구원 · 연구원 포털
   ---------------------------------------------------------
   사이트의 모든 내용은 아래 "설정" 부분에서 고칠 수 있습니다.
   도서 정보, 서점 링크, 연구원, 테스트 문항, 플레이리스트 주소,
   미리보기 본문을 실제 내용으로 바꿔 사용하세요.
   ========================================================= */

/* ---------------------------------------------------------
   1. 설정: 도서 정보
   --------------------------------------------------------- */
const BOOK = {
  title: "한국사 이상현상 연구원",
  description:
    "국가가 '사적'이라는 이름으로 보존한 장소에서, 정작 역사에 남지 못한 사람들의 목소리가 들려오기 시작한다. 궁궐과 고분, 사찰과 종갓집에서 발생하는 이상현상을 추적하는 비밀 기관 '한국사 이상현상 연구원'의 첫 번째 탐사 기록",
};

/* 서점 링크: url을 실제 상품 페이지 주소로 바꾸면 더 좋습니다.
   지금은 도서 제목으로 검색한 결과 페이지로 연결됩니다. */
const q = encodeURIComponent(BOOK.title);
const STORES = [
  { name: "기록 열람", url: `https://product.kyobobook.co.kr/detail/S000220693844` },
];

/* ---------------------------------------------------------
   2. 설정: 메인 메뉴 항목과 기본 아이콘
   --------------------------------------------------------- */
const MENU = [
  { id: "book", name: "기록 열람", desc: "한국사 이상현상 연구원의 첫 번째 탐사 기록을 열람합니다.", href: "#book", icon: "book" },
  { id: "researchers", name: "연구원 조직도", desc: "연구원 연혁 및 조직도입니다.", href: "#researchers", icon: "idcard" },
  { id: "test", name: "탐사원 적성 평가", desc: "입사를 희망하시는 분은 먼저 평가를 진행해 주세요.", href: "#test", icon: "checklist" },
  { id: "playlist", name: "오디오 아카이브실", desc: "탐사 시 청취를 권장합니다.", href: "#playlist", icon: "headphones" },
  { id: "preview", name: "(대외비) 지침서", desc: "생존을 위해 지침서 정독을 권장합니다.", href: "#preview", icon: "document" },
];

/* ---------------------------------------------------------
   3. 설정: 연구원(캐릭터)
   --------------------------------------------------------- */
const RESEARCHERS = [
  {
    id: "seohee",
    name: "최서희",
    role: "탐사본부, 탐사본부장",
    code: "AR-07-001",
    fields: [
      ["근속", "11년"],
      ["전문 분야", "탐사"],
      ["성향", "강인함, 책임감이 강함"],
    ],
    secret: "??",
    quote: "기록되지 않은 현상은, 다음 사람에게 다시 일어납니다.",
    type: {
      title: "기록형 연구원",
      summary: "혼란 속에서도 순서를 세우는 사람",
      body: [
        "당신은 위기일수록 차분해집니다. 무엇이 일어났는지, 다음에 무엇을 해야 하는지 정리하는 능력이 뛰어나 팀이 흔들릴 때 기준점이 되어 줍니다.",
        "다만 모든 것을 절차 안에 넣으려다 스스로를 몰아붙이기 쉽습니다. 가끔은 기록을 잠시 내려놓아도 괜찮습니다.",
      ],
      traits: ["침착함", "책임감", "꼼꼼한 기록", "원칙"],
    },
  },
  {
    id: "jeechul",
    name: "강지철",
    role: "관리본부, 관리본부장",
    code: "AR-07-014",
    fields: [
      ["근속", "6년"],
      ["전문 분야", "관리"],
      ["성향", "희생적"],
    ],
    secret: "??",
    quote: "생각은 나와서 해도 됩니다. 일단 사람부터 꺼내죠.",
    type: {
      title: "돌파형 연구원",
      summary: "망설이는 동안 먼저 문을 여는 사람",
      body: [
        "당신은 상황을 오래 재기보다 직접 부딪혀 해결합니다. 위험한 순간에 누구보다 빨리 움직이고, 동료를 혼자 두지 않는 것을 가장 중요하게 생각합니다.",
        "빠른 판단이 강점이지만, 가끔은 한 걸음 물러서서 전체를 보는 시간이 당신을 더 멀리 데려다줄 거예요.",
      ],
      traits: ["행동력", "용기", "동료애", "직감"],
    },
  },
  {
    id: "jeeyul",
    name: "신지율",
    role: "탐사1팀, 탐사원",
    code: "AR-07-022",
    fields: [
      ["근속", "3년"],
      ["전문 분야", "생존자 구출"],
      ["성향", "저돌적"],
    ],
    secret: "???",
    quote: "설명할 수 없다는 건, 아직 설명하지 못했다는 뜻일 뿐이에요.",
    type: {
      title: "분석형 연구원",
      summary: "모두가 두려워할 때 숫자를 세는 사람",
      body: [
        "당신은 이해되지 않는 것을 그대로 두지 못합니다. 흩어진 단서에서 규칙을 찾아내고, 감정보다 근거로 판단하려 합니다.",
        "의심은 좋은 연구의 출발점입니다. 하지만 아직 설명할 수 없는 것도 존재할 수 있다는 여지를 남겨 두면, 더 많은 것이 보일지도 모릅니다.",
      ],
      traits: ["논리", "호기심", "신중함", "집요함"],
    },
  },
  {
    id: "yena",
    name: "서예나",
    role: "탐사1팀, 신규 탐사원",
    code: "AR-07-031",
    fields: [
      ["근속", "4개월"],
      ["전문 분야", "탐사 서포트"],
      ["성향", "겁은 많지만 물러서지 않음"],
    ],
    secret: "이상현상과 의사소통에 성공한 첫 보고자",
    quote: "무섭긴 한데요, 저건 뭔가 말하고 싶어 하는 것 같아요.",
    type: {
      title: "교감형 연구원",
      summary: "낯선 존재에게도 먼저 말을 거는 사람",
      body: [
        "당신은 상대가 무엇을 느끼는지 잘 알아차립니다. 사람이든 현상이든, 겉으로 드러난 것 너머의 이유를 궁금해하고 이해하려 합니다.",
        "그 다정함은 팀에 없던 길을 열어 줍니다. 다만 다른 존재의 감정에 너무 깊이 잠기지 않도록, 스스로를 지키는 선도 함께 그어 두세요.",
      ],
      traits: ["공감", "관찰력", "용기 있는 다정함", "직관"],
    },
  },
];

/* ---------------------------------------------------------
   4. 설정: 인물 유형 테스트 문항
      각 선택지의 type은 위 RESEARCHERS의 id와 연결됩니다.
   --------------------------------------------------------- */
const QUESTIONS = [
  {
    text: "새벽 3시, 폐쇄된 지하철역에서 이상현상 신고가 들어왔습니다. 가장 먼저 하는 일은?",
    options: [
      { text: "출동 전에 과거 기록과 격리 절차부터 확인한다", type: "seohee" },
      { text: "장비를 챙겨 바로 현장으로 출발한다", type: "jeechul" },
      { text: "신고 시각과 위치를 이전 사례 데이터와 비교한다", type: "jeeyul" },
      { text: "신고자에게 전화해 무엇을 느꼈는지 자세히 묻는다", type: "yena" },
    ],
  },
  {
    text: "현장에 도착하자 벽 안쪽에서 누군가 두드리는 소리가 들립니다.",
    options: [
      { text: "팀원 위치를 확인하고, 절차대로 안전거리를 둔다", type: "seohee" },
      { text: "안에 사람이 갇혔을 수 있으니 곧장 벽을 살핀다", type: "jeechul" },
      { text: "소리의 간격을 재서 규칙이 있는지 찾는다", type: "jeeyul" },
      { text: "같은 박자로 벽을 두드려 대답해 본다", type: "yena" },
    ],
  },
  {
    text: "팀원 한 명이 규정을 어기고 혼자 안쪽으로 들어갔습니다.",
    options: [
      { text: "무전으로 위치를 보고받고, 복귀 후 정식으로 경고한다", type: "seohee" },
      { text: "따라 들어간다. 혼자 두는 게 더 위험하다", type: "jeechul" },
      { text: "그 판단에 합리적인 근거가 있었는지 따져 본다", type: "jeeyul" },
      { text: "그렇게까지 한 이유가 무엇이었을지 먼저 생각한다", type: "yena" },
    ],
  },
  {
    text: "탐사가 없는 휴일, 주로 무엇을 하나요?",
    options: [
      { text: "메모와 일정을 정리하고 다음 주 계획을 세운다", type: "seohee" },
      { text: "몸을 움직인다. 운동을 하거나 즉흥으로 떠난다", type: "jeechul" },
      { text: "궁금했던 주제 하나를 끝까지 파고든다", type: "jeeyul" },
      { text: "좋아하는 사람들을 만나 오래 이야기를 나눈다", type: "yena" },
    ],
  },
  {
    text: "탐사 보고서에 반드시 들어가야 하는 것은?",
    options: [
      { text: "누가 읽어도 똑같이 대응할 수 있는 정확한 절차", type: "seohee" },
      { text: "다친 사람 없이 모두 돌아왔다는 사실", type: "jeechul" },
      { text: "다시 확인할 수 있는 수치와 검증된 가설", type: "jeeyul" },
      { text: "현상이 우리에게 보인 반응과 그 변화", type: "yena" },
    ],
  },
  {
    text: "이상현상을 한 문장으로 정의한다면?",
    options: [
      { text: "반드시 기록하고 대비해야 할 위험", type: "seohee" },
      { text: "누군가 다치기 전에 막아야 할 사고", type: "jeechul" },
      { text: "아직 풀리지 않은 방정식", type: "jeeyul" },
      { text: "우리가 모르는 방식으로 존재하는 무언가", type: "yena" },
    ],
  },
];

/* ---------------------------------------------------------
   5. 설정: 플레이리스트
      url에 실제 플레이리스트 주소를 넣으면 버튼이 활성화됩니다.
   --------------------------------------------------------- */
const PLAYLISTS = [
  {
    time: "탐사 전 필수 청취",
    name: "오디오 아카이브",
    desc: "탐사원들이 탐사 시 유용하게 사용한 오디오 플레이리스트입니다",
    links: [
      { platform: "YouTube Music", url: "https://youtube.com/playlist?list=PLP4PFc0hKG-4&si=g7LLlKf3wD5hP83O" },

    ],
  },
];

/* ---------------------------------------------------------
   6. 설정: 본문 미리보기
      paragraphs 안의 문자열 하나가 문단 하나입니다.
      { report: "..." } 형태는 사건 기록 상자로 표시됩니다.
   --------------------------------------------------------- */
const CHAPTER = "1장 지하 3층의 물소리";
const PAGE_START = 9;
const PAGES = [
  [
    "신고는 새벽 두 시 사십 분에 들어왔다. 폐쇄된 지 칠 년 된 을지상가 지하 3층에서 물소리가 난다는 내용이었다. 수도관은 이미 오래전에 끊겼고, 지하 3층은 설계도에 존재하지 않는 층이었다.",
    { report: "<b>사건 번호</b> 26-0913<br><b>분류</b> 공간 확장형 추정<br><b>위험 등급</b> 3등급, 현장 판단에 따라 조정" },
    "윤여름은 출동 차량 뒷좌석에서 신고 녹취를 세 번째로 들었다. 신고자는 경비원이었다. 그는 물소리가 난다고 말하지 않았다. 누군가 물속에서 숨을 참고 있는 소리가 난다고 말했다.",
  ],
  [
    "“숨을 참는 소리라는 게 있긴 해요?”",
    "여름의 질문에 운전석의 강도현이 룸미러로 흘끗 뒤를 보았다.",
    "“있지. 아주 조용한 소리.”",
    "조수석의 한서윤은 대답 대신 태블릿을 넘겼다. 화면에는 같은 건물에서 접수된 과거 기록이 떠 있었다. 2019년, 2022년, 그리고 2024년. 세 건 모두 새벽 두 시 사십 분이었다.",
    "“매번 같은 시각이네요.”",
    "“그래서 이번엔 우리가 가는 거야.” 서윤이 말했다. “세 번 모두, 기록을 끝까지 남긴 사람이 없었으니까.”",
  ],
  [
    "상가 입구의 셔터는 반쯤 올라가 있었다. 경비원은 셔터 앞에 서서 손전등을 꼭 쥐고 있었는데, 불은 켜져 있지 않았다.",
    "“불을 켜면 소리가 멈춰요.” 그가 말했다. “멈추면, 더 가까운 데서 다시 시작하고요.”",
    "무전기에서 민이안의 목소리가 흘러나왔다. 그는 본부 상황실에서 건물의 전력과 습도 수치를 받아 보고 있었다.",
    "“지하 2층 습도가 방금 94퍼센트를 넘었어요. 비는 안 왔습니다. 그러니까, 물이 올라올 이유가 없어요.”",
    "“이유는 들어가서 찾자.” 도현이 헬멧 끈을 조였다.",
  ],
  [
    "지하 2층까지는 계단이 층마다 스물네 칸이었다. 여름은 속으로 계단을 셌다. 연구원 교육에서 가장 먼저 배우는 것이 숫자를 세는 일이었다. 숫자가 틀어지는 순간이 곧 현상이 시작되는 순간이기 때문이다.",
    "스물둘, 스물셋, 스물넷.",
    "그리고 스물다섯.",
    "여름은 발을 멈췄다. 앞서 걷던 서윤도 이미 멈춰 있었다. 존재하지 않아야 할 스물다섯 번째 계단 아래로, 검은 물이 소리 없이 차오르고 있었다.",
  ],
  [
    "“기록 시작.” 서윤이 낮게 말했다. “02시 51분. 지하 2층과 3층 사이, 스물다섯 번째 계단에서 수면 확인.”",
    "물은 흐르지 않았다. 파문도 없었다. 손전등 빛이 닿는 곳마다 수면은 거울처럼 매끈했고, 그 안에 비친 계단은 위가 아니라 아래로 끝없이 이어져 있었다.",
    "그때 소리가 들렸다. 아주 조용한 소리. 누군가 물속에서, 오래, 숨을 참고 있는 소리.",
    "여름은 자기도 모르게 숨을 멈췄다. 그리고 깨달았다. 소리는 물속이 아니라 바로 옆에서 들리고 있었다.",
  ],
  [
    "“여름 씨.” 도현이 여름의 어깨를 붙잡았다. “숨 쉬어. 천천히.”",
    "여름이 숨을 내쉬자 옆에서 들리던 소리도 함께 사라졌다. 대신 물에 비친 계단 위에, 조금 전까지 없던 발자국 하나가 찍혀 있었다.",
    "젖은 맨발이었다. 그리고 그 발끝은 위를 향하고 있었다.",
    "무전기 너머에서 이안이 무언가 말하려다 멈추는 소리가 들렸다. 서윤은 펜을 쥔 손에 힘을 주었다.",
    "“계속 기록해.” 그녀가 말했다. “이번에는 끝까지.”",
  ],
  [
    "발자국은 하나씩 늘어났다. 물속의 계단을 거슬러, 수면을 향해, 그들이 서 있는 스물다섯 번째 계단을 향해.",
    "도현이 한 걸음 앞으로 나서며 팔을 벌려 셋을 뒤로 물렸다. 여름은 녹음기를 켠 채 발자국의 간격을 셌다. 하나, 둘, 셋. 걸음은 점점 짧아지고 있었다.",
    "“멈추려는 거예요.” 여름이 속삭였다. “다 올라와서, 누군가를 기다리려는 것 같아요.”",
    "서윤이 처음으로 기록하던 손을 멈추고 여름을 돌아보았다.",
  ],
];

/* ---------------------------------------------------------
   7. 아이콘 모음 (선택 창에 표시되는 목록)
   --------------------------------------------------------- */
const ICONS = {
  book: { label: "책", svg: '<path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z"/><path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"/>' },
  cart: { label: "장바구니", svg: '<path d="M2.5 4h2.3l2.4 11h11.1l2-8H6"/><circle cx="9" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/>' },
  bag: { label: "쇼핑백", svg: '<path d="M5 8h14l-1 13H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>' },
  idcard: { label: "신분증", svg: '<rect x="3" y="5" width="18" height="14"/><circle cx="9" cy="11" r="2.2"/><path d="M5.5 16.5c.8-1.8 2-2.5 3.5-2.5s2.7.7 3.5 2.5M15 10h3M15 13h3"/>' },
  users: { label: "인물", svg: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c.8-3.6 3-5.5 6-5.5s5.2 1.9 6 5.5M16 5a3 3 0 0 1 0 6M18 14.8c1.7.7 2.7 2.4 3 5.2"/>' },
  eye: { label: "관측", svg: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>' },
  checklist: { label: "평가지", svg: '<rect x="5" y="3" width="14" height="18"/><path d="M8 8l1.5 1.5L12 7M8 14l1.5 1.5L12 13M14.5 8.5h2M14.5 14.5h2"/>' },
  question: { label: "질문", svg: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7v.5M12 17.2v.6"/>' },
  flask: { label: "실험", svg: '<path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3M7 15h10"/>' },
  radar: { label: "탐지", svg: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12l6-6"/>' },
  music: { label: "음표", svg: '<path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>' },
  headphones: { label: "헤드폰", svg: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="7"/><rect x="17" y="14" width="4" height="7"/>' },
  wave: { label: "음파", svg: '<path d="M3 11v2M7 8v8M11 4v16M15 7v10M19 10v4"/>' },
  document: { label: "문서", svg: '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 12h7M9 16h7"/>' },
  classified: { label: "기밀", svg: '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4"/><rect x="9.5" y="13" width="6" height="5"/><path d="M11 13v-1.5a1.5 1.5 0 0 1 3 0V13"/>' },
  alert: { label: "경고", svg: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 17.3v.6"/>' },
  compass: { label: "나침반", svg: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>' },
  key: { label: "열쇠", svg: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14.5 8.5l2 2"/>' },
  flashlight: { label: "손전등", svg: '<path d="M8 3h8v5l-2 3v10h-4V11L8 8z"/><path d="M12 14v2"/>' },
  door: { label: "출입문", svg: '<path d="M5 21V3h11v18M3 21h18"/><path d="M13 12h.01"/>' },
};

function iconSvg(key) {
  const icon = ICONS[key] || ICONS.document;
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true">${icon.svg}</svg>`;
}

const ARROW_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>';

/* =========================================================
   이하 동작 코드
   ========================================================= */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* ---------- 알림 ---------- */
let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

/* ---------- 저장소 (파일로 열어도 동작하도록 예외 처리) ---------- */
const STORAGE_KEY = "ari-portal-icons";
function loadIconChoices() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}
function saveIconChoices(choices) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(choices));
    return true;
  } catch (e) {
    return false;
  }
}

let iconChoices = loadIconChoices();
const currentIcon = (id) => iconChoices[id] || MENU.find((m) => m.id === id).icon;

/* ---------- 모바일 메뉴 ---------- */
function initNav() {
  const toggle = $(".nav-toggle");
  const nav = $("#site-nav");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
  $$("a", nav).forEach((a) =>
    a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    })
  );
}

/* ---------- 검열 막대 ---------- */
function bindRedactions(root = document) {
  $$(".redact:not([data-bound])", root).forEach((el) => {
    el.dataset.bound = "true";
    el.addEventListener("click", () => {
      if (el.classList.contains("is-revealed")) return;
      el.classList.add("is-revealed");
      el.setAttribute("aria-label", `공개된 내용: ${el.dataset.reveal}`);
    });
  });
}

/* ---------- 메인 메뉴 + 아이콘 선택 ---------- */
function renderMenu() {
  $("#menu-list").innerHTML = MENU.map(
    (item) => `
      <li class="menu-item">
        <span class="menu-icon" data-icon-slot="${item.id}"></span>
        <a class="menu-link" href="${item.href}">
          <span class="menu-name">${item.name}</span>
          <span class="menu-desc">${item.desc}</span>
        </a>
        <button class="icon-change" type="button" data-menu-id="${item.id}">아이콘 변경</button>
      </li>`
  ).join("");
  applyIcons();
}

function applyIcons() {
  $$("[data-icon-slot]").forEach((slot) => {
    slot.innerHTML = iconSvg(currentIcon(slot.dataset.iconSlot));
  });
}

function initIconPicker() {
  const dialog = $("#icon-dialog");
  const grid = $("#icon-grid");
  let targetId = null;
  let opener = null;

  function openPicker(id, button) {
    targetId = id;
    opener = button;
    const item = MENU.find((m) => m.id === id);
    $("#dialog-target").innerHTML = `<b>${item.name}</b> 항목에 쓸 아이콘을 고르세요.`;
    const selected = currentIcon(id);
    grid.innerHTML = Object.entries(ICONS)
      .map(
        ([key, icon]) => `
        <button type="button" class="icon-option" role="option" data-icon="${key}"
          aria-selected="${key === selected}" aria-label="${icon.label}">
          ${iconSvg(key)}<span>${icon.label}</span>
        </button>`
      )
      .join("");

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
      $(".icon-option[aria-selected='true']", grid)?.focus();
    } else {
      showToast("이 브라우저는 아이콘 선택 창을 지원하지 않습니다. 최신 브라우저로 열어 주세요.");
    }
  }

  $("#menu-list").addEventListener("click", (e) => {
    const btn = e.target.closest(".icon-change");
    if (btn) openPicker(btn.dataset.menuId, btn);
  });

  grid.addEventListener("click", (e) => {
    const option = e.target.closest(".icon-option");
    if (!option || !targetId) return;
    iconChoices[targetId] = option.dataset.icon;
    const saved = saveIconChoices(iconChoices);
    applyIcons();
    dialog.close();
    const name = MENU.find((m) => m.id === targetId).name;
    showToast(saved ? `${name} 아이콘을 바꿨습니다.` : `${name} 아이콘을 바꿨습니다. 이 브라우저에서는 저장되지 않습니다.`);
  });

  dialog.addEventListener("close", () => opener?.focus());

  // 창 바깥(배경)을 누르면 닫기
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });

  $("#reset-icons").addEventListener("click", () => {
    iconChoices = {};
    saveIconChoices(iconChoices);
    applyIcons();
    showToast("모든 아이콘을 기본값으로 되돌렸습니다.");
  });
}

/* ---------- 도서 ---------- */
function renderBook() {
  $("#cover-title").textContent = BOOK.title;
  $("#cover-author").textContent = BOOK.author || "";
  $("#book-name").textContent = BOOK.author ? `『${BOOK.title}』 ${BOOK.author} 지음` : `『${BOOK.title}』`;
  $("#book-desc").textContent = BOOK.description;
  $("#book-meta").innerHTML = (BOOK.meta || []).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("");
  $("#store-list").innerHTML = STORES.map(
    (s) => `
      <li><a class="store-link" href="${s.url}" target="_blank" rel="noopener noreferrer">
        ${s.name}${ARROW_SVG}<span class="sr-only">(새 창에서 열림)</span>
      </a></li>`
  ).join("");
}

/* ---------- 연구원 명부 ---------- */
const PORTRAIT_SVG = `
  <svg viewBox="0 0 120 160" aria-hidden="true">
    <defs>
      <pattern id="scan" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect width="4" height="2" fill="currentColor" opacity=".25"/>
      </pattern>
    </defs>
    <circle cx="60" cy="62" r="24" fill="currentColor"/>
    <path d="M18 160c4-36 20-54 42-54s38 18 42 54z" fill="currentColor"/>
    <rect width="120" height="160" fill="url(#scan)"/>
  </svg>`;

function renderRoster() {
  const tabs = $("#roster-tabs");
  tabs.innerHTML = RESEARCHERS.map(
    (r, i) => `
      <button class="roster-tab" type="button" role="tab" id="tab-${r.id}"
        aria-selected="${i === 0}" aria-controls="dossier" tabindex="${i === 0 ? 0 : -1}" data-id="${r.id}">
        <span class="tab-name">${r.name}</span>
        <span class="tab-role">${r.role.split(",")[0]}</span>
      </button>`
  ).join("");

  tabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".roster-tab");
    if (tab) selectResearcher(tab.dataset.id);
  });

  // 방향키로 탭 이동
  tabs.addEventListener("keydown", (e) => {
    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const list = $$(".roster-tab", tabs);
    const idx = list.indexOf(document.activeElement);
    const step = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
    const next = list[(idx + step + list.length) % list.length];
    selectResearcher(next.dataset.id);
    next.focus();
  });

  selectResearcher(RESEARCHERS[0].id);
}

function selectResearcher(id) {
  const r = RESEARCHERS.find((x) => x.id === id);
  $$(".roster-tab").forEach((tab) => {
    const on = tab.dataset.id === id;
    tab.setAttribute("aria-selected", String(on));
    tab.tabIndex = on ? 0 : -1;
  });

  const dossier = $("#dossier");
  dossier.setAttribute("aria-labelledby", `tab-${id}`);
  dossier.innerHTML = `
    <div class="portrait">${PORTRAIT_SVG}<span class="portrait-label">사진 비공개</span></div>
    <div>
      <p class="dossier-id">식별 번호 ${r.code}</p>
      <h3 class="dossier-name">${r.name}</h3>
      <p class="dossier-role">${r.role}</p>
      <dl class="dossier-fields">
        ${r.fields.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}
        <dt>비고</dt>
        <dd><button class="redact" type="button" data-reveal="${r.secret}" aria-label="가려진 기록 보기">${r.secret}</button></dd>
      </dl>
    </div>
    <blockquote class="dossier-quote">${r.quote}</blockquote>`;
  bindRedactions(dossier);
}

/* ---------- 인물 유형 테스트 ---------- */
const quiz = { step: -1, answers: [] };

function renderQuiz() {
  const box = $("#quiz");

  if (quiz.step === -1) {
    box.innerHTML = `
      <div class="quiz-intro">
        <p>현장에서 당신은 어떤 연구원일까요? 탐사 상황을 담은 여섯 가지 질문에 답하면, 현장탐사 1팀에서 당신과 가장 닮은 연구원을 알려 드립니다.</p>
        <p class="quiz-small">약 1분이 걸리며, 답변은 어디에도 저장되지 않습니다.</p>
        <button class="btn btn-red" type="button" data-action="start">평가 시작하기</button>
      </div>`;
    return;
  }

  if (quiz.step >= QUESTIONS.length) {
    renderResult(box);
    return;
  }

  const q = QUESTIONS[quiz.step];
  const chosen = quiz.answers[quiz.step];
  const percent = (quiz.step / QUESTIONS.length) * 100;
  box.innerHTML = `
    <div class="quiz-progress"><span>질문 ${quiz.step + 1} / ${QUESTIONS.length}</span></div>
    <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${QUESTIONS.length}" aria-valuenow="${quiz.step}">
      <div class="progress-fill" style="width:${percent}%"></div>
    </div>
    <h3 class="quiz-question" tabindex="-1">${q.text}</h3>
    <div class="quiz-options">
      ${q.options
        .map(
          (o, i) => `<button class="quiz-option${chosen === o.type ? " is-chosen" : ""}" type="button" data-action="answer" data-type="${o.type}">${o.text}</button>`
        )
        .join("")}
    </div>
    ${quiz.step > 0 ? '<button class="btn btn-line quiz-back" type="button" data-action="back">이전 질문</button>' : ""}`;
  $(".quiz-question", box).focus({ preventScroll: true });
}

function renderResult(box) {
  const score = {};
  RESEARCHERS.forEach((r) => (score[r.id] = 0));
  quiz.answers.forEach((t) => score[t]++);
  const max = Math.max(...Object.values(score));
  const tied = Object.keys(score).filter((k) => score[k] === max);
  // 동점이면 마지막 질문에 가까운 답을 우선합니다
  const winner = [...quiz.answers].reverse().find((t) => tied.includes(t));
  const r = RESEARCHERS.find((x) => x.id === winner);

  box.innerHTML = `
    <div class="result">
      <div class="result-head">
        <p class="result-label">평가 결과</p>
        <h3 class="result-type" tabindex="-1">${r.type.title}</h3>
        <p class="result-match">${r.type.summary}. 당신과 가장 닮은 연구원은 <b>${r.name}</b>입니다.</p>
      </div>
      <div class="result-body">
        ${r.type.body.map((p) => `<p>${p}</p>`).join("")}
        <ul class="result-traits">${r.type.traits.map((t) => `<li>${t}</li>`).join("")}</ul>
        <div class="result-actions">
          <button class="btn btn-red" type="button" data-action="profile" data-id="${r.id}">${r.name} 인사 기록 보기</button>
          <button class="btn btn-line" type="button" data-action="copy" data-title="${r.type.title}" data-name="${r.name}">결과 문구 복사</button>
          <button class="btn btn-line" type="button" data-action="restart">다시 평가하기</button>
        </div>
      </div>
    </div>`;
  $(".result-type", box).focus({ preventScroll: true });
}

function initQuiz() {
  const box = $("#quiz");
  box.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const action = btn.dataset.action;

    if (action === "start") {
      quiz.step = 0;
      quiz.answers = [];
    } else if (action === "answer") {
      quiz.answers[quiz.step] = btn.dataset.type;
      btn.classList.add("is-chosen");
      setTimeout(() => {
        quiz.step++;
        renderQuiz();
      }, 180);
      return;
    } else if (action === "back") {
      quiz.step = Math.max(0, quiz.step - 1);
    } else if (action === "restart") {
      quiz.step = 0;
      quiz.answers = [];
    } else if (action === "profile") {
      selectResearcher(btn.dataset.id);
      location.hash = "researchers";
      $(`#tab-${btn.dataset.id}`).focus({ preventScroll: true });
      return;
    } else if (action === "copy") {
      const text = `[이상현상탐사연구원 적성 평가] 나는 ${btn.dataset.title}! 가장 닮은 연구원은 ${btn.dataset.name}. ${location.href.split("#")[0]}#test`;
      copyText(text);
      return;
    }
    renderQuiz();
  });
  renderQuiz();
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(
      () => showToast("결과 문구를 복사했습니다."),
      () => fallbackCopy(text)
    );
  } else {
    fallbackCopy(text);
  }
}
function fallbackCopy(text) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  let ok = false;
  try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
  area.remove();
  showToast(ok ? "결과 문구를 복사했습니다." : "복사하지 못했습니다. 결과 화면을 캡처해 공유해 주세요.");
}

/* ---------- 플레이리스트 ---------- */
function renderPlaylists() {
  // 음파 막대 높이는 목록마다 고정된 모양이 되도록 이름으로 계산합니다
  const waveBars = (seed) =>
    Array.from({ length: 28 }, (_, i) => {
      const h = 20 + Math.abs(Math.sin((i + 1) * (seed.length + 3) * 0.7)) * 80;
      return `<span style="height:${h.toFixed(0)}%"></span>`;
    }).join("");

  $("#playlists").innerHTML = PLAYLISTS.map(
    (p) => `
      <article class="playlist">
        <div class="wave" aria-hidden="true">${waveBars(p.name)}</div>
        <p class="playlist-time">${p.time}</p>
        <h3 class="playlist-name">${p.name}</h3>
        <p class="playlist-desc">${p.desc}</p>
        <div class="playlist-links">
          ${p.links
            .map((l) =>
              l.url
                ? `<a class="btn btn-line" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.platform}에서 듣기${ARROW_SVG}<span class="sr-only">(새 창에서 열림)</span></a>`
                : `<button class="btn btn-line" type="button" disabled>${l.platform} 링크 준비 중</button>`
            )
            .join("")}
        </div>
      </article>`
  ).join("");
}

/* ---------- 본문 미리보기 ---------- */
const reader = { index: 0 };
const isDouble = () => window.matchMedia("(min-width: 901px)").matches;

function pageHtml(i) {
  // 마지막 칸은 안내 페이지
  if (i === PAGES.length) {
    return `
      <div class="page is-end">
        <p class="end-mark">공개된 기록은 여기까지입니다.</p>
        <a class="btn btn-red" href="#book">이어서 읽으려면 도서 구매하기</a>
      </div>`;
  }
  const body = PAGES[i]
    .map((p) => (typeof p === "string" ? `<p>${p}</p>` : `<p class="report">${p.report}</p>`))
    .join("");
  return `
    <div class="page">
      ${i === 0 ? `<p class="page-chapter">${CHAPTER}</p>` : ""}
      <div class="page-body">${body}</div>
      <p class="page-num">${PAGE_START + i}</p>
    </div>`;
}

function renderReader(animate = false) {
  const total = PAGES.length + 1;
  const step = isDouble() ? 2 : 1;
  if (step === 2 && reader.index % 2 === 1) reader.index--;
  reader.index = Math.min(Math.max(0, reader.index), total - 1);

  const spread = $("#spread");
  let html = pageHtml(reader.index);
  if (step === 2 && reader.index + 1 < total) html += pageHtml(reader.index + 1);
  spread.innerHTML = html;

  if (animate) {
    spread.classList.remove("is-turning");
    void spread.offsetWidth;
    spread.classList.add("is-turning");
  }

  const last = Math.min(reader.index + step, total);
  $("#page-count").textContent =
    step === 2 && last - reader.index === 2
      ? `${reader.index + 1}–${last} / ${total}쪽`
      : `${reader.index + 1} / ${total}쪽`;

  $("#page-prev").disabled = reader.index === 0;
  $("#page-next").disabled = reader.index + step >= total;
}

function turnPage(dir) {
  const step = isDouble() ? 2 : 1;
  const total = PAGES.length + 1;
  const next = reader.index + dir * step;
  if (next < 0 || next >= total) return;
  reader.index = next;
  renderReader(true);
}

function initReader() {
  $("#page-prev").addEventListener("click", () => turnPage(-1));
  $("#page-next").addEventListener("click", () => turnPage(1));

  // 미리보기 영역이 화면에 보일 때만 방향키로 넘기기
  let readerVisible = false;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      (entries) => entries.forEach((en) => (readerVisible = en.isIntersecting)),
      { threshold: 0.4 }
    ).observe($("#spread"));
  }
  document.addEventListener("keydown", (e) => {
    if (!readerVisible || $("#icon-dialog").open) return;
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
    if (document.activeElement.closest?.(".roster-tabs")) return;
    if (e.key === "ArrowRight") turnPage(1);
    if (e.key === "ArrowLeft") turnPage(-1);
  });

  let wasDouble = isDouble();
  window.addEventListener("resize", () => {
    if (isDouble() !== wasDouble) {
      wasDouble = isDouble();
      renderReader();
    }
  });

  renderReader();
}

/* ---------- 시작 ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  renderMenu();
  initIconPicker();
  applyIcons();
  bindRedactions();
  renderBook();
  renderRoster();
  initQuiz();
  renderPlaylists();
  initReader();
});
