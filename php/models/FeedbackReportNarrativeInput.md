[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FeedbackReportNarrativeInput

Feedback submitted about the developer experience.

Request input.

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
| `kind` | Required | string | Classification of the feedback. Values: `"papercut"`, `"bug"`, `"feature_request"`, `"praise"`, `"other"`. |
| `related_request_id` | Optional | string | Flint request ID associated with this feedback. minLength: `1`. maxLength: `255`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |
| `related_resource_ids` | Optional | Array of string | Flint IDs of the resources this feedback is about, sorted. maxItems: `20`. uniqueItems: `true`. Items: minLength: `1`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `reporter_kind` | Optional | string | Whether the reporter is a human or an AI. Values: `"human"`, `"ai_agent"`. |
| `reporting_client` | Optional | [FeedbackReportingClientInput](../models/FeedbackReportingClientInput.md#feedbackreportingclientinput) | Tool that submitted the feedback, independently of the product being discussed. The client that submits a feedback report, with its name, platform, version, and schema version. |
| `reproduction_steps` | Optional | Array of string | Steps in reproduction order. maxItems: `20`. uniqueItems: `true`. Items: minLength: `1`. maxLength: `1000`. |
| `sentiment` | Optional | string | Positive, negative, or neutral assessment. Always present on a rating. Values: `"positive"`, `"negative"`, `"neutral"`. |
| `summary` | Required | string | Brief account of the feedback. Present on every report except a rating that sent none. Stored as submitted, trimmed, with line endings normalized and secrets replaced by redaction markers. minLength: `1`. maxLength: `200`. |
| `surface` | Required | string | Product the feedback is about, independently of how the report was submitted. Values: `"api"`, `"cli"`, `"mcp"`, `"sdk"`, `"docs"`, `"dashboard"`, `"checkout"`, `"payment_links"`, `"webhooks"`, `"onboarding"`, `"mobile"`, `"other"`. |
| `surface_route` | Optional | string | The public API route template this feedback is about. minLength: `1`. maxLength: `500`. |

