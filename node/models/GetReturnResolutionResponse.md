[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GetReturnResolutionResponse

Declared schema CancelReturnResolutionResponse: A response containing `ReturnResolution` data.

Declared schema ConfirmReturnResolutionResponse: A response containing `ReturnResolution` data.

Declared schema CreateReturnResolutionResponse: A response containing `ReturnResolution` data.

Declared schema GetReturnResolutionResponse: A response containing `ReturnResolution` data.

Declared schema ReleaseReturnResolutionResponse: A response containing `ReturnResolution` data.

Declared schema RetryReturnResolutionResponse: A response containing `ReturnResolution` data.

Declared schema UpdateReturnResolutionResponse: A response containing `ReturnResolution` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnResolution](../models/ReturnResolution.md#returnresolution) | The refund, exchange, or other outcome of a return. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

