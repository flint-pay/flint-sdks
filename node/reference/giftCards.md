[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# giftCards

### giftCards.adjustBalance

Posts a relative correction with a typed reason and separate administrative authority. Corrections cannot consume reserved funds, exceed funding limits, or replace linked refunds and purchase reversals. expected_version fences the gift card version.

`POST /v1/gift-cards/{gift_card_id}/adjust-balance`

Signature:

```typescript
adjustBalance(gift_card_id: InputValue<string>,
 params: GiftCardsAdjustBalanceParams,
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string | Flint resource ID. |
| `body` | Required | [AdjustGiftCardBalanceRequestInput](../models/AdjustGiftCardBalanceRequest.md#adjustgiftcardbalancerequest) | The request body for: Adjust gift card value. |

Body model: [AdjustGiftCardBalanceRequestInput](../models/AdjustGiftCardBalanceRequest.md#adjustgiftcardbalancerequest).

#### giftCards.adjustBalance body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [SignedMoneyRequestInput](../models/SignedMoneyRequestInput.md#signedmoneyrequestinput) | Nonzero USD amount to change the card's value by: positive adds value and negative removes it. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_version` | Optional | integer | The gift card version last read. The command changes this card only when its current version matches. Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Why you're adjusting the value. A negative amount_money takes suspicious_activity, balance_accidentally_increased, or support_issue; a positive one takes complimentary, balance_accidentally_decreased, or support_issue. Values: `"complimentary"`, `"balance_accidentally_decreased"`, `"support_issue"`, `"suspicious_activity"`, `"balance_accidentally_increased"`. |

#### Response

Returned payload: [AdjustGiftCardBalanceResult](../models/AdjustGiftCardBalanceResult.md#adjustgiftcardbalanceresult).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
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

const result = await client.giftCards.adjustBalance("gc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {amount_money: {amount: "100", currency: "USD"}, reason: "complimentary"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/giftCards-adjustBalance.mjs)

### giftCards.cashOut

Records cash that the merchant attests it paid to the cardholder. Flint does not send cash. The amount cannot exceed available value or consume payment reservations; cash_out_reference identifies the cash disbursement the merchant made outside Flint. expected_version fences the gift card version.

`POST /v1/gift-cards/{gift_card_id}/cash-out`

Signature: `cashOut(gift_card_id: InputValue<string>, params: GiftCardsCashOutParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string | Flint resource ID. |
| `body` | Required | [CashOutGiftCardRequestInput](../models/CashOutGiftCardRequest.md#cashoutgiftcardrequest) | The request body for: Record a cash-out. |

Body model: [CashOutGiftCardRequestInput](../models/CashOutGiftCardRequest.md#cashoutgiftcardrequest).

#### giftCards.cashOut body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `cash_out_reference` | Required | string | Your reference for the cash you paid the buyer outside Flint, such as a receipt number. Required; 1 to 255 characters. The value is preserved exactly as sent. minLength: `1`. maxLength: `255`. |
| `expected_version` | Optional | integer | The gift card version last read. The command changes this card only when its current version matches. Format: `int64`. minimum: `1`. |

#### Response

Returned payload: [CashOutGiftCardResult](../models/CashOutGiftCardResult.md#cashoutgiftcardresult).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
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

const result = await client.giftCards.cashOut("gc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {amount_money: {amount: "100", currency: "USD"}, cash_out_reference: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/giftCards-cashOut.mjs)

### giftCards.create

Creates a merchant-issued USD gift card with optional paid funding or imported opening value. External funding is merchant-attested and does not collect a payment. The full code is returned only by issuance or code replacement and their authorized retries for 24 hours, while that code remains current. Replacing a code ends recovery of that code. Financial command identity is retained for the lifetime of the ledger.

`POST /v1/gift-cards`

Signature: `create(params: GiftCardsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateGiftCardRequestInput](../models/CreateGiftCardRequestInput.md#creategiftcardrequestinput) | The request body for: Create a gift card. |

Body model: [CreateGiftCardRequestInput](../models/CreateGiftCardRequestInput.md#creategiftcardrequestinput).

#### giftCards.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Values: `"USD"`. |
| `customer_id` | Optional | string | minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `funding` | Optional | [InitialGiftCardFundingInput](../models/InitialGiftCardFundingInput.md#initialgiftcardfundinginput) or null |  |
| `notification` | Optional | [GiftCardNotificationRecipientInput](../models/GiftCardNotificationRecipientInput.md#giftcardnotificationrecipientinput) | Optional recipient notification recorded with issuance. Requires commerce.gift_cards.secrets.write in addition to issuance authority. Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time. |

#### Response

Returned payload: [CreateGiftCardResult](../models/CreateGiftCardResult.md#creategiftcardresult).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
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

const result = await client.giftCards.create({currency: "USD"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/giftCards-create.mjs)

### giftCards.createLoad

Adds positive value with separately recorded consideration and funding provenance. Limits apply to externally funded value and imports as well as Flint-funded sales. Loading a pending card activates it; loading a frozen card does not remove its restrictions. expected_version fences the gift card version.

`POST /v1/gift-cards/{gift_card_id}/loads`

Signature:

```typescript
createLoad(gift_card_id: InputValue<string>,
 params: GiftCardsCreateLoadParams,
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string | Flint resource ID. |
| `body` | Required | [CreateGiftCardLoadRequestInput](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinput) | The request body for: Load a gift card. |

Body model: [CreateGiftCardLoadRequestInput](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinput).

#### giftCards.createLoad body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null |  |
| `expected_version` | Optional | integer | The gift card version last read. The command changes this card only when its current version matches. Format: `int64`. minimum: `1`. |
| `source` | Required | [GiftCardFundingSourceInput](../models/GiftCardFundingSourceInput.md#giftcardfundingsourceinput) | Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. |
| `source_created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `value_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

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
| 410 | ApiError |
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

const result = await client.giftCards.createLoad("gc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {consideration_money: {amount: "100", currency: "USD"}, source: {customer_id: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV", external_reference_id: "example", funding_source_type: "external_payment"}, value_money: {amount: "100", currency: "USD"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/giftCards-createLoad.mjs)

### giftCards.get

Retrieves the current gift card, including supported lifecycle actions and balance projections. A gift card ID does not authorize a buyer to spend it.

`GET /v1/gift-cards/{gift_card_id}`

Signature: `get(gift_card_id: InputValue<string>, params?: GiftCardsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string | Flint resource ID. |

#### Response

Returned payload: [GiftCard](../models/GiftCard.md#giftcard).

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

#### Example

```typescript
const result = await client.giftCards.get("gc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/giftCards-get.mjs)

### giftCards.list

Lists gift cards in descending ID order within the authenticated merchant and environment. Reads include masked codes, posted balance, reserved value and available value. Purchased cards have no expiry or service fees. Default order: gift_card_id descending; this key uniquely orders the results.

`GET /v1/gift-cards`

Signature: `list(params?: GiftCardsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `customer_id` | Optional | string | Exact, case-sensitive filter on the customer stored on the gift card. An unknown customer returns an empty page. pattern: `^cus_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Exact, case-sensitive filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"closed"`, `"frozen"`, `"pending"`. Values: `"active"`, `"closed"`, `"frozen"`, `"pending"`. |

#### Response

Returned payload: [GiftCardListResponse](../models/GiftCardListResponse.md#giftcardlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
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
const result = await client.giftCards.list({}, {  });
```

[Complete runnable example](../examples/giftCards-list.mjs)

### giftCards.lookup

Evaluates a full bearer code in a request body. Codes contain 16 ASCII Crockford base32 characters, accept lowercase and hyphens, and normalize O to 0 and I/L to 1. Lookup is side-effect-free and never reserves funds. Unknown, other-merchant and unusable codes return the same error.

`POST /v1/gift-cards/lookup`

Signature: `lookup(params: GiftCardsLookupParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [LookupGiftCardRequestInput](../models/LookupGiftCardRequestInput.md#lookupgiftcardrequestinput) | The request body for: Look up a gift card code. |

Body model: [LookupGiftCardRequestInput](../models/LookupGiftCardRequestInput.md#lookupgiftcardrequestinput).

#### giftCards.lookup body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | minLength: `1`. |

#### Response

Returned payload: [GiftCard](../models/GiftCard.md#giftcard).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.giftCards.lookup({code: "example"}, {  });
```

[Complete runnable example](../examples/giftCards-lookup.mjs)

### giftCards.rotateCode

Invalidates the old bearer credential and generates a new code for the same gift card. Balances, funding, reservations and refund history are preserved. Requires commerce.gift_cards.secrets.write. Include notification to send the new private recipient link. Retired links cannot open the current code. The new full code is available in this response and authorized retries only within 24 hours, while that code remains current. expected_version fences the gift card version.

`POST /v1/gift-cards/{gift_card_id}/rotate-code`

Signature: `rotateCode(gift_card_id: InputValue<string>, params: GiftCardsRotateCodeParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string | Flint resource ID. |
| `body` | Required | [RotateGiftCardCodeRequestInput](../models/RotateGiftCardCodeRequest.md#rotategiftcardcoderequest) | The request body for: Replace a gift card code. |

Body model: [RotateGiftCardCodeRequestInput](../models/RotateGiftCardCodeRequest.md#rotategiftcardcoderequest).

#### giftCards.rotateCode body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | The gift card version last read. The command changes this card only when its current version matches. Format: `int64`. minimum: `1`. |
| `notification` | Optional | [GiftCardNotificationRecipientInput](../models/GiftCardNotificationRecipientInput.md#giftcardnotificationrecipientinput) | Explicitly send or schedule the replacement code through private recipient access. Requires commerce.gift_cards.secrets.write. Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time. |

#### Response

Returned payload: [RotateGiftCardCodeResult](../models/RotateGiftCardCodeResult.md#rotategiftcardcoderesult).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
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

const result = await client.giftCards.rotateCode("gc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/giftCards-rotateCode.mjs)

### giftCards.transition

Freezes spending, removes a merchant freeze, or closes a card after all value and restrictions are resolved. Unfreezing cannot remove unresolved funding-dispute restrictions. Freezing does not release accepted payment reservations. expected_version fences the gift card version.

`POST /v1/gift-cards/{gift_card_id}/transitions`

Signature: `transition(gift_card_id: InputValue<string>, params: GiftCardsTransitionParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string | Flint resource ID. |
| `body` | Required | [TransitionGiftCardRequestInput](../models/TransitionGiftCardRequest.md#transitiongiftcardrequest) | The request body for: Transition a gift card. |

Body model: [TransitionGiftCardRequestInput](../models/TransitionGiftCardRequest.md#transitiongiftcardrequest).

#### giftCards.transition body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"freeze"`, `"unfreeze"`, `"close"`. |
| `expected_version` | Optional | integer | The gift card version last read. The command changes this card only when its current version matches. Format: `int64`. minimum: `1`. |
| `reason` | Optional | string | Values: `"suspicious_activity"`, `"customer_request"`, `"support_issue"`. |

#### giftCards.transition with `action: "freeze"`

The `freeze` variant of `TransitionGiftCardRequest`.

Body model: [TransitionGiftCardRequestFreezeInput](../models/TransitionGiftCardRequestFreeze.md#transitiongiftcardrequestfreeze).

#### giftCards.transition with `action: "close" | "unfreeze"`

The `close` variant of `TransitionGiftCardRequest`. The `unfreeze` variant of `TransitionGiftCardRequest`.

Body model: [TransitionGiftCardRequestWithoutReasonInput](../models/TransitionGiftCardRequestWithoutReason.md#transitiongiftcardrequestwithoutreason).

#### Response

Returned payload: [GiftCard](../models/GiftCard.md#giftcard).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
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

const result = await client.giftCards.transition("gc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {action: "freeze", reason: "suspicious_activity"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/giftCards-transition.mjs)

### giftCards.update

Updates descriptive associations. Omitted fields are preserved; null clears external_reference_id or customer_id. This operation cannot change balances, currency, code or status. expected_version fences the gift card version.

`PATCH /v1/gift-cards/{gift_card_id}`

Signature: `update(gift_card_id: InputValue<string>, params: GiftCardsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string | Flint resource ID. |
| `body` | Required | [UpdateGiftCardRequestInput](../models/UpdateGiftCardRequest.md#updategiftcardrequest) | The request body for: Update a gift card. |

Body model: [UpdateGiftCardRequestInput](../models/UpdateGiftCardRequest.md#updategiftcardrequest).

#### giftCards.update body fields

Field definitions: [shared fields](../models/UpdateGiftCardRequest.md#updategiftcardrequest).

#### Response

Returned payload: [GiftCard](../models/GiftCard.md#giftcard).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
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

const result = await client.giftCards.update("gc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {external_reference_id: "gift-card-2026-001"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/giftCards-update.mjs)

