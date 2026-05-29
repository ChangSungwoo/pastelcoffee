import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

import { exchangeCafe24AuthorizationCode } from "@/lib/cafe24/oauth"

const STATE_COOKIE = "cafe24_oauth_state"

function renderHtml(title: string, body: string, status = 200) {
  const html = `<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <style>
      body {
        margin: 0;
        font-family: Georgia, "Times New Roman", serif;
        background: #faf6ee;
        color: #4d2f19;
      }
      main {
        max-width: 640px;
        margin: 72px auto;
        padding: 0 24px;
      }
      h1 {
        font-size: 32px;
        font-weight: 500;
        margin: 0 0 16px;
      }
      p, li {
        font-size: 16px;
        line-height: 1.8;
        color: #6f513a;
      }
      ul {
        padding-left: 20px;
      }
      code {
        background: #f3ecdf;
        padding: 2px 6px;
      }
      .box {
        margin-top: 24px;
        padding: 18px 20px;
        border: 1px solid rgba(77, 47, 25, 0.14);
        background: #f3ecdf;
      }
    </style>
  </head>
  <body>
    <main>${body}</main>
  </body>
</html>`

  return new NextResponse(html, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  })
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const error = searchParams.get("error")
  const errorDescription = searchParams.get("error_description")
  const code = searchParams.get("code")
  const state = searchParams.get("state")

  if (error) {
    return renderHtml(
      "Cafe24 연동 실패",
      `<h1>Cafe24 연동이 거절되었습니다</h1>
       <p>${errorDescription || error}</p>
       <p><a href="/api/cafe24/install">다시 설치 시도</a></p>`,
      400,
    )
  }

  if (!code) {
    return renderHtml(
      "Cafe24 연동 오류",
      `<h1>인증 코드가 없습니다</h1>
       <p>카페24에서 돌려준 <code>code</code> 값이 없습니다.</p>`,
      400,
    )
  }

  const cookieStore = await cookies()
  const expectedState = cookieStore.get(STATE_COOKIE)?.value
  cookieStore.delete(STATE_COOKIE)

  if (!expectedState || expectedState !== state) {
    return renderHtml(
      "Cafe24 연동 오류",
      `<h1>state 검증에 실패했습니다</h1>
       <p>보안 검증용 state 값이 일치하지 않습니다. <a href="/api/cafe24/install">처음부터 다시 설치</a>해 주세요.</p>`,
      400,
    )
  }

  try {
    const token = await exchangeCafe24AuthorizationCode(code)

    console.log("[CAFE24 OAUTH] Token issued:", {
      mall_id: token.mall_id,
      shop_no: token.shop_no,
      scopes: token.scopes,
      expires_at: token.expires_at,
      refresh_token_expires_at: token.refresh_token_expires_at,
      access_token: token.access_token,
      refresh_token: token.refresh_token,
    })

    return renderHtml(
      "Cafe24 연동 완료",
      `<h1>쇼핑몰 앱 연동이 완료되었습니다</h1>
       <div class="box">
         <p><strong>Mall ID:</strong> ${token.mall_id}</p>
         <p><strong>Shop No:</strong> ${token.shop_no}</p>
         <p><strong>Scopes:</strong> ${token.scopes.join(", ")}</p>
         <p><strong>Access Token Expires:</strong> ${token.expires_at}</p>
       </div>
       <p>이제 쇼핑몰 관리자의 <strong>앱 &gt; 마이 앱 &gt; 사용중</strong>에서 앱이 보이는지 확인해 주세요.</p>
       <ul>
         <li>상품 상세 테스트: <a href="/product/P00000FM">/product/P00000FM</a></li>
         <li>다시 설치: <a href="/api/cafe24/install">/api/cafe24/install</a></li>
       </ul>
       <p>Access Token / Refresh Token은 서버 로그에만 남깁니다. Admin API가 필요해지면 별도 저장소 설계가 필요합니다.</p>`,
    )
  } catch (exchangeError) {
    const message =
      exchangeError instanceof Error
        ? exchangeError.message
        : "Unknown token exchange error"

    return renderHtml(
      "Cafe24 토큰 발급 실패",
      `<h1>인증 코드 교환에 실패했습니다</h1>
       <p>${message}</p>
       <ul>
         <li>개발자센터 Redirect URI와 <code>CAFE24_REDIRECT_URI</code>가 정확히 같은지 확인</li>
         <li><code>CAFE24_CLIENT_SECRET</code>이 Client Secret Key인지 확인 (Front API Key와 다름)</li>
         <li><a href="/api/cafe24/install">다시 설치 시도</a></li>
       </ul>`,
      500,
    )
  }
}
