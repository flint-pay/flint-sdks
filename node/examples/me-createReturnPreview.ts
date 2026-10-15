import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const customerToken = process.env.CUSTOMER_TOKEN;
if (!customerToken) throw new Error("Set CUSTOMER_TOKEN: this call requires a credential");
const client = new Client({
  baseUrl,
  customerToken,
});
const result = await client.me.createReturnPreview(
  {
    mode: "eligibility",
    eligibility: {
      order_id: "example",
      selection: {
        selection_type: "all_remaining_fulfilled",
      },
    },
  }
);
console.log(result);
