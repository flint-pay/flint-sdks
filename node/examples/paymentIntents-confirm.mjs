import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.paymentIntents.confirm(
  "pi_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    credential_type: "stripe_confirmation_token",
    save_payment_method: true,
    stripe: {
      confirmation_token: "ctoken_123",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result);
