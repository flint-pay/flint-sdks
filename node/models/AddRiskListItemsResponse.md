[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AddRiskListItemsResponse

A response containing `AddRiskListItemsResult` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [AddRiskListItemsResult](../models/AddRiskListItemsResult.md#addrisklistitemsresult) | Risk list item additions, one per request value in request order. Repeated values report existing after their first entry. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

