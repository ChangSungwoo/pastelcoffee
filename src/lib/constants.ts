export const MAIN_NAV = [
  { href: "#issue", label: "ISSUE" },
  { href: "#roastery", label: "ROASTERY" },
  { href: "#coffee", label: "COFFEE" },
  { href: "#journal", label: "JOURNAL" },
  { href: "#visit", label: "VISIT" },
] as const

export const HOUSE_BLENDS = [
  {
    en: "Lolly",
    ko: "롤리 · 챔피언스 블렌드",
    note: "Floral, Apricot, White Peach, Grain Syrup",
    price: "28,000",
    tag: "CHAMPION" as const,
    useImage: true,
  },
  {
    en: "Black Sugar",
    ko: "블랙슈가",
    note: "Dark Chocolate, Brown Sugar, Walnut",
    price: "22,000",
  },
  {
    en: "Dark Knight",
    ko: "다크나이트",
    note: "Cocoa, Roasted Almond, Black Tea",
    price: "22,000",
  },
  {
    en: "Tiger Punch",
    ko: "타이거펀치",
    note: "Citrus, Honey, Caramel",
    price: "24,000",
  },
] as const

export const SINGLE_ORIGIN_LINEUP = [
  {
    en: "Ethiopia · Koke",
    ko: "에티오피아 코케 워시드",
    note: "Jasmine, Bergamot, Honey",
    price: "24,000",
    bagLabel: "Koke",
  },
  {
    en: "Colombia · El Paraíso",
    ko: "콜롬비아 엘 파라이소",
    note: "Strawberry, Lychee, Rose",
    price: "36,000",
    bagLabel: "El Paraíso",
  },
  {
    en: "Kenya · Kirinyaga AA",
    ko: "케냐 키리냐가 AA",
    note: "Black Currant, Tomato, Sugar Cane",
    price: "27,000",
    bagLabel: "Kirinyaga AA",
  },
  {
    en: "Brazil · Cerrado",
    ko: "브라질 세하도 펄프드",
    note: "Hazelnut, Milk Chocolate, Vanilla",
    price: "20,000",
    bagLabel: "Cerrado",
  },
] as const

export const VISIT_PLACES = [
  {
    role: "본점 · Flagship",
    name: "원두상점",
    addr: "서울 마포구 성지길 58",
    notes: ["원두 상점", "전 세계 스페셜티 커피 원두", "커피 & 디저트"],
    image: "/assets/photo-storefront-hapjeong.jpg",
    feature: true,
  },
  {
    role: "서촌점 · Showroom",
    name: "브랜드 쇼룸",
    addr: "서울 종로구 필운대로3길 2",
    notes: ["스페셜티 커피와 쿠키", "쇼룸 운영"],
    image: "/assets/photo-storefront-wondu-sangjeom.jpg",
  },
  {
    role: "본사 · Headquarters",
    name: "운영 · 기획",
    addr: "서울 마포구 토정로 28",
    notes: ["자사몰 운영", "패키징 연구", "브랜드 총괄"],
    image: null,
  },
  {
    role: "로스터리 · Roastery",
    name: "파주 로스터리",
    addr: "경기 파주시 월롱산로 20-24",
    notes: ["항온·항습 보관", "로스팅 연구개발", "60kg 로스팅 설비"],
    image: "/assets/photo-roaster-machine.jpg",
  },
] as const

export const JOURNAL_POSTS = [
  {
    tag: "BREW",
    title: "집에서 핸드드립, 다섯 단계.",
    sub: "도구가 처음인 분께. · 8분",
    image: "/assets/photo-handdrip-brewpack.jpg",
  },
  {
    tag: "ORIGIN",
    title: "시즌마다 다른 잔, 다른 농장.",
    sub: "제철 원두를 고르는 일. · 6분",
    image: "/assets/photo-product-finca-gascon.jpg",
  },
  {
    tag: "PEOPLE",
    title: "챔피언의 커핑 룸.",
    sub: "방현영 헤드로스터 인터뷰. · 12분",
    image: "/assets/photo-cupping-hands.jpg",
  },
] as const

export const FOOTER_COLUMNS = [
  {
    title: "둘러보기",
    items: ["이번 호", "하우스 블렌드", "싱글 오리진", "브루팩 · 드립백", "저널"],
  },
  {
    title: "찾아오시는 길",
    items: [
      "본점 — 마포 성지길 58",
      "서촌점 — 종로 필운대로3길 2",
      "본사 — 마포 토정로 28",
      "로스터리 — 파주 월롱산로 20-24",
    ],
  },
  {
    title: "기록",
    items: [
      "편지 받기",
      "Instagram @pastelcoffeeworks",
      "jackie@pastelcoffee.com",
      "010·7447·8944",
    ],
  },
] as const
