import type { Metadata } from "next"

import { ProductDetailView } from "@/components/product-detail/product-detail-view"
import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"
import { getCafe24Product } from "@/lib/cafe24/client"
import { adaptCafe24Product } from "@/lib/cafe24/adapter"

type Params = Promise<{ productCode: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { productCode } = await params
  const raw = await getCafe24Product(productCode)
  const product = adaptCafe24Product(raw)

  return {
    title: `${product.en} · Pastel Coffee`,
    description: `${product.ko} — Pastel Coffee Works`,
  }
}

export default async function ProductDetailPage({ params }: { params: Params }) {
  const { productCode } = await params
  const raw = await getCafe24Product(productCode)
  const product = adaptCafe24Product(raw)

  return (
    <>
      <Header />
      <main>
        <ProductDetailView product={product} />
      </main>
      <Footer />
    </>
  )
}
