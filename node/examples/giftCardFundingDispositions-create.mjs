import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.giftCardFundingDispositions.create(
  {
    disposition: "honor_value",
    dispute_id: "du_01J00000000000000000000001",
    reason_message: "Synthetic SDK example",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.dispute_id);
console.log(result.gift_card_funding_disposition_id);
