[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# feedbackReports

### feedbackReports.create

Stores one immutable occurrence of Flint feedback. Use one report per root cause and include only the evidence needed to describe Flint's behavior.

`POST /v1/feedback-reports`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateFeedbackReportRequestInput](../models/CreateFeedbackReportRequestInput.md#createfeedbackreportrequestinput) | The request body for: Create a feedback report. |

Body model: [CreateFeedbackReportRequestInput](../models/CreateFeedbackReportRequestInput.md#createfeedbackreportrequestinput).

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
| `reporting_client` | Optional | [FeedbackReportingClientInput](../models/FeedbackReportResponseDataRatingReportingClient.md#feedbackreportresponsedataratingreportingclient) | Tool submitting the feedback, independently of the product being discussed. Its name is required when present. The client that submits a feedback report, with its name, platform, version, and schema version. |
| `reproduction_steps` | Optional | Array of string | Unique steps in reproduction order, with at most 20 entries. maxItems: `20`. uniqueItems: `true`. Items: Limited to 1000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `1000`. |
| `sentiment` | Optional | string | Positive, negative, or neutral assessment. Required for rating feedback; optional for narrative feedback. Values: `"positive"`, `"negative"`, `"neutral"`. |
| `summary` | Optional | string | Brief account of the feedback. Required for every kind except rating; optional for a rating. Limited to 200 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `200`. |
| `surface` | Required | string | Product being discussed, independently of how the report is submitted. Values: `"api"`, `"cli"`, `"mcp"`, `"sdk"`, `"docs"`, `"dashboard"`, `"checkout"`, `"payment_links"`, `"webhooks"`, `"onboarding"`, `"mobile"`, `"other"`. |
| `surface_route` | Optional | string | Relevant route in the product being discussed. Limited to 500 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `500`. |

#### feedbackReports.create with `kind: "rating"`

The `rating` variant of `CreateFeedbackReportRequest`.

Body model: [CreateFeedbackReportRatingInput](../models/CreateFeedbackReportRatingInput.md#createfeedbackreportratinginput).

#### feedbackReports.create with `kind: "bug" | "feature_request" | "other" | "papercut" | "praise"`

The `bug` variant of `CreateFeedbackReportRequest`. The `feature_request` variant of `CreateFeedbackReportRequest`. The `other` variant of `CreateFeedbackReportRequest`. The `papercut` variant of `CreateFeedbackReportRequest`. The `praise` variant of `CreateFeedbackReportRequest`.

Body model: [CreateFeedbackReportNarrativeInput](../models/CreateFeedbackReportNarrativeInput.md#createfeedbackreportnarrativeinput).

#### Response

Returned payload: [FeedbackReportResponseDataRating](../models/FeedbackReportResponseDataRating.md#feedbackreportresponsedatarating)|[FeedbackReportResponseDataPapercut](../models/FeedbackReportResponseDataPapercut.md#feedbackreportresponsedatapapercut)|[FeedbackReportResponseDataBug](../models/FeedbackReportResponseDataBug.md#feedbackreportresponsedatabug)|[FeedbackReportResponseDataFeatureRequest](../models/FeedbackReportResponseDataFeatureRequest.md#feedbackreportresponsedatafeaturerequest)|[FeedbackReportResponseDataPraise](../models/FeedbackReportResponseDataPraise.md#feedbackreportresponsedatapraise)|[FeedbackReportResponseDataOther](../models/FeedbackReportResponseDataOther.md#feedbackreportresponsedataother)|Model.

##### Response variant 1

Feedback submitted about the developer experience.

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
| `kind` | Required | string | Classification of the feedback. Values: `"rating"`. |
| `related_request_id` | Optional | string | Flint request ID associated with this feedback. Limited to 255 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `255`. |
| `related_resource_ids` | Optional | Array of string | Existing public resources associated with this feedback, with at most 20 unique IDs. maxItems: `20`. uniqueItems: `true`. Items: minLength: `1`. |
| `reporter_kind` | Optional | string | Whether the reporter is a human or an AI. Values: `"human"`, `"ai_agent"`. |
| `reporting_client` | Optional | object | Tool submitting the feedback, independently of the product being discussed. Its name is required when present. The client that submits a feedback report, with its name, platform, version, and schema version. |
| `reproduction_steps` | Optional | Array of string | Unique steps in reproduction order, with at most 20 entries. maxItems: `20`. uniqueItems: `true`. Items: Limited to 1000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `1000`. |
| `sentiment` | Required | string | Positive, negative, or neutral assessment. Required for rating feedback; optional for narrative feedback. Values: `"positive"`, `"negative"`, `"neutral"`. |
| `summary` | Optional | string | Brief account of the feedback. Required for every kind except rating; optional for a rating. Limited to 200 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `200`. |
| `surface` | Required | string | Product being discussed, independently of how the report is submitted. Values: `"api"`, `"cli"`, `"mcp"`, `"sdk"`, `"docs"`, `"dashboard"`, `"checkout"`, `"payment_links"`, `"webhooks"`, `"onboarding"`, `"mobile"`, `"other"`. |
| `surface_route` | Optional | string | Relevant route in the product being discussed. Limited to 500 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `500`. |

##### Response variant 2

Feedback submitted about the developer experience.

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
| `reporting_client` | Optional | object | Tool submitting the feedback, independently of the product being discussed. Its name is required when present. The client that submits a feedback report, with its name, platform, version, and schema version. |
| `reproduction_steps` | Optional | Array of string | Unique steps in reproduction order, with at most 20 entries. maxItems: `20`. uniqueItems: `true`. Items: Limited to 1000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `1000`. |
| `sentiment` | Optional | string | Positive, negative, or neutral assessment. Required for rating feedback; optional for narrative feedback. Values: `"positive"`, `"negative"`, `"neutral"`. |
| `summary` | Required | string | Brief account of the feedback. Required for every kind except rating; optional for a rating. Limited to 200 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `200`. |
| `surface` | Required | string | Product being discussed, independently of how the report is submitted. Values: `"api"`, `"cli"`, `"mcp"`, `"sdk"`, `"docs"`, `"dashboard"`, `"checkout"`, `"payment_links"`, `"webhooks"`, `"onboarding"`, `"mobile"`, `"other"`. |
| `surface_route` | Optional | string | Relevant route in the product being discussed. Limited to 500 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `500`. |

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->feedbackReports->create([
  'kind' => 'rating',
  'surface' => 'api',
  'sentiment' => 'positive',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/feedbackReports-create.php)

### feedbackReports.get

Returns one immutable feedback report in the credential's merchant and environment.

`GET /v1/feedback-reports/{feedback_report_id}`

Signature: `get(string|Model $feedback_report_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `feedback_report_id` | Required | string | Flint feedback report ID. |

#### Response

Returned payload: [FeedbackReportResponseDataRating](../models/FeedbackReportResponseDataRating.md#feedbackreportresponsedatarating)|[FeedbackReportResponseDataPapercut](../models/FeedbackReportResponseDataPapercut.md#feedbackreportresponsedatapapercut)|[FeedbackReportResponseDataBug](../models/FeedbackReportResponseDataBug.md#feedbackreportresponsedatabug)|[FeedbackReportResponseDataFeatureRequest](../models/FeedbackReportResponseDataFeatureRequest.md#feedbackreportresponsedatafeaturerequest)|[FeedbackReportResponseDataPraise](../models/FeedbackReportResponseDataPraise.md#feedbackreportresponsedatapraise)|[FeedbackReportResponseDataOther](../models/FeedbackReportResponseDataOther.md#feedbackreportresponsedataother)|Model.

##### Response variant 1

Feedback submitted about the developer experience.

Field definitions: [shared fields](#response-variant-1).

##### Response variant 2

Feedback submitted about the developer experience.

Field definitions: [shared fields](#response-variant-2).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->feedbackReports->get('fbr_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/feedbackReports-get.php)

### feedbackReports.list

Lists feedback reports in descending creation order for the credential's merchant and environment. Default order: created_at descending, then feedback_report_id descending.

`GET /v1/feedback-reports`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [FeedbackReportListResponse](../models/FeedbackReportListResponse.md#feedbackreportlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->feedbackReports->list([], new RequestOptions());
```

[Complete runnable example](../examples/feedbackReports-list.php)

