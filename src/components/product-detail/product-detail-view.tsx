"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { BagPlaceholder } from "@/components/shared/bag-placeholder"
import { useIsMobile } from "@/hooks/use-is-mobile"
import {
  ACC_TITLES,
  FOOD_INFO,
  formatWon,
  QNA,
  RELATED,
  REV_BARS,
  REVIEWS,
  SAMPLE_PRODUCT,
} from "@/lib/product-detail/sample-data"

import "@/styles/product-detail.css"

const P = SAMPLE_PRODUCT

const IconStar = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3l2.6 5.6 6 .9-4.4 4.4 1 6.1L12 17l-5.3 3 1-6.1L3.4 9.5l6-.9L12 3z" />
  </svg>
)

function RoastGauge() {
  return (
    <div className="pd-gauge">
      <span className="pd-gauge__dots">
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className={`pd-gauge__dot ${n <= P.roastLevel ? "on" : ""}`}
          />
        ))}
      </span>
      <span className="pd-gauge__cap">
        Light&nbsp;·&nbsp;{P.roast}
      </span>
    </div>
  )
}

function CupNotes() {
  return (
    <div className="pd-notes">
      {P.notes.map((n) => (
        <span key={n} className="pd-note-chip">
          {n}
        </span>
      ))}
    </div>
  )
}

