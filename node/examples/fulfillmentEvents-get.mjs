import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.fulfillmentEvents.get(
  "fev_01KEZF7C002XK9D7X3239ERT51"
);
console.log(result.fulfillment_event_id);
console.log(result.fulfillment_id);
