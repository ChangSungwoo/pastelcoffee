# Handoff: Pastel Coffee Works — Main Page (v3)

> 파스텔커피웍스 메인 페이지 시안을 실제 사이트로 구현하기 위한 패키지입니다.
> Cursor + Claude Code에게 이 폴더 전체를 던지면, 그대로 작업을 시작할 수 있도록 정리했습니다.

---

## 0. About the Design Files (⚠️ 먼저 읽어주세요)

`design_reference/` 안의 HTML/JSX 파일은 **디자인 레퍼런스 (프로토타입)** 입니다.  
**production 코드가 아닙니다.** 그대로 deploy 하지 말고 → 아래 권장 스택으로 **다시 구현** 해주세요.

- `Pastel Coffee v3.html` — 디자인 툴 chrome (toolbar, frame border, "DESKTOP·1280" 라벨 등)이 포함된 **뷰어**. chrome 부분은 무시하고, 안쪽 `.v3-*` 컴포넌트만 보면 됩니다.
- `v3-page.jsx` — Babel-standalone 으로 브라우저에서 직접 transpile 되는 형태. 실제 React/Next 프로젝트에서는 `.tsx` 모듈로 분리해서 import 하는 구조로 재작성하세요.
- `Pastel Coffee Brand Brief v2.html` — 브랜드 톤·언어·시각 원칙 문서. 카피라이팅 / 단어 선택 / 컬러 시스템 의도를 이해할 때 참조.
- `assets/` — 실제 사용해야 할 사진·로고 (그대로 옮기면 됩니다).

---

## 1. Overview

**브랜드**: Pastel Coffee Works (파스텔커피웍스) — 서울 기반 스페셜티 커피 로스터리, 15년차  
**Slogan**: 기억에 남는 한 잔의 커피. *Everlasting Memory.*  
**범위**: 메인 페이지 (단일 페이지) 만 우선 구현 → Vercel 무료 플랜에 배포  
**타깃**: 데스크탑 + 모바일 (반응형, breakpoint 1 개로 충분)  
**Tone**: Aesop 스타일 에디토리얼. 매거진의 한 페이지 같은 차분한 톤. 화려한 애니메이션 ❌

---

## 2. Fidelity

**Hi-Fi (하이파이)** — 컬러, 타이포그래피, 간격, 사진 모두 확정.  
픽셀에 가까운 재현을 목표로 하세요. 디자인 토큰은 §6 참고.

---

## 3. Recommended Stack & Vercel Deploy

오너 요구사항: *"메인 페이지만 만들어서 Vercel 무료 버전에 올려보고 싶다."*

### 권장 스택
```
Framework:   Next.js 15 (App Router) + TypeScript
Styling:     CSS Modules  또는  Tailwind CSS v4
Fonts:       next/font (Cormorant Garamond, Pretendard, Nanum Myeongjo)
Images:      next/image (assets 폴더 → public/ 로 이동)
Deploy:      Vercel (GitHub 연결 → main push 시 자동 배포)
```

> Tailwind 를 쓰지 않더라도 OK. 디자인 토큰 (§6) 이 충분히 작아서 plain CSS variable + CSS Modules 로도 충분합니다. 디자인 의도상 **유틸리티 클래스보다 시맨틱 클래스명** (예: `.hero__title`) 이 결과물에 더 잘 맞습니다.

### 프로젝트 초기 세팅
```bash
npx create-next-app@latest pastel-coffee --typescript --app --no-tailwind
cd pastel-coffee
# design_reference/assets/* 를  public/assets/  로 복사
```

### Vercel 배포 (무료 플랜)
1. GitHub 에 repo 만들고 push
2. https://vercel.com → "Add New Project" → GitHub repo 선택
3. Framework Preset: **Next.js** (자동 감지됨)
4. Environment Variables: 없음 (정적 사이트)
5. Deploy 클릭 → 약 30초 후 `https://<your-project>.vercel.app` 발급

