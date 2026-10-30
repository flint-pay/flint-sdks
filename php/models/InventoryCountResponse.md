[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountResponse

A response containing `InventoryCount` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryCount](../models/InventoryCount.md#inventorycount) | A physical count used to reconcile stock. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

