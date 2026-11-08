[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAllocationPolicyRevision

An immutable routing configuration published when an allocation policy is created or its configuration is replaced. Revisions remain readable after later policy edits.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [InventoryAllocationConfigurationValue](../models/InventoryAllocationConfigurationValue.md#inventoryallocationconfigurationvalue) | Routing rules: ranked groups of Locations, whether demand can be split, and the most Locations one assignment may use. Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand can be split, and how many Locations one assignment may use. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `inventory_allocation_policy_id` | Required | string | ID of the policy this revision belongs to. |
| `inventory_allocation_policy_revision_id` | Required | string | Unique identifier for this inventory allocation policy revision, prefixed `invpv_`. |

