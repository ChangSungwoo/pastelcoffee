import Link from "next/link"
import { cn } from "@/lib/utils"

import styles from "./editorial-button.module.css"

type EditorialButtonProps = {
  href: string
  variant?: "outline" | "solid" | "ghost"
  tone?: "ink" | "hero"
  size?: "default" | "lg" | "sm"
  className?: string
  children: React.ReactNode
}

export function EditorialButton({
  href,
  variant = "outline",
  tone = "ink",
  size = "default",
  className,
  children,
}: EditorialButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        styles.btn,
        variant === "solid" && styles.solid,
        variant === "ghost" && styles.ghost,
        tone === "hero" && styles.heroTone,
        size === "lg" && styles.lg,
        size === "sm" && styles.sm,
        className,
      )}
    >
      {children}
    </Link>
  )
}
