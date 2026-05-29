const DEFAULT_SCOPE = "mall.read_product,mall.write_product"

export type Cafe24TokenResponse = {
  access_token: string
  expires_at: string
  refresh_token: string
  refresh_token_expires_at: string
  client_id: string
  mall_id: string
  user_id: string
  scopes: string[]
  issued_at: string
  shop_no: string
  token_type: string
}

function requireEnv(name: string): string {
  const value = process.env[name]?.trim()
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`)
  }
  return value
}

export function getCafe24RedirectUri(): string {
  const configured = process.env.CAFE24_REDIRECT_URI?.trim()
  if (configured) return configured

  const vercelUrl = process.env.VERCEL_URL?.trim()
  if (vercelUrl) {
    return `https://${vercelUrl}/api/cafe24/callback`
  }

  return "http://localhost:3000/api/cafe24/callback"
}

export function getCafe24OAuthScope(): string {
  return process.env.CAFE24_OAUTH_SCOPE?.trim() || DEFAULT_SCOPE
}

export function buildCafe24AuthorizeUrl(state: string): string {
  const mallId = requireEnv("CAFE24_MALL_ID")
  const clientId = requireEnv("CAFE24_CLIENT_ID")
  const redirectUri = getCafe24RedirectUri()
  const scope = getCafe24OAuthScope()

  const url = new URL(`https://${mallId}.cafe24api.com/api/v2/oauth/authorize`)
  url.searchParams.set("response_type", "code")
  url.searchParams.set("client_id", clientId)
  url.searchParams.set("redirect_uri", redirectUri)
  url.searchParams.set("scope", scope)
  url.searchParams.set("state", state)

  return url.toString()
}

export async function exchangeCafe24AuthorizationCode(
  code: string,
): Promise<Cafe24TokenResponse> {
  const mallId = requireEnv("CAFE24_MALL_ID")
  const clientId = requireEnv("CAFE24_CLIENT_ID")
  const clientSecret = requireEnv("CAFE24_CLIENT_SECRET")
  const redirectUri = getCafe24RedirectUri()

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64",
  )

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: redirectUri,
  })

  const res = await fetch(
    `https://${mallId}.cafe24api.com/api/v2/oauth/token`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
      cache: "no-store",
    },
  )

  const payload = await res.json().catch(() => null)

  if (!res.ok) {
    const message =
      payload &&
      typeof payload === "object" &&
      "error" in payload &&
      payload.error &&
      typeof payload.error === "object" &&
      "message" in payload.error
        ? String(payload.error.message)
        : JSON.stringify(payload)

    throw new Error(`CAFE24 token exchange failed (${res.status}): ${message}`)
  }

  return payload as Cafe24TokenResponse
}
