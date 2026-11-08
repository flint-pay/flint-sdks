import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.giftCardLoads.get(
  "gcl_01KEZF7C00YJED2857SE0J6KWC"
);
console.log(result.gift_card_id);
console.log(result.gift_card_load_id);
