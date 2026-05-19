import Image from "next/image"

import { EditorialButton } from "@/components/shared/editorial-button"

import sectionStyles from "./section.module.css"
import styles from "./brew-drip.module.css"

const BREW_CARDS = [
  {
    title: "Brew Pack",
    sub: "미니 사이즈 · 약 3잔 분량",
    items: [
      "원두 그대로, 직접 추출하시는 분께",
      "3종 시즌 세트로 골라 담기",
      "로스팅 5일 이내 발송",
    ],
    price: "₩ 9,500 / 1pc",
  },
  {
    title: "Drip Bag",
    sub: "언제 어디서나 · 1회 추출용",
    items: [
      "도구 없이 컵에 걸쳐 따뜻한 물만",
      "10개입 박스 · 선물용 권장",
      "House Blend / Single Origin 선택",
    ],
    price: "₩ 18,000 / 10ea",
  },
] as const

export function BrewDrip() {
  return (
    <section
      className={`${sectionStyles.section} ${sectionStyles.sectionSoft}`}
      aria-labelledby="brew-drip-heading"
    >
      <div className={styles.grid}>
        <div className={styles.imageWrap}>
          <Image
            src="/assets/photo-handdrip-brewpack.jpg"
            alt="Brew Pack"
            fill
            sizes="(max-width: 820px) 100vw, 45vw"
            className={styles.image}
          />
        </div>
        <div>
          <span className={sectionStyles.num}>
            — 05 / BREW PACK & DRIP BAG —
          </span>
          <h2 id="brew-drip-heading" className={sectionStyles.sectionTitle}>
            한 잔의 휴식, 작은 봉투에.
          </h2>
          <p className={sectionStyles.sectionSub}>
            여행 가방, 사무실 책상, 누군가의 집에서도 같은 한 잔을 마실 수
            있도록. 작게 나눠 담은 두 가지 형태.
          </p>
          <div className={styles.cards}>
            {BREW_CARDS.map((card) => (
              <article key={card.title} className={styles.card}>
                <div className={styles.cardTitle}>{card.title}</div>
                <div className={styles.cardSub}>{card.sub}</div>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className={styles.cardFoot}>
                  <span className={styles.cardPrice}>{card.price}</span>
                  <EditorialButton href="#" size="sm">
                    담기
                  </EditorialButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
