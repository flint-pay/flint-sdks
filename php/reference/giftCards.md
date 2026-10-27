[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# giftCards

### giftCards.create

Creates a merchant-issued USD gift card with optional paid funding or imported opening value. External funding is merchant-attested and does not collect a payment. The full code is returned only by issuance or code replacement and their authorized retries for 24 hours, while that code remains current. Replacing a code ends recovery of that code. Financial command identity is retained for the lifetime of the ledger.

`POST /v1/gift-cards`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->giftCards->create([
  'currency' => 'USD',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/giftCards-create.php)

### giftCards.get

Retrieves the current gift card, including supported lifecycle actions and balance projections. A gift card ID does not authorize a buyer to spend it.

`GET /v1/gift-cards/{gift_card_id}`

Signature: `get(string|Model $gift_card_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string |  |

#### Response

Returned payload: [GiftCard](../models/GiftCard.md#giftcard).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->giftCards->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/giftCards-get.php)

### giftCards.list

Lists gift cards in descending ID order within the authenticated merchant and environment. Reads include masked codes, posted balance, reserved value and available value. Purchased cards have no expiry or service fees.

`GET /v1/gift-cards`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `customer_id` | Optional | string | pattern: `^cus_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items: maxLength: `255`. Items values: `"active"`, `"closed"`, `"frozen"`, `"pending"`. |

#### Response

Returned payload: [GiftCardsListResponse200](../models/GiftCardsListResponse200.md#giftcardslistresponse200).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->giftCards->list([], new RequestOptions());
```

[Complete runnable example](../examples/giftCards-list.php)

### giftCards.lookup

Evaluates a full bearer code in a request body. Codes contain 16 ASCII Crockford base32 characters, accept lowercase and hyphens, and normalize O to 0 and I/L to 1. Lookup is side-effect-free and never reserves funds. Unknown, other-merchant and unusable codes return the same error.

`POST /v1/gift-cards/lookup`

Signature: `lookup(array|Model $params, ?RequestOptions $options = null)`

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `lookupWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->giftCards->lookup([
  'code' => 'example',
], new RequestOptions());
```

[Complete runnable example](../examples/giftCards-lookup.php)

### giftCards.rotateCode

Invalidates the old bearer credential and generates a new code for the same gift card. Balances, funding, reservations and refund history are preserved. Requires commerce.gift_cards.secrets.write. Include notification to send the new private recipient link. Retired links cannot open the current code. The new full code is available in this response and authorized retries only within 24 hours, while that code remains current. expected_version fences the gift card version.

`POST /v1/gift-cards/{gift_card_id}/rotate-code`

Signature: `rotateCode(string|Model $gift_card_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [RotateGiftCardCodeRequestInput](../models/RotateGiftCardCodeRequestInput.md#rotategiftcardcoderequestinput) | The request body for: Replace a gift card code. |

Body model: [RotateGiftCardCodeRequestInput](../models/RotateGiftCardCodeRequestInput.md#rotategiftcardcoderequestinput).

#### giftCards.rotateCode body fields

Field definitions: [shared fields](../models/RotateGiftCardCodeRequestInput.md#rotategiftcardcoderequestinput). Models: [GiftCardNotificationRecipientInput](../models/GiftCardNotificationRecipientInput.md#giftcardnotificationrecipientinput).

#### Response

Returned payload: [RotateGiftCardCodeResult](../models/RotateGiftCardCodeResult.md#rotategiftcardcoderesult).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `rotateCodeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->giftCards->rotateCode('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/giftCards-rotateCode.php)

### giftCards.transition

Freezes spending, removes a merchant freeze, or closes a card after all value and restrictions are resolved. Unfreezing cannot remove unresolved funding-dispute restrictions. Freezing does not release accepted payment reservations. expected_version fences the gift card version.

`POST /v1/gift-cards/{gift_card_id}/transitions`

Signature: `transition(string|Model $gift_card_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [TransitionGiftCardRequestInput](../models/TransitionGiftCardRequestInput.md#transitiongiftcardrequestinput) | The request body for: Transition a gift card. |

Body model: [TransitionGiftCardRequestInput](../models/TransitionGiftCardRequestInput.md#transitiongiftcardrequestinput).

#### giftCards.transition body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"freeze"`, `"unfreeze"`, `"close"`. |
| `expected_version` | Optional | integer string | The gift card version last read. The command changes this card only when its current version matches. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `reason` | Optional | string | Values: `"suspicious_activity"`, `"customer_request"`, `"support_issue"`. |

#### giftCards.transition body oneOf variant 1

The `freeze` variant of `TransitionGiftCardRequest`.

Body model: [TransitionGiftCardRequestFreezeInput](../models/TransitionGiftCardRequestFreezeInput.md#transitiongiftcardrequestfreezeinput).

#### giftCards.transition body oneOf variant 1 fields

Field definitions: [shared fields](../models/TransitionGiftCardRequestFreezeInput.md#transitiongiftcardrequestfreezeinput).

#### giftCards.transition body oneOf variant 2

The `close` variant of `TransitionGiftCardRequest`. The `unfreeze` variant of `TransitionGiftCardRequest`.

Body model: [TransitionGiftCardRequestWithoutReasonInput](../models/TransitionGiftCardRequestWithoutReasonInput.md#transitiongiftcardrequestwithoutreasoninput).

#### giftCards.transition body oneOf variant 2 fields

Field definitions: [shared fields](../models/TransitionGiftCardRequestWithoutReasonInput.md#transitiongiftcardrequestwithoutreasoninput).

#### Response

Returned payload: [GiftCard](../models/GiftCard.md#giftcard).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `transitionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->giftCards->transition('example', [
  'action' => 'freeze',
  'reason' => 'suspicious_activity',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/giftCards-transition.php)

### giftCards.update

Updates descriptive associations. Omitted fields are preserved; null clears external_reference_id or customer_id. This operation cannot change balances, currency, code or status. expected_version fences the gift card version.

`PATCH /v1/gift-cards/{gift_card_id}`

Signature: `update(string|Model $gift_card_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateGiftCardRequestInput](../models/UpdateGiftCardRequestInput.md#updategiftcardrequestinput) | The request body for: Update a gift card. |

Body model: [UpdateGiftCardRequestInput](../models/UpdateGiftCardRequestInput.md#updategiftcardrequestinput).

#### giftCards.update body fields

Field definitions: [shared fields](../models/UpdateGiftCardRequestInput.md#updategiftcardrequestinput).

#### Response

Returned payload: [GiftCard](../models/GiftCard.md#giftcard).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->giftCards->update('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/giftCards-update.php)

