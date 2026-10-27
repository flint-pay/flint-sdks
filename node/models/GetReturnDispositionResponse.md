[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GetReturnDispositionResponse

Declared schema CancelReturnDispositionResponse: A response containing `ReturnDisposition` data.

Declared schema CreateReturnDispositionResponse: A response containing `ReturnDisposition` data.

Declared schema GetReturnDispositionResponse: A response containing `ReturnDisposition` data.

Declared schema RetryReturnDispositionResponse: A response containing `ReturnDisposition` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnDisposition](../models/ReturnDisposition.md#returndisposition) | A decision about how returned merchandise will be handled. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

