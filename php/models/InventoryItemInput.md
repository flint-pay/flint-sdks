[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryItemInput

A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `backorder` | Required | [BackorderPolicyInput](../models/BackorderPolicyInput.md#backorderpolicyinput) | Backorder settings shared by every variant using this inventory item. Backorder settings shared by every variant using an inventory item. |
| `barcode` | Optional | string | Optional searchable barcode. |
| `created_at` | Required | string | Time the inventory item was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `inventory_item_id` | Required | string | Stable inventory item ID. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `metadata` | Required | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `name` | Required | string | Merchant-facing inventory item name. |
| `sku` | Optional | string | Optional searchable stock-keeping unit. |
| `status` | Required | string | Current inventory item lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | Time the inventory item last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Optimistic-concurrency version for item writes. Format: `uint64`. minimum: `1`. |

