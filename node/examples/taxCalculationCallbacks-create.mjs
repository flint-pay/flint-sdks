import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.taxCalculationCallbacks.create(
  {
    configuration: {
      url: "https://example.com/tax",
    },
    name: "Merchant tax engine",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.current_tax_calculation_callback_revision_id);
console.log(result.status);