> 무료 플랜 한도: 100GB bandwidth/월. 메인 페이지 + 사진 14장 정도면 충분히 여유 있음.  
> 추후 도메인 (예: `pastelcoffee.com`) 연결은 Vercel → Project Settings → Domains 에서 가능.

---

## 4. Page Structure (섹션 13개)

순서대로 위에서 아래로 한 페이지에 배치됩니다.

| # | 섹션 | Component | 역할 |
|---|---|---|---|
| 01 | Header | `<Header />` | 워드마크 + 미니멀 nav (ISSUE · ROASTERY · COFFEE · JOURNAL · VISIT) |
| 02 | Hero | `<Hero />` | full-bleed 사진 + 슬로건 "기억에 남는 한 잔의 커피 / Everlasting Memory" |
| 03 | Philosophy | `<Philosophy />` | "기억과 감각." — Proust effect 카피, 텍스트 중심 |
| 04 | Champion's Blend | `<Champion />` | LOLLY 블렌드 단독 피처 (좌: 패키지 사진, 우: 카피 + 가격 + CTA) |
| 05 | House Blend Grid | `<HouseBlend />` | 4개 블렌드 카드 그리드 (Lolly / Black Sugar / Dark Knight / Tiger Punch) |
| 06 | Single Origin | `<SingleOrigin />` | 시즌 피처 1개 (Finca Gascon) + 라인업 4개 |
| 07 | Brew Pack & Drip Bag | `<BrewDrip />` | 좌: 사진, 우: 2가지 옵션 카드 |
| 08 | Roastery | `<Roastery />` | **다크 섹션** — 60kg 설비 사진 + stats (60kg / 주4회 / D+5 / 2011) |
| 09 | The Hands | `<Hands />` | 헤드 로스터 방현영 + 대표 장현우, 이력 카드 2개 |
| 10 | Visit | `<Visit />` | 4개 장소 (본점 / 서촌점 / 본사 / 파주 로스터리) — 비대칭 그리드 |
| 11 | Journal | `<Journal />` | 글 3개 티저 (BREW / ORIGIN / PEOPLE) |
| 12 | Newsletter | `<Newsletter />` | 이메일 구독 폼 |
| 13 | Footer | `<Footer />` | **다크** — 로고 + 4 컬럼 + 카피라이트 |

각 섹션의 정확한 카피, 가격, 그리드 비율은 `design_reference/v3-page.jsx` 와 `design_reference/Pastel Coffee v3.html` 의 CSS 를 그대로 확인하세요.

### Layout Containers
- 데스크탑: `max-width` 미지정. 섹션 padding `88px 60px` (좌우 60px)
- 모바일 (~ 480px): 섹션 padding `56px 20px`
- 반응형 breakpoint: **1 개로 충분** (대략 768px 또는 820px). 디자인 시안에서는 명시적으로 `mobile` prop 분기를 썼지만, 실제 사이트는 CSS media query 로 처리.

---

## 5. Typography

3 가지 패밀리. Google Fonts + Pretendard CDN.

```css
--serif:    'Cormorant Garamond', 'Nanum Myeongjo', Georgia, serif;
--serif-ko: 'Nanum Myeongjo', 'Cormorant Garamond', serif;
--sans:     'Pretendard', system-ui, -apple-system, sans-serif;
```

| 용도 | Family | weight | 예시 |
|---|---|---|---|
| 영문 디스플레이 / italic | `--serif` (Cormorant) | 300–500 | `Lolly.`, `Anaerobic.` |
| 한글 디스플레이 / 본문 lede | `--serif-ko` (Nanum Myeongjo) | 700–800 | "기억에 남는 한 잔의 커피." |
| UI / 캡션 / 작은 텍스트 | `--sans` (Pretendard) | 300–500 | 본문, 버튼, eyebrow |

