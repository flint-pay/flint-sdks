import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const onboardingToken = process.env.ONBOARDING_TOKEN;
if (!onboardingToken) throw new Error("Set ONBOARDING_TOKEN: this call requires a credential");
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
  onboardingToken,
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.onboarding.createAPIKey(
  {
    name: "First backend integration",
    scopes: [
      "commerce.orders.read",
      "commerce.orders.write",
      "customers.read",
      "customers.write",
    ],
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result);
