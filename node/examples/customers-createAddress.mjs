import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL;
if (!baseUrl) throw new Error("Set API_BASE_URL to your sandbox or local mock URL");
const client = new Client({
  baseUrl,
  allowInsecureHttp: ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customers.createAddress(
  "cus_example",
  {
    address: {
      city: "Springfield",
      country: "US",
      line1: "100 Example Street",
      postal_code: "62701",
      state: "IL",
    },
    recipient_name: "Jordan Example",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.customer_address_id);
console.log(result.customer_id);
