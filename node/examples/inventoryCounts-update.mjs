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

const result = await client.inventoryCounts.update(
  "example",
  {
    expected_version: "2",
    observations: [
      {
        counted_damaged_quantity: "0",
        counted_on_hand_quantity: "12",
        counted_quality_control_quantity: "0",
        counted_quarantined_quantity: "0",
        inventory_item_id: "invi_01K0P7W6A4N9F3J2T8Q5R1C6XM",
      },
    ],
    source_system: {
      type: "manual",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.inventory_count_id);
console.log(result.location_id);
