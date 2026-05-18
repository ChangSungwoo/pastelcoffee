import styles from "./bag-placeholder.module.css"

type BagPlaceholderProps = {
  en: string
}

export function BagPlaceholder({ en }: BagPlaceholderProps) {
  return (
    <svg
      className={styles.bag}
      viewBox="0 0 200 240"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <rect x="20" y="20" width="160" height="200" fill="#c9b89b" />
      <rect x="20" y="20" width="160" height="14" fill="#b09c7d" />
      <circle
        cx="100"
        cy="100"
        r="26"
        fill="none"
        stroke="#4D2F19"
        strokeWidth="0.8"
      />
      <text
        x="100"
        y="103"
        fill="#4D2F19"
        fontSize="9"
        textAnchor="middle"
        letterSpacing="3"
        fontFamily="serif"
      >
        PASTEL
      </text>
      <text
        x="100"
        y="116"
        fill="#4D2F19"
        fontSize="6"
        textAnchor="middle"
        letterSpacing="2"
        fontFamily="serif"
      >
        COFFEE
      </text>
      <rect
        x="44"
        y="150"
        width="112"
        height="50"
        fill="#d6c4a7"
        stroke="#4D2F19"
        strokeWidth="0.6"
      />
      <text
        x="100"
        y="170"
        fill="#4D2F19"
        fontSize="11"
        textAnchor="middle"
        letterSpacing="2"
        fontFamily="serif"
      >
        {en.toUpperCase()}
      </text>
      <text
        x="100"
        y="185"
        fill="#6f513a"
        fontSize="6"
        textAnchor="middle"
        letterSpacing="1.5"
        fontFamily="serif"
      >
        200g · single bag
      </text>
    </svg>
  )
}
