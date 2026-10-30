import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.taxConnection.connect(
  {
    expected_version: 1793016000,
    seller_attestation: {
      disclosure_version: "2026-11-01.5f3a9c1e",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.status);
