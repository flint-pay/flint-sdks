import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryReceipts.create(
  {
    external_actor_id: "receiver_204",
    lines: [
      {
        disposition: "sellable",
        inventory_item_id: "invi_01K0P7W6A4N9F3J2T8Q5R1C6XM",
        inventory_reservation_id: "invr_01K0P7W6A4N9F3J2T8Q5R1C6XM",
        inventory_reservation_line_id: "invrln_01K0P7W6A4N9F3J2T8Q5R1C6XM",
        quantity: 1,
        receiving_location_id: "loc_01K0P7W6A4N9F3J2T8Q5R1C6XM",
      },
    ],
    occurred_at: "2026-07-21T14:18:00Z",
    source_system: {
      external_source_id: "east-coast-wms",
      type: "wms",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.inventory_receipt.inventory_receipt_id);
