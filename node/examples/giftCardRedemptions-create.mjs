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
      amount: "500",
      currency: "USD",
    },
    capture_mode: "automatic",
    external_reference_id: "synthetic-redemption-reference",
    gift_card_id: "gc_01JZXK4G8Q5V3N7M2P9R6T1W0Y",
  },
  { idempotencyKey: idempotencyKey },
);
