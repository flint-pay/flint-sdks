[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# giftCardLoads

### giftCardLoads.create

Adds positive value with separately recorded consideration and funding provenance. Limits apply to externally funded value and imports as well as Flint-funded sales. Loading a pending card activates it; loading a frozen card does not remove its restrictions. expected_version fences the gift card version.

`POST /v1/gift-cards/{gift_card_id}/loads`

Signature:

```typescript
create(gift_card_id: InputValue<string>,
 params: (InputValue<CreateGiftCardLoadRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateGiftCardLoadRequestInput](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinput) | The request body for: Load a gift card. |

Body model: [CreateGiftCardLoadRequestInput](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinput).

#### giftCardLoads.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null |  |
| `expected_version` | Optional | integer string | The gift card version last read. The command changes this card only when its current version matches. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `source` | Required | [GiftCardFundingSourceInput](../models/GiftCardFundingSourceInput.md#giftcardfundingsourceinput) | Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. |
| `source_created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `value_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

#### Response

Returned payload: [CreateGiftCardLoadResult](../models/CreateGiftCardLoadResult.md#creategiftcardloadresult).

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

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.giftCardLoads.create("example", {consideration_money: {amount: "100", currency: "USD"}, source: {customer_id: "example", external_reference_id: "example", funding_source_type: "external_payment"}, value_money: {amount: "100", currency: "USD"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/giftCardLoads-create.mjs)

### giftCardLoads.get

Retrieves original value, consideration, funding provenance and remaining attributable value for one load.

`GET /v1/gift-card-loads/{gift_card_load_id}`

Signature: `get(gift_card_load_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_load_id` | Required | string |  |

#### Response

Returned payload: [GiftCardLoad](../models/GiftCardLoad.md#giftcardload).

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
const result = await client.giftCardLoads.get("example", {}, {  });
```

[Complete runnable example](../examples/giftCardLoads-get.mjs)

### giftCardLoads.list

Lists funding lots in descending ID order. Consideration may be null for imported balances whose original purchase price is unknown. The idempotency_key filter recovers a load after a lost command response.

`GET /v1/gift-card-loads`

Signature:

```typescript
list(params?: {
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "funding_source_type"?: InputValue<Array<"adjustment" |
    "external_payment" |
    "flint_manual_payment" |
    "flint_payment" |
    "gift_card_purchase_refund_recovery" |
    "gift_card_refund" |
    "import" |
    "store_credit">>;
  "gift_card_id"?: InputValue<string>;
  "idempotency_key"?: InputValue<string>;
  "order_id"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "source_external_reference_id"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `funding_source_type` | Optional | Array of string | minItems: `1`. Items: maxLength: `255`. Items values: [8 declared values](#giftcardloadslist-input-funding_source_type--values). |
| `gift_card_id` | Optional | string | maxLength: `255`. |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |
| `order_id` | Optional | string | maxLength: `255`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `source_external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |

#### giftCardLoads.list input funding_source_type [] values

- `"adjustment"`
- `"external_payment"`
- `"flint_manual_payment"`
- `"flint_payment"`
- `"gift_card_purchase_refund_recovery"`
- `"gift_card_refund"`
- `"import"`
- `"store_credit"`

#### Response

Returned payload: [GiftCardLoadListResponse](../models/GiftCardLoadListResponse.md#giftcardloadlistresponse).

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
const result = await client.giftCardLoads.list({}, {  });
```

[Complete runnable example](../examples/giftCardLoads-list.mjs)

