import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.returns.getLineItem(
  "ret_01KEZF7C00PG93650ZKVQNGF7X",
  "retli_01KEZF7C00R813VR7ECXS062QG"
);
console.log(result.eligibility.status);
console.log(result.fulfillment_id);