### Type Scale (참고 값)
| Role | size | line-height | family |
|---|---|---|---|
| Hero title | 84px / m: 44px | 1.05 | serif-ko 700 |
| Hero italic sub | 38px / m: 24px | — | serif italic 400 |
| Section H (`.v3-section__h`) | 42px / m: 28px | 1.2 | serif-ko 700 |
| Philosophy H | 48px / m: 32px | 1.2 | serif-ko 700 |
| Body lede | 22px / m: 17px | 1.7–1.85 | serif-ko 400 |
| Body small | 15px | 1.7 | sans 400 |
| Eyebrow / num | 11px | — | serif, letter-spacing 0.32em, UPPERCASE |
| Button | 13–14px | — | sans 500, letter-spacing 0.02em |

> 영문은 항상 italic + serif 로 강조. `<em>` 태그를 그렇게 매핑했어요 (CSS: `.v3 em { font-family: var(--serif); font-style: italic; }`).

---

## 6. Design Tokens

```css
/* Color */
--ink:        #4D2F19;   /* Primary brown — 본문 텍스트, 다크 배경 */
--ink-2:      #6f513a;   /* Secondary brown */
--ink-3:      #a98f78;   /* Tertiary / muted */
--ink-line:   rgba(77, 47, 25, 0.14);   /* 얇은 구분선 */
--ink-line-2: rgba(77, 47, 25, 0.32);   /* 진한 구분선 / 점선 보더 */

--paper:      #FAF6EE;   /* 기본 페이지 배경 */
--paper-2:    #f3ecdf;   /* 살짝 어두운 섹션 배경 (.section--soft) */
--paper-3:    #ebe2cf;   /* 카드 / 이미지 placeholder 배경 */
--paper-soft: #E1DCD7;   /* 다크 섹션 위 텍스트 색 */

/* Spacing — 섹션 단위 */
--section-py-d:  88px;   /* desktop */
--section-py-m:  56px;   /* mobile */
--section-px-d:  60px;
--section-px-m:  20px;

/* Border */
border-thin:  1px solid var(--ink-line);
border-bold:  1.5px solid var(--ink);     /* 버튼, 카드, brew card 등 */

/* Border-radius */
/* 거의 사용 안 함 — 의도적으로 sharp corner. radius: 0 가 기본 */

/* Shadow */
/* 디자인 툴 chrome 의 "6px 6px 0 var(--ink)" 는 시안 표현용. 실제 사이트에서는 사용 안 함 */
/* 호버 시 약간의 lift: 0 8px 20px rgba(77,47,25,0.08) */
```

