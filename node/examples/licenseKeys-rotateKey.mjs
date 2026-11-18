import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.licenseKeys.rotateKey(
  "lk_01KEZF7C000QD7VJ83G43V0NSN",
  {
    expected_version: 1,
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result);
