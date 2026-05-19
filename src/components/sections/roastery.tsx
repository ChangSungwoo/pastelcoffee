import Image from "next/image"

import sectionStyles from "./section.module.css"
import styles from "./roastery.module.css"

const STATS = [
  { big: "60", label: "kg\n로스팅 설비" },
  {
    big: (
      <>
        주<em>4</em>
      </>
    ),
    label: "월·화·수·목\n로스팅",
  },
  {
    big: (
      <>
        <em>D+</em>5
      </>
    ),
    label: "이내\n발송 보장",
  },
  { big: "2011", label: "since\n15년차" },
] as const

export function Roastery() {
  return (
    <section
      id="roastery"
      className={`${sectionStyles.section} ${sectionStyles.sectionDark}`}
      aria-labelledby="roastery-heading"
    >
      <div className={styles.grid}>
        <div className={styles.imageWrap}>
          <Image
            src="/assets/photo-roaster-machine.jpg"
            alt="60kg roaster machine"
            fill
            sizes="(max-width: 820px) 100vw, 50vw"
            className={styles.image}
          />
        </div>
        <div>
          <span
            className={`${sectionStyles.num} ${sectionStyles.numLight}`}
          >
            — 06 / THE ROASTERY —
          </span>
          <h2 id="roastery-heading" className={styles.title}>
            매주 월·화·수·목,
            <br />
            <em>작품처럼 정성껏 굽습니다.</em>
          </h2>
          <p className={styles.body}>
            경기도 파주의 파스텔커피웍스 로스터리. 항온·항습 시스템을 갖춘
            보관 환경, 60kg 로스팅 설비를 통해 그날의 컨디션에 맞춘 일관된
            굽기를 진행합니다. 우리는 화려한 맛이 아닌{" "}
            <em>자연 그대로의 향미</em>를 추구합니다.
          </p>
          <div className={styles.stats}>
            {STATS.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <div className={styles.statBig}>{stat.big}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
