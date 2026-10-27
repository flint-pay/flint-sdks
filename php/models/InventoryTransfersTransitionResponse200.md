[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransfersTransitionResponse200

A response containing `InventoryTransferResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryTransferResult](../models/InventoryTransferResult.md#inventorytransferresult) | inventory_transfer is the primary resource and expected_version target. Stock-moving transitions return this result instead of a resource alone. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

