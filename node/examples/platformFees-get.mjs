import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.platformFees.get(
  "pfee_01KEZF7C00JHAZN19B3MMW0R3A"
);
console.log(result.merchant_id);
console.log(result.partner_app_id);
