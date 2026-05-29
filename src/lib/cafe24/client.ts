// src/lib/cafe24/client.ts

/**
 * CAFE24 Front API REST Client
 * Next.js 서버사이드(Server Component/Route Handler) 전용 모듈입니다.
 */

// CAFE24 Raw 상품 데이터 타입 정의 (우리가 필요한 필드 위주)
export interface Cafe24RawProduct {
  product_no: number;
  product_code: string;
  product_name: string;
  price: number;
  retail_price: number;
  simple_description?: string;
  description?: string;
  detail_image?: string;
  list_image?: string;
  tiny_image?: string;
  small_image?: string;
  has_option: 'T' | 'F';
  additional_image?: Array<{
    image_path: string;
  }>;
  additional_information?: Array<{
    key: string;
    value: string;
  }>;
  options?: Array<{
    option_name: string;
    option_value: Array<{
      value_no: number;
      value_name: string;
      additional_amount?: number;
    }>;
  }>;
}

export interface Cafe24ApiResponse {
  product: Cafe24RawProduct;
}

// 로컬 환경이나 인증 키가 부족할 때 사용할 실제 같은 CAFE24 API 응답 목업 데이터
const CAFE24_MOCK_PRODUCT: Cafe24RawProduct = {
  product_no: 1004,
  product_code: "P00000FM",
  product_name: "Lolly · 롤리 챔피언스커피 원두",
  price: 21000,
  retail_price: 21000,
  simple_description: "스페셜티 커피의 꽃향기와 백도의 단맛이 매력적인 싱글 오리진",
  detail_image: "/assets/photo-product-lolly-champions.png",
  has_option: "T",
  additional_image: [
    { image_path: "/assets/photo-product-lolly-champions.png" },
    { image_path: "/assets/photo-handdrip-brewpack.jpg" },
    { image_path: "/assets/photo-cupping-hands.jpg" },
    { image_path: "/assets/photo-roaster-machine.jpg" }
  ],
  // 스페셜티 고유의 메타데이터를 추가 정보 항목으로 정의
  additional_information: [
    { key: "Origin", value: "Ethiopia Yirgacheffe Gedeo Danche" },
    { key: "Process", value: "Washed" },
    { key: "Roast", value: "Medium Light" },
    { key: "RoastLevel", value: "2" },
    { key: "CupNotes", value: "플로럴, 백도, 귤, 캐러멜" },
    { key: "CupNotesEn", value: "Floral · White Peach · Tangerine · Caramel" },
    { key: "RoasterNote", value: "은은하게 감도는 특유의 꽃향도 좋지만, 잘 익은 백도의 향미와 귤의 산미가 어우러져 표현되는 것이 아주 매력적입니다. 워시드 가공된 예가체프 커피의 클래식한 매력을 상기시켜 주는 귀한 커피입니다." }
  ],
  options: [
    {
      option_name: "용량",
      option_value: [
        { value_no: 1, value_name: "200g", additional_amount: 0 },
        { value_no: 2, value_name: "500g", additional_amount: 24000 }
      ]
    },
    {
      option_name: "분쇄",
      option_value: [
        { value_no: 1, value_name: "안함 (홀빈)" },
        { value_no: 2, value_name: "핸드드립" },
        { value_no: 3, value_name: "콜드브루" },
        { value_no: 4, value_name: "모카포트" },
        { value_no: 5, value_name: "에스프레소" }
      ]
    }
  ]
};

export interface Cafe24ListApiResponse {
  products: Array<{
    product_no: number;
    product_code: string;
  }>;
}

/**
 * CAFE24 Front REST API를 통해 특정 상품 상세 데이터를 가져옵니다.
 * 자격 증명이 누락되어 있거나 호출 오류 발생 시 자동으로 데모용 Mock 데이터를 반환합니다.
 */
export async function getCafe24Product(productCode: string): Promise<Cafe24RawProduct> {
  const mallId = process.env.CAFE24_MALL_ID;
  const clientId = process.env.CAFE24_CLIENT_ID;
  const apiKey = process.env.CAFE24_FRONT_API_KEY;

  const isMockMode = 
    !mallId || 
    !clientId || 
    !apiKey || 
    clientId.includes("your_client_id") || 
    clientId.includes("이곳에_발급받은");

  if (isMockMode) {
    console.log(`[CAFE24 CLIENT] API 키가 미설정되어 데모용 Mock 모드로 동작합니다. (Product: ${productCode})`);
    return { ...CAFE24_MOCK_PRODUCT, product_code: productCode };
  }

  try {
    // Basic Auth 인증 키 생성
    const credentials = Buffer.from(`${clientId}:${apiKey}`).toString("base64");
    const headers = {
      "Authorization": `Basic ${credentials}`,
      "X-Cafe24-Client-Id": clientId,
      "Content-Type": "application/json",
    };

    let productNo = productCode;

    // 만약 productCode가 숫자가 아닌 경우 (예: 'P00000FM')
    // 1단계: 상품 리스트 API에서 product_code로 조회하여 numeric product_no를 획득합니다.
    if (!/^\d+$/.test(productCode)) {
      const listEndpoint = `https://${mallId}.cafe24api.com/api/v2/products?product_code=${productCode}`;
      console.log(`[CAFE24 CLIENT] 1단계 - 상품코드(${productCode})로 numeric product_no 조회 중: ${listEndpoint}`);
      
      const listRes = await fetch(listEndpoint, {
        method: "GET",
        headers,
        next: { revalidate: 60 }
      });

      if (!listRes.ok) {
        const listErrorBody = await listRes.text().catch(() => "")
        throw new Error(
          `CAFE24 상품 리스트 조회 실패! status: ${listRes.status}, body: ${listErrorBody}`,
        )
      }

      const listData = (await listRes.json()) as Cafe24ListApiResponse;
      if (listData && listData.products && listData.products.length > 0) {
        productNo = String(listData.products[0].product_no);
        console.log(`[CAFE24 CLIENT] 1단계 성공 - 매핑된 product_no: ${productNo}`);
      } else {
        throw new Error(`해당 상품코드(${productCode})에 해당하는 상품이 쇼핑몰에 존재하지 않습니다.`);
      }
    }

    // 2단계: 획득한 numeric product_no를 가지고 상세 조회 API를 실행합니다.
    const detailEndpoint = `https://${mallId}.cafe24api.com/api/v2/productsdetail/${productNo}`;
    console.log(`[CAFE24 CLIENT] 2단계 - 실제 상세 데이터 요청 중: ${detailEndpoint}`);

    const res = await fetch(detailEndpoint, {
      method: "GET",
      headers,
      next: { revalidate: 60 } // Next.js ISR 캐시 60초 적용
    });

    if (!res.ok) {
      const errorBody = await res.text().catch(() => "")
      throw new Error(
        `CAFE24 API HTTP error! status: ${res.status}, body: ${errorBody}`,
      )
    }

    const data = (await res.json()) as Cafe24ApiResponse;
    
    if (!data || !data.product) {
      throw new Error("CAFE24 API 응답 규격이 올바르지 않습니다.");
    }

    return data.product;
  } catch (error) {
    console.error(`[CAFE24 CLIENT ERROR] API 호출 중 오류가 발생하여 데모 데이터로 Fallback합니다:`, error);
    // 운영에 영향이 없도록 에러 발생 시에도 데모 데이터 리턴
    return { ...CAFE24_MOCK_PRODUCT, product_code: productCode };
  }
}
