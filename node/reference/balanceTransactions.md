[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# balanceTransactions

### balanceTransactions.get

Returns one balance transaction by ID, with optional related order expansion.

`GET /v1/balance-transactions/{balance_transaction_id}`

Signature:

```typescript
get(balance_transaction_id: InputValue<string>,
 params?: BalanceTransactionsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `balance_transaction_id` | Required | string | Flint balance transaction ID. |
| `expand` | Optional | Array of string or string | Supported expansions: order. Expansion requires money_movement.balance_transactions.read plus commerce.orders.read. Limits: at most 10 unique expand paths per request. Pass expand=order. Items values: `"order"`. Values: `"order"`. |

#### Response

Returned payload: [BalanceTransaction](../models/BalanceTransaction.md#balancetransaction).

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

```typescript
const result = await client.balanceTransactions.get("btxn_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/balanceTransactions-get.mjs)

### balanceTransactions.list

Returns a paginated ledger of balance-affecting transactions, including availability timing and related public resources. Default order: created_at descending, then balance_transaction_id descending.

`GET /v1/balance-transactions`

Signature: `list(params?: BalanceTransactionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `payout_id` | Optional | string | Lists the balance transactions this payout carried, newest first. Their `net_money` sums to the payout's `amount_money`. Works in any payout status once the payout's contents are prepared, usually minutes after it is created. Returns `503 SERVICE_UNAVAILABLE` with `Retry-After` while they are prepared, and `409 ACTION_NOT_ALLOWED` with `reason: not_itemized` for a payout that doesn't list its contents, such as a manual payout. |
| `order_id` | Optional | string | Exact-match filter on `order_id`. |
| `expand` | Optional | Array of string or string | Supported expansions: order. Each expansion resolves with one batched lookup per page. Expansion requires money_movement.balance_transactions.read plus commerce.orders.read. Limits: at most 10 unique expand paths per request. Pass expand=order. Items values: `"order"`. Values: `"order"`. |
| `type` | Optional | Array of string or string | Optional balance transaction type filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [17 declared values](#balancetransactionslist-input-type--values). Values: [17 declared values](#balancetransactionslist-input-type--values). |
| `related_resource_type` | Optional | Array of string or string | Filter by related_resource.resource_type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"payment_intent"`, `"refund"`, `"dispute"`, `"payout"`, `"payout_destination"`, `"merchant_billing_invoice"`. Values: `"payment_intent"`, `"refund"`, `"dispute"`, `"payout"`, `"payout_destination"`, `"merchant_billing_invoice"`. |
| `related_resource_id` | Optional | string | Filter by related_resource.resource_id. |
| `status` | Optional | Array of string or string | Optional balance transaction status filter. Without it, the list returns transactions in every status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"available"`. Values: `"pending"`, `"available"`. |
| `occurred_after` | Optional | string | Inclusive lower bound on occurred_at. Format: `date-time`. |
| `occurred_before` | Optional | string | Exclusive upper bound on occurred_at. Format: `date-time`. |
| `available_after` | Optional | string | Inclusive lower bound on available_at. Format: `date-time`. |
| `available_before` | Optional | string | Exclusive upper bound on available_at. Format: `date-time`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

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

Returned payload: [BalanceTransactionListResponse](../models/BalanceTransactionListResponse.md#balancetransactionlistresponse).

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

```typescript
const result = await client.balanceTransactions.list({}, {  });
```

[Complete runnable example](../examples/balanceTransactions-list.mjs)

