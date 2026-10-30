import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.devices.create(
  {
    hardware_fingerprint: "ios-device-uuid-123",
    location_id: "loc_01KEZF7C00G0VBJJ8VMFCQ5YVG",
    metadata: {
      register: "front_counter",
    },
    name: "Front Counter iPad",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.device_id);
console.log(result.status);
