[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReceiptsCreateResponse201

A response containing `InventoryReceiptResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryReceiptResult](../models/InventoryReceiptResult.md#inventoryreceiptresult) | Inventory receipt and the levels it changed. inventory_receipt is the primary resource and expected_version target. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

