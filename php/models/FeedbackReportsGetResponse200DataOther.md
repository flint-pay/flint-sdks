[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FeedbackReportsGetResponse200DataOther

Feedback submitted about the developer experience.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actual_behavior` | Optional | string | Optional observed outcome. Limited to 4000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `4000`. |
| `canonical_command` | Optional | string | Dotted or hyphenated canonical command name, such as payment-intents.create. Limited to 200 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `200`. pattern: `^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$`. |
| `code_location` | Optional | string | Location in the reporting code associated with this feedback. Limited to 500 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `500`. |
| `component` | Optional | string | Optional feature or subsystem within the product. Limited to 128 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `128`. |
| `created_at` | Required | string | Server-assigned time when Flint stored the report. Format: `date-time`. |
| `description` | Optional | string | Optional details about the feedback. Limited to 8000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `8000`. |
| `expected_behavior` | Optional | string | Optional desired outcome. Limited to 4000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `4000`. |
| `feedback_report_id` | Required | string | Server-assigned ID of the stored feedback report. pattern: `^fbr_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `kind` | Required | string | Classification of the feedback. Values: `"papercut"`, `"bug"`, `"feature_request"`, `"praise"`, `"other"`. |
| `related_request_id` | Optional | string | Flint request ID associated with this feedback. Limited to 255 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `255`. |
| `related_resource_ids` | Optional | Array of string | Existing public resources associated with this feedback, with at most 20 unique IDs. maxItems: `20`. uniqueItems: `true`. Items: minLength: `1`. |
| `reporter_kind` | Optional | string | Whether the reporter is a human or an AI. Values: `"human"`, `"ai_agent"`. |
| `reporting_client` | Optional | [FeedbackReportsGetResponse200DataOtherReportingClient](../models/FeedbackReportsGetResponse200DataOtherReportingClient.md#feedbackreportsgetresponse200dataotherreportingclient) | Tool submitting the feedback, independently of the product being discussed. Its name is required when present. The client that submits a feedback report, with its name, platform, version, and schema version. |
| `reproduction_steps` | Optional | Array of string | Unique steps in reproduction order, with at most 20 entries. maxItems: `20`. uniqueItems: `true`. Items: Limited to 1000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `1000`. |
| `sentiment` | Optional | string | Positive, negative, or neutral assessment. Required for rating feedback; optional for narrative feedback. Values: `"positive"`, `"negative"`, `"neutral"`. |
| `summary` | Required | string | Brief account of the feedback. Required for every kind except rating; optional for a rating. Limited to 200 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `200`. |
| `surface` | Required | string | Product being discussed, independently of how the report is submitted. Values: `"api"`, `"cli"`, `"mcp"`, `"sdk"`, `"docs"`, `"dashboard"`, `"checkout"`, `"payment_links"`, `"webhooks"`, `"onboarding"`, `"mobile"`, `"other"`. |
| `surface_route` | Optional | string | Relevant route in the product being discussed. Limited to 500 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `500`. |

