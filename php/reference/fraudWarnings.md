[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# fraudWarnings

### fraudWarnings.get

Retrieves an early fraud warning. Expand `payment_intent` or `dispute` to include them.

`GET /v1/fraud-warnings/{fraud_warning_id}`

Signature: `get(string|Model $fraud_warning_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fraud_warning_id` | Required | string | Flint fraud warning ID. |
| `expand` | Optional | Array of string or string | Supported expansions: dispute, payment_intent. Expansion requires risk.read plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=dispute&expand=payment_intent, or pass one comma-separated value. Items values: `"dispute"`, `"payment_intent"`. Values: `"dispute"`, `"payment_intent"`. |

#### Response

Returned payload: [FraudWarning](../models/FraudWarning.md#fraudwarning).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
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
$result = $client->fraudWarnings->get('frw_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/fraudWarnings-get.php)

### fraudWarnings.list

Lists early fraud warnings that card networks reported on your payments, most recently reported first. Filter with `is_actionable=true` to find warnings a full refund can still resolve before a dispute. Default order: reported_at descending, then fraud_warning_id descending.

`GET /v1/fraud-warnings`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `is_actionable` | Optional | boolean | Filter by whether a proactive fraudulent refund can still prevent a dispute. |
| `payment_intent_id` | Optional | string | Filter by Flint payment intent ID. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `expand` | Optional | Array of string or string | Supported expansions: dispute, payment_intent. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=dispute&expand=payment_intent, or pass one comma-separated value. Items values: `"dispute"`, `"payment_intent"`. Values: `"dispute"`, `"payment_intent"`. |

#### Response

Returned payload: [FraudWarningListResponse](../models/FraudWarningListResponse.md#fraudwarninglistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
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
$result = $client->fraudWarnings->list([], new RequestOptions());
```

[Complete runnable example](../examples/fraudWarnings-list.php)

