[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskListsAddItemsResponse200

A response containing `AddRiskListItemsResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [AddRiskListItemsResult](../models/AddRiskListItemsResult.md#addrisklistitemsresult) | Risk list item additions, one per request value in request order. Repeated values report existing after their first entry. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

