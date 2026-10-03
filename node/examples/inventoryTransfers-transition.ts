import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryTransfers.transition(
  {
    inventory_transfer_id: "example",
    body: {
      action: "depart",
      provenance: {},
      lines: [
        {
          inventory_transfer_line_id: "example",
          target_departed_quantity: "0",
        },
      ],
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.inventory_transfer.destination_location_id);
console.log(result.inventory_transfer.inventory_transfer_id);
