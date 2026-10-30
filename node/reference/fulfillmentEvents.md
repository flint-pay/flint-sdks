[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# fulfillmentEvents

### fulfillmentEvents.get

Retrieves one provider-neutral fulfillment event by ID.

`GET /v1/fulfillment-events/{fulfillment_event_id}`

Signature:

```typescript
get(fulfillment_event_id: InputValue<string>,
 params?: FulfillmentEventsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_event_id` | Required | string | Flint fulfillment event ID. |
| `expand` | Optional | Array of string or string | Supported expansions: order. Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request. Pass expand=order. Items values: `"order"`. Values: `"order"`. |

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
const result = await client.fulfillmentEvents.get("fev_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/fulfillmentEvents-get.mjs)

### fulfillmentEvents.list

Lists provider-neutral fulfillment events. sort_direction applies to both the selected timestamp and the ID tiebreaker. Default order: received_at descending, then fulfillment_event_id descending.

`GET /v1/fulfillment-events`

Signature: `list(params?: FulfillmentEventsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Optional | string | Optional fulfillment ID filter. |
| `shipment_id` | Optional | string | Optional shipment ID filter. |
| `package_id` | Optional | string | Optional package ID filter. |
| `order_id` | Optional | string | Optional order ID filter. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `event_type` | Optional | Array of string or string | Filter by fulfillment event type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [11 declared values](#fulfillmenteventslist-input-event_type--values). Values: [11 declared values](#fulfillmenteventslist-input-event_type-values). |
| `external_system` | Optional | string | Filter by external system identifier. |
| `external_event_id` | Optional | string | Filter by external provider event ID. |
| `occurred_after` | Optional | string | Inclusive lower bound on occurred_at. Format: `date-time`. |
| `occurred_before` | Optional | string | Exclusive upper bound on occurred_at. Format: `date-time`. |
| `sort_by` | Optional | string | Field to sort by. Defaults to received_at; ties are broken by fulfillment_event_id. Default: `"received_at"`. Values: `"received_at"`, `"occurred_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `expand` | Optional | Array of string or string | Supported expansions: order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Pass expand=order. Items values: `"order"`. Values: `"order"`. |

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
const result = await client.fulfillmentEvents.list({}, {  });
```

[Complete runnable example](../examples/fulfillmentEvents-list.mjs)

