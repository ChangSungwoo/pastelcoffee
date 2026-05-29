/** Handoff sample data (pd-shared.jsx) — for layout review until cafe24 API. */

export type GalleryImage = {
  src: string
  bag: boolean
  alt: string
}

export type SizeOption = {
  id: string
  label: string
  add: number
}

export type GrindOption = {
  id: string
  label: string
}

export const SAMPLE_PRODUCT = {
  en: "Lolly",
  ko: "롤리 챔피온스커피 원두",
  origin: "Ethiopia · Yirgacheffe",
  originFull: "Ethiopia Yirgacheffe Gedeo Danche",
  process: "Washed",
  roast: "Medium Light",
  roastLevel: 2,
  notes: ["플로럴", "백도", "귤", "캐러멜"],
  notesEn: "Floral · White Peach · Tangerine · Caramel",
  basePrice: 21000,
  summary:
    "커피에서 표현되는 다채로운 과일의 향미를 좋아하시는 분들께. 좋은 생두의 선택부터 로스팅까지, 한 잔에 깃든 파스텔커피웍스의 헌신을 엿볼 수 있는 커피입니다. 드립과 에스프레소 모두 잘 어울립니다.",
  roasterNote:
    "은은하게 감도는 특유의 꽃향도 좋지만, 잘 익은 백도의 향미와 귤의 산미가 어우러져 표현되는 것이 아주 매력적입니다. 워시드 가공된 예가체프 커피의 클래식한 매력을 상기시켜 주는 귀한 커피입니다.",
  gallery: [
    {
      src: "/assets/photo-product-lolly-champions.png",
      bag: true,
      alt: "Lolly 200g 패키지",
    },
    {
      src: "/assets/photo-handdrip-brewpack.jpg",
      bag: false,
      alt: "핸드드립 추출",
    },
    {
      src: "/assets/photo-cupping-hands.jpg",
      bag: false,
      alt: "커핑 룸",
    },
    {
      src: "/assets/photo-roaster-machine.jpg",
      bag: false,
      alt: "로스터리",
    },
  ] satisfies GalleryImage[],
  sizeOpts: [
    { id: "200g", label: "200g", add: 0 },
    { id: "500g", label: "500g", add: 24000 },
  ] satisfies SizeOption[],
  grindOpts: [
    { id: "whole", label: "안함 (홀빈)" },
    { id: "drip", label: "핸드드립" },
    { id: "cold", label: "콜드브루" },
    { id: "mocha", label: "모카포트" },
    { id: "esp", label: "에스프레소" },
  ] satisfies GrindOption[],
} as const

export const FOOD_INFO: [string, string][] = [
  ["식품의 유형", "볶은커피 (커피원두)"],
  ["생산자 및 소재지", "주식회사 파스텔커피 · 경기 파주시 월롱산로 20-24"],
  ["제조연월일", "제조일로부터 1년 (제조일 별도 표기)"],
  ["용량(중량)", "200g / 500g"],
  ["원재료명 및 함량", "커피원두 100% (Ethiopia Yirgacheffe)"],
  ["원산지", "에티오피아 (상세페이지 표기)"],
  ["상품구성", "원두 (분쇄 옵션 선택 가능)"],
  ["소비자상담 관련 전화번호", "02-3141-1229"],
]

export const ACC_TITLES = [
  "배송 안내",
  "교환 · 반품 안내",
  "보관 방법",
] as const

export const REV_BARS: [number, number][] = [
  [5, 86],
  [4, 11],
  [3, 2],
  [2, 1],
  [1, 0],
]

export const REVIEWS = [
  {
    stars: 5,
    name: "김O연",
    date: "2026.05.18",
    opt: "200g · 핸드드립",
    body: "예가체프 특유의 꽃향이 정말 은은하게 올라와요. 백도랑 귤 산미가 깔끔하고 식어도 단맛이 좋아서 매일 아침 내려 마시고 있습니다. 재구매 의사 있어요!",
  },
  {
    stars: 5,
    name: "이O준",
    date: "2026.05.11",
    opt: "500g · 안함(홀빈)",
    body: "홀빈으로 받아서 매번 갈아 마시는데 신선도가 확실히 다릅니다. 로스팅 날짜도 봉투에 찍혀 있어서 믿음이 가요.",
  },
  {
    stars: 4,
    name: "박O은",
    date: "2026.05.03",
    opt: "200g · 에스프레소",
    body: "에스프레소로도 산미가 과하지 않고 캐러멜 단맛이 살아있어요. 개인적으론 드립이 더 취향이지만 충분히 만족합니다.",
  },
] as const

export const QNA = [
  {
    q: "분쇄 옵션을 핸드드립으로 하면 입자가 어느 정도인가요?",
    done: true,
    a: "핸드드립 옵션은 중간(미디엄) 굵기로 분쇄해 드립니다. 푸어오버·칼리타 등 대부분의 핸드드립 도구에 적합합니다. 더 굵거나 가는 분쇄가 필요하시면 주문 메모에 남겨 주세요.",
  },
  {
    q: "선물용 포장도 가능한가요?",
    done: true,
    a: "네, 주문 시 요청사항에 남겨 주시면 기본 선물 포장(무료)으로 발송해 드립니다. 별도 메시지 카드도 동봉 가능합니다.",
  },
  {
    q: "500g도 같은 로스팅 날짜로 받아볼 수 있나요?",
    done: false,
    a: "",
  },
] as const

export const RELATED = [
  {
    en: "Black Sugar",
    ko: "블랙슈가",
    note: "Dark Chocolate, Brown Sugar, Walnut",
    price: 22000,
  },
  {
    en: "Dark Knight",
    ko: "다크나이트",
    note: "Cocoa, Roasted Almond, Black Tea",
    price: 22000,
  },
  {
    en: "Finca Gascon",
    ko: "핀카 가스콘 무산소",
    note: "Prune, Grape, Berries, Chocolate",
    price: 32000,
  },
  {
    en: "Ethiopia Koke",
    ko: "에티오피아 코케",
    note: "Jasmine, Bergamot, Honey",
    price: 24000,
  },
] as const

export function formatWon(n: number) {
  return `₩ ${n.toLocaleString("ko-KR")}`
}
