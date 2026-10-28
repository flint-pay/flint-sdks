[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelReturnDispositionResponseInput

A response containing `ReturnDisposition` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnDispositionInput](../models/ReturnDispositionInput.md#returndispositioninput) | A decision about how returned merchandise will be handled. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

