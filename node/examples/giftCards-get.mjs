import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.giftCards.get(
  "gc_01KEZF7C00RT1618WYBM1Y94CG"
);
console.log(result.gift_card_id);
console.log(result.merchant_id);
