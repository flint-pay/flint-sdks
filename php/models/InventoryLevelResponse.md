[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryLevelResponse

A response containing `InventoryLevel` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryLevel](../models/InventoryLevel.md#inventorylevel) | Resource, collection, or operation result returned by this request. The quantity state of one inventory item at one Location. `data`: [field definitions](../models/InventoryLevelResponse.md#inventorylevelresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryLevelResponse.data

Resource, collection, or operation result returned by this request. The quantity state of one inventory item at one Location.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_quantity` | Required | integer | Derived and never written: on_hand minus unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for the excess. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `backordered_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. |
| `claim_version` | Required | integer | Advances only when held or committed quantities change. Format: `int64`. minimum: `0`. |
| `committed_quantity` | Required | integer | Units promised to accepted orders. Still physically present until fulfillment consumes them. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `damaged_quantity` | Required | integer | On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `held_quantity` | Required | integer | Units claimed by an open reservation that has not been committed. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `incoming_quantity` | Required | integer | Units recorded as inbound but not yet on hand. Does not count toward availability. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `inventory_item` | Optional | [InventoryItem](../models/InventoryItem.md#inventoryitem) | The inventory item this level belongs to. Present only when the list request asked for expand=inventory_item. A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter. `inventory_item`: [field definitions](../models/InventoryLevelResponse.md#inventorylevelresponsedatainventory_item). |
| `inventory_item_id` | Required | string | ID of the inventory item the stock is for. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `inventory_level_id` | Required | string | Unique identifier for this inventory level, prefixed `invl_`. Example: `"invl_01KEZF7C00H201XZXKRX5KMDDE"`. |
| `location_id` | Required | string | ID of the Location that holds the stock. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `on_hand_quantity` | Required | integer | Units physically present at the Location, in any condition. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `physical_version` | Required | integer | Advances only when on-hand or condition quantities change. Format: `int64`. minimum: `0`. |
| `quality_control_quantity` | Required | integer | On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `quarantined_quantity` | Required | integer | On-hand units isolated for review. Not sellable. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `safety_stock_quantity` | Required | integer | Buffer withheld from allocation. Change it with PATCH /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `shortage_quantity` | Required | integer | Derived: claims exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected down. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `unavailable_on_hand_quantity` | Required | integer | Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Changes on every quantity or claim change at this level, including holds and commits. Read it immediately before a PATCH. A level that a counted adjustment creates without a quantity change starts at version 0. Format: `int64`. minimum: `0`. |

### InventoryLevelResponse.data.inventory_item

The inventory item this level belongs to. Present only when the list request asked for expand=inventory_item. A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter.

Field definitions: [shared fields](InventoryItemResponse.md#inventoryitemresponsedata).

### InventoryLevelResponse.data.inventory_item.backorder

Field definitions: [InventoryItemResponse.data.backorder](../models/InventoryItemResponse.md#inventoryitemresponsedatabackorder).

### InventoryLevelResponse.data.inventory_item.metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

### InventoryLevelResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

