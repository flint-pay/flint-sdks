[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePackageItemRequest

The request body for: Update package item. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null | Bundle component to pack on this order line in the fulfillment. Every PATCH of a bundle line requires its component ID, including when the fulfillment has only one component for the line. Send null for a non-bundle line. minLength: `1`. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

