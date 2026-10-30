[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# payouts

### payouts.cancel

Cancels an eligible payout before it leaves Flint-controlled processing and returns the resulting payout.

`POST /v1/payouts/{payout_id}/cancel`

Signature: `cancel(payout_id: InputValue<string>, params?: PayoutsCancelParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payout_id` | Required | string | Flint payout ID. |
| `body` | Optional | [CancelPayoutRequestInput](../models/CancelPayoutRequestInput.md#cancelpayoutrequestinput) | The request body for: Cancel a payout. |

Body model: [CancelPayoutRequestInput](../models/CancelPayoutRequestInput.md#cancelpayoutrequestinput).

#### Response

Returned payload: [Payout](../models/Payout.md#payout).

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
| 504 | ServerError |

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

const result = await client.payouts.cancel("po_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/payouts-cancel.mjs)

### payouts.create

Creates a payout from an available balance to an eligible payout destination. Safe to retry with the same Idempotency-Key.

`POST /v1/payouts`

Signature: `create(params: PayoutsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreatePayoutRequestInput](../models/CreatePayoutRequest.md#createpayoutrequest) | The request body for: Create a payout. |

Body model: [CreatePayoutRequestInput](../models/CreatePayoutRequest.md#createpayoutrequest).

#### payouts.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount to send, above zero. It can't exceed what one balance source has in available_by_source_type. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_source_type` | Optional | string | Balance source this payout draws from. Flint chooses the source when omitted. Values: `"card"`, `"bank_account"`. |
| `description` | Optional | string | Your description of the payout, returned on the payout. minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `method` | Optional | string | Payout method. Only standard is accepted; omitted defaults to standard. Values: `"standard"`. |
| `payout_destination_id` | Optional | string | Destination to pay. It must be active and in the payout's currency. Omit it to pay the currency's default destination. minLength: `1`. |
| `statement_descriptor` | Optional | string | Text shown on your bank statement for this deposit, 22 characters or fewer. minLength: `1`. |

#### Response

Returned payload: [Payout](../models/Payout.md#payout).

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
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.payouts.create({amount_money: {amount: "100", currency: "USD"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/payouts-create.mjs)

### payouts.get

Returns one payout by ID, with optional related payout and payout destination expansions.

`GET /v1/payouts/{payout_id}`

Signature: `get(payout_id: InputValue<string>, params?: PayoutsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payout_id` | Required | string | Flint payout ID. |
| `expand` | Optional | Array of string or string | Supported expansions: original_payout, payout_destination, reversed_by_payout. Expansion requires money_movement.payouts.read plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=original_payout&expand=payout_destination, or pass one comma-separated value. Items values: `"original_payout"`, `"payout_destination"`, `"reversed_by_payout"`. Values: `"original_payout"`, `"payout_destination"`, `"reversed_by_payout"`. |

#### Response

Returned payload: [Payout](../models/Payout.md#payout).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
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
const result = await client.payouts.get("po_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/payouts-get.mjs)

### payouts.list

Returns a paginated list of payouts with optional filters for status, currency, destination, method, and timing. Default order: created_at descending, then payout_id descending.

`GET /v1/payouts`

Signature: `list(params?: PayoutsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `expand` | Optional | Array of string or string | Supported expansions: original_payout, payout_destination, reversed_by_payout. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=original_payout&expand=payout_destination, or pass one comma-separated value. Items values: `"original_payout"`, `"payout_destination"`, `"reversed_by_payout"`. Values: `"original_payout"`, `"payout_destination"`, `"reversed_by_payout"`. |
| `method` | Optional | Array of string or string | Optional payout method filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"standard"`, `"instant"`, `"other"`. Values: `"standard"`, `"instant"`, `"other"`. |
| `balance_source_type` | Optional | Array of string or string | Optional Flint balance source type filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"card"`, `"bank_account"`. Values: `"card"`, `"bank_account"`. |
| `payout_destination_id` | Optional | string | Optional payout destination ID filter. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search across payout ID, external reference ID, description, and statement descriptor. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as po_01. |
| `status` | Optional | Array of string or string | Optional payout status filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"in_transit"`, `"paid"`, `"failed"`, `"canceled"`. Values: `"pending"`, `"in_transit"`, `"paid"`, `"failed"`, `"canceled"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `arrival_date_from` | Optional | string | Inclusive lower bound on arrival_date at midnight UTC. Use YYYY-MM-DD. Format: `date`. |
| `arrival_date_to` | Optional | string | Exclusive upper bound on arrival_date at midnight UTC. Use YYYY-MM-DD. Format: `date`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [PayoutListResponse](../models/PayoutListResponse.md#payoutlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
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
const result = await client.payouts.list({}, {  });
```

[Complete runnable example](../examples/payouts-list.mjs)

