[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# giftCardNotifications

### giftCardNotifications.cancel

Cancels a notification before sending starts or after confirmed failure. A sending or unconfirmed notification cannot be canceled. Gift card value is preserved.

`POST /v1/gift-card-notifications/{gift_card_notification_id}/cancel`

Signature: `cancel(string|Model $gift_card_notification_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_notification_id` | Required | string | Flint resource ID. |
| `body` | Optional | [CancelGiftCardNotificationRequestInput](../models/CancelGiftCardNotificationRequestInput.md#cancelgiftcardnotificationrequestinput) | The request body for: Cancel a gift card notification. |

Body model: [CancelGiftCardNotificationRequestInput](../models/CancelGiftCardNotificationRequestInput.md#cancelgiftcardnotificationrequestinput).

#### Response

Returned payload: [GiftCardNotification](../models/GiftCardNotification.md#giftcardnotification).

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

$result = $client->giftCardNotifications->cancel('gcn_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/giftCardNotifications-cancel.php)

### giftCardNotifications.create

Creates a recipient email notification, immediately or up to 90 days from now. A resend creates a new resource with resend_of_notification_id. An unconfirmed send must be resolved before another send is requested. Sending does not change gift card value or order fulfillment.

`POST /v1/gift-card-notifications`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateGiftCardNotificationRequestInput](../models/CreateGiftCardNotificationRequestInput.md#creategiftcardnotificationrequestinput) | The request body for: Send a gift card notification. |

Body model: [CreateGiftCardNotificationRequestInput](../models/CreateGiftCardNotificationRequestInput.md#creategiftcardnotificationrequestinput).

#### giftCardNotifications.create body fields

Field definitions: [shared fields](../models/CreateGiftCardNotificationRequestInput.md#creategiftcardnotificationrequestinput). Models: [GiftCardNotificationRecipientInput](../models/GiftCardNotificationRecipientInput.md#giftcardnotificationrecipientinput).

#### Response

Returned payload: [GiftCardNotification](../models/GiftCardNotification.md#giftcardnotification).

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

$result = $client->giftCardNotifications->create([
  'gift_card_id' => 'gc_01ARZ3NDEKTSV4RRFFQ69G5FAV',
  'recipient' => (object) [
    'email' => 'example@example.invalid',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/giftCardNotifications-create.php)

### giftCardNotifications.get

Retrieves a notification and its sending outcome. Sent means the sending provider accepted the message; it does not mean the recipient read it.

`GET /v1/gift-card-notifications/{gift_card_notification_id}`

Signature: `get(string|Model $gift_card_notification_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_notification_id` | Required | string | Flint resource ID. |

#### Response

Returned payload: [GiftCardNotification](../models/GiftCardNotification.md#giftcardnotification).

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
$result = $client->giftCardNotifications->get('gcn_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/giftCardNotifications-get.php)

### giftCardNotifications.list

Lists recipient notification identities, schedules and delivery outcomes. No redemption codes or recipient access tokens are returned. Default order: gift_card_notification_id descending; this key uniquely orders the results.

`GET /v1/gift-card-notifications`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `gift_card_id` | Optional | string | Exact, case-sensitive filter. maxLength: `255`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Exact, case-sensitive filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"bounced"`, `"canceled"`, `"failed"`, `"queued"`, `"scheduled"`, `"sending"`, `"sent"`, `"unconfirmed"`. Values: `"bounced"`, `"canceled"`, `"failed"`, `"queued"`, `"scheduled"`, `"sending"`, `"sent"`, `"unconfirmed"`. |

#### Response

Returned payload: [GiftCardNotificationListResponse](../models/GiftCardNotificationListResponse.md#giftcardnotificationlistresponse).

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
$result = $client->giftCardNotifications->list([], new RequestOptions());
```

[Complete runnable example](../examples/giftCardNotifications-list.php)

