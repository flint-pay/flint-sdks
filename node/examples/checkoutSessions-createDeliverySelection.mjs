import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.checkoutSessions.createDeliverySelection(
  "cs_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    choices: [
      {
        delivery_choice_group_id: "dcgrp_01K1P6G4M7H2N8Q9R3S5T6V7WX",
        delivery_option_id: "dopt_01K1P6G4M7H2N8Q9R3S5T6V7WX",
      },
    ],
    delivery_quote_id: "dqt_01K1P6G4M7H2N8Q9R3S5T6V7WX",
    expected_delivery_selection_id: null,
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.checkout_session.checkout_session_id);
console.log(result.checkout_session.status);
