[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# giftCardRedemptions

### giftCardRedemptions.cancel

Releases an uncaptured standalone reservation without posting a debit or refund. Flint order reservations cannot be released while a processor outcome is unresolved. expected_version fences the redemption version.

`POST /v1/gift-card-redemptions/{gift_card_redemption_id}/cancel`

Signature: `cancel(gift_card_redemption_id: InputValue<string>, params?: GiftCardRedemptionsCancelParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_redemption_id` | Required | string | Flint resource ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [GiftCardVersionRequestInput](../models/GiftCardVersionRequestInput.md#giftcardversionrequestinput) | Optional version fence for the redemption being captured or canceled. |

#### Response

Returned payload: [GiftCardRedemptionResult](../models/GiftCardRedemptionResult.md#giftcardredemptionresult).

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

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.giftCardRedemptions.cancel("gcr_01KEZF7C002YD2G2J734RRZTWT", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/giftCardRedemptions-cancel.mjs)

### giftCardRedemptions.capture

Posts the full reserved amount before the manual reservation expires. Capturing and expiry use the same concurrency fence. Flint order reservations are resolved by their payment attempt and cannot be captured through this standalone operation. expected_version fences the redemption version.

`POST /v1/gift-card-redemptions/{gift_card_redemption_id}/capture`

Signature: `capture(gift_card_redemption_id: InputValue<string>, params?: GiftCardRedemptionsCaptureParams, options?: RequestOptions<"merchant">)`

#### Request fields

Field definitions: [shared fields](#request-fields). Models: [GiftCardVersionRequestInput](../models/GiftCardVersionRequestInput.md#giftcardversionrequestinput).

#### Response

Returned payload: [GiftCardRedemptionResult](../models/GiftCardRedemptionResult.md#giftcardredemptionresult).

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

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.giftCardRedemptions.capture("gcr_01KEZF7C002YD2G2J734RRZTWT", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/giftCardRedemptions-capture.mjs)

### giftCardRedemptions.create

Posts an exact amount automatically or reserves it for one full manual capture. Insufficient funds are rejected without a partial debit. Manual reservations default to 15 minutes and may be bounded up to 24 hours. External integrations coordinate and compensate their other tenders themselves. expected_gift_card_version fences the version of the card in gift_card_id.

`POST /v1/gift-card-redemptions`

Signature: `create(params: GiftCardRedemptionsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateGiftCardRedemptionRequestInput](../models/CreateGiftCardRedemptionRequest.md#creategiftcardredemptionrequest) | The request body for: Redeem gift card value. |

Body model: [CreateGiftCardRedemptionRequestInput](../models/CreateGiftCardRedemptionRequest.md#creategiftcardredemptionrequest).

#### giftCardRedemptions.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The amount to redeem from the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capture_mode` | Required | string | Whether the redemption spends the value now or reserves it to capture later. Values: `"automatic"`, `"manual"`. |
| `expected_gift_card_version` | Optional | integer | The gift card version last read. The command changes this card only when its current version matches. Format: `int64`. minimum: `1`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `gift_card_id` | Required | string | ID of the gift card the value is spent from. minLength: `1`. |
| `sale_reference` | Required | string | Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The value is preserved exactly as sent. minLength: `1`. maxLength: `255`. |

#### giftCardRedemptions.create with `capture_mode: "automatic"`

The `automatic` variant of `CreateGiftCardRedemptionRequest`.

Body model: [CreateGiftCardRedemptionRequestAutomaticInput](../models/CreateGiftCardRedemptionRequestAutomatic.md#creategiftcardredemptionrequestautomatic).

#### giftCardRedemptions.create with `capture_mode: "manual"`

The `manual` variant of `CreateGiftCardRedemptionRequest`.

Body model: [CreateGiftCardRedemptionRequestManualInput](../models/CreateGiftCardRedemptionRequestManual.md#creategiftcardredemptionrequestmanual).

#### Response

Returned payload: [GiftCardRedemptionResult](../models/GiftCardRedemptionResult.md#giftcardredemptionresult).

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

const result = await client.giftCardRedemptions.create({amount_money: {amount: "100", currency: "USD"}, capture_mode: "automatic", gift_card_id: "gc_01ARZ3NDEKTSV4RRFFQ69G5FAV", sale_reference: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/giftCardRedemptions-create.mjs)

### giftCardRedemptions.get

Retrieves requested, reserved, captured, refunded and remaining refundable value with the current reservation status.

`GET /v1/gift-card-redemptions/{gift_card_redemption_id}`

Signature:

```typescript
get(gift_card_redemption_id: InputValue<string>,
 params?: GiftCardRedemptionsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_redemption_id` | Required | string | Flint resource ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [GiftCardRedemption](../models/GiftCardRedemption.md#giftcardredemption).

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
const result = await client.giftCardRedemptions.get("gcr_01KEZF7C002YD2G2J734RRZTWT", {}, {  });
```

[Complete runnable example](../examples/giftCardRedemptions-get.mjs)

### giftCardRedemptions.list

Lists reservations and captured redemptions in descending ID order. Retrieve by idempotency_key to recover an operation after a lost response. Default order: gift_card_redemption_id descending; this key uniquely orders the results.

`GET /v1/gift-card-redemptions`

Signature: `list(params?: GiftCardRedemptionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `gift_card_id` | Optional | string | Exact, case-sensitive filter. maxLength: `255`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `order_id` | Optional | string | Exact, case-sensitive filter. maxLength: `255`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `sale_reference` | Optional | string | Exact, case-sensitive filter on your reference for the sale. Matches only external redemptions. minLength: `1`. maxLength: `255`. |
| `source_type` | Optional | Array of string or string | Exact, case-sensitive filter. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"external"`, `"flint_order"`. Values: `"external"`, `"flint_order"`. |
| `status` | Optional | Array of string or string | Exact, case-sensitive filter. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"canceled"`, `"expired"`, `"reserved"`, `"succeeded"`. Values: `"canceled"`, `"expired"`, `"reserved"`, `"succeeded"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [GiftCardRedemptionListResponse](../models/GiftCardRedemptionListResponse.md#giftcardredemptionlistresponse).

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
const result = await client.giftCardRedemptions.list({}, {  });
```

[Complete runnable example](../examples/giftCardRedemptions-list.mjs)

