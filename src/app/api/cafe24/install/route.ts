import { cookies } from "next/headers"
import { NextResponse } from "next/server"

import { buildCafe24AuthorizeUrl } from "@/lib/cafe24/oauth"

const STATE_COOKIE = "cafe24_oauth_state"

export async function GET() {
  try {
    const state = crypto.randomUUID()
    const authorizeUrl = buildCafe24AuthorizeUrl(state)

    const cookieStore = await cookies()
    cookieStore.set(STATE_COOKIE, state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 10,
      path: "/",
    })

    return NextResponse.redirect(authorizeUrl)
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown installation error"

    return NextResponse.json(
      {
        error: "Cafe24 install URL could not be created.",
        detail: message,
        hint: "Check CAFE24_MALL_ID, CAFE24_CLIENT_ID, and CAFE24_REDIRECT_URI.",
      },
      { status: 500 },
    )
  }
}
