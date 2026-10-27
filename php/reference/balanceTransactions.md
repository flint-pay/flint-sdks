[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# balanceTransactions

### balanceTransactions.get

Returns one balance transaction by ID, with optional related order expansion.

`GET /v1/balance-transactions/{balance_transaction_id}`

Signature: `get(string|Model $balance_transaction_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `balance_transaction_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"order"`. |

#### Response

Returned payload: [BalanceTransaction](../models/BalanceTransaction.md#balancetransaction).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
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

```php
$result = $client->balanceTransactions->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/balanceTransactions-get.php)

### balanceTransactions.list

Returns a paginated ledger of balance-affecting transactions, including availability timing and related public resources.

`GET /v1/balance-transactions`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `payout_id` | Optional | string |  |
| `order_id` | Optional | string |  |
| `expand` | Optional | Array of string | Items values: `"order"`. |
| `type` | Optional | Array of string | minItems: `1`. Items values: [17 declared values](#balancetransactionslist-input-type--values). |
| `related_resource_type` | Optional | Array of string | minItems: `1`. Items values: `"payment_intent"`, `"refund"`, `"dispute"`, `"payout"`, `"payout_destination"`, `"merchant_billing_invoice"`. |
| `related_resource_id` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"pending"`, `"available"`. |
| `occurred_after` | Optional | string | Format: `date-time`. |
| `occurred_before` | Optional | string | Format: `date-time`. |
| `available_after` | Optional | string | Format: `date-time`. |
| `available_before` | Optional | string | Format: `date-time`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### balanceTransactions.list input type [] values

- `"payment"`
- `"refund"`
- `"dispute"`
- `"dispute_reversal"`
- `"return"`
- `"recovery"`
- `"payout"`
- `"payout_failure"`
- `"payout_cancellation"`
- `"payout_reversal"`
- `"payout_advance"`
- `"payout_advance_funding"`
- `"reserve_hold"`
- `"reserve_release"`
- `"adjustment"`
- `"merchant_billing_collection"`
- `"merchant_billing_collection_reversal"`

#### Response

Returned payload: [BalanceTransactionsListResponse200](../models/BalanceTransactionsListResponse200.md#balancetransactionslistresponse200).

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

```php
$result = $client->balanceTransactions->list([], new RequestOptions());
```

[Complete runnable example](../examples/balanceTransactions-list.php)

