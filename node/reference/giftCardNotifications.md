[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# giftCardNotifications

### giftCardNotifications.cancel

Cancels a notification before sending starts or after confirmed failure. A sending or unconfirmed notification cannot be canceled. Gift card value is preserved.

`POST /v1/gift-card-notifications/{gift_card_notification_id}/cancel`

Signature: `cancel(gift_card_notification_id: InputValue<string>, params?: GiftCardNotificationsCancelParams, options?: RequestOptions<"merchant">)`

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.giftCardNotifications.cancel("gcn_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/giftCardNotifications-cancel.mjs)

### giftCardNotifications.create

Creates a recipient email notification, immediately or up to 90 days from now. A resend creates a new resource with resend_of_notification_id. An unconfirmed send must be resolved before another send is requested. Sending does not change gift card value or order fulfillment.

`POST /v1/gift-card-notifications`

Signature: `create(params: GiftCardNotificationsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateGiftCardNotificationRequestInput](../models/CreateGiftCardNotificationRequest.md#creategiftcardnotificationrequest) | The request body for: Send a gift card notification. |

Body model: [CreateGiftCardNotificationRequestInput](../models/CreateGiftCardNotificationRequest.md#creategiftcardnotificationrequest).

#### giftCardNotifications.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string | minLength: `1`. |
| `recipient` | Required | [GiftCardNotificationRecipientInput](../models/GiftCardNotificationRecipientInput.md#giftcardnotificationrecipientinput) | Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time. |
| `resend_of_notification_id` | Optional | string | minLength: `1`. |

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.giftCardNotifications.create({gift_card_id: "gc_01ARZ3NDEKTSV4RRFFQ69G5FAV", recipient: {email: "example@example.invalid"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/giftCardNotifications-create.mjs)

### giftCardNotifications.get

Retrieves a notification and its sending outcome. Sent means the sending provider accepted the message; it does not mean the recipient read it.

`GET /v1/gift-card-notifications/{gift_card_notification_id}`

Signature:

```typescript
get(gift_card_notification_id: InputValue<string>,
 params?: GiftCardNotificationsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

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

```typescript
const result = await client.giftCardNotifications.get("gcn_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/giftCardNotifications-get.mjs)

### giftCardNotifications.list

Lists recipient notification identities, schedules and delivery outcomes. No redemption codes or recipient access tokens are returned. Default order: gift_card_notification_id descending; this key uniquely orders the results.

`GET /v1/gift-card-notifications`

Signature: `list(params?: GiftCardNotificationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

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

```typescript
const result = await client.giftCardNotifications.list({}, {  });
```

[Complete runnable example](../examples/giftCardNotifications-list.mjs)

