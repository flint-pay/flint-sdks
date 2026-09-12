import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
const result = await client.returnPreviews.create(
  {
    mode: "eligibility",
    eligibility: {
      order_id: "example",
      selection: {
        selection_type: "all_remaining_fulfilled",
      },
    },
  },
  { maxAttempts: 1 },
);
