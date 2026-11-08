import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.fraudWarnings.get(
  "frw_01KEZF7C00WD6W4TAFS0FH851W"
);
console.log(result.fraud_warning_id);
console.log(result.payment_intent_id);
