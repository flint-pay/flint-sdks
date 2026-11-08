import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.sandboxes.reset(
  "test_01KEZF7C00JC77HTMTB2XHNPE0",
  {},
  { idempotencyKey: idempotencyKey },
);
console.log(result.sandbox_id);
console.log(result.status);
