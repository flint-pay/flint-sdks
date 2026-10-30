[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# giftCardRedemptions

### giftCardRedemptions.cancel

Releases an uncaptured standalone reservation without posting a debit or refund. Flint order reservations cannot be released while a processor outcome is unresolved. expected_version fences the redemption version.

`POST /v1/gift-card-redemptions/{gift_card_redemption_id}/cancel`

Signature: `cancel(string|Model $gift_card_redemption_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_redemption_id` | Required | string | Flint resource ID. |
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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->giftCardRedemptions->cancel('gcr_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/giftCardRedemptions-cancel.php)

### giftCardRedemptions.capture

Posts the full reserved amount before the manual reservation expires. Capturing and expiry use the same concurrency fence. Flint order reservations are resolved by their payment attempt and cannot be captured through this standalone operation. expected_version fences the redemption version.

`POST /v1/gift-card-redemptions/{gift_card_redemption_id}/capture`

Signature: `capture(string|Model $gift_card_redemption_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->giftCardRedemptions->capture('gcr_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/giftCardRedemptions-capture.php)

### giftCardRedemptions.create

Posts an exact amount automatically or reserves it for one full manual capture. Insufficient funds are rejected without a partial debit. Manual reservations default to 15 minutes and may be bounded up to 24 hours. External integrations coordinate and compensate their other tenders themselves. expected_version fences the version of the card in gift_card_id.

`POST /v1/gift-card-redemptions`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateGiftCardRedemptionRequestInput](../models/CreateGiftCardRedemptionRequestInput.md#creategiftcardredemptionrequestinput) | The request body for: Redeem gift card value. |

Body model: [CreateGiftCardRedemptionRequestInput](../models/CreateGiftCardRedemptionRequestInput.md#creategiftcardredemptionrequestinput).

#### giftCardRedemptions.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemflatmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capture_mode` | Required | string | Values: `"automatic"`, `"manual"`. |
| `expected_version` | Optional | integer | The gift card version last read. The command changes this card only when its current version matches. Format: `int64`. minimum: `1`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `gift_card_id` | Required | string | minLength: `1`. |
| `sale_reference` | Required | string | Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The value is preserved exactly as sent. minLength: `1`. maxLength: `255`. |

#### giftCardRedemptions.create with `capture_mode: "automatic"`

The `automatic` variant of `CreateGiftCardRedemptionRequest`.

Body model: [CreateGiftCardRedemptionRequestAutomaticInput](../models/CreateGiftCardRedemptionRequestAutomaticInput.md#creategiftcardredemptionrequestautomaticinput).

#### giftCardRedemptions.create with `capture_mode: "manual"`

The `manual` variant of `CreateGiftCardRedemptionRequest`.

Body model: [CreateGiftCardRedemptionRequestManualInput](../models/CreateGiftCardRedemptionRequestManualInput.md#creategiftcardredemptionrequestmanualinput).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->giftCardRedemptions->create([
  'amount_money' => (object) [
    'amount' => '100',
    'currency' => 'USD',
  ],
  'capture_mode' => 'automatic',
  'gift_card_id' => 'gc_01ARZ3NDEKTSV4RRFFQ69G5FAV',
  'sale_reference' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/giftCardRedemptions-create.php)

### giftCardRedemptions.get

Retrieves requested, reserved, captured, refunded and remaining refundable value with the current reservation status.

`GET /v1/gift-card-redemptions/{gift_card_redemption_id}`

Signature: `get(string|Model $gift_card_redemption_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_redemption_id` | Required | string | Flint resource ID. |

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

```php
$result = $client->giftCardRedemptions->get('gcr_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/giftCardRedemptions-get.php)

### giftCardRedemptions.list

Lists reservations and captured redemptions in descending ID order. Retrieve by idempotency_key to recover an operation after a lost response. Default order: gift_card_redemption_id descending; this key uniquely orders the results.

`GET /v1/gift-card-redemptions`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `gift_card_id` | Optional | string | Exact, case-sensitive filter. maxLength: `255`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `order_id` | Optional | string | Exact, case-sensitive filter. maxLength: `255`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `sale_reference` | Optional | string | Exact, case-sensitive filter on your reference for the sale. Matches only external redemptions. minLength: `1`. maxLength: `255`. |
| `source_type` | Optional | Array of string or string | Exact, case-sensitive filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"external"`, `"flint_order"`. Values: `"external"`, `"flint_order"`. |
| `status` | Optional | Array of string or string | Exact, case-sensitive filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"canceled"`, `"captured"`, `"expired"`, `"reserved"`. Values: `"canceled"`, `"captured"`, `"expired"`, `"reserved"`. |

#### Response

Returned payload: [GiftCardRedemptionListResponse](../models/GiftCardRedemptionListResponse.md#giftcardredemptionlistresponse).

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

```php
$result = $client->giftCardRedemptions->list([], new RequestOptions());
```

[Complete runnable example](../examples/giftCardRedemptions-list.php)

