[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# giftCardRedemptions

### giftCardRedemptions.cancel

Releases an uncaptured standalone reservation without posting a debit or refund. Flint order reservations cannot be released while a processor outcome is unresolved. expected_version fences the redemption version.

`POST /v1/gift-card-redemptions/{gift_card_redemption_id}/cancel`

Signature: `cancel(string|Model $gift_card_redemption_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_redemption_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [GiftCardVersionRequestInput](../models/GiftCardVersionRequestInput.md#giftcardversionrequestinput) | Optional version fence for the redemption being captured or canceled. |

#### Response

Returned payload: [GiftCardRedemptionResult](../models/GiftCardRedemptionResult.md#giftcardredemptionresult).

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

Complete body and metadata: `cancelWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->giftCardRedemptions->cancel('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
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

Complete body and metadata: `captureWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->giftCardRedemptions->capture('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/giftCardRedemptions-capture.php)

### giftCardRedemptions.create

Posts an exact amount automatically or reserves it for one full manual capture. Insufficient funds are rejected without a partial debit. Manual reservations default to 15 minutes and may be bounded up to 24 hours. External integrations coordinate and compensate their other tenders themselves. expected_version fences the version of the card in gift_card_id.

`POST /v1/gift-card-redemptions`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateGiftCardRedemptionRequestInput](../models/CreateGiftCardRedemptionRequestInput.md#creategiftcardredemptionrequestinput) | The request body for: Redeem gift card value. |

Body model: [CreateGiftCardRedemptionRequestInput](../models/CreateGiftCardRedemptionRequestInput.md#creategiftcardredemptionrequestinput).

#### giftCardRedemptions.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capture_mode` | Required | string | Values: `"automatic"`, `"manual"`. |
| `expected_version` | Optional | integer string | The gift card version last read. The command changes this card only when its current version matches. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `gift_card_id` | Required | string | minLength: `1`. |
| `sale_reference` | Required | string | Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The value is preserved exactly as sent. minLength: `1`. maxLength: `255`. |

#### giftCardRedemptions.create body oneOf variant 1

The `automatic` variant of `CreateGiftCardRedemptionRequest`.

Body model: [CreateGiftCardRedemptionRequestAutomaticInput](../models/CreateGiftCardRedemptionRequestAutomaticInput.md#creategiftcardredemptionrequestautomaticinput).

#### giftCardRedemptions.create body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capture_mode` | Required | string | Values: `"automatic"`. |
| `expected_version` | Optional | integer string | The gift card version last read. The command changes this card only when its current version matches. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `gift_card_id` | Required | string | minLength: `1`. |
| `sale_reference` | Required | string | Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The value is preserved exactly as sent. minLength: `1`. maxLength: `255`. |

#### giftCardRedemptions.create body oneOf variant 2

The `manual` variant of `CreateGiftCardRedemptionRequest`.

Body model: [CreateGiftCardRedemptionRequestManualInput](../models/CreateGiftCardRedemptionRequestManualInput.md#creategiftcardredemptionrequestmanualinput).

#### giftCardRedemptions.create body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capture_mode` | Required | string | Values: `"manual"`. |
| `expected_version` | Optional | integer string | The gift card version last read. The command changes this card only when its current version matches. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `gift_card_id` | Required | string | minLength: `1`. |
| `sale_reference` | Required | string | Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The value is preserved exactly as sent. minLength: `1`. maxLength: `255`. |

#### Response

Returned payload: [GiftCardRedemptionResult](../models/GiftCardRedemptionResult.md#giftcardredemptionresult).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->giftCardRedemptions->create([
  'amount_money' => (object) [
    'amount' => '100',
    'currency' => 'USD',
  ],
  'capture_mode' => 'automatic',
  'gift_card_id' => 'example',
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
| `gift_card_redemption_id` | Required | string |  |

#### Response

Returned payload: [GiftCardRedemption](../models/GiftCardRedemption.md#giftcardredemption).

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

```php
$result = $client->giftCardRedemptions->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/giftCardRedemptions-get.php)

### giftCardRedemptions.list

Lists reservations and captured redemptions in descending ID order. Retrieve by idempotency_key to recover an operation after a lost response.

`GET /v1/gift-card-redemptions`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `gift_card_id` | Optional | string | maxLength: `255`. |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |
| `order_id` | Optional | string | maxLength: `255`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `sale_reference` | Optional | string | minLength: `1`. maxLength: `255`. |
| `source_type` | Optional | Array of string | minItems: `1`. Items: maxLength: `255`. Items values: `"external"`, `"flint_order"`. |
| `status` | Optional | Array of string | minItems: `1`. Items: maxLength: `255`. Items values: `"canceled"`, `"captured"`, `"expired"`, `"reserved"`. |

#### Response

Returned payload: [GiftCardRedemptionsListResponse200](../models/GiftCardRedemptionsListResponse200.md#giftcardredemptionslistresponse200).

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

```php
$result = $client->giftCardRedemptions->list([], new RequestOptions());
```

[Complete runnable example](../examples/giftCardRedemptions-list.php)

