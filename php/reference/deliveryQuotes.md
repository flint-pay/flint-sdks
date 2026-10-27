[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# deliveryQuotes

### deliveryQuotes.get

Returns a persisted delivery quote for diagnostics and recovery by its ID, using the same merchant view as the quote list.

`GET /v1/delivery-quotes/{delivery_quote_id}`

Signature: `get(string|Model $delivery_quote_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_quote_id` | Required | string |  |

#### Response

Returned payload: [DeliveryQuote](../models/DeliveryQuote.md#deliveryquote).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->deliveryQuotes->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/deliveryQuotes-get.php)

### deliveryQuotes.list

Returns persisted delivery quote diagnostics in stable creation order.

`GET /v1/delivery-quotes`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session_id` | Optional | string |  |
| `order_id` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"consumed"`, `"stale"`, `"expired"`, `"revoked"`. |
| `evaluation_status` | Optional | Array of string | minItems: `1`. Items values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [DeliveryQuotesListResponse200](../models/DeliveryQuotesListResponse200.md#deliveryquoteslistresponse200).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->deliveryQuotes->list([], new RequestOptions());
```

[Complete runnable example](../examples/deliveryQuotes-list.php)

