import Image from "next/image"

import { JOURNAL_POSTS } from "@/lib/constants"

import sectionStyles from "./section.module.css"
import styles from "./journal.module.css"

export function Journal() {
  return (
    <section
      id="journal"
      className={sectionStyles.section}
      aria-labelledby="journal-heading"
    >
      <div className={sectionStyles.head}>
        <span className={sectionStyles.num}>— 09 / JOURNAL —</span>
        <h2 id="journal-heading" className={sectionStyles.sectionTitle}>
          읽고 마시는 커피.
        </h2>
        <p className={sectionStyles.sectionSub}>
          홈카페와 산지, 그리고 사람에 관한 글들.
        </p>
      </div>
      <div className={styles.grid}>
        {JOURNAL_POSTS.map((post) => (
          <article key={post.title} className={styles.post}>
            <div className={styles.postImage}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 820px) 100vw, 33vw"
                className={styles.image}
              />
            </div>
            <div className={styles.postTag}>{post.tag}</div>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <div className={styles.postSub}>{post.sub}</div>
            <div className={styles.postCta}>READ →</div>
          </article>
        ))}
      </div>
    </section>
  )
}
