import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
const result = await client.deliveryPreviews.create(
  {
    currency: "USD",
    delivery_method_ids: [],
    line_items: [
      {
        variant_id: "example",
      },
    ],
  },
  { maxAttempts: 1 },
);
