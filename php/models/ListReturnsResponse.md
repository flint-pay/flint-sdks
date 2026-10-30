[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ListReturnsResponse

A page of `Return` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [ReturnResource](../models/ReturnResource.md#returnresource) | `data[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ListReturnsResponse.data[]

Field definitions: [CancelReturnResponse.data](../models/CancelReturnResponse.md#cancelreturnresponsedata).

