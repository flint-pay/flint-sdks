import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
// Reuse this key when retrying the same action.
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
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.inventory_allocation_policy_id);
console.log(result.status);
