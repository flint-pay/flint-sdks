[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReceiptListResponse

A page of `InventoryReceipt` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [InventoryReceipt](../models/InventoryReceipt.md#inventoryreceipt) | `data[]`: [field definitions](../models/InventoryReceiptResponse.md#inventoryreceiptresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### InventoryReceiptListResponse.data[]

Field definitions: [InventoryReceiptResponse.data](../models/InventoryReceiptResponse.md#inventoryreceiptresponsedata).

