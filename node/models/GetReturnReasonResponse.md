[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GetReturnReasonResponse

Declared schema CreateReturnReasonResponse: A response containing `ReturnReason` data.

Declared schema DeleteReturnReasonResponse: A response containing `ReturnReason` data.

Declared schema GetReturnReasonResponse: A response containing `ReturnReason` data.

Declared schema UpdateReturnReasonResponse: A response containing `ReturnReason` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnReason](../models/ReturnReason.md#returnreason) | A reason customers can select when requesting a return. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

