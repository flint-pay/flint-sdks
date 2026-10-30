import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryReservations.create(
  {
    demands: [
      {
        inventory_item_id: "invi_01K0P7W6A4N9F3J2T8Q5R1C6XM",
        quantity: 2,
      },
    ],
    inventory_routing_source: {
      inventory_allocation_policy_id: "invp_01K0P7W6A4N9F3J2T8Q5R1C6XM",
      type: "policy",
    },
    owner: {
      key: "cart_1842",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.inventory_reservation.inventory_reservation_id);
console.log(result.inventory_reservation.status);
