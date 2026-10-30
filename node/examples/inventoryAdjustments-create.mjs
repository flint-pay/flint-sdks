import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryAdjustments.create(
  {
    lines: [
      {
        expected_physical_version: 7,
        inventory_item_id: "invi_01K0P7W6A4N9F3J2T8Q5R1C6XM",
        location_id: "loc_01K0P7W6A4N9F3J2T8Q5R1C6XM",
        on_hand_quantity: 40,
      },
    ],
    reason: "counted",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.inventory_adjustment.inventory_adjustment_id);
