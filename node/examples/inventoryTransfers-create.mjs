import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryTransfers.create(
  {
    destination_location_id: "loc_01K1P6G4M7H2N8Q9R3S5T6V7WX",
    lines: [
      {
        inventory_item_id: "invi_01K1P6G4M7H2N8Q9R3S5T6V7WX",
        requested_quantity: 1,
      },
    ],
    origin_location_id: "loc_01K1P6G4M7H2N8Q9R3S5T6V7WX",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.destination_location_id);
console.log(result.inventory_transfer_id);
