import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("Set API_KEY: this call requires a credential");
const client = new Client({
  baseUrl,
  apiKey,
});
const result = await client.subscriptionPreviews.create(
  {
    body: {
      destination: {
        customer_address_id: "caddr_01J00000000000000000000001",
        type: "customer_address",
      },
      mode: "delivery_options",
      subscription_id: "sub_01J00000000000000000000001",
    },
  }
);
console.log(result);
