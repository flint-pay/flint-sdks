[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateInventoryItemRequestInput

The request body for: Update inventory item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `backorder` | Optional | [InventoryBackorderPolicyRequestInput](../models/InventoryBackorderPolicyRequestInput.md#inventorybackorderpolicyrequestinput) | Backorder settings to apply to this inventory item. Patch object: fields you send are applied, fields you omit are unchanged. minProperties: `1`. |
| `barcode` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | Merchant-facing inventory item name. minLength: `1`. |
| `sku` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `status` | Optional | string | New status for the inventory item. Omit it to leave the status unchanged. Values: `"active"`, `"inactive"`. |

