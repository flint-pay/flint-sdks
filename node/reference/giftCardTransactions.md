[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# giftCardTransactions

### giftCardTransactions.list

Lists immutable financial entries across the merchant in ascending merchant_sequence order. Per-card sequences and balance snapshots support reconciliation. Reservations and code replacement never create financial debits.

`GET /v1/gift-card-transactions`

Signature:

```typescript
list(params?: {
  "cash_out_reference"?: InputValue<string>;
  "gift_card_id"?: InputValue<string>;
  "idempotency_key"?: InputValue<string>;
  "order_id"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "posted_after"?: InputValue<string | globalThis.Date>;
  "posted_before"?: InputValue<string | globalThis.Date>;
  "source_id"?: InputValue<string>;
  "source_type"?: InputValue<Array<"gift_card_funding_disposition" |
    "gift_card_load" |
    "gift_card_redemption" |
    "purchase_refund_allocation" |
    "refund" |
    "refund_allocation">>;
  "transaction_type"?: InputValue<Array<"load" |
    "import" |
    "redeem" |
    "refund" |
    "refund_transfer" |
    "adjustment" |
    "cash_out" |
    "purchase_reversal" |
    "funding_loss_accepted" |
    "purchase_refund_recovery" |
    "purchase_refund_recovery_transfer">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cash_out_reference` | Optional | string | minLength: `1`. maxLength: `255`. |
| `gift_card_id` | Optional | string | maxLength: `255`. |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |
| `order_id` | Optional | string | maxLength: `255`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `posted_after` | Optional | string | Format: `date-time`. |
| `posted_before` | Optional | string | Format: `date-time`. |
| `source_id` | Optional | string | maxLength: `255`. |
| `source_type` | Optional | Array of string | minItems: `1`. Items: maxLength: `255`. Items values: `"gift_card_funding_disposition"`, `"gift_card_load"`, `"gift_card_redemption"`, `"purchase_refund_allocation"`, `"refund"`, `"refund_allocation"`. |
| `transaction_type` | Optional | Array of string | minItems: `1`. Items values: [11 declared values](#giftcardtransactionslist-input-transaction_type--values). |

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

#### Response

Returned payload: [GiftCardTransactionListResponse](../models/GiftCardTransactionListResponse.md#giftcardtransactionlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
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
const result = await client.giftCardTransactions.list({}, {  });
```

[Complete runnable example](../examples/giftCardTransactions-list.mjs)

