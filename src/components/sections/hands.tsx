import Image from "next/image"

import sectionStyles from "./section.module.css"
import styles from "./hands.module.css"

const PEOPLE = [
  {
    role: "— HEAD ROASTER —",
    nameKo: "방현영",
    nameEn: "Bang Hyun·young",
    image: "/assets/photo-cupping-hands.jpg",
    imageAlt: "Head Roaster Bang Hyun-young",
    history: [
      { year: "2020", text: "KNBC · Korea National Barista Championship · 우승", bold: true },
      { year: "2021", text: "WBC Milano · 한국 대표 · 세미파이널" },
      { year: "2023", text: "KBA · 올해의 베스트 바리스타" },
      { year: "—", text: "Victoria Arduino · Brand Ambassador" },
    ],
  },
  {
    role: "— FOUNDER · CEO —",
    nameKo: "장현우",
    nameEn: "Jang Hyun·woo",
    image: "/assets/photo-event-cafeshow.jpg",
    imageAlt: "Cafe Show booth",
    history: [
      { year: "—", text: "저서 ‘커피라이프’, ‘라떼아트 커피 디자인북’" },
      { year: "2011", text: "카페아이두 / 빈프로젝트 커피로스터스 창업" },
      { year: "2010", text: "호주 멜버른 Sensory Lab / Degraves Espresso" },
      { year: "—", text: "15년차 · 서울카페쇼 10년 연속 참가" },
    ],
  },
] as const

export function Hands() {
  return (
    <section
      className={sectionStyles.section}
      aria-labelledby="hands-heading"
    >
      <div className={`${sectionStyles.head} ${sectionStyles.headCenter}`}>
        <span className={sectionStyles.num}>— 07 / THE HANDS —</span>
        <h2 id="hands-heading" className={sectionStyles.sectionTitle}>
          우리가 만든 한 잔, 우리가 책임집니다.
        </h2>
        <p className={sectionStyles.sectionSub}>
          파스텔커피웍스는 로스팅·추출·교육의 전문가들이 모여 만든
          브랜드입니다.
        </p>
      </div>
      <div className={styles.grid}>
        {PEOPLE.map((person) => (
          <article key={person.nameKo} className={styles.person}>
            <div className={styles.personImage}>
              <Image
                src={person.image}
                alt={person.imageAlt}
                fill
                sizes="(max-width: 820px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
            <div className={styles.personBody}>
              <div className={styles.personRole}>{person.role}</div>
              <h3 className={styles.personName}>
                {person.nameKo}{" "}
                <span>{person.nameEn}</span>
              </h3>
              <ul className={styles.personHist}>
                {person.history.map((item) => (
                  <li key={`${item.year}-${item.text}`}>
                    <span>{item.year}</span>
                    {"bold" in item && item.bold ? <b>{item.text}</b> : item.text}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
