import Image from "next/image"

import { EditorialButton } from "@/components/shared/editorial-button"

import styles from "./hero.module.css"

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.bg} aria-hidden="true">
        <Image
          src="/assets/photo-hero-handdrip.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.inner}>
        <p className={styles.eyebrow}>— PASTEL COFFEE WORKS · EST. 2011 —</p>
        <h1 className={styles.title}>
          기억에 남는
          <br />
          한 잔의 커피.
        </h1>
        <p className={styles.italic}>Everlasting Memory.</p>
        <p className={styles.lede}>
          서울에서 시작된 스페셜티 커피 로스터리.
          <br />
          매주 정해진 자리에서, 작품처럼 굽습니다.
        </p>
        <div className={styles.cta}>
          <EditorialButton href="#coffee" variant="solid" tone="hero">
            원두 둘러보기 →
          </EditorialButton>
          <EditorialButton href="#roastery" variant="ghost" tone="hero">
            로스터리 이야기
          </EditorialButton>
        </div>
      </div>
      <p className={styles.scrollTag} aria-hidden="true">
        ↓&nbsp;&nbsp;SCROLL
      </p>
    </section>
  )
}
