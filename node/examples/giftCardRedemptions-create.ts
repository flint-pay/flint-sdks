import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.giftCardRedemptions.create(
  {
    amount_money: {
      amount: "100",
      currency: "USD",
    },
    capture_mode: "automatic",
    external_reference_id: "sdk-example",
    gift_card_id: "gc_01J00000000000000000000001",
  },
  { idempotencyKey: idempotencyKey },
);
