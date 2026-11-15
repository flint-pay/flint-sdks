import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.platformFeePayouts.get(
  "pfpo_01KEZF7C00H58B147FK286D4A4"
);
console.log(result.partner_app_id);
console.log(result.platform_fee_payout_id);
