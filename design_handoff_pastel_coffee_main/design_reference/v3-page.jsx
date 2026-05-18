// Pastel Coffee Works · v3 main page
// Aesop-style editorial · since 2011 · Slogan: "기억에 남는 커피, Everlasting Memory"
// All sections respond to a `mobile` boolean prop (no media queries — explicit branching
// keeps the desktop / mobile frames in the design-tool truthful to each viewport).

const { useState } = React;

// ─────────────────────────────────────────────────────────────────
// Page assembly
// ─────────────────────────────────────────────────────────────────
function V3Page({ mobile }) {
  return (
    <div className={`v3 ${mobile ? 'm' : 'd'}`}>
      <Header mobile={mobile} />
      <Hero mobile={mobile} />
      <Philosophy mobile={mobile} />
      <Champion mobile={mobile} />
      <HouseBlend mobile={mobile} />
      <SingleOrigin mobile={mobile} />
      <BrewDrip mobile={mobile} />
      <Roastery mobile={mobile} />
      <Hands mobile={mobile} />
      <Visit mobile={mobile} />
      <Journal mobile={mobile} />
      <Newsletter mobile={mobile} />
      <Footer mobile={mobile} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// 01. Header — wordmark + minimal nav
// ─────────────────────────────────────────────────────────────────
function Header({ mobile }) {
  if (mobile) {
    return (
      <header className="v3-header v3-header--m">
        <button className="v3-iconbtn" aria-label="menu">≡</button>
        <img src="assets/logo-wordmark-dark.svg" alt="Pastel Coffee Works" className="v3-logo-m" />
        <button className="v3-iconbtn" aria-label="cart">⛁</button>
      </header>
    );
  }
  return (
    <header className="v3-header v3-header--d">
      <div className="v3-header__top">
        <div className="v3-header__eyebrow">SEOUL · ROASTERY · SINCE 2011</div>
        <a href="#" className="v3-header__logo">
          <img src="assets/logo-wordmark-dark.svg" alt="Pastel Coffee Works" />
        </a>
        <div className="v3-header__right">
          <button className="v3-header__search">⌕ &nbsp;Search</button>
          <button className="v3-iconbtn" aria-label="wishlist">♡</button>
          <button className="v3-iconbtn" aria-label="cart">⛁ 0</button>
        </div>
      </div>
      <nav className="v3-nav">
        <a href="#issue">ISSUE</a>
        <span className="v3-nav__sep">·</span>
        <a href="#roastery">ROASTERY</a>
        <span className="v3-nav__sep">·</span>
        <a href="#coffee">COFFEE</a>
        <span className="v3-nav__sep">·</span>
        <a href="#journal">JOURNAL</a>
        <span className="v3-nav__sep">·</span>
        <a href="#visit">VISIT</a>
      </nav>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────
// 02. Hero — full-bleed image + slogan
// ─────────────────────────────────────────────────────────────────
function Hero({ mobile }) {
  return (
    <section className={`v3-hero ${mobile ? 'v3-hero--m' : 'v3-hero--d'}`}>
      <div
        className="v3-hero__bg"
        style={{ backgroundImage: 'url(assets/photo-hero-handdrip.jpg)' }}
        aria-hidden="true"
      />
      <div className="v3-hero__overlay" aria-hidden="true" />
      <div className="v3-hero__inner">
        <div className="v3-hero__eyebrow">— PASTEL COFFEE WORKS · EST. 2011 —</div>
        <h1 className="v3-hero__title">
          기억에 남는<br />
          한 잔의 커피.
        </h1>
        <div className="v3-hero__italic">Everlasting Memory.</div>
        <p className="v3-hero__lede">
          서울에서 시작된 스페셜티 커피 로스터리.<br />
          매주 정해진 자리에서, 작품처럼 굽습니다.
        </p>
        <div className="v3-hero__cta">
          <a className="v3-btn v3-btn--solid" href="#coffee">원두 둘러보기 →</a>
          <a className="v3-btn v3-btn--ghost" href="#roastery">로스터리 이야기</a>
        </div>
      </div>
      <div className="v3-hero__scrolltag">↓&nbsp;&nbsp;SCROLL</div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// 03. Philosophy — Proust effect
// ─────────────────────────────────────────────────────────────────
function Philosophy({ mobile }) {
  return (
    <section className="v3-section v3-philosophy">
      <span className="v3-num">— 01 / PHILOSOPHY —</span>
      <h2 className="v3-philosophy__h">기억과 감각.</h2>
      <p className="v3-philosophy__body">
        청명한 하늘, 시원한 바람. 여느 때와 다르지 않던 아침에
        커피를 마시며 옛 기억과 감정이 회상되는 경험을 합니다.
        이런 특별한 현상을 <em>‘프루스트 효과’</em>라고 부릅니다.
      </p>
      <p className="v3-philosophy__body v3-philosophy__body--muted">
        파스텔커피웍스의 모든 잔은,
        그 한 모금이 누군가의 하루에 다정하게 남기를 바랍니다.
      </p>
      <div className="v3-rule" />
      <div className="v3-philosophy__sig">— Pastel Coffee Works, Seoul</div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// 04. Champion's Blend (LOLLY) — featured
// ─────────────────────────────────────────────────────────────────
function Champion({ mobile }) {
  return (
    <section id="issue" className="v3-section v3-champ">
      <span className="v3-num">— 02 / CHAMPION'S BLEND —</span>
      <div className="v3-champ__grid">
        <div className="v3-champ__img">
          <img src="assets/photo-product-lolly-champions.png" alt="Champion's Blend Lolly" />
          <div className="v3-champ__badge">2020 KNBC<br/>CHAMPION</div>
        </div>
        <div className="v3-champ__txt">
          <div className="v3-eyebrow">— FROM OUR HEAD ROASTER —</div>
          <h2 className="v3-champ__h">
            <span className="v3-champ__h-en">Lolly.</span><br />
            <span className="v3-champ__h-ko">롤리 · 챔피언스 블렌드</span>
          </h2>
          <div className="v3-champ__notes">
            Floral &nbsp;·&nbsp; Apricot &nbsp;·&nbsp; White Peach &nbsp;·&nbsp; Grain Syrup
          </div>
          <p className="v3-champ__body">
            2020 KNBC 챔피언, 헤드 로스터 <b>방현영</b>이 직접 설계한 시그니처 블렌드.
            은은한 꽃향과 살구의 단맛, 그리고 길게 남는 곡물 시럽의 여운.
            <em> ‘기억에 남는 한 잔’</em>의 출발점입니다.
          </p>
          <div className="v3-champ__roastby">
            roasted by &nbsp;<b>BANG HYUN&middot;YOUNG</b> &nbsp;·&nbsp; Korea National Barista Championship 2020 · 1st
          </div>
          <div className="v3-champ__buy">
            <div className="v3-price">
              <span className="v3-price__amt">₩ 28,000</span>
              <span className="v3-price__unit">/ 200g</span>
            </div>
            <div className="v3-champ__btns">
              <a className="v3-btn v3-btn--solid v3-btn--lg" href="#">장바구니에 담기</a>
              <a className="v3-btn v3-btn--ghost v3-btn--lg" href="#">자세히 보기 →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// 05. House Blend grid — 4 items
// ─────────────────────────────────────────────────────────────────
const HOUSE_BLENDS = [
  { en: 'Lolly', ko: '롤리 · 챔피언스 블렌드', note: 'Floral, Apricot, White Peach, Grain Syrup', price: '28,000', tag: 'CHAMPION' },
  { en: 'Black Sugar', ko: '블랙슈가', note: 'Dark Chocolate, Brown Sugar, Walnut', price: '22,000' },
  { en: 'Dark Knight', ko: '다크나이트', note: 'Cocoa, Roasted Almond, Black Tea', price: '22,000' },
  { en: 'Tiger Punch', ko: '타이거펀치', note: 'Citrus, Honey, Caramel', price: '24,000' },
];

function HouseBlend({ mobile }) {
  return (
    <section id="coffee" className="v3-section v3-section--soft v3-house">
      <div className="v3-section__head">
        <span className="v3-num">— 03 / HOUSE BLEND —</span>
        <h2 className="v3-section__h">하우스 블렌드, 네 가지 풍경.</h2>
        <p className="v3-section__sub">파스텔커피웍스를 대표하는 시그니처 블렌드 라인업.</p>
      </div>
      <div className={`v3-house__grid ${mobile ? 'v3-house__grid--m' : ''}`}>
        {HOUSE_BLENDS.map((b, i) => (
          <BeanCard key={b.en} {...b} useImage={b.en === 'Lolly'} />
        ))}
      </div>
    </section>
  );
}

function BeanCard({ en, ko, note, price, tag, useImage }) {
  return (
    <article className="v3-bean">
      <div className="v3-bean__img">
        {useImage ? (
          <img src="assets/photo-product-lolly-champions.png" alt={en} />
        ) : (
          <BagPlaceholder en={en} />
        )}
        {tag ? <span className="v3-bean__tag">{tag}</span> : null}
      </div>
      <div className="v3-bean__body">
        <div className="v3-bean__en">{en}</div>
        <div className="v3-bean__ko">{ko}</div>
        <div className="v3-bean__note">{note}</div>
        <div className="v3-bean__foot">
          <span className="v3-bean__price">₩ {price}</span>
          <span className="v3-bean__cta">담기 →</span>
        </div>
      </div>
    </article>
  );
}

// Minimal kraft-bag SVG placeholder that echoes the real packaging
function BagPlaceholder({ en }) {
  return (
    <svg className="v3-bag" viewBox="0 0 200 240" preserveAspectRatio="xMidYMid meet">
      <rect x="20" y="20" width="160" height="200" fill="#c9b89b" />
      <rect x="20" y="20" width="160" height="14" fill="#b09c7d" />
      {/* circular wordmark mimic */}
      <circle cx="100" cy="100" r="26" fill="none" stroke="#4D2F19" strokeWidth="0.8" />
      <text x="100" y="103" fill="#4D2F19" fontSize="9" textAnchor="middle" letterSpacing="3" fontFamily="serif">PASTEL</text>
      <text x="100" y="116" fill="#4D2F19" fontSize="6" textAnchor="middle" letterSpacing="2" fontFamily="serif">COFFEE</text>
      {/* label box */}
      <rect x="44" y="150" width="112" height="50" fill="#d6c4a7" stroke="#4D2F19" strokeWidth="0.6" />
      <text x="100" y="170" fill="#4D2F19" fontSize="11" textAnchor="middle" letterSpacing="2" fontFamily="serif">{en.toUpperCase()}</text>
      <text x="100" y="185" fill="#6f513a" fontSize="6" textAnchor="middle" letterSpacing="1.5" fontFamily="serif">200g · single bag</text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────
// 06. Single Origin — featured one + lineup
// ─────────────────────────────────────────────────────────────────
function SingleOrigin({ mobile }) {
  return (
    <section className="v3-section v3-so">
      <div className={`v3-so__feature ${mobile ? 'v3-so__feature--m' : ''}`}>
        <div className="v3-so__txt">
          <span className="v3-num">— 04 / SINGLE ORIGIN IN SEASON —</span>
          <h2 className="v3-so__h">
            Finca Gascon<br />
            <em>Anaerobic.</em>
          </h2>
          <div className="v3-so__ko">싱글 오리진 · 과테말라</div>
          <div className="v3-so__notes">
            Prune &nbsp;·&nbsp; Grape &nbsp;·&nbsp; Berries &nbsp;·&nbsp; Chocolate
          </div>
          <p className="v3-so__body">
            과테말라 우에우에테낭고, Finca Gascon 농장의 무산소 발효 로트.
            검자두의 깊은 단맛과 포도, 베리류의 풍성한 향. 끝에는 다크 초콜릿이 길게 남습니다.
            제철 한 시즌 동안만 만나볼 수 있는 한정 입고.
          </p>
          <ul className="v3-so__meta">
            <li><span>로스팅</span><b>Medium Light</b></li>
            <li><span>가공</span><b>Anaerobic Washed</b></li>
            <li><span>품종</span><b>Specialty Lin.</b></li>
            <li><span>중량</span><b>200g</b></li>
          </ul>
          <div className="v3-so__buy">
            <span className="v3-price__amt">₩ 32,000</span>
            <a className="v3-btn v3-btn--solid" href="#">담기</a>
          </div>
        </div>
        <div className="v3-so__img">
          <img src="assets/photo-product-finca-gascon.jpg" alt="Finca Gascon Anaerobic" />
        </div>
      </div>
      <div className="v3-so__lineup">
        <div className="v3-so__lineup-head">
          <span className="v3-eyebrow">— THIS SEASON'S LINEUP —</span>
          <a className="v3-link" href="#">전체 보기 →</a>
        </div>
        <div className={`v3-so__row ${mobile ? 'v3-so__row--m' : ''}`}>
          {[
            { en: 'Ethiopia · Koke', ko: '에티오피아 코케 워시드', note: 'Jasmine, Bergamot, Honey', price: '24,000' },
            { en: 'Colombia · El Paraíso', ko: '콜롬비아 엘 파라이소', note: 'Strawberry, Lychee, Rose', price: '36,000' },
            { en: 'Kenya · Kirinyaga AA', ko: '케냐 키리냐가 AA', note: 'Black Currant, Tomato, Sugar Cane', price: '27,000' },
            { en: 'Brazil · Cerrado', ko: '브라질 세하도 펄프드', note: 'Hazelnut, Milk Chocolate, Vanilla', price: '20,000' },
          ].map((b) => (
            <article key={b.en} className="v3-mini">
              <BagPlaceholder en={b.en.split(' · ')[1] || b.en} />
              <div className="v3-mini__en">{b.en}</div>
              <div className="v3-mini__ko">{b.ko}</div>
              <div className="v3-mini__note">{b.note}</div>
              <div className="v3-mini__price">₩ {b.price}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// 07. Brew Pack + Drip Bag
// ─────────────────────────────────────────────────────────────────
function BrewDrip({ mobile }) {
  return (
    <section className="v3-section v3-section--soft v3-brew">
      <div className={`v3-brew__grid ${mobile ? 'v3-brew__grid--m' : ''}`}>
        <div className="v3-brew__img">
          <img src="assets/photo-handdrip-brewpack.jpg" alt="Brew Pack" />
        </div>
        <div className="v3-brew__txt">
          <span className="v3-num">— 05 / BREW PACK & DRIP BAG —</span>
          <h2 className="v3-section__h">한 잔의 휴식, 작은 봉투에.</h2>
          <p className="v3-section__sub">
            여행 가방, 사무실 책상, 누군가의 집에서도 같은 한 잔을 마실 수 있도록.
            작게 나눠 담은 두 가지 형태.
          </p>
          <div className="v3-brew__cards">
            <div className="v3-brew__card">
              <div className="v3-brew__card-h">Brew Pack</div>
              <div className="v3-brew__card-sub">미니 사이즈 · 약 3잔 분량</div>
              <ul>
                <li>원두 그대로, 직접 추출하시는 분께</li>
                <li>3종 시즌 세트로 골라 담기</li>
                <li>로스팅 5일 이내 발송</li>
              </ul>
              <div className="v3-brew__card-foot">
                <span className="v3-brew__card-price">₩ 9,500 / 1pc</span>
                <a className="v3-btn v3-btn--sm" href="#">담기</a>
              </div>
            </div>
            <div className="v3-brew__card">
              <div className="v3-brew__card-h">Drip Bag</div>
              <div className="v3-brew__card-sub">언제 어디서나 · 1회 추출용</div>
              <ul>
                <li>도구 없이 컵에 걸쳐 따뜻한 물만</li>
                <li>10개입 박스 · 선물용 권장</li>
                <li>House Blend / Single Origin 선택</li>
              </ul>
              <div className="v3-brew__card-foot">
                <span className="v3-brew__card-price">₩ 18,000 / 10ea</span>
                <a className="v3-btn v3-btn--sm" href="#">담기</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// 08. Roastery — dark section with stats
// ─────────────────────────────────────────────────────────────────
function Roastery({ mobile }) {
  return (
    <section id="roastery" className="v3-section v3-section--dark v3-roastery">
      <div className={`v3-roastery__grid ${mobile ? 'v3-roastery__grid--m' : ''}`}>
        <div className="v3-roastery__img">
          <img src="assets/photo-roaster-machine.jpg" alt="60kg roaster machine" />
        </div>
        <div className="v3-roastery__txt">
          <span className="v3-num v3-num--light">— 06 / THE ROASTERY —</span>
          <h2 className="v3-roastery__h">
            매주 월·화·수·목,<br />
            <em>작품처럼 정성껏 굽습니다.</em>
          </h2>
          <p className="v3-roastery__body">
            경기도 파주의 파스텔커피웍스 로스터리. 항온·항습 시스템을 갖춘 보관 환경,
            60kg 로스팅 설비를 통해 그날의 컨디션에 맞춘 일관된 굽기를 진행합니다.
            우리는 화려한 맛이 아닌 <em>자연 그대로의 향미</em>를 추구합니다.
          </p>
          <div className="v3-stats">
            <div className="v3-stat"><div className="v3-stat__big">60</div><div className="v3-stat__lbl">kg<br/>로스팅 설비</div></div>
            <div className="v3-stat"><div className="v3-stat__big">주<em>4</em></div><div className="v3-stat__lbl">월·화·수·목<br/>로스팅</div></div>
            <div className="v3-stat"><div className="v3-stat__big"><em>D+</em>5</div><div className="v3-stat__lbl">이내<br/>발송 보장</div></div>
            <div className="v3-stat"><div className="v3-stat__big">2011</div><div className="v3-stat__lbl">since<br/>15년차</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// 09. The Hands — people
// ─────────────────────────────────────────────────────────────────
function Hands({ mobile }) {
  return (
    <section className="v3-section v3-hands">
      <div className="v3-section__head v3-section__head--center">
        <span className="v3-num">— 07 / THE HANDS —</span>
        <h2 className="v3-section__h">우리가 만든 한 잔, 우리가 책임집니다.</h2>
        <p className="v3-section__sub">파스텔커피웍스는 로스팅·추출·교육의 전문가들이 모여 만든 브랜드입니다.</p>
      </div>
      <div className={`v3-hands__grid ${mobile ? 'v3-hands__grid--m' : ''}`}>
        <article className="v3-person">
          <div className="v3-person__img">
            <img src="assets/photo-cupping-hands.jpg" alt="Head Roaster Bang Hyun-young" />
          </div>
          <div className="v3-person__body">
            <div className="v3-person__role">— HEAD ROASTER —</div>
            <h3 className="v3-person__name">
              방현영 <span>Bang Hyun&middot;young</span>
            </h3>
            <ul className="v3-person__hist">
              <li><span>2020</span><b>KNBC · Korea National Barista Championship · 우승</b></li>
              <li><span>2021</span>WBC Milano · 한국 대표 · 세미파이널</li>
              <li><span>2023</span>KBA · 올해의 베스트 바리스타</li>
              <li><span>—</span>Victoria Arduino · Brand Ambassador</li>
            </ul>
          </div>
        </article>
        <article className="v3-person">
          <div className="v3-person__img v3-person__img--alt">
            <img src="assets/photo-event-cafeshow.jpg" alt="Cafe Show booth" />
          </div>
          <div className="v3-person__body">
            <div className="v3-person__role">— FOUNDER · CEO —</div>
            <h3 className="v3-person__name">
              장현우 <span>Jang Hyun&middot;woo</span>
            </h3>
            <ul className="v3-person__hist">
              <li><span>—</span>저서 ‘커피라이프’, ‘라떼아트 커피 디자인북’</li>
              <li><span>2011</span>카페아이두 / 빈프로젝트 커피로스터스 창업</li>
              <li><span>2010</span>호주 멜버른 Sensory Lab / Degraves Espresso</li>
              <li><span>—</span>15년차 · 서울카페쇼 10년 연속 참가</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// 10. Visit — 4 places
// ─────────────────────────────────────────────────────────────────
const PLACES = [
  {
    role: '본점 · Flagship',
    name: '원두상점',
    addr: '서울 마포구 성지길 58',
    notes: ['원두 상점', '전 세계 스페셜티 커피 원두', '커피 & 디저트'],
    img: 'assets/photo-storefront-hapjeong.jpg',
    feature: true,
  },
  {
    role: '서촌점 · Showroom',
    name: '브랜드 쇼룸',
    addr: '서울 종로구 필운대로3길 2',
    notes: ['스페셜티 커피와 쿠키', '쇼룸 운영'],
    img: 'assets/photo-storefront-wondu-sangjeom.jpg',
  },
  {
    role: '본사 · Headquarters',
    name: '운영 · 기획',
    addr: '서울 마포구 토정로 28',
    notes: ['자사몰 운영', '패키징 연구', '브랜드 총괄'],
    img: null,
  },
  {
    role: '로스터리 · Roastery',
    name: '파주 로스터리',
    addr: '경기 파주시 월롱산로 20-24',
    notes: ['항온·항습 보관', '로스팅 연구개발', '60kg 로스팅 설비'],
    img: 'assets/photo-roaster-machine.jpg',
  },
];

function Visit({ mobile }) {
  return (
    <section id="visit" className="v3-section v3-section--soft v3-visit">
      <div className="v3-section__head">
        <span className="v3-num">— 08 / VISIT —</span>
        <h2 className="v3-section__h">가까이서 한 잔. <em>Four Places.</em></h2>
        <p className="v3-section__sub">파스텔커피웍스는 서울 두 곳의 매장, 파주 로스터리, 그리고 본사로 구성되어 있습니다.</p>
      </div>
      <div className={`v3-visit__grid ${mobile ? 'v3-visit__grid--m' : ''}`}>
        {PLACES.map((p) => (
          <article key={p.role} className={`v3-place ${p.feature ? 'v3-place--feature' : ''}`}>
            <div className="v3-place__img">
              {p.img ? <img src={p.img} alt={p.name} /> : <div className="v3-place__noimg" aria-hidden="true">no photo</div>}
            </div>
            <div className="v3-place__body">
              <div className="v3-place__role">{p.role}</div>
              <div className="v3-place__name">{p.name}</div>
              <div className="v3-place__addr">{p.addr}</div>
              <ul>
                {p.notes.map((n) => <li key={n}>{n}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// 11. Journal teaser
// ─────────────────────────────────────────────────────────────────
function Journal({ mobile }) {
  const posts = [
    { tag: 'BREW', t: '집에서 핸드드립, 다섯 단계.', sub: '도구가 처음인 분께. · 8분', img: 'assets/photo-handdrip-brewpack.jpg' },
    { tag: 'ORIGIN', t: '시즌마다 다른 잔, 다른 농장.', sub: '제철 원두를 고르는 일. · 6분', img: 'assets/photo-product-finca-gascon.jpg' },
    { tag: 'PEOPLE', t: '챔피언의 커핑 룸.', sub: '방현영 헤드로스터 인터뷰. · 12분', img: 'assets/photo-cupping-hands.jpg' },
  ];
  return (
    <section id="journal" className="v3-section v3-journal">
      <div className="v3-section__head">
        <span className="v3-num">— 09 / JOURNAL —</span>
        <h2 className="v3-section__h">읽고 마시는 커피.</h2>
        <p className="v3-section__sub">홈카페와 산지, 그리고 사람에 관한 글들.</p>
      </div>
      <div className={`v3-journal__grid ${mobile ? 'v3-journal__grid--m' : ''}`}>
        {posts.map((p) => (
          <article key={p.t} className="v3-post">
            <div className="v3-post__img"><img src={p.img} alt={p.t} /></div>
            <div className="v3-post__tag">{p.tag}</div>
            <h3 className="v3-post__h">{p.t}</h3>
            <div className="v3-post__sub">{p.sub}</div>
            <div className="v3-post__cta">READ →</div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// 12. Newsletter
// ─────────────────────────────────────────────────────────────────
function Newsletter({ mobile }) {
  return (
    <section className="v3-section v3-section--soft v3-newsletter">
      <div className="v3-newsletter__inner">
        <span className="v3-num">— 10 / LETTER —</span>
        <h2 className="v3-section__h">계절마다, 짧은 편지 한 통.</h2>
        <p className="v3-section__sub">새 시즌 원두, 농장 소식, 그리고 매장 이야기를 가끔 보내드립니다.</p>
        <form className="v3-newsletter__form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="your@email.com" aria-label="email" />
          <button type="submit" className="v3-btn v3-btn--solid">편지 받기</button>
        </form>
        <div className="v3-newsletter__note">언제든 수신 거부 가능 · 광고 메일은 보내지 않습니다.</div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// 13. Footer
// ─────────────────────────────────────────────────────────────────
function Footer({ mobile }) {
  return (
    <footer className="v3-footer">
      <div className={`v3-footer__top ${mobile ? 'v3-footer__top--m' : ''}`}>
        <div className="v3-footer__brand">
          <img src="assets/logo-symbol-dark.svg" alt="" className="v3-footer__symbol" />
          <div className="v3-footer__line">
            매주 정해진 자리에서, 작품처럼.<br />
            기억에 남는 한 잔의 커피.
          </div>
        </div>
        <div className="v3-footer__cols">
          <FooterCol t="둘러보기" items={['이번 호', '하우스 블렌드', '싱글 오리진', '브루팩 · 드립백', '저널']} />
          <FooterCol t="찾아오시는 길" items={['본점 — 마포 성지길 58', '서촌점 — 종로 필운대로3길 2', '본사 — 마포 토정로 28', '로스터리 — 파주 월롱산로 20-24']} />
          <FooterCol t="기록" items={['편지 받기', 'Instagram @pastelcoffeeworks', 'jackie@pastelcoffee.com', '010·7447·8944']} />
        </div>
      </div>
      <div className="v3-footer__bot">
        <span>© 2026 PASTEL COFFEE WORKS · 주식회사 파스텔커피</span>
        <span>이용약관 · 개인정보처리방침 · 사업자정보</span>
      </div>
    </footer>
  );
}
function FooterCol({ t, items }) {
  return (
    <div className="v3-footer__col">
      <div className="v3-footer__col-h">{t}</div>
      {items.map((i) => <div key={i} className="v3-footer__col-item">{i}</div>)}
    </div>
  );
}

window.V3Page = V3Page;
