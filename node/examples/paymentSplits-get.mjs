import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.paymentSplits.get(
  "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8"
);
console.log(result.collecting_merchant_id);
console.log(result.partner_app_id);