function Gallery() {
  const [active, setActive] = useState(0)
  const g = P.gallery[active]

  return (
    <div className="pd-gallery">
      <div className="pd-gallery__main">
        <span className="pd-gallery__badge">2020 KNBC CHAMPION</span>
        <Image
          src={g.src}
          alt={g.alt}
          fill
          sizes="(max-width: 820px) 100vw, 50vw"
          style={{
            objectFit: g.bag ? "contain" : "cover",
            padding: g.bag ? "6%" : 0,
          }}
        />
      </div>
      <div className="pd-gallery__thumbs">
        {P.gallery.map((im, i) => (
          <button
            key={im.src}
            type="button"
            className={`pd-thumb ${im.bag ? "pd-thumb--bag" : ""}`}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            <Image
              src={im.src}
              alt={im.alt}
              fill
              sizes="120px"
              style={{
                objectFit: im.bag ? "contain" : "cover",
                padding: im.bag ? "10%" : 0,
              }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

function BuyPanel({ bigName = false }: { bigName?: boolean }) {
  const [size, setSize] = useState("200g")
  const [grind, setGrind] = useState("whole")
  const [qty, setQty] = useState(1)

  const sizeOpt = P.sizeOpts.find((s) => s.id === size)!
  const total = (P.basePrice + sizeOpt.add) * qty
  const grindLabel = P.grindOpts.find((g) => g.id === grind)!.label

  return (
    <div className={`pd-buy ${bigName ? "pd-buy--big" : ""}`}>
      <div className="pd-buy__origin">{P.origin}</div>
      <h1 className="pd-buy__name">
        <span className="pd-buy__name-en">{P.en}.</span>
        <span className="pd-buy__name-ko">{P.ko}</span>
      </h1>

      <CupNotes />
      <p className="pd-buy__summary">{P.summary}</p>

      <div className="pd-spec">
        <div className="pd-spec__item">
          <span className="pd-spec__k">Origin</span>
          <span className="pd-spec__v">{P.originFull}</span>
        </div>
        <div className="pd-spec__item">
          <span className="pd-spec__k">Process</span>
          <span className="pd-spec__v">
            <em>{P.process}</em>
          </span>
        </div>
        <div className="pd-spec__item">
          <span className="pd-spec__k">Roast</span>
          <span className="pd-spec__v">
            <RoastGauge />
          </span>
        </div>
        <div className="pd-spec__item">
          <span className="pd-spec__k">Cup Note</span>
          <span className="pd-spec__v">{P.notesEn}</span>
        </div>
      </div>

      <div className="pd-price">
        <span className="pd-price__from">FROM</span>
        <span className="pd-price__amt">{formatWon(P.basePrice)}</span>
        <span className="pd-price__unit">/ 200g</span>
      </div>

      <div className="pd-opt">
        <div className="pd-opt__head">
          <span className="pd-opt__label">용량</span>
          <span className="pd-opt__req">● 필수</span>
        </div>
        <div className="pd-chips">
          {P.sizeOpts.map((s) => (
            <button
              key={s.id}
              type="button"
              className="pd-chip"
              aria-pressed={size === s.id}
              onClick={() => setSize(s.id)}
            >
              {s.label}
              {s.add ? (
                <span className="pd-chip__add">
                  +{formatWon(s.add).replace("₩ ", "")}
                </span>
              ) : null}
            </button>
          ))}
        </div>
      </div>
      <div className="pd-opt">
        <div className="pd-opt__head">
          <span className="pd-opt__label">분쇄</span>
          <span className="pd-opt__req">● 필수</span>
        </div>
        <div className="pd-chips">
          {P.grindOpts.map((g) => (
            <button
              key={g.id}
              type="button"
              className="pd-chip"
              aria-pressed={grind === g.id}
              onClick={() => setGrind(g.id)}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      <div className="pd-selected">
        <div className="pd-selected__txt">
          <b>{P.en}</b> · {sizeOpt.label} · {grindLabel}
        </div>
        <div className="pd-qty">
          <button
            type="button"
            onClick={() => setQty(Math.max(1, qty - 1))}
            aria-label="수량 감소"
          >
            −
          </button>
          <input
            type="number"
            value={qty}
            min={1}
            onChange={(e) =>
              setQty(Math.max(1, parseInt(e.target.value, 10) || 1))
            }
            aria-label="수량"
          />
          <button
            type="button"
            onClick={() => setQty(qty + 1)}
            aria-label="수량 증가"
          >
            +
          </button>
        </div>
      </div>

      <div className="pd-total">
        <span className="pd-total__lbl">
          Total
          <small>{qty}개 · 배송비 별도</small>
        </span>
        <span className="pd-total__amt">{formatWon(total)}</span>
      </div>

      <div className="pd-actions">
        <button type="button" className="pd-btn pd-btn--lg">
          장바구니
        </button>
        <button type="button" className="pd-btn pd-btn--solid pd-btn--lg">
          바로 구매
        </button>
      </div>
      <div className="pd-actions__minor">
        <button type="button" className="pd-btn">
          <IconStar /> WISH LIST
        </button>
        <button type="button" className="pd-btn">
          대량구매 문의
        </button>
      </div>
    </div>
  )
}

function Hero({ isMobile }: { isMobile: boolean }) {
  if (isMobile) {
    return (
      <section className="pd-hero pd-hero--a pd-hero--m pd-hero--h-m">
        <Gallery />
        <div className="pd-hero--h-gap" aria-hidden="true" />
        <BuyPanel bigName />
      </section>
    )
  }

  return (
    <section className="pd-hero pd-hero--a">
      <div className="pd-hero--h-grid">
        <Gallery />
        <BuyPanel bigName />
      </div>
    </section>
  )
}

function Breadcrumb() {
  return (
    <div className="pd-crumb">
      <Link href="/">HOME</Link>
      <span className="pd-crumb__sep">/</span>
      <span>COFFEE</span>
      <span className="pd-crumb__sep">/</span>
      <span>HOUSE BLEND</span>
      <span className="pd-crumb__sep">/</span>
      <span className="pd-crumb__here">Lolly</span>
    </div>
  )
}

function DetailSection() {
  return (
    <section className="pd-section">
      <div className="pd-detail__roaster">
        <span className="pd-eyebrow">— FROM THE ROASTER —</span>
        <p className="pd-detail__roaster-q">“{P.roasterNote}”</p>
        <div className="pd-detail__roaster-sig">
          — BANG HYUN·YOUNG, HEAD ROASTER
        </div>
      </div>
      <div className="pd-detail__ph">
        <div className="pd-detail__ph-inner">
          <span className="pd-detail__ph-mono">
            [ 상품 상세 설명 이미지 영역 / product description ]
          </span>
          <h3 className="pd-detail__ph-h">상세 기술서 이미지가 들어갑니다</h3>
          <p className="pd-detail__ph-p">
            원산지 스토리 · 컵노트 다이어그램 · 추출 가이드 등 길이가 긴 비주얼
            콘텐츠는 cafe24 상품 등록 시 등록한 <b>상세설명 이미지</b>가 이
            자리에 그대로 노출됩니다.
          </p>
        </div>
      </div>
    </section>
  )
}

function FoodInfoSection() {
  return (
    <section className="pd-section pd-section--soft">
      <div className="pd-sec-head">
        <div>
          <span className="pd-num">— DESCRIPTION —</span>
          <h2 className="pd-sec-h">식품 정보 고시</h2>
        </div>
      </div>
      <table className="pd-foodinfo">
        <tbody>
          {FOOD_INFO.map(([k, v]) => (
            <tr key={k}>
              <th>{k}</th>
              <td>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

function AccordionBody({ index }: { index: number }) {
  if (index === 0) {
    return (
      <ul>
        <li>
          <b>로스팅 후 D+5 이내 발송</b> — 주문 후 가장 가까운 로스팅일에 맞춰
          신선하게 굽습니다.
        </li>
        <li>택배사 CJ대한통운 · 배송비 3,000원 (5만 원 이상 구매 시 무료)</li>
        <li>로스팅 일정: 매주 월·화·수·목 / 주말·공휴일 발송 휴무</li>
        <li>제주·도서산간 지역은 추가 배송비가 발생할 수 있습니다.</li>
      </ul>
    )
  }
  if (index === 1) {
    return (
      <ul>
        <li>
          커피는 신선식품 특성상 <b>단순 변심에 의한 교환·반품이 제한</b>
          됩니다.
        </li>
        <li>상품 하자·오배송의 경우 수령 후 7일 이내 고객센터로 연락 주세요.</li>
        <li>분쇄(그라인딩) 옵션을 선택해 발송된 상품은 교환·반품이 불가합니다.</li>
        <li>반품 시 상품이 개봉·훼손되지 않은 상태여야 합니다.</li>
      </ul>
    )
  }
  return (
    <ul>
      <li>직사광선을 피해 서늘하고 건조한 곳에 보관하세요.</li>
      <li>
        개봉 후에는 밀폐하여 <b>2주 이내</b> 소비를 권장합니다.
      </li>
      <li>
        홀빈(원두) 상태로 보관 후 추출 직전 분쇄하면 향미가 가장 잘 유지됩니다.
      </li>
    </ul>
  )
}

function AccordionSection() {
  const [open, setOpen] = useState(0)

  return (
    <section className="pd-section">
      <div className="pd-sec-head">
        <div>
          <span className="pd-num">— GUIDE —</span>
          <h2 className="pd-sec-h">배송 · 교환/반품 안내</h2>
        </div>
      </div>
      <div className="pd-acc">
        {ACC_TITLES.map((title, i) => (
          <div
            key={title}
            className={`pd-acc__item ${open === i ? "open" : ""}`}
          >
            <button
              type="button"
              className="pd-acc__btn"
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <span className="pd-acc__btn-t">{title}</span>
              <span className="pd-acc__sign">+</span>
            </button>
            <div className="pd-acc__body">
              <div className="pd-acc__inner">
                <AccordionBody index={i} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ReviewsSection() {
  return (
    <section className="pd-section pd-section--soft">
      <div className="pd-sec-head">
        <div>
          <span className="pd-num">— REVIEW —</span>
          <h2 className="pd-sec-h">구매 후기</h2>
        </div>
        <button type="button" className="pd-btn pd-btn--ghost">
          후기 작성하기
        </button>
      </div>
      <div className="pd-rev__summary">
        <div className="pd-rev__score">
          <div className="pd-rev__score-num">4.9</div>
          <div className="pd-rev__score-stars">★★★★★</div>
          <div className="pd-rev__score-count">128 REVIEWS</div>
        </div>
        <div className="pd-rev__bars">
          {REV_BARS.map(([s, p]) => (
            <div key={s} className="pd-rev__bar-row">
              <span className="pd-rev__bar-lbl">{s} stars</span>
              <span className="pd-rev__bar-track">
                <span
                  className="pd-rev__bar-fill"
                  style={{ width: `${p}%` }}
                />
              </span>
              <span className="pd-rev__bar-pct">{p}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="pd-rev__list">
        {REVIEWS.map((r) => (
          <div key={`${r.name}-${r.date}`} className="pd-rev-item">
            <div className="pd-rev-item__top">
              <span className="pd-rev-item__stars">
                {"★".repeat(r.stars)}
                {"☆".repeat(5 - r.stars)}
              </span>
              <span className="pd-rev-item__meta">
                {r.name} · {r.date}
              </span>
            </div>
            <div className="pd-rev-item__opt">구매 옵션 · {r.opt}</div>
            <p className="pd-rev-item__body">{r.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function QnASection() {
  const [open, setOpen] = useState(-1)

  return (
    <section className="pd-section">
      <div className="pd-sec-head">
        <div>
          <span className="pd-num">— Q&amp;A —</span>
          <h2 className="pd-sec-h">상품 문의</h2>
        </div>
        <button type="button" className="pd-btn pd-btn--ghost">
          문의하기
        </button>
      </div>
      <div className="pd-qna">
        {QNA.map((it, i) => (
          <div
            key={it.q}
            className={`pd-qna__item ${open === i && it.done ? "open" : ""}`}
          >
            <div
              className="pd-qna__q"
              role={it.done ? "button" : undefined}
              tabIndex={it.done ? 0 : undefined}
              onClick={() => it.done && setOpen(open === i ? -1 : i)}
              onKeyDown={(e) => {
                if (it.done && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault()
                  setOpen(open === i ? -1 : i)
                }
              }}
            >
              <span className="pd-qna__mark">Q</span>
              <span className="pd-qna__title">{it.q}</span>
              <span
                className={`pd-qna__status ${it.done ? "pd-qna__status--done" : ""}`}
              >
                {it.done ? "답변완료" : "답변대기"}
              </span>
            </div>
            {it.done ? (
              <div className="pd-qna__a">
                <span className="pd-qna__a-mark">A</span>
                <div className="pd-qna__a-body">{it.a}</div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}

function RelatedSection() {
  return (
    <section className="pd-section pd-section--soft">
      <div className="pd-sec-head">
        <div>
          <span className="pd-num">— YOU MAY ALSO LIKE —</span>
          <h2 className="pd-sec-h">함께 보면 좋은 커피</h2>
        </div>
        <button type="button" className="pd-btn pd-btn--ghost">
          전체 보기 →
        </button>
      </div>
      <div className="pd-related__grid">
        {RELATED.map((r) => (
          <article key={r.en} className="pd-rel pd-rel--static">
            <div className="pd-rel__img">
              <BagPlaceholder en={r.en} />
            </div>
            <div className="pd-rel__en">{r.en}</div>
            <div className="pd-rel__ko">{r.ko}</div>
            <div className="pd-rel__note">{r.note}</div>
            <div className="pd-rel__price">{formatWon(r.price)}</div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function ProductDetailView() {
  const isMobile = useIsMobile()
  const mobileClass = isMobile === true ? "m" : isMobile === false ? "d" : ""

  return (
    <div className={`pd ${mobileClass}`.trim()}>
      <Breadcrumb />
      <Hero isMobile={isMobile === true} />
      <DetailSection />
      <FoodInfoSection />
      <AccordionSection />
      <ReviewsSection />
      <QnASection />
      <RelatedSection />
    </div>
  )
}
