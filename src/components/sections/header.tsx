"use client"

import Link from "next/link"
import { Fragment, useState } from "react"

import { useIsMobile } from "@/hooks/use-is-mobile"
import { MAIN_NAV } from "@/lib/constants"

import styles from "./header.module.css"

const IconSearch = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
)

const IconStar = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3l2.6 5.6 6 .9-4.4 4.4 1 6.1L12 17l-5.3 3 1-6.1L3.4 9.5l6-.9L12 3z" />
  </svg>
)

const IconBag = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 8h14l-1 12H6L5 8z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
)

const IconMenu = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 7h18M3 12h18M3 17h18" />
  </svg>
)

const IconClose = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

function HeaderDesktop() {
  return (
    <div className={styles.desktop}>
      <div className={styles.top}>
        <div className={styles.eyebrow}>SEOUL · ROASTERY · SINCE 2011</div>

        <Link href="/" className={styles.wordmark} aria-label="Pastel Coffee Works">
          Pastel Coffee Works
        </Link>

        <div className={styles.right}>
          <button type="button" className={styles.search} aria-label="search">
            <IconSearch />
            <span>Search</span>
          </button>
          <button type="button" className={styles.iconBtn} aria-label="wishlist">
            <IconStar />
          </button>
          <button type="button" className={styles.iconBtn} aria-label="cart">
            <IconBag />
            <span className={styles.iconBtnCount}>0</span>
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
  )
}

function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      className={`${styles.mobile} ${menuOpen ? styles.headerMenuOpen : ""}`.trim()}
    >
      <div className={styles.mobileBar}>
        <button
          type="button"
          className={styles.iconBtn}
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
        <Link href="/" className={styles.wordmarkMobile} aria-label="Pastel Coffee Works">
          Pastel Coffee Works
        </Link>
        <button type="button" className={styles.iconBtn} aria-label="cart">
          <IconBag />
        </button>
      </div>
      <nav className={styles.mobnav} aria-label="Main">
        {MAIN_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.mobnavLink}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export function Header() {
  const isMobile = useIsMobile()

  return (
    <header className={styles.header}>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </header>
  )
}
