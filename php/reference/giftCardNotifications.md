[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# giftCardNotifications

### giftCardNotifications.cancel

Cancels a notification before sending starts or after confirmed failure. A sending or unconfirmed notification cannot be canceled. Gift card value is preserved.

`POST /v1/gift-card-notifications/{gift_card_notification_id}/cancel`

Signature: `cancel(string|Model $gift_card_notification_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_notification_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [CancelGiftCardNotificationRequestInput](../models/CancelGiftCardNotificationRequestInput.md#cancelgiftcardnotificationrequestinput) | The request body for: Cancel a gift card notification. |

Body model: [CancelGiftCardNotificationRequestInput](../models/CancelGiftCardNotificationRequestInput.md#cancelgiftcardnotificationrequestinput).

#### Response

Returned payload: [GiftCardNotification](../models/GiftCardNotification.md#giftcardnotification).

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

Complete body and metadata: `cancelWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->giftCardNotifications->cancel('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/giftCardNotifications-cancel.php)

### giftCardNotifications.create

Creates a recipient email notification, immediately or up to 90 days from now. A resend creates a new resource with resend_of_notification_id. An unconfirmed send must be resolved before another send is requested. Sending does not change gift card value or order fulfillment.

`POST /v1/gift-card-notifications`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateGiftCardNotificationRequestInput](../models/CreateGiftCardNotificationRequestInput.md#creategiftcardnotificationrequestinput) | The request body for: Send a gift card notification. |

Body model: [CreateGiftCardNotificationRequestInput](../models/CreateGiftCardNotificationRequestInput.md#creategiftcardnotificationrequestinput).

#### giftCardNotifications.create body fields

Field definitions: [shared fields](../models/CreateGiftCardNotificationRequestInput.md#creategiftcardnotificationrequestinput). Models: [GiftCardNotificationRecipientInput](../models/GiftCardNotificationRecipientInput.md#giftcardnotificationrecipientinput).

#### Response

Returned payload: [GiftCardNotification](../models/GiftCardNotification.md#giftcardnotification).

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

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->giftCardNotifications->create([
  'gift_card_id' => 'example',
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
| `gift_card_notification_id` | Required | string |  |

#### Response

Returned payload: [GiftCardNotification](../models/GiftCardNotification.md#giftcardnotification).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->giftCardNotifications->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/giftCardNotifications-get.php)

### giftCardNotifications.list

Lists recipient notification identities, schedules and delivery outcomes. No redemption codes or recipient access tokens are returned.

`GET /v1/gift-card-notifications`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `gift_card_id` | Optional | string | maxLength: `255`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items: maxLength: `255`. Items values: `"bounced"`, `"canceled"`, `"failed"`, `"queued"`, `"scheduled"`, `"sending"`, `"sent"`, `"unconfirmed"`. |

#### Response

Returned payload: [GiftCardNotificationsListResponse200](../models/GiftCardNotificationsListResponse200.md#giftcardnotificationslistresponse200).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->giftCardNotifications->list([], new RequestOptions());
```

[Complete runnable example](../examples/giftCardNotifications-list.php)

