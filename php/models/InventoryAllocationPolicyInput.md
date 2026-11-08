[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAllocationPolicyInput

Named, version-fenced rules that decide which Locations serve demand and in what order.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | object | Routing rules: ranked groups of Locations, whether demand can be split, and the most Locations one assignment may use. `configuration`: [field definitions](../models/InventoryAllocationPolicyInput.md#inventoryallocationpolicyinputconfiguration). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_inventory_allocation_policy_revision_id` | Required | string | The immutable revision containing this policy's current routing configuration. Replacing configuration publishes a new revision; other policy edits keep this ID. Example: `"invpv_01KEZF7C00JSFTTBKC1JY614JJ"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `inventory_allocation_policy_id` | Required | string | ID of the policy this revision belongs to. Example: `"invp_01KEZF7C0076BZX855WAGC5SQK"`. |
| `metadata` | Required | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `name` | Required | string | Merchant-facing policy name. |
| `status` | Required | string | Current allocation policy status. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |

### InventoryAllocationPolicyInput.configuration

Routing rules: ranked groups of Locations, whether demand can be split, and the most Locations one assignment may use.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_groups` | Required | Array of [InventoryAllocationPolicyLocationInput](../models/InventoryAllocationPolicyLocationInput.md#inventoryallocationpolicylocationinput) | Locations ranked into priority groups. Routing prefers the lowest group priority, then the lowest location ID. minItems: `1`. maxItems: `25`. |
| `maximum_locations_per_assignment` | Required | integer | Upper bound on how many Locations one assignment may use. Defaults to 1 for single_location and 10 for split_when_required. single_location requires 1 when sent. Format: `int32`. minimum: `1`. maximum: `10`. |
| `splitting_behavior` | Required | string | single_location fails rather than splitting demand across Locations; split_when_required allows a split when no single Location can serve the whole request. Values: `"single_location"`, `"split_when_required"`. |
| `within_group_order` | Required | string | Tie-break inside a priority group. Ascending location ID keeps assignments reproducible. Values: `"location_id_ascending"`. |

