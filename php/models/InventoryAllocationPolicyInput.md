[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAllocationPolicyInput

Named, version-fenced rules that decide which Locations serve demand and in what order.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | object | `configuration`: [field definitions](../models/InventoryAllocationPolicyInput.md#inventoryallocationpolicyinputconfiguration). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `current_inventory_allocation_policy_revision_id` | Required | string | The immutable revision containing this policy's current routing configuration. Replacing configuration publishes a new revision; other policy edits keep this ID. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `inventory_allocation_policy_id` | Required | string |  |
| `metadata` | Required | Map of string |  |
| `name` | Required | string |  |
| `status` | Required | string | Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |

### InventoryAllocationPolicyInput.configuration

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_groups` | Required | Array of [InventoryAllocationPolicyLocationInput](../models/InventoryAllocationPolicyLocationInput.md#inventoryallocationpolicylocationinput) | Locations ranked into priority groups. Routing prefers the lowest group priority, then the lowest location ID. minItems: `1`. maxItems: `25`. |
| `maximum_locations_per_assignment` | Required | integer | Upper bound on how many Locations one assignment may use. Defaults to 1 for single_location and 10 for split_when_required. single_location requires 1 when sent. Format: `int32`. minimum: `1`. maximum: `10`. |
| `splitting_behavior` | Required | string | single_location fails rather than splitting demand across Locations; split_when_required allows a split when no single Location can serve the whole request. Values: `"single_location"`, `"split_when_required"`. |
| `within_group_order` | Required | string | Tie-break inside a priority group. Ascending location ID keeps assignments reproducible. Values: `"location_id_ascending"`. |

