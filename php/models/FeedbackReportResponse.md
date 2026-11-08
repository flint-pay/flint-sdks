[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FeedbackReportResponse

A response containing `FeedbackReport` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | object and Alternative shapes (see declared variants) | Resource, collection, or operation result returned by this request. Feedback submitted about the developer experience. `data`: [declared alternatives](../models/FeedbackReportResponse.md#feedbackreportresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### FeedbackReportResponse.data

Resource, collection, or operation result returned by this request. Feedback submitted about the developer experience.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actual_behavior` | Optional | string | Observed outcome, when the report included it. Stored as submitted, trimmed, with line endings normalized and secrets replaced by redaction markers. minLength: `1`. maxLength: `4000`. |
| `canonical_command` | Optional | string | Dotted or hyphenated canonical command name, such as payment-intents.create. minLength: `1`. maxLength: `200`. pattern: `^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$`. |
| `code_location` | Optional | string | File in the reporter's own repository this feedback is about, optionally followed by `:line` or `:line:column`, such as `src/sync/products.ts:42`. Stored as submitted, trimmed, with line endings normalized and secrets replaced by redaction markers. minLength: `1`. maxLength: `500`. |
| `component` | Optional | string | Feature or subsystem within the product, when the report named one. Stored as submitted, trimmed, with line endings normalized and secrets replaced by redaction markers. minLength: `1`. maxLength: `128`. |
| `created_at` | Required | string | Server-assigned time when Flint stored the report. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Optional | string | Details about the feedback, when the report included them. Stored as submitted, trimmed, with line endings normalized and secrets replaced by redaction markers. minLength: `1`. maxLength: `8000`. |
| `expected_behavior` | Optional | string | Desired outcome, when the report included it. Stored as submitted, trimmed, with line endings normalized and secrets replaced by redaction markers. minLength: `1`. maxLength: `4000`. |
| `feedback_report_id` | Required | string | Server-assigned ID of the stored feedback report. pattern: `^fbr_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"fbr_01KEZF7C00CFKWW2MH94F39D7B"`. |
| `kind` | Required | string | Classification of the feedback. Values: `"papercut"`, `"bug"`, `"feature_request"`, `"rating"`, `"praise"`, `"other"`. |
| `related_request_id` | Optional | string | Flint request ID associated with this feedback. minLength: `1`. maxLength: `255`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |
| `related_resource_ids` | Optional | Array of string | Flint IDs of the resources this feedback is about, sorted. maxItems: `20`. uniqueItems: `true`. Items: minLength: `1`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `reporter_kind` | Optional | string | Whether the reporter is a human or an AI. Values: `"human"`, `"ai_agent"`. |
| `reporting_client` | Optional | object | Tool that submitted the feedback, independently of the product being discussed. The client that submits a feedback report, with its name, platform, version, and schema version. `reporting_client`: [field definitions](../models/FeedbackReportResponse.md#feedbackreportresponsedatareporting_client). |
| `reproduction_steps` | Optional | Array of string | Steps in reproduction order. maxItems: `20`. uniqueItems: `true`. Items: minLength: `1`. maxLength: `1000`. |
| `sentiment` | Conditional | string | Positive, negative, or neutral assessment. Always present on a rating. Values: `"positive"`, `"negative"`, `"neutral"`. |
| `summary` | Conditional | string | Brief account of the feedback. Present on every report except a rating that sent none. Stored as submitted, trimmed, with line endings normalized and secrets replaced by redaction markers. minLength: `1`. maxLength: `200`. |
| `surface` | Required | string | Product the feedback is about, independently of how the report was submitted. Values: `"api"`, `"cli"`, `"mcp"`, `"sdk"`, `"docs"`, `"dashboard"`, `"checkout"`, `"payment_links"`, `"webhooks"`, `"onboarding"`, `"mobile"`, `"other"`. |
| `surface_route` | Optional | string | The public API route template this feedback is about. minLength: `1`. maxLength: `500`. |

### FeedbackReportResponse.data variant 1: `kind` = `"rating"`

oneOf with kind: "rating": Feedback submitted about the developer experience..

- Required: `sentiment`.
- Optional: `summary`.
- Constraints for `kind`: Values: `"rating"`.

### FeedbackReportResponse.data variant 2

oneOf with kind: "bug" | "feature_request" | "other" | "papercut" | "praise": Feedback submitted about the developer experience..

- Required: `summary`.
- Optional: `sentiment`.
- Constraints for `kind`: Values: `"papercut"`, `"bug"`, `"feature_request"`, `"praise"`, `"other"`.

### FeedbackReportResponse.data.reporting_client

Tool that submitted the feedback, independently of the product being discussed. The client that submits a feedback report, with its name, platform, version, and schema version.

Field definitions: [shared fields](FeedbackReportResponseDataRatingReportingClient.md#feedbackreportresponsedataratingreportingclient).

### FeedbackReportResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

