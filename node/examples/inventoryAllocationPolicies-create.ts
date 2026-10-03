import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryAllocationPolicies.create(
  {
    configuration: {
      location_groups: [
        {
          group_priority: 1,
          location_id: "example",
        },
      ],
      maximum_locations_per_assignment: 1,
      splitting_behavior: "single_location",
    },
    name: "example",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.inventory_allocation_policy_id);
console.log(result.status);
