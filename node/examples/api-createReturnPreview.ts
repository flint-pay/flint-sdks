import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.createReturnPreview(
  {
    body: {
      mode: "eligibility",
      eligibility: {
        order_id: "example",
        selection: {
          selection_type: "all_remaining_fulfilled",
        },
      },
    },
  },
  { maxAttempts: 1 },
);
console.log(result.meta.requestId);
