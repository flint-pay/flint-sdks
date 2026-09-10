import { Client } from '@flintpay/node';
const client = new Client({ baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid', allowInsecureHttp: process.env.API_ALLOW_INSECURE_HTTP === '1', authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } } });
const result = await client.api.updateInventoryCount({
  "body": {
    "expected_version": "2",
    "observations": [
      {
        "counted_damaged_quantity": "0",
        "counted_on_hand_quantity": "12",
        "counted_quality_control_quantity": "0",
        "counted_quarantined_quantity": "0",
        "inventory_item_id": "invi_01K0P7W6A4N9F3J2T8Q5R1C6XM"
      }
    ],
    "source_system": {
      "type": "manual"
    }
  },
  "Idempotency-Key": "example",
  "inventory_count_id": "example"
}, { maxAttempts: 1 });
console.log(result.meta.requestId);
