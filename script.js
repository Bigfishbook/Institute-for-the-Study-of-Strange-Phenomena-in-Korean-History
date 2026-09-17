/* =========================================================
   한국사이상현상연구원 · 연구원 포털
   ---------------------------------------------------------
   사이트의 모든 내용은 아래 "설정" 부분에서 고칠 수 있습니다.
   도서 정보, 서점 링크, 연구원, 테스트 링크, 플레이리스트 주소,
   지침서 이미지를 실제 내용으로 바꿔 사용하세요.
   ========================================================= */

/* ---------------------------------------------------------
   1. 설정: 도서 정보
      cover: 표지 jpg 파일을 index.html과 같은 위치에 올리고 파일 이름을 적어 주세요.
             파일을 찾지 못하면 기존에 그려진 표지가 대신 표시됩니다.
   --------------------------------------------------------- */
const BOOK = {
  title: "한국사 이상현상 연구원",
  cover: "cover.jpg",
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
   4. 설정: 탐사원 적성 평가 (외부 테스트 링크)
      url에 테스트 주소를 넣으면 '평가 시작하기' 버튼이 활성화됩니다.
      예: url: "https://example.com/my-test",
   --------------------------------------------------------- */
const TEST = {
  url: "",
  intro: "입사를 희망하시는 분은 먼저 적성 평가를 진행해 주세요. 평가 결과에 따라 배정될 부서가 결정됩니다.",
  button: "평가 시작하기",
};

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
   6. 설정: (대외비) 지침서 이미지
      jpg 파일을 index.html과 같은 위치에 올리고 파일 이름을 적어 주세요.
      파일 이름은 대소문자와 확장자까지 똑같아야 합니다. (guide.jpg ≠ Guide.JPG)
      여러 장이면 한 줄씩 추가하면 되고, 2장 이상일 때 '이전 쪽/다음 쪽' 버튼이 나타납니다.
      예: { src: "guide-2.jpg", alt: "(대외비) 지침서 2쪽" },
   --------------------------------------------------------- */
const GUIDE_IMAGES = [
  { src: "guide.jpg", alt: "(대외비) 지침서" },
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
  renderCoverImage();
  $("#store-list").innerHTML = STORES.map(
    (s) => `
      <li><a class="store-link" href="${s.url}" target="_blank" rel="noopener noreferrer">
        ${s.name}${ARROW_SVG}<span class="sr-only">(새 창에서 열림)</span>
      </a></li>`
  ).join("");
}

/* 실제 표지 이미지: 불러오기에 성공했을 때만 그려진 표지와 바꿉니다 */
function renderCoverImage() {
  if (!BOOK.cover) return;
  const cover = $(".book-cover");
  const img = new Image();
  img.className = "cover-img";
  img.alt = `『${BOOK.title}』 표지`;
  img.onload = () => {
    cover.replaceChildren(img);
    cover.classList.add("has-image");
    cover.removeAttribute("aria-hidden");
  };
  img.onerror = () => {
    console.warn(`표지 이미지를 불러오지 못했습니다: ${BOOK.cover} (파일 이름과 위치를 확인하세요)`);
  };
  img.src = BOOK.cover;
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

/* ---------- 탐사원 적성 평가 (외부 링크) ---------- */
function renderTest() {
  const box = $("#test-box");
  const action = TEST.url
    ? `<a class="btn btn-red test-start" href="${TEST.url}" target="_blank" rel="noopener noreferrer">
         ${TEST.button}${ARROW_SVG}<span class="sr-only">(새 창에서 열림)</span>
       </a>
       <p class="test-note">평가는 새 창에서 열립니다.</p>`
    : `<button class="btn btn-red test-start" type="button" disabled>평가 링크 준비 중</button>
       <p class="test-note">script.js의 TEST.url에 테스트 주소를 넣으면 버튼이 활성화됩니다.</p>`;

  box.innerHTML = `<p class="test-intro">${TEST.intro}</p>${action}`;
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

/* ---------- (대외비) 지침서 이미지 ---------- */
const guide = { index: 0 };
const guideImages = () => GUIDE_IMAGES.filter((g) => g && g.src);

function renderGuide(animate = false) {
  const frame = $("#guide-frame");
  const controls = $("#guide-controls");
  const images = guideImages();

  if (images.length === 0) {
    frame.innerHTML = `<p class="guide-empty">지침서 이미지가 아직 등록되지 않았습니다.<br>script.js의 GUIDE_IMAGES에 이미지 파일 이름을 적어 주세요.</p>`;
    controls.hidden = true;
    return;
  }

  guide.index = Math.min(Math.max(0, guide.index), images.length - 1);
  const img = images[guide.index];
  const alt = img.alt || `(대외비) 지침서 ${guide.index + 1}쪽`;

  frame.innerHTML = `
    <figure class="guide-figure">
      <a class="guide-link" href="${img.src}" target="_blank" rel="noopener">
        <img class="guide-img" src="${img.src}" alt="${alt}">
      </a>
      <figcaption class="guide-caption">
        <a href="${img.src}" target="_blank" rel="noopener">원본 크기로 보기<span class="sr-only">(새 창에서 열림)</span></a>
      </figcaption>
    </figure>`;

  $(".guide-img", frame).addEventListener("error", () => {
    frame.innerHTML = `<p class="guide-empty">이미지를 불러오지 못했습니다.<br><b>${img.src}</b> 파일이 index.html과 같은 위치에 있는지, 파일 이름의 대소문자와 확장자가 정확한지 확인해 주세요.</p>`;
  });

  if (animate) {
    frame.classList.remove("is-turning");
    void frame.offsetWidth;
    frame.classList.add("is-turning");
  }

  controls.hidden = images.length < 2;
  $("#page-count").textContent = `${guide.index + 1} / ${images.length}쪽`;
  $("#page-prev").disabled = guide.index === 0;
  $("#page-next").disabled = guide.index === images.length - 1;

  // 다음 쪽 이미지를 미리 불러와 넘길 때 깜빡임을 줄입니다
  const next = images[guide.index + 1];
  if (next) new Image().src = next.src;
}

function turnGuide(dir) {
  const next = guide.index + dir;
  if (next < 0 || next >= guideImages().length) return;
  guide.index = next;
  renderGuide(true);
}

function initGuide() {
  $("#page-prev").addEventListener("click", () => turnGuide(-1));
  $("#page-next").addEventListener("click", () => turnGuide(1));

  // 지침서가 화면에 보일 때만 방향키로 넘기기
  let visible = false;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      (entries) => entries.forEach((en) => (visible = en.isIntersecting)),
      { threshold: 0.3 }
    ).observe($("#guide-frame"));
  }
  document.addEventListener("keydown", (e) => {
    if (!visible || $("#icon-dialog").open || guideImages().length < 2) return;
    if (document.activeElement.closest?.(".roster-tabs")) return;
    if (e.key === "ArrowRight") turnGuide(1);
    if (e.key === "ArrowLeft") turnGuide(-1);
  });

  renderGuide();
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
  renderTest();
  renderPlaylists();
  initGuide();
});
