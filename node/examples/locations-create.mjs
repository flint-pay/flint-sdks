import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.locations.create(
  {
    address: {
      city: "Springfield",
      country: "US",
      line1: "100 Example Street",
      postal_code: "62701",
      state: "IL",
    },
    name: "Main Street",
    timezone: "America/Chicago",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.location_id);
console.log(result.status);
