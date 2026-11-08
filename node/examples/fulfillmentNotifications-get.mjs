import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.fulfillmentNotifications.get(
  "fnt_01KEZF7C00QD91RXQH2E7H9K5E"
);
console.log(result.fulfillment_id);
console.log(result.fulfillment_notification_id);
