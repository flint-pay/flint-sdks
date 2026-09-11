import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.createPayout(
  {
    body: {
      amount_money: {
        amount: "0",
        currency: "USD",
      },
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.merchant_id);
console.log(result.data.data.payout_id);
console.log(result.meta.requestId);
