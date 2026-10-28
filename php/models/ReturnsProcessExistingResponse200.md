[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnsProcessExistingResponse200

A response containing `ReturnProcessResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnProcessResult](../models/ReturnProcessResult.md#returnprocessresult) | The return is the primary resource and expected_version target; the other resources report the processing effects. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

