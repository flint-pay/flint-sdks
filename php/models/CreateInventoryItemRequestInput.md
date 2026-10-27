[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInventoryItemRequestInput

The request body for: Create inventory item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string | minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Required | string | minLength: `1`. |
| `sku` | Optional | string | minLength: `1`. |
| `status` | Optional | string | Default: `"active"`. Values: `"active"`, `"inactive"`. |

