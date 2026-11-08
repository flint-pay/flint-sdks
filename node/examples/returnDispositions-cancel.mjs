import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returnDispositions.cancel(
  "retdsp_01KEZF7C007H87J66PH2EEK1VW",
  {
    expected_version: 1,
    reason: "created_in_error",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.return_disposition_id);
console.log(result.return_id);
