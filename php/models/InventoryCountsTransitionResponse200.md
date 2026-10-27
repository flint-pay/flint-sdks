[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountsTransitionResponse200

A response containing `InventoryCountResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [InventoryCountResult](../models/InventoryCountResult.md#inventorycountresult) | inventory_count is the primary resource and expected_version target. Stock-moving transitions return this result instead of a resource alone. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

