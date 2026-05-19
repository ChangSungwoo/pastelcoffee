import Image from "next/image"

import { VISIT_PLACES } from "@/lib/constants"

import sectionStyles from "./section.module.css"
import styles from "./visit.module.css"

export function Visit() {
  return (
    <section
      id="visit"
      className={`${sectionStyles.section} ${sectionStyles.sectionSoft}`}
      aria-labelledby="visit-heading"
    >
      <div className={sectionStyles.head}>
        <span className={sectionStyles.num}>— 08 / VISIT —</span>
        <h2 id="visit-heading" className={sectionStyles.sectionTitle}>
          가까이서 한 잔. <em>Four Places.</em>
        </h2>
        <p className={sectionStyles.sectionSub}>
          파스텔커피웍스는 서울 두 곳의 매장, 파주 로스터리, 그리고 본사로
          구성되어 있습니다.
        </p>
      </div>
      <div className={styles.grid}>
        {VISIT_PLACES.map((place) => (
          <article
            key={place.role}
            className={`${styles.place} ${"feature" in place && place.feature ? styles.placeFeature : ""}`}
          >
            <div className={styles.placeImage}>
              {place.image ? (
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  sizes="(max-width: 820px) 100vw, 33vw"
                  className={styles.image}
                />
              ) : (
                <div className={styles.noImage} aria-hidden="true">
                  no photo
                </div>
              )}
            </div>
            <div className={styles.placeBody}>
              <div className={styles.placeRole}>{place.role}</div>
              <div className={styles.placeName}>{place.name}</div>
              <div className={styles.placeAddr}>{place.addr}</div>
              <ul>
                {place.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
