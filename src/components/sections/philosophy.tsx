import sectionStyles from "./section.module.css"
import styles from "./philosophy.module.css"

export function Philosophy() {
  return (
    <section
      className={`${sectionStyles.section} ${styles.philosophy}`}
      aria-labelledby="philosophy-heading"
    >
      <span className={sectionStyles.num}>— 01 / PHILOSOPHY —</span>
      <h2 id="philosophy-heading" className={styles.title}>
        기억과 감각.
      </h2>
      <p className={styles.body}>
        청명한 하늘, 시원한 바람. 여느 때와 다르지 않던 아침에
        커피를 마시며 옛 기억과 감정이 회상되는 경험을 합니다.
        이런 특별한 현상을 <em>‘프루스트 효과’</em>라고 부릅니다.
      </p>
      <p className={`${styles.body} ${styles.bodyMuted}`}>
        파스텔커피웍스의 모든 잔은, 그 한 모금이 누군가의 하루에 다정하게
        남기를 바랍니다.
      </p>
      <div className={styles.rule} role="presentation" />
      <p className={styles.sig}>— Pastel Coffee Works, Seoul</p>
    </section>
  )
}
