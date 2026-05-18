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
