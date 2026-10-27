[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AddRiskListItemsResponseInput

A response containing `AddRiskListItemsResult` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [AddRiskListItemsResultInput](../models/AddRiskListItemsResultInput.md#addrisklistitemsresultinput) | Risk list item additions, one per request value in request order. Repeated values report existing after their first entry. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

