import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.paymentLinks.resolve(
  "pl_01KEZF7C007WDMA5P9BPZ8J2AM",
  {
    custom_field_values: {
      meal_preference: "Vegetarian",
    },
    modifiers: {
      "general-admission": {
        modifiers: [
          {
            modifier_id: "mod_01KEZF7C00HP1041X7TDG6WRV5",
            quantity: 1,
            type: "catalog",
          },
          {
            text: {
              modifier_group_id: "mg_01KEZF7C00VBHD29DTPF4QBB6V",
              value: "Extra hot",
            },
            type: "text",
          },
        ],
      },
    },
    quantity_overrides: {
      "general-admission": 2,
    },
    resolution_context: "plrc_v1.example_signed_resolution_context",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result);
