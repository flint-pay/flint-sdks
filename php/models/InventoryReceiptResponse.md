[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReceiptResponse

A response containing `InventoryReceipt` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryReceipt](../models/InventoryReceipt.md#inventoryreceipt) | Returned units received into Inventory, from a Return disposition or against the reservation line that consumed them. `data`: [field definitions](../models/InventoryReceiptResponse.md#inventoryreceiptresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryReceiptResponse.data

Returned units received into Inventory, from a Return disposition or against the reservation line that consumed them.

Field definitions: [shared fields](InventoryReceipt.md#inventoryreceipt).

