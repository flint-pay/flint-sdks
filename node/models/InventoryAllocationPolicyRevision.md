[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAllocationPolicyRevision

An immutable routing configuration published when an allocation policy is created or its configuration is replaced. Revisions remain readable after later policy edits.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [InventoryAllocationConfigurationValue](../models/InventoryAllocationConfigurationValue.md#inventoryallocationconfigurationvalue) | Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand can be split, and how many Locations one assignment may use. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `inventory_allocation_policy_id` | Required | string |  |
| `inventory_allocation_policy_revision_id` | Required | string |  |

