import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.readers.create(
  {
    device_id: "dev_01KEZF7C0096ZG1YZWTWT30ZXN",
    location_id: "loc_01KEZF7C00CMHRRYA3MV996JB2",
    name: "Front counter",
    registration_code: "puppy-hamster-banana",
    type: "smart_reader",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.location_id);
console.log(result.reader_id);
