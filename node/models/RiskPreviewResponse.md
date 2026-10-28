[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPreviewResponse

A response containing `RiskPreview` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [RiskPreview](../models/RiskPreview.md#riskpreview) | The result of validating a proposed risk rule: whether it is valid, any issues found, warnings, and an analysis of the rule. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

