import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("Set API_KEY: this call requires a credential");
const client = new Client({
  baseUrl,
  apiKey,
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.giftCardFundingDispositions.create(
  {
    disposition: "honor_value",
    dispute_id: "du_01JZXK4G8Q5V3N7M2P9R6T1W0Y",
    reason_message: "Honored after the dispute review.",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.dispute_id);
console.log(result.gift_card_funding_disposition_id);
