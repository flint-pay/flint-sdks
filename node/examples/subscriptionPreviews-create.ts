import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
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
