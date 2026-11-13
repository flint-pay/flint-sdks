[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# fulfillmentEvents

### fulfillmentEvents.create

Records an observational event for a fulfillment or one of its shipments or packages. Read timeline events with GET /v1/fulfillment-events filtered by package_id, shipment_id, or fulfillment_id, and notifications with GET /v1/fulfillment-notifications filtered by fulfillment_event_id or fulfillment_id.

`POST /v1/fulfillment-events`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateFulfillmentEventRequestInput](../models/CreateFulfillmentEventRequestInput.md#createfulfillmenteventrequestinput) | The request body for: Create fulfillment event. |

Body model: [CreateFulfillmentEventRequestInput](../models/CreateFulfillmentEventRequestInput.md#createfulfillmenteventrequestinput).

#### fulfillmentEvents.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_details` | Optional | Map of string | Free-form details attached to the event. Map values: minLength: `1`. |
| `event_type` | Required | string | What kind of event this records. Values: `"carrier_scan"`, `"custom"`. |
| `external_event_id` | Optional | string | Event identifier assigned by that integration. Flint records a repeated pair of `external_system` and `external_event_id` once. minLength: `1`. |
| `external_status` | Optional | string | Status supplied by that integration. minLength: `1`. |
| `external_system` | Optional | string | Integration that supplied the event. minLength: `1`. |
| `fulfillment_id` | Required | string | Fulfillment that owns this event. minLength: `1`. |
| `location_description` | Optional | string | Where the event happened, such as `Louisville, KY`. minLength: `1`. |
| `message` | Optional | string | Human-readable text describing the event. minLength: `1`. |
| `occurred_at` | Optional | string | Provider event timestamp. Format: `date-time`. minLength: `1`. |
| `package_id` | Optional | string | Nested package associated with this observational event. Flint resolves and validates its shipment and fulfillment ownership. minLength: `1`. |
| `shipment_id` | Optional | string | Nested shipment associated with this observational event. Flint validates that it belongs to fulfillment_id. minLength: `1`. |

#### Response

Returned payload: [FulfillmentEvent](../models/FulfillmentEvent.md#fulfillmentevent).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
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

$result = $client->fulfillmentEvents->create([
  'custom_details' => (object) [
    'facility' => 'east',
  ],
  'event_type' => 'custom',
  'external_event_id' => 'evt_7f3df2',
  'external_status' => 'work_started',
  'external_system' => 'shippo',
  'fulfillment_id' => 'ful_01KEZF7C009TD0XN8YPHHHXQFR',
  'message' => 'The fulfillment partner started work.',
  'occurred_at' => '2026-05-13T16:05:00Z',
  'package_id' => 'pkg_01KEZF7C008VJBE6BT0CWZT296',
  'shipment_id' => 'shp_01KEZF7C006DZPA7FGH42HTBY8',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/fulfillmentEvents-create.php)

### fulfillmentEvents.get

Retrieves one provider-neutral fulfillment event by ID.

`GET /v1/fulfillment-events/{fulfillment_event_id}`

Signature: `get(string|Model $fulfillment_event_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_event_id` | Required | string | Flint fulfillment event ID. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: order. Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request. Items values: `"order"`. Values: `"order"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [FulfillmentEvent](../models/FulfillmentEvent.md#fulfillmentevent).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
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
$result = $client->fulfillmentEvents->get('fev_01KEZF7C002XK9D7X3239ERT51', [], new RequestOptions());
```

[Complete runnable example](../examples/fulfillmentEvents-get.php)

### fulfillmentEvents.list

Lists provider-neutral fulfillment events. sort_direction applies to both the selected timestamp and the ID tiebreaker. Default order: received_at descending, then fulfillment_event_id descending.

`GET /v1/fulfillment-events`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Optional | string | Optional fulfillment ID filter. pattern: `^ful_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `shipment_id` | Optional | string | Optional shipment ID filter. pattern: `^shp_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `package_id` | Optional | string | Optional package ID filter. pattern: `^pkg_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `order_id` | Optional | string | Optional order ID filter. pattern: `^ord_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `event_type` | Optional | Array of string or string | Filter by fulfillment event type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [11 declared values](#fulfillmenteventslist-input-event_type--values). Values: [11 declared values](#fulfillmenteventslist-input-event_type-values). |
| `external_system` | Optional | string | Filter by external system identifier. |
| `external_event_id` | Optional | string | Filter by external provider event ID. |
| `occurred_after` | Optional | string | Inclusive lower bound on occurred_at. Format: `date-time`. |
| `occurred_before` | Optional | string | Exclusive upper bound on occurred_at. Format: `date-time`. |
| `sort_by` | Optional | string | Field to sort by. Defaults to received_at; ties are broken by fulfillment_event_id. Default: `"received_at"`. Values: `"received_at"`, `"occurred_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Items values: `"order"`. Values: `"order"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### fulfillmentEvents.list input event_type [] values

- `"carrier_scan"`
- `"status_changed"`
- `"shipped"`
- `"in_transit"`
- `"out_for_delivery"`
- `"delivered"`
- `"delivery_attempted"`
- `"tracking_updated"`
- `"exception"`
- `"returned"`
- `"custom"`

#### fulfillmentEvents.list input event_type values

- `"carrier_scan"`
- `"status_changed"`
- `"shipped"`
- `"in_transit"`
- `"out_for_delivery"`
- `"delivered"`
- `"delivery_attempted"`
- `"tracking_updated"`
- `"exception"`
- `"returned"`
- `"custom"`

#### Response

Returned payload: [FulfillmentEventListResponse](../models/FulfillmentEventListResponse.md#fulfillmenteventlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
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
$result = $client->fulfillmentEvents->list([], new RequestOptions());
```

[Complete runnable example](../examples/fulfillmentEvents-list.php)

