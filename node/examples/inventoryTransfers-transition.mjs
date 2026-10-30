import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryTransfers.transition(
  "invtr_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    action: "depart",
    expected_version: 2,
    lines: [
      {
        inventory_transfer_line_id: "invtrln_01K0P7W6A4N9F3J2T8Q5R1C6XM",
        target_departed_quantity: 4,
      },
    ],
    provenance: {
      source_system: {
        type: "manual",
      },
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.inventory_transfer.destination_location_id);
console.log(result.inventory_transfer.inventory_transfer_id);
