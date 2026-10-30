[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryLevelResponse

A response containing `InventoryLevel` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryLevel](../models/InventoryLevel.md#inventorylevel) | The quantity state of one inventory item at one Location. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

