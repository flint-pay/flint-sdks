[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FeedbackReportsListResponse200

A page of `FeedbackReport` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of (object and Alternative shapes (see declared variants)) | `data[]`: [declared alternatives](../models/FeedbackReportsCreateResponse201.md#feedbackreportscreateresponse201data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### FeedbackReportsListResponse200.data[]

Declared alternatives: [FeedbackReportsCreateResponse201.data](../models/FeedbackReportsCreateResponse201.md#feedbackreportscreateresponse201data).

