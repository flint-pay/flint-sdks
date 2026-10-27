[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAllocationPolicyConfiguration



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_groups` | Required | Array of [InventoryAllocationPolicyLocation](../models/InventoryAllocationPolicyLocation.md#inventoryallocationpolicylocation) | Locations ranked into priority groups. Routing prefers the lowest group priority, then the lowest location ID. minItems: `1`. maxItems: `25`. |
| `maximum_locations_per_assignment` | Required | integer | Upper bound on how many Locations one assignment may use. Defaults to 1 for single_location and 10 for split_when_required. single_location requires 1 when sent. Format: `int32`. minimum: `1`. maximum: `10`. |
| `splitting_behavior` | Required | string | single_location fails rather than splitting demand across Locations; split_when_required allows a split when no single Location can serve the whole request. Values: `"single_location"`, `"split_when_required"`. |
| `within_group_order` | Required | string | Tie-break inside a priority group. Ascending location ID keeps assignments reproducible. Values: `"location_id_ascending"`. |

