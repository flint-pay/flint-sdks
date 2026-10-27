[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# giftCardNotifications

### giftCardNotifications.cancel

Cancels a notification before sending starts or after confirmed failure. A sending or unconfirmed notification cannot be canceled. Gift card value is preserved.

`POST /v1/gift-card-notifications/{gift_card_notification_id}/cancel`

Signature:

```typescript
cancel(gift_card_notification_id: InputValue<string>,
 params?: (InputValue<CancelGiftCardNotificationRequestInput> |
  {
}) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_notification_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [CancelGiftCardNotificationRequestInput](../models/CancelGiftCardNotificationRequest.md#cancelgiftcardnotificationrequest) | The request body for: Cancel a gift card notification. |

Body model: [CancelGiftCardNotificationRequestInput](../models/CancelGiftCardNotificationRequest.md#cancelgiftcardnotificationrequest).

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

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.giftCardNotifications.cancel("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/giftCardNotifications-cancel.mjs)

### giftCardNotifications.create

Creates a recipient email notification, immediately or up to 90 days from now. A resend creates a new resource with resend_of_notification_id. An unconfirmed send must be resolved before another send is requested. Sending does not change gift card value or order fulfillment.

`POST /v1/gift-card-notifications`

Signature:

```typescript
create(params: (InputValue<CreateGiftCardNotificationRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
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

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.giftCardNotifications.create({gift_card_id: "example", recipient: {email: "example@example.invalid"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/giftCardNotifications-create.mjs)

### giftCardNotifications.get

Retrieves a notification and its sending outcome. Sent means the sending provider accepted the message; it does not mean the recipient read it.

`GET /v1/gift-card-notifications/{gift_card_notification_id}`

Signature:

```typescript
get(gift_card_notification_id: InputValue<string>,
 params?: {
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

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

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.giftCardNotifications.get("example", {}, {  });
```

[Complete runnable example](../examples/giftCardNotifications-get.mjs)

### giftCardNotifications.list

Lists recipient notification identities, schedules and delivery outcomes. No redemption codes or recipient access tokens are returned.

`GET /v1/gift-card-notifications`

Signature:

```typescript
list(params?: {
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "gift_card_id"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "status"?: InputValue<Array<"bounced" |
    "canceled" |
    "failed" |
    "queued" |
    "scheduled" |
    "sending" |
    "sent" |
    "unconfirmed">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

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

Returned payload: [GiftCardNotificationListResponse](../models/GiftCardNotificationListResponse.md#giftcardnotificationlistresponse).

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

```typescript
const result = await client.giftCardNotifications.list({}, {  });
```

[Complete runnable example](../examples/giftCardNotifications-list.mjs)

