import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.deliveryMethods.get(
  "dmet_01KEZF7C00YSG3X2D1TZJ36TM0"
);
console.log(result.current_delivery_method_revision_id);
console.log(result.delivery_method_id);
