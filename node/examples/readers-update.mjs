import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.readers.update(
  "rdr_01KEZF7C007JA0G24M7SD6P46C",
  {
    expected_version: 1,
    name: "Back counter",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.location_id);
console.log(result.reader_id);
