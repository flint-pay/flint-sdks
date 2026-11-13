[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# platformFeeBalanceTransactions

### platformFeeBalanceTransactions.get

Returns one entry of your partner apps' platform fee ledger. Reads the merchant that owns the partner app, with its own credentials and money_movement.platform_fees.read; partner app tokens can't. Live records are in your live environment. Test records are in your default sandbox at the time the payment was created. A merchant that owns no partner app gets an empty list.

`GET /v1/platform-fee-balance-transactions/{platform_fee_balance_transaction_id}`

Signature:

```typescript
get(platform_fee_balance_transaction_id: InputValue<string>,
 params?: PlatformFeeBalanceTransactionsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `platform_fee_balance_transaction_id` | Required | string | Flint platform fee balance transaction ID. |

#### Response

Returned payload: [PlatformFeeBalanceTransaction](../models/PlatformFeeBalanceTransaction.md#platformfeebalancetransaction).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
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
const result = await client.platformFeeBalanceTransactions.get("pfbt_01KEZF7C0079KPKMAHC7C60G1T", {}, {  });
```

[Complete runnable example](../examples/platformFeeBalanceTransactions-get.mjs)

### platformFeeBalanceTransactions.list

Lists your partner apps' platform fee ledger, newest occurred_at first, then by platform_fee_balance_transaction_id. Reads the merchant that owns the partner app, with its own credentials and money_movement.platform_fees.read; partner app tokens can't. Live records are in your live environment. Test records are in your default sandbox at the time the payment was created. A merchant that owns no partner app gets an empty list. Default order: occurred_at descending, then platform_fee_balance_transaction_id descending.

`GET /v1/platform-fee-balance-transactions`

Signature: `list(params?: PlatformFeeBalanceTransactionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `partner_app_id` | Optional | string | Exact match on the partner app. minLength: `1`. pattern: `^papp_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `platform_fee_id` | Optional | string | Exact match on the fee the entry concerns. minLength: `1`. pattern: `^pfee_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `platform_fee_payout_id` | Optional | string | Exact match on the payout that carried the entry. minLength: `1`. pattern: `^pfpo_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `type` | Optional | Array of string or string | Types to include. Omit it to list every type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [9 declared values](#platformfeebalancetransactionslist-input-type--values). Values: [9 declared values](#platformfeebalancetransactionslist-input-type-values). |
| `occurred_after` | Optional | string | Inclusive lower bound on occurred_at. Format: `date-time`. |
| `occurred_before` | Optional | string | Exclusive upper bound on occurred_at. Format: `date-time`. |

#### platformFeeBalanceTransactions.list input type [] values

- `"platform_fee"`
- `"reserve_hold"`
- `"reserve_release"`
- `"loss_coverage"`
- `"loss_coverage_reversal"`
- `"platform_fee_refund"`
- `"platform_fee_refund_reversal"`
- `"platform_fee_payout"`
- `"platform_fee_payout_reversal"`

#### platformFeeBalanceTransactions.list input type values

- `"platform_fee"`
- `"reserve_hold"`
- `"reserve_release"`
- `"loss_coverage"`
- `"loss_coverage_reversal"`
- `"platform_fee_refund"`
- `"platform_fee_refund_reversal"`
- `"platform_fee_payout"`
- `"platform_fee_payout_reversal"`

#### Response

Returned payload: [PlatformFeeBalanceTransactionListResponse](../models/PlatformFeeBalanceTransactionListResponse.md#platformfeebalancetransactionlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
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
const result = await client.platformFeeBalanceTransactions.list({}, {  });
```

[Complete runnable example](../examples/platformFeeBalanceTransactions-list.mjs)

