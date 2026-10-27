[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# fulfillmentEvents

### fulfillmentEvents.get

Retrieves one provider-neutral fulfillment event by ID.

`GET /v1/fulfillment-events/{fulfillment_event_id}`

Signature:

```typescript
get(fulfillment_event_id: InputValue<string>,
 params?: {
  "expand"?: InputValue<Array<"order">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_event_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"order"`. |

#### Response

Returned payload: [FulfillmentEvent](../models/FulfillmentEvent.md#fulfillmentevent).

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

```typescript
const result = await client.fulfillmentEvents.get("example", {}, {  });
```

[Complete runnable example](../examples/fulfillmentEvents-get.mjs)

### fulfillmentEvents.list

Lists provider-neutral fulfillment events. Results default to received_at descending, with fulfillment_event_id descending as the tiebreaker. sort_direction applies to both the selected timestamp and the ID tiebreaker.

`GET /v1/fulfillment-events`

Signature:

```typescript
list(params?: {
  "fulfillment_id"?: InputValue<string>;
  "shipment_id"?: InputValue<string>;
  "package_id"?: InputValue<string>;
  "order_id"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "event_type"?: InputValue<Array<"carrier_scan" |
    "status_changed" |
    "shipped" |
    "in_transit" |
    "out_for_delivery" |
    "delivered" |
    "delivery_attempted" |
    "tracking_updated" |
    "exception" |
    "returned" |
    "custom">>;
  "external_system"?: InputValue<string>;
  "external_event_id"?: InputValue<string>;
  "occurred_after"?: InputValue<string | globalThis.Date>;
  "occurred_before"?: InputValue<string | globalThis.Date>;
  "sort_by"?: InputValue<"received_at" | "occurred_at">;
  "sort_direction"?: InputValue<"asc" | "desc">;
  "expand"?: InputValue<Array<"order">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fulfillment_id` | Optional | string |  |
| `shipment_id` | Optional | string |  |
| `package_id` | Optional | string |  |
| `order_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `event_type` | Optional | Array of string | minItems: `1`. Items values: [11 declared values](#fulfillmenteventslist-input-event_type--values). |
| `external_system` | Optional | string |  |
| `external_event_id` | Optional | string |  |
| `occurred_after` | Optional | string | Format: `date-time`. |
| `occurred_before` | Optional | string | Format: `date-time`. |
| `sort_by` | Optional | string | Default: `"received_at"`. Values: `"received_at"`, `"occurred_at"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `expand` | Optional | Array of string | Items values: `"order"`. |

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

#### Response

Returned payload: [FulfillmentEventListResponse](../models/FulfillmentEventListResponse.md#fulfillmenteventlistresponse).

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

```typescript
const result = await client.fulfillmentEvents.list({}, {  });
```

[Complete runnable example](../examples/fulfillmentEvents-list.mjs)

