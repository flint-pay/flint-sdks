[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAllocationPolicy

Named, version-fenced rules that decide which Locations serve demand and in what order.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [InventoryAllocationPolicyConfiguration](../models/InventoryAllocationPolicyConfiguration.md#inventoryallocationpolicyconfiguration) |  |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `current_inventory_allocation_policy_revision_id` | Required | string | The immutable revision containing this policy's current routing configuration. Replacing configuration publishes a new revision; other policy edits keep this ID. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `inventory_allocation_policy_id` | Required | string |  |
| `metadata` | Required | Map of string |  |
| `name` | Required | string |  |
| `status` | Required | string | Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |

