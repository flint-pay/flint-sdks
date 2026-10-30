import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.returns.getLineItem(
  "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV"
);
console.log(result.eligibility.status);
console.log(result.fulfillment_id);
