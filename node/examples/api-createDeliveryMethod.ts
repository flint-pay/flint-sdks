import { Client } from '@flintpay/node';
const client = new Client({ baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid', allowInsecureHttp: process.env.API_ALLOW_INSECURE_HTTP === '1', authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } } });
const result = await client.api.createDeliveryMethod({
  "body": {
    "configuration": {
      "minimum_option_lifetime_seconds": "120",
      "origin": {
        "location_id": "loc_01K1P6G4M7H2N8Q9R3S5T6V7WX",
        "type": "fixed_location"
      },
      "pricing": {
        "calculated": {},
        "type": "calculated"
      }
    },
    "name": "Standard shipping",
    "type": "shipment"
  }
}, { maxAttempts: 1 });
console.log(result.meta.requestId);
