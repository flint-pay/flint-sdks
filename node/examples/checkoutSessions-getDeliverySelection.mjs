import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.checkoutSessions.getDeliverySelection(
  "cs_01KEZF7C004JRWFW43H037MQRN",
  "dsel_01KEZF7C00QC35XBXVXQSCEB2D"
);
console.log(result.delivery_quote_id);
console.log(result.delivery_selection_id);
