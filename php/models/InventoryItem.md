[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryItem

A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string | Optional searchable barcode. |
| `created_at` | Required | string | Time the inventory item was created. Format: `date-time`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `inventory_item_id` | Required | string | Stable inventory item ID. |
| `metadata` | Required | Map of string | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/LocationsCreateResponse201.md#locationscreateresponse201datametadata). |
| `name` | Required | string | Merchant-facing inventory item name. |
| `sku` | Optional | string | Optional searchable stock-keeping unit. |
| `status` | Required | string | Current inventory item lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | Time the inventory item last changed. Format: `date-time`. |
| `version` | Required | integer string | Optimistic-concurrency version for item writes. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

### InventoryItem.metadata

Field definitions: [LocationsCreateResponse201.data.metadata](../models/LocationsCreateResponse201.md#locationscreateresponse201datametadata).

