import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  customerToken: process.env.CUSTOMER_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.me.changeSubscriptionDelivery(
  "sub_01J00000000000000000000001",
  {
    delivery: {
      delivery_method_id: "dmet_01J00000000000000000000001",
      destination: {
        customer_address_id: "caddr_01J00000000000000000000001",
        type: "customer_address",
      },
      type: "shipment",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.customer_id);
console.log(result.payment_method_id);
