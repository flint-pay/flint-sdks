[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# giftCardTransactions

### giftCardTransactions.list

Lists immutable financial entries across the merchant in ascending merchant_sequence order. Per-card sequences and balance snapshots support reconciliation. Reservations and code replacement never create financial debits. Default order: merchant_sequence ascending; this key uniquely orders the results.

`GET /v1/gift-card-transactions`

Signature: `list(params?: GiftCardTransactionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cash_out_reference` | Optional | string | Exact, case-sensitive filter on your reference for the cash paid to the buyer outside Flint. Matches only cash_out transactions. minLength: `1`. maxLength: `255`. |
| `gift_card_id` | Optional | string | Exact, case-sensitive filter. maxLength: `255`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `order_id` | Optional | string | Exact, case-sensitive filter. maxLength: `255`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `posted_after` | Optional | string | Inclusive lower bound on posted_at. Format: `date-time`. |
| `posted_before` | Optional | string | Exclusive upper bound on posted_at. Format: `date-time`. |
| `source_id` | Optional | string | Exact, case-sensitive filter. maxLength: `255`. |
| `source_type` | Optional | Array of string or string | Exact, case-sensitive filter. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"gift_card_funding_disposition"`, `"gift_card_load"`, `"gift_card_redemption"`, `"purchase_refund_allocation"`, `"refund"`, `"refund_allocation"`. Values: `"gift_card_funding_disposition"`, `"gift_card_load"`, `"gift_card_redemption"`, `"purchase_refund_allocation"`, `"refund"`, `"refund_allocation"`. |
| `transaction_type` | Optional | Array of string or string | Filter by transaction_type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [11 declared values](#giftcardtransactionslist-input-transaction_type--values). Values: [11 declared values](#giftcardtransactionslist-input-transaction_type-values). |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### giftCardTransactions.list input transaction_type [] values

- `"load"`
- `"import"`
- `"redeem"`
- `"refund"`
- `"refund_transfer"`
- `"adjustment"`
- `"cash_out"`
- `"purchase_reversal"`
- `"funding_loss_accepted"`
- `"purchase_refund_recovery"`
- `"purchase_refund_recovery_transfer"`

#### giftCardTransactions.list input transaction_type values

- `"load"`
- `"import"`
- `"redeem"`
- `"refund"`
- `"refund_transfer"`
- `"adjustment"`
- `"cash_out"`
- `"purchase_reversal"`
- `"funding_loss_accepted"`
- `"purchase_refund_recovery"`
- `"purchase_refund_recovery_transfer"`

#### Response

Returned payload: [GiftCardTransactionListResponse](../models/GiftCardTransactionListResponse.md#giftcardtransactionlistresponse).

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
const result = await client.giftCardTransactions.list({}, {  });
```

[Complete runnable example](../examples/giftCardTransactions-list.mjs)

