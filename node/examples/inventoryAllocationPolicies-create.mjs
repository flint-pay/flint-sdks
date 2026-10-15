import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("Set API_KEY: this call requires a credential");
const client = new Client({
  baseUrl,
  apiKey,
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
