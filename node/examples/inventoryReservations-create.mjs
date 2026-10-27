import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL;
if (!baseUrl) throw new Error("Set API_BASE_URL to your sandbox or local mock URL");
const client = new Client({
  baseUrl,
  allowInsecureHttp: ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryReservations.create(
  {
    demands: [],
    inventory_routing_source: {
      type: "fixed_location",
      location_id: "example",
    },
    owner: {
      key: "example",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.inventory_reservation.inventory_reservation_id);
console.log(result.inventory_reservation.status);
