import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.shops.get(
  "shop_01KEZF7C005VQBPV4FZHDZPAHE"
);
console.log(result.merchant_id);
console.log(result.shop_id);
