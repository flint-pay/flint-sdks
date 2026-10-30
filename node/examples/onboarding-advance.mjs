import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.onboarding.advance(
  {
    country: "US",
    profile: {
      support_email: "help@example.com",
      website_url: "https://withflintpay.com",
    },
    requested_capabilities: ["accept_card_payments", "receive_payouts"],
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.merchant_id);
console.log(result.status);
