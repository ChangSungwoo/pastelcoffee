import Image from "next/image"
import Link from "next/link"

import { BagPlaceholder } from "@/components/shared/bag-placeholder"
import { EditorialButton } from "@/components/shared/editorial-button"
import { SINGLE_ORIGIN_LINEUP } from "@/lib/constants"

import sectionStyles from "./section.module.css"
import styles from "./single-origin.module.css"

export function SingleOrigin() {
  return (
    <section
      className={sectionStyles.section}
      aria-labelledby="single-origin-heading"
    >
      <div className={styles.feature}>
        <div className={styles.text}>
          <span className={sectionStyles.num}>
            — 04 / SINGLE ORIGIN IN SEASON —
          </span>
          <h2 id="single-origin-heading" className={styles.title}>
            Finca Gascon
            <br />
            <em>Anaerobic.</em>
          </h2>
          <div className={styles.ko}>싱글 오리진 · 과테말라</div>
          <div className={styles.notes}>
            Prune &nbsp;·&nbsp; Grape &nbsp;·&nbsp; Berries &nbsp;·&nbsp;
            Chocolate
          </div>
          <p className={styles.body}>
            과테말라 우에우에테낭고, Finca Gascon 농장의 무산소 발효 로트.
            검자두의 깊은 단맛과 포도, 베리류의 풍성한 향. 끝에는 다크
            초콜릿이 길게 남습니다. 제철 한 시즌 동안만 만나볼 수 있는 한정
            입고.
          </p>
          <ul className={styles.meta}>
            <li>
              <span>로스팅</span>
              <b>Medium Light</b>
            </li>
            <li>
              <span>가공</span>
              <b>Anaerobic Washed</b>
            </li>
            <li>
              <span>품종</span>
              <b>Specialty Lin.</b>
            </li>
            <li>
              <span>중량</span>
              <b>200g</b>
            </li>
          </ul>
          <div className={styles.buy}>
            <span className={styles.price}>₩ 32,000</span>
            <EditorialButton href="#" variant="solid">
              담기
            </EditorialButton>
          </div>
        </div>
        <div className={styles.imageWrap}>
          <Image
            src="/assets/photo-product-finca-gascon.jpg"
            alt="Finca Gascon Anaerobic"
            fill
            sizes="(max-width: 820px) 100vw, 45vw"
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.lineup}>
        <div className={styles.lineupHead}>
          <span className={sectionStyles.eyebrow}>
            — THIS SEASON&apos;S LINEUP —
          </span>
          <Link href="#" className={sectionStyles.textLink}>
            전체 보기 →
          </Link>
        </div>
        <div className={styles.row}>
          {SINGLE_ORIGIN_LINEUP.map((bean) => (
            <article key={bean.en} className={styles.mini}>
              <div className={styles.miniBag}>
                <BagPlaceholder en={bean.bagLabel} />
              </div>
              <div className={styles.miniEn}>{bean.en}</div>
              <div className={styles.miniKo}>{bean.ko}</div>
              <div className={styles.miniNote}>{bean.note}</div>
              <div className={styles.miniPrice}>₩ {bean.price}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
