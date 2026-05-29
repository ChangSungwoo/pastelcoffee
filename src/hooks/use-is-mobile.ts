"use client"

import { useEffect, useState } from "react"

/** Matches header.module.css @media (max-width: 820px) */
export const MOBILE_MEDIA_QUERY = "(max-width: 820px)"

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MEDIA_QUERY)
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  return isMobile
}
