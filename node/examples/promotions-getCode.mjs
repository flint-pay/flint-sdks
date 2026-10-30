import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.promotions.getCode(
  "promo_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  "pcode_01ARZ3NDEKTSV4RRFFQ69G5FAV"
);
console.log(result.promotion_code_id);
console.log(result.promotion_id);
