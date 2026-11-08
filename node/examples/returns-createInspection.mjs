import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.createInspection(
  "ret_01KEZF7C00PG93650ZKVQNGF7X",
  {
    inspected_at: "2026-09-08T14:15:00Z",
    inspection_location_id: "loc_01K1P6G4M7H2N8Q9R3S5T6V7WX",
    line_items: [
      {
        acceptance_status: "accepted",
        condition: "unopened",
        finding_codes: ["matches_expected_item"],
        quantity: 1,
        return_receipt_line_item_id: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE",
      },
    ],
    return_receipt_id: "retrc_01KEZF7C008V637A0ZWN32RQ7A",
    source_system: {
      source_system_type: "manual",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.inspection_location_id);
console.log(result.return_id);
