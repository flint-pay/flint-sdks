import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptionDeliveryMigrations.create(
  {
    from_delivery_method_id: "dmet_01K1P6G4M7H2N8Q9R3S5T6V7WX",
    subscription_plan_id: "plan_01KEZF7C00S177Q3KK6BKXGXV7",
    to_delivery_method_id: "dmet_01KEZF7C00F34Q6CJF6MF7HWGT",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.from_delivery_method_id);
console.log(result.status);
