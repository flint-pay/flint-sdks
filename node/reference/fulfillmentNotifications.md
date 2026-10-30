[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# fulfillmentNotifications

### fulfillmentNotifications.get

Retrieves one fulfillment notification audit record by ID.

`GET /v1/fulfillment-notifications/{fulfillment_notification_id}`

Signature:

```typescript
get(fulfillment_notification_id: InputValue<string>,
 params?: FulfillmentNotificationsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_notification_id` | Required | string | Flint fulfillment notification ID. |
| `expand` | Optional | Array of string or string | Supported expansions: order. Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request. Pass expand=order. Items values: `"order"`. Values: `"order"`. |

#### Response

Returned payload: [FulfillmentNotification](../models/FulfillmentNotification.md#fulfillmentnotification).

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
const result = await client.fulfillmentNotifications.get("fnt_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/fulfillmentNotifications-get.mjs)

### fulfillmentNotifications.list

Returns persisted fulfillment notification audit records. Results default to newest created first. Default order: created_at descending, then fulfillment_notification_id descending.

`GET /v1/fulfillment-notifications`

Signature: `list(params?: FulfillmentNotificationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Optional | string | Optional fulfillment ID filter. |
| `order_id` | Optional | string | Optional order ID filter. |
| `fulfillment_event_id` | Optional | string | Optional fulfillment event ID filter. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `channel` | Optional | Array of string or string | Filter by notification channel. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"email"`. Values: `"email"`. |
| `status` | Optional | Array of string or string | Filter by notification status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"sent"`, `"failed"`, `"suppressed"`. Values: `"pending"`, `"sent"`, `"failed"`, `"suppressed"`. |
| `notification_type` | Optional | Array of string or string | Filter by notification type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [14 declared values](#fulfillmentnotificationslist-input-notification_type--values). Values: [14 declared values](#fulfillmentnotificationslist-input-notification_type--values). |
| `expand` | Optional | Array of string or string | Supported expansions: order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Pass expand=order. Items values: `"order"`. Values: `"order"`. |

#### fulfillmentNotifications.list input notification_type [] values

- `"fulfillment_canceled"`
- `"fulfillment_completed"`
- `"fulfillment_delivered"`
- `"fulfillment_dispatched"`
- `"fulfillment_failed"`
- `"fulfillment_no_show"`
- `"fulfillment_ready"`
- `"fulfillment_shipped"`
- `"shipment_delivered"`
- `"shipment_delivery_attempted"`
- `"shipment_exception"`
- `"shipment_out_for_delivery"`
- `"shipment_returned"`
- `"shipment_shipped"`

#### Response

Returned payload: [FulfillmentNotificationListResponse](../models/FulfillmentNotificationListResponse.md#fulfillmentnotificationlistresponse).

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
const result = await client.fulfillmentNotifications.list({}, {  });
```

[Complete runnable example](../examples/fulfillmentNotifications-list.mjs)

