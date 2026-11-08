[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryItemResponse

A response containing `InventoryItem` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryItem](../models/InventoryItem.md#inventoryitem) | Resource, collection, or operation result returned by this request. A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter. `data`: [field definitions](../models/InventoryItemResponse.md#inventoryitemresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryItemResponse.data

Resource, collection, or operation result returned by this request. A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `backorder` | Required | [BackorderPolicy](../models/BackorderPolicy.md#backorderpolicy) | Backorder settings shared by every variant using this inventory item. Backorder settings shared by every variant using an inventory item. `backorder`: [field definitions](../models/InventoryItemResponse.md#inventoryitemresponsedatabackorder). |
| `barcode` | Optional | string | Optional searchable barcode. |
| `created_at` | Required | string | Time the inventory item was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `inventory_item_id` | Required | string | Stable inventory item ID. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `metadata` | Required | Map of string | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata). |
| `name` | Required | string | Merchant-facing inventory item name. |
| `sku` | Optional | string | Optional searchable stock-keeping unit. |
| `status` | Required | string | Current inventory item lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | Time the inventory item last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Optimistic-concurrency version for item writes. Format: `uint64`. minimum: `1`. |

### InventoryItemResponse.data.backorder

Backorder settings shared by every variant using this inventory item. Backorder settings shared by every variant using an inventory item.

Field definitions: [shared fields](BackorderPolicyInput.md#backorderpolicyinput).

### InventoryItemResponse.data.metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

### InventoryItemResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

