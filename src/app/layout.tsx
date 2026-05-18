import type { Metadata } from "next"
import { Cormorant_Garamond, Nanum_Myeongjo } from "next/font/google"

import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  variable: "--font-nanum-myeongjo",
  weight: ["400", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Pastel Coffee",
  description: "Pastel Coffee — renewal",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      className={`${cormorant.variable} ${nanumMyeongjo.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper font-sans text-ink">
        {children}
      </body>
    </html>
  )
}
