import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customers.deleteAddress(
  "cus_01KEZF7C006X9JK6NZNA2SM9XD",
  "caddr_01KEZF7C00K2Q127FBJAXWB0FP",
  {},
  { idempotencyKey: idempotencyKey },
);
console.log(result.customer_address_id);
console.log(result.customer_id);
