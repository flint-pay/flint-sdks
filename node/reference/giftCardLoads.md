[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# giftCardLoads

### giftCardLoads.create

Adds positive value with separately recorded consideration and funding provenance. Limits apply to externally funded value and imports as well as Flint-funded sales. Loading a pending card activates it; loading a frozen card does not remove its restrictions. expected_gift_card_version fences the gift card version.

`POST /v1/gift-card-loads`

Signature: `create(params: GiftCardLoadsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateGiftCardLoadRequestInput](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinput) | The request body for: Load a gift card. |

Body model: [CreateGiftCardLoadRequestInput](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinput).

#### giftCardLoads.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded. |
| `expected_gift_card_version` | Optional | integer | The gift card version last read. The command changes this card only when its current version matches. Format: `int64`. minimum: `1`. |
| `gift_card_id` | Required | string | The gift card to load. minLength: `1`. |
| `source` | Required | [GiftCardFundingSourceRequestInput](../models/GiftCardFundingSourceRequestInput.md#giftcardfundingsourcerequestinput) | Where the value came from, with your reference for it. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. |
| `source_created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `value_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The face value the load adds to the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

#### Response

Returned payload: [CreateGiftCardLoadResult](../models/CreateGiftCardLoadResult.md#creategiftcardloadresult).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.giftCardLoads.create({consideration_money: {amount: "100", currency: "USD"}, gift_card_id: "gc_01ARZ3NDEKTSV4RRFFQ69G5FAV", source: {customer_id: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV", external_reference_id: "example", funding_source_type: "external_payment"}, value_money: {amount: "100", currency: "USD"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/giftCardLoads-create.mjs)

### giftCardLoads.get

Retrieves original value, consideration, funding provenance and remaining attributable value for one load.

`GET /v1/gift-card-loads/{gift_card_load_id}`

Signature: `get(gift_card_load_id: InputValue<string>, params?: GiftCardLoadsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_load_id` | Required | string | Flint resource ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [GiftCardLoad](../models/GiftCardLoad.md#giftcardload).

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
const result = await client.giftCardLoads.get("gcl_01KEZF7C00YJED2857SE0J6KWC", {}, {  });
```

[Complete runnable example](../examples/giftCardLoads-get.mjs)

### giftCardLoads.list

Lists funding lots in descending ID order. Consideration may be null for imported balances whose original purchase price is unknown. The idempotency_key filter recovers a load after a lost command response. Default order: gift_card_load_id descending; this key uniquely orders the results.

`GET /v1/gift-card-loads`

Signature: `list(params?: GiftCardLoadsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `funding_source_type` | Optional | Array of string or string | Exact, case-sensitive filter. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [8 declared values](#giftcardloadslist-input-funding_source_type--values). Values: [8 declared values](#giftcardloadslist-input-funding_source_type-values). |
| `gift_card_id` | Optional | string | Exact, case-sensitive filter. maxLength: `255`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `order_id` | Optional | string | Exact, case-sensitive filter. maxLength: `255`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `source_external_reference_id` | Optional | string | Exact, case-sensitive reference for the payment or import record that funded this value. minLength: `1`. maxLength: `255`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### giftCardLoads.list input funding_source_type [] values

- `"adjustment"`
- `"external_payment"`
- `"flint_manual_payment"`
- `"flint_payment"`
- `"gift_card_purchase_refund_recovery"`
- `"gift_card_refund"`
- `"import"`
- `"store_credit"`

#### giftCardLoads.list input funding_source_type values

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
const result = await client.giftCardLoads.list({}, {  });
```

[Complete runnable example](../examples/giftCardLoads-list.mjs)

