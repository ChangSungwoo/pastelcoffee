import Image from "next/image"

import { EditorialButton } from "@/components/shared/editorial-button"

import sectionStyles from "./section.module.css"
import styles from "./champion.module.css"

export function Champion() {
  return (
    <section
      id="issue"
      className={sectionStyles.section}
      aria-labelledby="champion-heading"
    >
      <span className={sectionStyles.num}>— 02 / CHAMPION&apos;S BLEND —</span>
      <div className={styles.grid}>
        <div className={styles.imageWrap}>
          <Image
            src="/assets/photo-product-lolly-champions.png"
            alt="Champion's Blend Lolly"
            fill
            sizes="(max-width: 820px) 100vw, 45vw"
            className={styles.image}
          />
          <div className={styles.badge}>
            2020 KNBC
            <br />
            CHAMPION
          </div>
        </div>
        <div>
          <p className={sectionStyles.eyebrow}>— FROM OUR HEAD ROASTER —</p>
          <h2 id="champion-heading" className={styles.title}>
            <span className={styles.titleEn}>Lolly.</span>
            <span className={styles.titleKo}>롤리 · 챔피언스 블렌드</span>
          </h2>
          <p className={styles.notes}>
            Floral &nbsp;·&nbsp; Apricot &nbsp;·&nbsp; White Peach &nbsp;·&nbsp;
            Grain Syrup
          </p>
          <p className={styles.body}>
            2020 KNBC 챔피언, 헤드 로스터 <b>방현영</b>이 직접 설계한 시그니처
            블렌드. 은은한 꽃향과 살구의 단맛, 그리고 길게 남는 곡물 시럽의
            여운.
            <em> ‘기억에 남는 한 잔’</em>의 출발점입니다.
          </p>
          <p className={styles.roastby}>
            roasted by &nbsp;<b>BANG HYUN·YOUNG</b> &nbsp;·&nbsp; Korea National
            Barista Championship 2020 · 1st
          </p>
          <div className={styles.buy}>
            <div className={styles.price}>
              <span className={styles.priceAmt}>₩ 28,000</span>
              <span className={styles.priceUnit}>/ 200g</span>
            </div>
            <div className={styles.btns}>
              <EditorialButton href="#" variant="solid" size="lg">
                장바구니에 담기
              </EditorialButton>
              <EditorialButton href="/product/P00000FM" variant="ghost" size="lg">
                자세히 보기 →
              </EditorialButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
