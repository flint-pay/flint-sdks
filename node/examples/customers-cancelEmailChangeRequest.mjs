import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customers.cancelEmailChangeRequest(
  "cus_01KEZF7C006X9JK6NZNA2SM9XD",
  "cecr_01KEZF7C00B8VJX4M828K0430H",
  {},
  { idempotencyKey: idempotencyKey },
);
console.log(result.customer_id);
console.log(result.email_change_request_id);
