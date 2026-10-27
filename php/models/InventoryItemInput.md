[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryItemInput

A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string | Optional searchable barcode. |
| `created_at` | Required | string | Time the inventory item was created. Format: `date-time`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `inventory_item_id` | Required | string | Stable inventory item ID. |
| `metadata` | Required | Map of string | Caller-owned metadata. |
| `name` | Required | string | Merchant-facing inventory item name. |
| `sku` | Optional | string | Optional searchable stock-keeping unit. |
| `status` | Required | string | Current inventory item lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | Time the inventory item last changed. Format: `date-time`. |
| `version` | Required | integer string | Optimistic-concurrency version for item writes. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |

