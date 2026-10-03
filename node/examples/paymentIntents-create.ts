import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.paymentIntents.create(
  {
    amount_money: {
      amount: "5000",
      currency: "USD",
    },
    payment_options: ["card"],
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.payment_intent.payment_intent_id);
console.log(result.payment_intent.status);
