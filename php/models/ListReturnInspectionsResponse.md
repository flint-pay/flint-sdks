[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ListReturnInspectionsResponse

A page of `ReturnInspection` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [ReturnInspection](../models/ReturnInspection.md#returninspection) | `data[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspections). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ListReturnInspectionsResponse.data[]

Field definitions: [CancelReturnResponse.data.return_inspections[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspections).

