import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.orders.getCurrentDeliverySelection(
  "ord_01KEZF7C0054GQKJ142A8X367A"
);
console.log(result.delivery_quote_id);
console.log(result.delivery_selection_id);
