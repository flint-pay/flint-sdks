import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.webhookEndpoints.signDelivery(
  "whep_01KEZF7C006FXYTAJRZCGCBJTN",
  {
    webhook_event_id: "whev_01KEZF7C00BW7XQJ98PQ8EHA81",
  }
);
console.log(result.webhook_endpoint_id);
console.log(result.webhook_event_id);
