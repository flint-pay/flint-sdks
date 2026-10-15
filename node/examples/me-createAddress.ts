import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const customerToken = process.env.CUSTOMER_TOKEN;
if (!customerToken) throw new Error("Set CUSTOMER_TOKEN: this call requires a credential");
const client = new Client({
  baseUrl,
  customerToken,
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.createAddress(
  {
    address: {
      city: "example",
      country: "US",
      line1: "example",
      postal_code: "example",
      state: "example",
    },
    recipient_name: "example",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.customer_address_id);
console.log(result.customer_id);
