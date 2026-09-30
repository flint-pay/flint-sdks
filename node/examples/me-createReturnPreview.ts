import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  customerToken: process.env.CUSTOMER_TOKEN ?? '',
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
