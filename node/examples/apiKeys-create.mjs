import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.apiKeys.create(
  {
    access: "restricted",
    expires_at: "2027-03-17T14:30:00Z",
    name: "Sandbox orders integration",
    scopes: [
      "accounts.api_keys.read",
      "commerce.orders.read",
      "commerce.orders.write",
    ],
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result);