### Color usage rules
- 배경: `--paper` (기본) → `--paper-2` (soft section, 격번으로 alternation) → `--ink` (dark section, 08 Roastery / 13 Footer 만)
- 모든 텍스트는 `--ink` 계열로. 검은색 (#000) 절대 사용 ❌
- 흰색 (#FFF) 절대 사용 ❌ — paper-soft 까지가 가장 밝은 색

---

## 7. Assets

`design_reference/assets/` 의 14개 파일을 **그대로 `public/assets/` 로 옮기세요**.

### Logos
- `logo-wordmark-dark.svg` — 헤더용 가로 워드마크 (다크 컬러)
- `logo-wordmark-light.svg` — 다크 배경 위에 올릴 때
- `logo-symbol-dark.svg` — Footer 의 큰 심볼
- `logo-symbol-light.svg` — 다크 배경 위 심볼

### Photos
| 파일 | 사용처 |
|---|---|
| `photo-hero-handdrip.jpg` | 02 Hero 배경 |
| `photo-product-lolly-champions.png` | 04 Champion 메인 사진 + 05 House Blend "Lolly" 카드 |
| `photo-product-finca-gascon.jpg` | 06 Single Origin Feature + 11 Journal ORIGIN |
| `photo-handdrip-brewpack.jpg` | 07 Brew Pack 사진 + 11 Journal BREW |
| `photo-roaster-machine.jpg` | 08 Roastery (다크 섹션) + 10 Visit Roastery 카드 |
| `photo-cupping-hands.jpg` | 09 Hands — 방현영 + 11 Journal PEOPLE |
| `photo-event-cafeshow.jpg` | 09 Hands — 장현우 |
| `photo-storefront-hapjeong.jpg` | 10 Visit 본점 (feature 카드) |
| `photo-storefront-wondu-sangjeom.jpg` | 10 Visit 서촌점 |
| `brand-intro.pdf` | 참고용 (사이트엔 안 들어감) |

### 이미지 최적화 권장
- 모두 `next/image` 로 import 해서 자동 lazy-loading + AVIF/WebP 변환
- Hero (`photo-hero-handdrip.jpg`) 만 `priority` 속성 부여
- Roastery 사진은 시안에서 `filter: grayscale(0.2) contrast(1.05)` 적용됨 — 그대로 유지

### Placeholder SVG (`BagPlaceholder` 컴포넌트)
`v3-page.jsx` 안에 있는 `<BagPlaceholder en="..." />` 는 크라프트 봉투 SVG placeholder 입니다. House Blend 4종 / Single Origin 라인업 4종 중 실제 제품 사진이 없는 항목에 사용. **실제 사진이 들어오기 전까지 그대로 사용해도 OK**. 그대로 React 컴포넌트로 옮기면 됩니다.

---

## 8. Components / Reusable Bits

CSS 클래스 prefix `.v3-` 는 디자인 툴에서 다른 변형들과 격리하기 위해 붙인 것 → **production 에서는 떼도 됩니다** (예: `.btn`, `.btn--solid`).

### Button
```
.v3-btn            기본 — outline (1.5px ink), transparent bg
.v3-btn--solid     채워진 ink bg + paper 텍스트
.v3-btn--ghost     border 없음, padding-left 0 — text link 느낌
.v3-btn--lg        padding 14/26, 14px
.v3-btn--sm        padding 7/14, 12px
```
Hover: solid ↔ outline 토글 (반전). 약 150ms transition.

### Section heading set
```html
<span class="v3-num">— 01 / PHILOSOPHY —</span>
<h2 class="v3-section__h">기억과 감각.</h2>
<p class="v3-section__sub">...</p>
```

### Eyebrow
모든 작은 라벨류 (`SEOUL · ROASTERY · SINCE 2011`, `— FROM OUR HEAD ROASTER —`) 는  
**serif italic + 11px + letter-spacing 0.32em + UPPERCASE** 패턴.

---

## 9. Interactions & Behavior

이 페이지는 **거의 정적** 입니다. JS 없이도 작동.

- **Header nav anchor**: 각 항목이 섹션 ID 로 점프 (`#issue`, `#roastery`, `#coffee`, `#journal`, `#visit`). `scroll-behavior: smooth` 권장.
- **Buttons**: 모든 CTA 는 일단 `href="#"` placeholder. 실제 라우팅 (장바구니 / 상품 상세) 은 추후 단계.
- **Newsletter form**: 현재는 `e.preventDefault()` 만. 추후 ConvertKit / Resend / 단순 mailto 중 선택.
- **Hover**:
  - 버튼: solid ↔ outline 반전
  - `.v3-bean` (House Blend 카드): `translateY(-3px)` + soft shadow
  - `.v3-post` (Journal 카드): `translateY(-3px)` + 이미지 `scale(1.04)`
  - nav 링크: `border-bottom` 1.5px ink 등장
- **Animation / scroll**: 시안에는 없음. 추가하지 마세요. (시안 톤이 차분한 게 의도)
- **다크 모드**: 지원 안 함.

---

## 10. Copy (정확한 텍스트)

모든 카피는 `v3-page.jsx` 에 그대로 들어있습니다. 일부 syntax 만 주의:

- 슬로건은 **줄바꿈** 위치 정확히: "기억에 남는 / 한 잔의 커피."
- italic 영문은 항상 `<em>` 으로 감쌈 → CSS 로 serif italic 처리됨
- 가격 표기: `₩ 28,000` (원화 기호 + 공백 + 숫자)
- 가운뎃점은 ko: `·` (middle dot), serif 줄임표: `…` 가 아닌 그냥 `.`

> 카피 변경이 필요한 경우 — 오너 컨펌 받아야 합니다. 임의로 수정 ❌

---

## 11. 작업 순서 추천

Cursor 에게 던질 때 이 순서로 부탁하면 좋아요:

1. `npx create-next-app` → 빈 Next.js 프로젝트
2. `public/assets/` 로 자산 복사, `next/font` 로 폰트 설정
3. `src/styles/tokens.css` (global) — §6 의 CSS 변수 한 번에 정의
4. 컴포넌트 13개 — `src/components/sections/*.tsx` 하나씩
   - 권장 순서: Header → Hero → Footer → Philosophy → Champion → HouseBlend → SingleOrigin → BrewDrip → Roastery → Hands → Visit → Journal → Newsletter
5. `src/app/page.tsx` 에서 순서대로 조립
6. 모바일 반응형 — 각 컴포넌트 CSS Module 안에서 `@media (max-width: 820px)` 로 처리
7. Vercel 배포 → preview URL 확인 → 오너 컨펌

---

## 12. 주의사항 / Don'ts

- ❌ **AI 그라데이션 남발** — paper-2 / ink 외 다른 배경 절대 추가 X
- ❌ **둥근 모서리 (border-radius)** — 시안은 의도적으로 sharp. radius 사용 X (input/카드 등 모두)
- ❌ **이모지** — 절대 사용 X
- ❌ **새로운 컬러 추가** — §6 의 9개 토큰만 사용
- ❌ **fade-in / parallax / scroll animation** — 시안 톤이 깨짐
- ❌ **font 변경** — Inter, Roboto 같은 흔한 폰트로 대체 X
- ✅ **사진 그대로 사용** — 사진이 브랜드의 핵심. 필터 / 톤 변경 X (Roastery 의 grayscale 0.2 는 예외, 시안에 명시됨)
- ✅ **여백 충분히** — 시안의 88px / 60px 그대로. 좁히지 마세요

---

## 13. Files in This Bundle

```
design_handoff_pastel_coffee_main/
├── README.md                                        ← 지금 보는 파일
└── design_reference/
    ├── Pastel Coffee v3.html                        ← 실제 시안 (디자인 툴 chrome 포함)
    ├── v3-page.jsx                                  ← 컴포넌트 코드 (Babel 형식)
    ├── Pastel Coffee Brand Brief v2.html            ← 브랜드 톤·언어 문서
    └── assets/
        ├── logo-wordmark-dark.svg / -light.svg
        ├── logo-symbol-dark.svg / -light.svg
        ├── photo-hero-handdrip.jpg
        ├── photo-product-lolly-champions.png
        ├── photo-product-finca-gascon.jpg
        ├── photo-handdrip-brewpack.jpg
        ├── photo-roaster-machine.jpg
        ├── photo-cupping-hands.jpg
        ├── photo-event-cafeshow.jpg
        ├── photo-storefront-hapjeong.jpg
        ├── photo-storefront-wondu-sangjeom.jpg
        └── brand-intro.pdf
```

### 시안 실행 방법 (개발자가 시안을 브라우저에서 확인하고 싶을 때)
```bash
cd design_reference
# 간단한 정적 서버 띄우기 (Python)
python3 -m http.server 8000
# → http://localhost:8000/Pastel%20Coffee%20v3.html  접속
```
> 직접 `file://` 로 열면 CORS 때문에 `v3-page.jsx` fetch 가 막힙니다. 반드시 서버를 통해 띄우세요.

---

## Questions?

이 핸드오프 패키지로 막히는 부분이 있으면 디자이너 (= 이 패키지 만든 사람) 에게 다시 문의하세요.  
특히:
- "이 섹션 카피를 바꿔도 되나요?" → ❌ 오너 컨펌 먼저
- "Tailwind 써도 되나요?" → ✅ OK, 단 토큰은 §6 그대로
- "이미지 더 필요해요" → 디자이너에게 요청, AI 생성 ❌
