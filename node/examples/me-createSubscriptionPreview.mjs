import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const customerToken = process.env.CUSTOMER_TOKEN;
if (!customerToken) throw new Error("Set CUSTOMER_TOKEN: this call requires a credential");
const client = new Client({
  baseUrl,
  customerToken,
});
const result = await client.me.createSubscriptionPreview(
  {
    destination: {
      customer_address_id: "caddr_01J00000000000000000000001",
      type: "customer_address",
    },
    mode: "delivery_options",
    subscription_id: "sub_01J00000000000000000000001",
  }
);
console.log(result);
