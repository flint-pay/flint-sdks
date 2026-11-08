[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAllocationPolicyRevisionInput

An immutable routing configuration published when an allocation policy is created or its configuration is replaced. Revisions remain readable after later policy edits.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [InventoryAllocationConfigurationValueInput](../models/InventoryAllocationConfigurationValueInput.md#inventoryallocationconfigurationvalueinput) | Routing rules: ranked groups of Locations, whether demand can be split, and the most Locations one assignment may use. Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand can be split, and how many Locations one assignment may use. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `inventory_allocation_policy_id` | Required | string | ID of the policy this revision belongs to. Example: `"invp_01KEZF7C0076BZX855WAGC5SQK"`. |
| `inventory_allocation_policy_revision_id` | Required | string | Unique identifier for this inventory allocation policy revision, prefixed `invpv_`. Example: `"invpv_01KEZF7C00JSFTTBKC1JY614JJ"`. |

