[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAllocationPolicyRevision

An immutable routing configuration published when an allocation policy is created or its configuration is replaced. Revisions remain readable after later policy edits.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [InventoryAllocationConfigurationValue](../models/InventoryAllocationConfigurationValue.md#inventoryallocationconfigurationvalue) | Routing rules: ranked groups of Locations, whether demand can be split, and the most Locations one assignment may use. Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand can be split, and how many Locations one assignment may use. `configuration`: [field definitions](../models/InventoryAllocationPolicyRevision.md#inventoryallocationpolicyrevisionconfiguration). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `inventory_allocation_policy_id` | Required | string | ID of the policy this revision belongs to. Example: `"invp_01KEZF7C0076BZX855WAGC5SQK"`. |
| `inventory_allocation_policy_revision_id` | Required | string | Unique identifier for this inventory allocation policy revision, prefixed `invpv_`. Example: `"invpv_01KEZF7C00JSFTTBKC1JY614JJ"`. |

### InventoryAllocationPolicyRevision.configuration

Routing rules: ranked groups of Locations, whether demand can be split, and the most Locations one assignment may use. Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand can be split, and how many Locations one assignment may use.

Field definitions: [shared fields](InventoryAllocationConfigurationValue.md#inventoryallocationconfigurationvalue).

