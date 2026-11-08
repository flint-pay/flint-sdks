import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.giftCardNotifications.get(
  "gcn_01KEZF7C0023FN0HF9GH34RZA1"
);
console.log(result.gift_card_id);
console.log(result.gift_card_notification_id);
