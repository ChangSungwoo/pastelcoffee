"use client"

import { FormEvent } from "react"

import { cn } from "@/lib/utils"

import btnStyles from "@/components/shared/editorial-button.module.css"
import sectionStyles from "./section.module.css"
import styles from "./newsletter.module.css"

export function Newsletter() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <section
      className={`${sectionStyles.section} ${sectionStyles.sectionSoft} ${styles.newsletter}`}
      aria-labelledby="newsletter-heading"
    >
      <div className={styles.inner}>
        <span className={sectionStyles.num}>— 10 / LETTER —</span>
        <h2 id="newsletter-heading" className={sectionStyles.sectionTitle}>
          계절마다, 짧은 편지 한 통.
        </h2>
        <p className={sectionStyles.sectionSub}>
          새 시즌 원두, 농장 소식, 그리고 매장 이야기를 가끔 보내드립니다.
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            aria-label="email"
            className={styles.input}
          />
          <button
            type="submit"
            className={cn(btnStyles.btn, btnStyles.solid, styles.submit)}
          >
            편지 받기
          </button>
        </form>
        <div className={styles.note}>
          언제든 수신 거부 가능 · 광고 메일은 보내지 않습니다.
        </div>
      </div>
    </section>
  )
}
