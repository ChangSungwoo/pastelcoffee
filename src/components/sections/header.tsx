import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react"

import { MAIN_NAV } from "@/lib/constants"

import styles from "./header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.desktop}>
        <div className={styles.top}>
          <div className={styles.eyebrow}>SEOUL · ROASTERY · SINCE 2011</div>
          <Link href="/" className={styles.logo}>
            <Image
              src="/assets/logo-wordmark-dark.svg"
              alt="Pastel Coffee Works"
              width={200}
              height={28}
              priority
            />
          </Link>
          <div className={styles.right}>
            <button type="button" className={styles.search}>
              ⌕ &nbsp;Search
            </button>
            <button type="button" className={styles.iconBtn} aria-label="wishlist">
              ♡
            </button>
            <button type="button" className={styles.iconBtn} aria-label="cart">
              ⛁ 0
            </button>
          </div>
        </div>
        <nav className={styles.nav} aria-label="Main">
          {MAIN_NAV.map((item, index) => (
            <Fragment key={item.href}>
              {index > 0 && (
                <span className={styles.navSep} aria-hidden="true">
                  ·
                </span>
              )}
              <Link href={item.href}>{item.label}</Link>
            </Fragment>
          ))}
        </nav>
      </div>

      <div className={styles.mobile}>
        <button type="button" className={styles.iconBtn} aria-label="menu">
          ≡
        </button>
        <Link href="/" className={styles.logo}>
          <Image
            src="/assets/logo-wordmark-dark.svg"
            alt="Pastel Coffee Works"
            width={140}
            height={16}
            className={styles.logoMobile}
            priority
          />
        </Link>
        <button type="button" className={styles.iconBtn} aria-label="cart">
          ⛁
        </button>
      </div>
    </header>
  )
}
