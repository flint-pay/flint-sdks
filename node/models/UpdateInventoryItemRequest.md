[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateInventoryItemRequest

The request body for: Update inventory item.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |
| `sku` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |

