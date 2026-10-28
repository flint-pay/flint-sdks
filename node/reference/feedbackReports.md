[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# feedbackReports

### feedbackReports.create

Stores one immutable occurrence of Flint feedback. Use one report per root cause and include only the evidence needed to describe Flint's behavior.

`POST /v1/feedback-reports`

Signature:

```typescript
create(params: (InputValue<CreateFeedbackReportRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateFeedbackReportRequestInput](../models/CreateFeedbackReportRequest.md#createfeedbackreportrequest) | The request body for: Create a feedback report. |

Body model: [CreateFeedbackReportRequestInput](../models/CreateFeedbackReportRequest.md#createfeedbackreportrequest).

#### feedbackReports.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actual_behavior` | Optional | string | Optional observed outcome. Limited to 4000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `4000`. |
| `canonical_command` | Optional | string | Dotted or hyphenated canonical command name, such as payment-intents.create. Limited to 200 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `200`. pattern: `^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$`. |
| `code_location` | Optional | string | Location in the reporting code associated with this feedback. Limited to 500 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `500`. |
| `component` | Optional | string | Optional feature or subsystem within the product. Limited to 128 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `128`. |
| `description` | Optional | string | Optional details about the feedback. Limited to 8000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `8000`. |
| `expected_behavior` | Optional | string | Optional desired outcome. Limited to 4000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `4000`. |
| `kind` | Required | string | Classification of the feedback. Values: `"papercut"`, `"bug"`, `"feature_request"`, `"rating"`, `"praise"`, `"other"`. |
| `related_request_id` | Optional | string | Flint request ID associated with this feedback. Limited to 255 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `255`. |
| `related_resource_ids` | Optional | Array of string | Existing public resources associated with this feedback, with at most 20 unique IDs. maxItems: `20`. uniqueItems: `true`. Items: minLength: `1`. |
| `reporter_kind` | Optional | string | Whether the reporter is a human or an AI. Values: `"human"`, `"ai_agent"`. |
| `reporting_client` | Optional | [FeedbackReportingClientInput](../models/FeedbackReportingClient.md#feedbackreportingclient) | Tool submitting the feedback, independently of the product being discussed. Its name is required when present. The client that submits a feedback report, with its name, platform, version, and schema version. |
| `reproduction_steps` | Optional | Array of string | Unique steps in reproduction order, with at most 20 entries. maxItems: `20`. uniqueItems: `true`. Items: Limited to 1000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `1000`. |
| `sentiment` | Optional | string | Positive, negative, or neutral assessment. Required for rating feedback; optional for narrative feedback. Values: `"positive"`, `"negative"`, `"neutral"`. |
| `summary` | Optional | string | Brief account of the feedback. Required for every kind except rating; optional for a rating. Limited to 200 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `200`. |
| `surface` | Required | string | Product being discussed, independently of how the report is submitted. Values: `"api"`, `"cli"`, `"mcp"`, `"sdk"`, `"docs"`, `"dashboard"`, `"checkout"`, `"payment_links"`, `"webhooks"`, `"onboarding"`, `"mobile"`, `"other"`. |
| `surface_route` | Optional | string | Relevant route in the product being discussed. Limited to 500 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `500`. |

#### feedbackReports.create body oneOf variant 1

The `rating` variant of `CreateFeedbackReportRequest`.

Body model: [CreateFeedbackReportRatingInput](../models/CreateFeedbackReportRating.md#createfeedbackreportrating).

#### feedbackReports.create body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actual_behavior` | Optional | string | Optional observed outcome. Limited to 4000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `4000`. |
| `canonical_command` | Optional | string | Dotted or hyphenated canonical command name, such as payment-intents.create. Limited to 200 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `200`. pattern: `^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$`. |
| `code_location` | Optional | string | Location in the reporting code associated with this feedback. Limited to 500 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `500`. |
| `component` | Optional | string | Optional feature or subsystem within the product. Limited to 128 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `128`. |
| `description` | Optional | string | Optional details about the feedback. Limited to 8000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `8000`. |
| `expected_behavior` | Optional | string | Optional desired outcome. Limited to 4000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `4000`. |
| `kind` | Required | string | Classification of the feedback. Values: `"rating"`. |
| `related_request_id` | Optional | string | Flint request ID associated with this feedback. Limited to 255 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `255`. |
| `related_resource_ids` | Optional | Array of string | Existing public resources associated with this feedback, with at most 20 unique IDs. maxItems: `20`. uniqueItems: `true`. Items: minLength: `1`. |
| `reporter_kind` | Optional | string | Whether the reporter is a human or an AI. Values: `"human"`, `"ai_agent"`. |
| `reporting_client` | Optional | [FeedbackReportingClientInput](../models/FeedbackReportingClient.md#feedbackreportingclient) | Tool submitting the feedback, independently of the product being discussed. Its name is required when present. The client that submits a feedback report, with its name, platform, version, and schema version. |
| `reproduction_steps` | Optional | Array of string | Unique steps in reproduction order, with at most 20 entries. maxItems: `20`. uniqueItems: `true`. Items: Limited to 1000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `1000`. |
| `sentiment` | Required | string | Positive, negative, or neutral assessment. Required for rating feedback; optional for narrative feedback. Values: `"positive"`, `"negative"`, `"neutral"`. |
| `summary` | Optional | string | Brief account of the feedback. Required for every kind except rating; optional for a rating. Limited to 200 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `200`. |
| `surface` | Required | string | Product being discussed, independently of how the report is submitted. Values: `"api"`, `"cli"`, `"mcp"`, `"sdk"`, `"docs"`, `"dashboard"`, `"checkout"`, `"payment_links"`, `"webhooks"`, `"onboarding"`, `"mobile"`, `"other"`. |
| `surface_route` | Optional | string | Relevant route in the product being discussed. Limited to 500 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `500`. |

#### feedbackReports.create body oneOf variant 2

The `bug` variant of `CreateFeedbackReportRequest`. The `feature_request` variant of `CreateFeedbackReportRequest`. The `other` variant of `CreateFeedbackReportRequest`. The `papercut` variant of `CreateFeedbackReportRequest`. The `praise` variant of `CreateFeedbackReportRequest`.

Body model: [CreateFeedbackReportNarrativeInput](../models/CreateFeedbackReportNarrative.md#createfeedbackreportnarrative).

#### feedbackReports.create body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actual_behavior` | Optional | string | Optional observed outcome. Limited to 4000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `4000`. |
| `canonical_command` | Optional | string | Dotted or hyphenated canonical command name, such as payment-intents.create. Limited to 200 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `200`. pattern: `^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$`. |
| `code_location` | Optional | string | Location in the reporting code associated with this feedback. Limited to 500 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `500`. |
| `component` | Optional | string | Optional feature or subsystem within the product. Limited to 128 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `128`. |
| `description` | Optional | string | Optional details about the feedback. Limited to 8000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `8000`. |
| `expected_behavior` | Optional | string | Optional desired outcome. Limited to 4000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `4000`. |
| `kind` | Required | string | Classification of the feedback. Values: `"papercut"`, `"bug"`, `"feature_request"`, `"praise"`, `"other"`. |
| `related_request_id` | Optional | string | Flint request ID associated with this feedback. Limited to 255 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `255`. |
| `related_resource_ids` | Optional | Array of string | Existing public resources associated with this feedback, with at most 20 unique IDs. maxItems: `20`. uniqueItems: `true`. Items: minLength: `1`. |
| `reporter_kind` | Optional | string | Whether the reporter is a human or an AI. Values: `"human"`, `"ai_agent"`. |
| `reporting_client` | Optional | [FeedbackReportingClientInput](../models/FeedbackReportingClient.md#feedbackreportingclient) | Tool submitting the feedback, independently of the product being discussed. Its name is required when present. The client that submits a feedback report, with its name, platform, version, and schema version. |
| `reproduction_steps` | Optional | Array of string | Unique steps in reproduction order, with at most 20 entries. maxItems: `20`. uniqueItems: `true`. Items: Limited to 1000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `1000`. |
| `sentiment` | Optional | string | Positive, negative, or neutral assessment. Required for rating feedback; optional for narrative feedback. Values: `"positive"`, `"negative"`, `"neutral"`. |
| `summary` | Required | string | Brief account of the feedback. Required for every kind except rating; optional for a rating. Limited to 200 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `200`. |
| `surface` | Required | string | Product being discussed, independently of how the report is submitted. Values: `"api"`, `"cli"`, `"mcp"`, `"sdk"`, `"docs"`, `"dashboard"`, `"checkout"`, `"payment_links"`, `"webhooks"`, `"onboarding"`, `"mobile"`, `"other"`. |
| `surface_route` | Optional | string | Relevant route in the product being discussed. Limited to 500 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `500`. |

#### Response

Returned payload: [FeedbackReport](../models/FeedbackReport.md#feedbackreport).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.feedbackReports.create({kind: "rating", surface: "api", sentiment: "positive"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/feedbackReports-create.mjs)

### feedbackReports.get

Returns one immutable feedback report in the credential's merchant and environment.

`GET /v1/feedback-reports/{feedback_report_id}`

Signature: `get(feedback_report_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `feedback_report_id` | Required | string |  |

#### Response

Returned payload: [FeedbackReport](../models/FeedbackReport.md#feedbackreport).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.feedbackReports.get("example", {}, {  });
```

[Complete runnable example](../examples/feedbackReports-get.mjs)

### feedbackReports.list

Lists feedback reports in descending creation order for the credential's merchant and environment. Default order: created_at descending, then feedback_report_id descending.

`GET /v1/feedback-reports`

Signature:

```typescript
list(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [FeedbackReportListResponse](../models/FeedbackReportListResponse.md#feedbackreportlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.feedbackReports.list({}, {  });
```

[Complete runnable example](../examples/feedbackReports-list.mjs)

