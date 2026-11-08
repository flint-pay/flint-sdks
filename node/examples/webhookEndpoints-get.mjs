import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.webhookEndpoints.get(
  "whep_01KEZF7C006FXYTAJRZCGCBJTN"
);
console.log(result.status);
console.log(result.webhook_endpoint_id);
