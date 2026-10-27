[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateInventoryAllocationPolicyRequestInput

The request body for: Update inventory allocation policy.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [InventoryAllocationConfigurationValueInput](../models/InventoryAllocationConfigurationValueInput.md#inventoryallocationconfigurationvalueinput) | Requires expected_version. Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand can be split, and how many Locations one assignment may use. |
| `expected_version` | Optional | integer string | Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |

