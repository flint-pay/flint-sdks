[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# tickets

### tickets.checkIn

Admits an issued ticket. Concurrent check-ins of one ticket admit it once: the others return 409 ACTION_NOT_ALLOWED with reason already_applied and current_status checked_in. A stale expected_version returns 409 VERSION_CONFLICT first, so scanners usually omit it. With admission_code the check-in method is admission_code, and the code must be the ticket's current code: a wrong code returns 400 at admission_code and changes nothing. Without a code the method is manual. A voided ticket returns reason unsupported_state. There is no event-time window. The code is never returned or logged.

`POST /v1/tickets/{ticket_id}/check-in`

Signature: `checkIn(ticket_id: InputValue<string>, params?: TicketsCheckInParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ticket_id` | Required | string | The ticket ID. |
| `body` | Optional | [CheckInTicketRequestInput](../models/CheckInTicketRequest.md#checkinticketrequest) | An optional admission code to verify and an optional version fence. |

Body model: [CheckInTicketRequestInput](../models/CheckInTicketRequest.md#checkinticketrequest).

#### tickets.checkIn body fields

Field definitions: [shared fields](../models/CheckInTicketRequest.md#checkinticketrequest).

#### Response

Returned payload: [Ticket](../models/Ticket.md#ticket).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.tickets.checkIn("tkt_01KEZF7C00AWVKS6GAX8RMEBZ8", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/tickets-checkIn.mjs)

### tickets.get

Returns an individual ticket. Merchant credentials never receive its admission code. The checkout credential of a paid checkout session reads only its own order's tickets, without expand, and receives admission_code unless the ticket is voided or the credential came from a launch URL a merchant read or requested after payment; another order's ticket returns 404 RESOURCE_NOT_FOUND.

`GET /v1/tickets/{ticket_id}`

Signature: `get(ticket_id: InputValue<string>, params?: TicketsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ticket_id` | Required | string | The ticket ID. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: order. Include the order summary. Limits: at most 10 unique expand paths per request. Items values: `"order"`. Values: `"order"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [Ticket](../models/Ticket.md#ticket).

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

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.tickets.get("tkt_01KEZF7C00AWVKS6GAX8RMEBZ8", {}, {  });
```

[Complete runnable example](../examples/tickets-get.mjs)

### tickets.list

Lists individual event tickets, newest first by default. Merchant credentials never receive admission codes. The checkout credential of a paid checkout session lists only its own order's tickets: it must send that order_id, may not send other filters, search, sort or expand, and receives admission_code on every ticket that isn't voided, unless the credential came from a launch URL a merchant read or requested after payment. Any other order_id returns 403, as reading another order does. Default order: created_at descending, then ticket_id descending.

`GET /v1/tickets`

Signature: `list(params?: TicketsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `payment_link_id` | Optional | string | Only tickets for this event payment link. |
| `order_id` | Optional | string | Only tickets belonging to this order. |
| `status` | Optional | Array of string or string | Filter by ticket status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"issued"`, `"checked_in"`, `"voided"`. Values: `"issued"`, `"checked_in"`, `"voided"`. |
| `query` | Optional | string | Case-insensitive text search across ticket number, attendee name, buyer name and buyer email. For Dashboard check-in staff it matches ticket number and attendee name only. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by ticket_id. Default: `"created_at"`. Values: `"created_at"`, `"attendee_name"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `checked_in_after` | Optional | string | Inclusive lower bound on checked_in_at. Format: `date-time`. |
| `checked_in_before` | Optional | string | Exclusive upper bound on checked_in_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Items values: `"order"`. Values: `"order"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [TicketListResponse](../models/TicketListResponse.md#ticketlistresponse).

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

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.tickets.list({}, {  });
```

[Complete runnable example](../examples/tickets-list.mjs)

### tickets.lookup

Looks up an admission code in the authenticated merchant and environment, including voided tickets. ASCII lowercase, spaces and hyphens are accepted; O maps to 0 and I/L to 1. Malformed codes return 400 INVALID_VALUE; an unknown or foreign code returns 404 RESOURCE_NOT_FOUND at admission_code. The code is never returned.

`POST /v1/tickets/lookup`

Signature: `lookup(params: TicketsLookupParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [LookupTicketRequestInput](../models/LookupTicketRequest.md#lookupticketrequest) | Look up a ticket using its bearer admission credential. |

Body model: [LookupTicketRequestInput](../models/LookupTicketRequest.md#lookupticketrequest).

#### tickets.lookup body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `admission_code` | Required | string | The 16-character Crockford base32 admission code. Spaces, hyphens and ASCII lowercase are normalized. minLength: `16`. |

#### Response

Returned payload: [Ticket](../models/Ticket.md#ticket).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.tickets.lookup({admission_code: "0123456789AB1234"}, {  });
```

[Complete runnable example](../examples/tickets-lookup.mjs)

### tickets.rotateCode

Replaces the ticket's admission code and returns the new code once, in admission_code. The old code stops working immediately. Use it to deliver tickets yourself with send_ticket_emails turned off. A retry with the same Idempotency-Key within 24 hours returns the code again while the ticket is unchanged since this rotation; after any later change, including another rotation, it returns the ticket without admission_code. A voided ticket returns 409 ACTION_NOT_ALLOWED with reason unsupported_state.

`POST /v1/tickets/{ticket_id}/rotate-code`

Signature: `rotateCode(ticket_id: InputValue<string>, params?: TicketsRotateCodeParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ticket_id` | Required | string | The ticket ID. |
| `body` | Optional | [TicketVersionRequestInput](../models/TicketVersionRequestInput.md#ticketversionrequestinput) | An optional version fence for the ticket. |

#### Response

Returned payload: [TicketWithAdmissionCode](../models/TicketWithAdmissionCode.md#ticketwithadmissioncode).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.tickets.rotateCode("tkt_01KEZF7C00AWVKS6GAX8RMEBZ8", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/tickets-rotateCode.mjs)

### tickets.undoCheckIn

Returns a checked-in ticket to issued and clears checked_in_at and check_in_method. An issued ticket returns 409 ACTION_NOT_ALLOWED with reason already_applied; a voided ticket returns reason unsupported_state.

`POST /v1/tickets/{ticket_id}/undo-check-in`

Signature: `undoCheckIn(ticket_id: InputValue<string>, params?: TicketsUndoCheckInParams, options?: RequestOptions<"merchant">)`

#### Request fields

Field definitions: [shared fields](#request-fields-4). Models: [TicketVersionRequestInput](../models/TicketVersionRequestInput.md#ticketversionrequestinput).

#### Response

Returned payload: [Ticket](../models/Ticket.md#ticket).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.tickets.undoCheckIn("tkt_01KEZF7C00AWVKS6GAX8RMEBZ8", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/tickets-undoCheckIn.mjs)

### tickets.update

Sets the attendee name. Surrounding whitespace is trimmed; send null to clear the name. Sending the current name changes nothing and keeps the version. A voided ticket returns 409 ACTION_NOT_ALLOWED with reason unsupported_state.

`PATCH /v1/tickets/{ticket_id}`

Signature: `update(ticket_id: InputValue<string>, params: TicketsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ticket_id` | Required | string | The ticket ID. |
| `body` | Required | [UpdateTicketRequestInput](../models/UpdateTicketRequest.md#updateticketrequest) | The attendee name to set or clear. |

Body model: [UpdateTicketRequestInput](../models/UpdateTicketRequest.md#updateticketrequest).

#### tickets.update body fields

Field definitions: [shared fields](../models/UpdateTicketRequest.md#updateticketrequest).

#### Response

Returned payload: [Ticket](../models/Ticket.md#ticket).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.tickets.update("tkt_01ARZ3NDEKTSV4RRFFQ69G5FAV", {attendee_name: "Example Attendee"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/tickets-update.mjs)

### tickets.void

Permanently voids an issued or checked-in ticket and releases its seat: the payment link's total_quantity_sold drops by one in the same transaction. Like a refund release, this doesn't change the link's version or send payment_link.updated. Nothing is refunded and the order's ticketed_event doesn't change. A later full refund of the order releases only its remaining valid tickets. A voided ticket returns 409 ACTION_NOT_ALLOWED with reason already_applied.

`POST /v1/tickets/{ticket_id}/void`

Signature: `void(ticket_id: InputValue<string>, params?: TicketsVoidParams, options?: RequestOptions<"merchant">)`

#### Request fields

Field definitions: [shared fields](#request-fields-4). Models: [TicketVersionRequestInput](../models/TicketVersionRequestInput.md#ticketversionrequestinput).

#### Response

Returned payload: [Ticket](../models/Ticket.md#ticket).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.tickets.void("tkt_01KEZF7C00AWVKS6GAX8RMEBZ8", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/tickets-void.mjs)

