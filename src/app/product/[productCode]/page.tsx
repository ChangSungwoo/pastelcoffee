import type { Metadata } from "next"

import { ProductDetailView } from "@/components/product-detail/product-detail-view"
import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"

export const metadata: Metadata = {
  title: "Lolly · Pastel Coffee",
  description: "롤리 챔피온스커피 원두 — Pastel Coffee Works",
}

export default function ProductDetailPage() {
  return (
    <>
      <Header />
      <main>
        <ProductDetailView />
      </main>
      <Footer />
    </>
  )
}
