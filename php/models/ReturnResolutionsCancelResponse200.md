[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionsCancelResponse200

A response containing `ReturnResolution` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnResolution](../models/ReturnResolution.md#returnresolution) | The refund, exchange, or other outcome of a return. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

