import Image from "next/image"

import { FOOTER_COLUMNS } from "@/lib/constants"

import styles from "./footer.module.css"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Image
            src="/assets/logo-symbol-light.svg"
            alt=""
            width={64}
            height={64}
            className={styles.symbol}
          />
          <div className={styles.tagline}>
            매주 정해진 자리에서, 작품처럼.
            <br />
            기억에 남는 한 잔의 커피.
          </div>
        </div>
        <div className={styles.cols}>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className={styles.col}>
              <div className={styles.colTitle}>{col.title}</div>
              {col.items.map((item) => (
                <div key={item} className={styles.colItem}>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© 2026 PASTEL COFFEE WORKS · 주식회사 파스텔커피</span>
        <span>이용약관 · 개인정보처리방침 · 사업자정보</span>
      </div>
    </footer>
  )
}
