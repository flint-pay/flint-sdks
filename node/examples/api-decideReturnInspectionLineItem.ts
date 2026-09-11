import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.decideReturnInspectionLineItem(
  {
    return_inspection_id: "example",
    return_inspection_line_item_id: "example",
    body: {
      acceptance_decision_reason: "inspection_result",
      acceptance_status: "accepted",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.location_id);
console.log(result.data.data.return_id);
console.log(result.meta.requestId);
