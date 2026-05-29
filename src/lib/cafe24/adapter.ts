// src/lib/cafe24/adapter.ts

import { Cafe24RawProduct } from "./client";
import { GalleryImage, SizeOption, GrindOption } from "@/lib/product-detail/sample-data";

// 우리 프론트엔드 UI가 요구하는 정규화된 스페셜티 상품 타입 정의
export interface CoffeeProduct {
  en: string;
  ko: string;
  origin: string;
  originFull: string;
  process: string;
  roast: string;
  roastLevel: number;
  notes: string[];
  notesEn: string;
  basePrice: number;
  summary: string;
  roasterNote: string;
  gallery: GalleryImage[];
  sizeOpts: SizeOption[];
  grindOpts: GrindOption[];
  rawProductCode: string;
  rawProductNo: number;
}

/**
 * CAFE24에서 온 로우(Raw) 쇼핑몰 데이터를 파스텔커피의 아름다운 '스페셜티 커피' UI 데이터 구조로 정규화합니다.
 */
export function adaptCafe24Product(raw: Cafe24RawProduct): CoffeeProduct {
  // 1. 상품명 파싱 (예: "Lolly · 롤리 챔피언스커피 원두" -> en: "Lolly", ko: "롤리 챔피언스커피 원두")
  let en = "Coffee";
  let ko = raw.product_name;

  if (raw.eng_product_name) {
    en = raw.eng_product_name.split(" ")[0] ?? raw.eng_product_name;
  }

  if (raw.product_name.includes("·")) {
    const parts = raw.product_name.split("·");
    if (!raw.eng_product_name) en = parts[0].trim();
    ko = parts[1].trim();
  } else if (raw.product_name.includes("-")) {
    const parts = raw.product_name.split("-");
    if (!raw.eng_product_name) en = parts[0].trim();
    ko = parts[1].trim();
  }

  // 2. 추가 정보 항목 (additional_information) 추출
  const addInfoMap = new Map<string, string>();
  if (raw.additional_information) {
    raw.additional_information.forEach((item) => {
      addInfoMap.set(item.key.toLowerCase().trim(), item.value);
    });
  }

  // 스페셜티 세부 데이터 매핑 및 기본값(Fallback) 지정
  const originFull = addInfoMap.get("origin") || addInfoMap.get("원산지") || "Ethiopia Yirgacheffe Gedeo Danche";
  
  // 국문 원산지 간략 텍스트 추출 (예: "Ethiopia Yirgacheffe Gedeo Danche" -> "Ethiopia · Yirgacheffe")
  let origin = "Specialty Coffee";
  if (originFull) {
    const words = originFull.split(" ");
    if (words.length >= 2) {
      origin = `${words[0]} · ${words[1]}`;
    } else {
      origin = words[0];
    }
  }

  const process = addInfoMap.get("process") || addInfoMap.get("가공방식") || "Washed";
  const roast = addInfoMap.get("roast") || addInfoMap.get("로스팅강도") || "Medium Light";
  const roastLevel = parseInt(addInfoMap.get("roastlevel") || addInfoMap.get("로스팅레벨") || "2", 10) || 2;
  
  const notesRaw = addInfoMap.get("cupnotes") || addInfoMap.get("컵노트") || "플로럴, 백도, 귤, 캐러멜";
  const notes = notesRaw.split(",").map((n) => n.trim());
  const notesEn = addInfoMap.get("cupnotesen") || addInfoMap.get("영문컵노트") || "Floral · White Peach · Tangerine · Caramel";
  
  const roasterNote = addInfoMap.get("roasternote") || addInfoMap.get("로스터노트") || 
    "신선한 스페셜티 커피의 다채로운 과일 향미가 가득 담겨 매력적입니다. 파스텔커피웍스의 진심을 담은 원두입니다.";

  // 3. 갤러리 이미지 매핑
  let gallery: GalleryImage[] = [];

  if (raw.additional_image && raw.additional_image.length > 0) {
    gallery = raw.additional_image.map((img, index) => ({
      src: img.image_path,
      bag: index === 0, // 첫 번째 이미지는 상품 백(Bag) 이미지로 가정
      alt: `${raw.product_name} 이미지 ${index + 1}`
    }));
  } else if (raw.detail_image) {
    gallery = [{ src: raw.detail_image, bag: true, alt: raw.product_name }];
  } else {
    // 대체 이미지 제공
    gallery = [
      { src: "/assets/photo-product-lolly-champions.png", bag: true, alt: raw.product_name }
    ];
  }

  // 4. 옵션 정규화 (용량 & 분쇄)
  let sizeOpts: SizeOption[] = [
    { id: "200g", label: "200g", add: 0 } // 기본 옵션
  ];
  let grindOpts: GrindOption[] = [
    { id: "whole", label: "안함 (홀빈)" } // 기본 옵션
  ];

  if (raw.options && raw.options.length > 0) {
    // 용량(Size) 옵션 찾기
    const sizeOptRaw = raw.options.find(
      (opt) => opt.option_name.includes("용량") || opt.option_name.toLowerCase().includes("size")
    );
    if (sizeOptRaw) {
      sizeOpts = sizeOptRaw.option_value.map((v) => ({
        id: v.value_name, // e.g., "200g"
        label: v.value_name,
        add: v.additional_amount || 0
      }));
    }

    // 분쇄(Grind) 옵션 찾기
    const grindOptRaw = raw.options.find(
      (opt) => opt.option_name.includes("분쇄") || opt.option_name.toLowerCase().includes("grind")
    );
    if (grindOptRaw) {
      grindOpts = grindOptRaw.option_value.map((v) => {
        // 기존 UI의 id인 'whole', 'drip', 'cold' 등과 매칭하기 위한 매핑 사전
        let mappedId = v.value_name.toLowerCase();
        if (v.value_name.includes("안함") || v.value_name.includes("홀빈")) mappedId = "whole";
        else if (v.value_name.includes("드립") || v.value_name.includes("필터")) mappedId = "drip";
        else if (v.value_name.includes("콜드") || v.value_name.includes("더치")) mappedId = "cold";
        else if (v.value_name.includes("모카")) mappedId = "mocha";
        else if (v.value_name.includes("에스프레소") || v.value_name.includes("머신")) mappedId = "esp";

        return {
          id: mappedId,
          label: v.value_name
        };
      });
    }
  }

  return {
    en,
    ko,
    origin,
    originFull,
    process,
    roast,
    roastLevel,
    notes,
    notesEn,
    basePrice: raw.price,
    summary: raw.simple_description || "파스텔커피웍스의 정성이 깃든 시그니처 블렌드 원두입니다.",
    roasterNote,
    gallery,
    sizeOpts,
    grindOpts,
    rawProductCode: raw.product_code,
    rawProductNo: raw.product_no
  };
}
