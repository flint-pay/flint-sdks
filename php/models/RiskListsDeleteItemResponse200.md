[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskListsDeleteItemResponse200

A response containing `RiskListItem` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [RiskListItem](../models/RiskListItem.md#risklistitem) | One value in a payment risk list. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

