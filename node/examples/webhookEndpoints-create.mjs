import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.webhookEndpoints.create(
  {
    description: "Primary production endpoint",
    enabled_events: ["order.paid", "payment_intent.succeeded"],
    event_sources: ["merchant"],
    status: "active",
    url: "https://example.com/webhooks/flint",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result);
