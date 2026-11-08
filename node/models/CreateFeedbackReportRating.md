[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateFeedbackReportRating

The `rating` variant of `CreateFeedbackReportRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actual_behavior` | Optional | string | Optional observed outcome. Limited to 4000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `4000`. |
| `canonical_command` | Optional | string | Dotted or hyphenated canonical command name, such as payment-intents.create. Limited to 200 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `200`. pattern: `^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$`. |
| `code_location` | Optional | string | One file path relative to your repository root, optionally followed by `:line` or `:line:column`, such as `src/sync/products.ts:42`. Absolute paths, `..` segments, and backslashes are rejected. Limited to 500 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `500`. |
| `component` | Optional | string | Optional feature or subsystem within the product. Limited to 128 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `128`. |
| `description` | Optional | string | Optional details about the feedback. Limited to 8000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `8000`. |
| `expected_behavior` | Optional | string | Optional desired outcome. Limited to 4000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `4000`. |
| `kind` | Required | string | Classification of the feedback. Values: `"rating"`. |
| `related_request_id` | Optional | string | Flint request ID associated with this feedback. Limited to 255 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `255`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |
| `related_resource_ids` | Optional | Array of string | Flint IDs of the resources this feedback is about, at most 20 and all different. Flint checks only that each ID has the format of a Flint resource ID, not that the resource exists or that you can read it. maxItems: `20`. uniqueItems: `true`. Items: minLength: `1`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `reporter_kind` | Optional | string | Whether the reporter is a human or an AI. Values: `"human"`, `"ai_agent"`. |
| `reporting_client` | Optional | [FeedbackReportingClient](../models/FeedbackReportingClient.md#feedbackreportingclient) | Tool submitting the feedback, independently of the product being discussed. Its name is required when present. The client that submits a feedback report, with its name, platform, version, and schema version. `reporting_client`: [field definitions](../models/CreateFeedbackReportNarrative.md#createfeedbackreportnarrativereporting_client). |
| `reproduction_steps` | Optional | Array of string | Unique steps in reproduction order, with at most 20 entries. maxItems: `20`. uniqueItems: `true`. Items: Limited to 1000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `1000`. |
| `sentiment` | Required | string | Positive, negative, or neutral assessment. Required for rating feedback; optional for narrative feedback. Values: `"positive"`, `"negative"`, `"neutral"`. |
| `summary` | Optional | string | Brief account of the feedback. Required for every kind except rating; optional for a rating. Limited to 200 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `200`. |
| `surface` | Required | string | Product being discussed, independently of how the report is submitted. Values: `"api"`, `"cli"`, `"mcp"`, `"sdk"`, `"docs"`, `"dashboard"`, `"checkout"`, `"payment_links"`, `"webhooks"`, `"onboarding"`, `"mobile"`, `"other"`. |
| `surface_route` | Optional | string | A public API route template exactly as the API reference shows it, such as `/v1/orders/{order_id}`, with no host, query string, or real IDs. Omit it for feedback that isn't about an API route; any other value returns `400 INVALID_REQUEST`. Limited to 500 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `500`. |

### CreateFeedbackReportRating.reporting_client

Field definitions: [CreateFeedbackReportNarrative.reporting_client](../models/CreateFeedbackReportNarrative.md#createfeedbackreportnarrativereporting_client).

