[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# fulfillmentNotifications

### fulfillmentNotifications.get

Retrieves one fulfillment notification audit record by ID.

`GET /v1/fulfillment-notifications/{fulfillment_notification_id}`

Signature: `get(string|Model $fulfillment_notification_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_notification_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"order"`. |

#### Response

Returned payload: [FulfillmentNotification](../models/FulfillmentNotification.md#fulfillmentnotification).

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
$result = $client->fulfillmentNotifications->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/fulfillmentNotifications-get.php)

### fulfillmentNotifications.list

Returns persisted fulfillment notification audit records. Results default to newest created first.

`GET /v1/fulfillment-notifications`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Optional | string |  |
| `order_id` | Optional | string |  |
| `fulfillment_event_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `channel` | Optional | Array of string | minItems: `1`. Items values: `"email"`. |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"pending"`, `"sent"`, `"failed"`, `"suppressed"`. |
| `notification_type` | Optional | Array of string | minItems: `1`. Items values: [14 declared values](#fulfillmentnotificationslist-input-notification_type--values). |
| `expand` | Optional | Array of string | Items values: `"order"`. |

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

Returned payload: [FulfillmentNotificationsListResponse200](../models/FulfillmentNotificationsListResponse200.md#fulfillmentnotificationslistresponse200).

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
$result = $client->fulfillmentNotifications->list([], new RequestOptions());
```

[Complete runnable example](../examples/fulfillmentNotifications-list.php)

