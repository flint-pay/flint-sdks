[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryItem

A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `backorder` | Required | [BackorderPolicy](../models/BackorderPolicy.md#backorderpolicy) | Backorder settings shared by every variant using this inventory item. Backorder settings shared by every variant using an inventory item. `backorder`: [field definitions](../models/InventoryItemResponse.md#inventoryitemresponsedatabackorder). |
| `barcode` | Optional | string | Optional searchable barcode. |
| `created_at` | Required | string | Time the inventory item was created. Format: `date-time`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `inventory_item_id` | Required | string | Stable inventory item ID. |
| `metadata` | Required | Map of string | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata). |
| `name` | Required | string | Merchant-facing inventory item name. |
| `sku` | Optional | string | Optional searchable stock-keeping unit. |
| `status` | Required | string | Current inventory item lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | Time the inventory item last changed. Format: `date-time`. |
| `version` | Required | integer | Optimistic-concurrency version for item writes. Format: `uint64`. minimum: `1`. |

### InventoryItem.backorder

Field definitions: [InventoryItemResponse.data.backorder](../models/InventoryItemResponse.md#inventoryitemresponsedatabackorder).

### InventoryItem.metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

