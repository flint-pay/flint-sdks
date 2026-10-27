[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnsListResponse200

A page of `Return` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [ReturnResource](../models/ReturnResource.md#returnresource) | `data[]`: [field definitions](../models/ReturnsCancelResponse200.md#returnscancelresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ReturnsListResponse200.data[]

Field definitions: [ReturnsCancelResponse200.data](../models/ReturnsCancelResponse200.md#returnscancelresponse200data).

