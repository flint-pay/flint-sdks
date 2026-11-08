import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customerDeletionRequests.create(
  {
    customer_id: "cus_01KEZF7C003ACYXT6Q5EQZ78EE",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.customer_deletion_request_id);
console.log(result.customer_id);
