import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.inventoryAllocationPolicies.create(
  {
    configuration: {
      location_groups: [
        {
          group_priority: 1,
          location_id: "loc_01K0P7W6A4N9F3J2T8Q5R1C6XM",
        },
      ],
      maximum_locations_per_assignment: 3,
      splitting_behavior: "split_when_required",
      within_group_order: "location_id_ascending",
    },
    name: "US retail routing",
    status: "active",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.current_inventory_allocation_policy_revision_id);
console.log(result.inventory_allocation_policy_id);
