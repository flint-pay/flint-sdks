import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryReservations.commit(
  "invr_01KEZF7C0041ENRR0C2NF3AP12",
  {
    expected_version: 3,
    lines: [
      {
        inventory_reservation_line_id: "invrln_01K0P7W6A4N9F3J2T8Q5R1C6XM",
        target_committed_quantity: 2,
      },
    ],
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.inventory_reservation.inventory_reservation_id);
console.log(result.inventory_reservation.status);
