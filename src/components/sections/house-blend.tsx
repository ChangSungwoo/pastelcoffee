import Image from "next/image"

import { BagPlaceholder } from "@/components/shared/bag-placeholder"
import { HOUSE_BLENDS } from "@/lib/constants"

import sectionStyles from "./section.module.css"
import styles from "./house-blend.module.css"

export function HouseBlend() {
  return (
    <section
      id="coffee"
      className={`${sectionStyles.section} ${sectionStyles.sectionSoft}`}
      aria-labelledby="house-blend-heading"
    >
      <div className={sectionStyles.head}>
        <span className={sectionStyles.num}>— 03 / HOUSE BLEND —</span>
        <h2 id="house-blend-heading" className={sectionStyles.sectionTitle}>
          하우스 블렌드, 네 가지 풍경.
        </h2>
        <p className={sectionStyles.sectionSub}>
          파스텔커피웍스를 대표하는 시그니처 블렌드 라인업.
        </p>
      </div>
      <div className={styles.grid}>
        {HOUSE_BLENDS.map((blend) => (
          <article key={blend.en} className={styles.bean}>
            <div className={styles.beanImage}>
              {"useImage" in blend && blend.useImage ? (
                <Image
                  src="/assets/photo-product-lolly-champions.png"
                  alt={blend.en}
                  width={280}
                  height={336}
                  className={styles.productImage}
                />
              ) : (
                <BagPlaceholder en={blend.en} />
              )}
              {"tag" in blend && blend.tag ? (
                <span className={styles.tag}>{blend.tag}</span>
              ) : null}
            </div>
            <div className={styles.beanBody}>
              <div className={styles.beanEn}>{blend.en}</div>
              <div className={styles.beanKo}>{blend.ko}</div>
              <div className={styles.beanNote}>{blend.note}</div>
              <div className={styles.beanFoot}>
                <span className={styles.beanPrice}>₩ {blend.price}</span>
                <span className={styles.beanCta}>담기 →</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
