import { Client } from '@flintpay/node';
const client = new Client({ baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid', allowInsecureHttp: process.env.API_ALLOW_INSECURE_HTTP === '1', authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } } });
const result = await client.api.createInventoryAllocationPolicy({
  "body": {
    "configuration": {
      "location_groups": [
        {
          "group_priority": 1,
          "location_id": "example"
        }
      ],
      "maximum_locations_per_assignment": 1,
      "splitting_behavior": "single_location"
    },
    "name": "example"
  }
}, { maxAttempts: 1 });
console.log(result.meta.requestId);
