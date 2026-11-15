[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# readers

### readers.create

Readers are payment hardware at a location: a Stripe Reader S710 or S700 your server sends payments to through Flint (`smart_reader`), or a phone that takes Tap to Pay in your app with the Stripe Terminal SDK (`tap_to_pay`). A reader is separate from a device, which records the register or phone that runs your app. Registers a smart reader with its pairing code, or a Tap to Pay reader for a phone, at a location with a complete US address. A pairing code works once, so send an `Idempotency-Key`: a retry with the same key returns the same reader. Registering needs no live payment readiness; payments on the reader do. Sends `reader.created`.

`POST /v1/readers`

Signature: `create(params: ReadersCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateReaderRequestInput](../models/CreateReaderRequest.md#createreaderrequest) | A reader registration selected by type. |

Body model: [CreateReaderRequestInput](../models/CreateReaderRequest.md#createreaderrequest).

#### readers.create with `type: "smart_reader"`

Registers a countertop reader with the pairing code it shows under Settings.

Body model: [CreateSmartReaderRequestInput](../models/CreateSmartReaderRequest.md#createsmartreaderrequest).

#### readers.create with `type: "tap_to_pay"`

Registers a phone that takes payments with Tap to Pay in your app.

Body model: [CreateTapToPayReaderRequestInput](../models/CreateTapToPayReaderRequest.md#createtaptopayreaderrequest).

#### Response

Returned payload: [Reader](../models/Reader.md#reader).

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
| 502 | ServerError |
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

const result = await client.readers.create({device_id: "dev_01KEZF7C0096ZG1YZWTWT30ZXN", location_id: "loc_01KEZF7C00CMHRRYA3MV996JB2", name: "Front counter", registration_code: "puppy-hamster-banana", type: "smart_reader"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/readers-create.mjs)

### readers.createConnectionSession

Tap to Pay readers only. Creates a fresh single-use Stripe Terminal connection token for the reader's location: return `client_session.stripe.connection_token` from the SDK's `fetchConnectionToken` callback, and pass `client_session.stripe.location_id` to `TapToPayConnectionConfiguration`. Each call creates a new token, including a retry with the same `Idempotency-Key`. The token works with readers at the reader's location, not only this phone, so your server decides which phone gets which session. Keep your credential on your server.

`POST /v1/readers/{reader_id}/connection-sessions`

Signature: `createConnectionSession(reader_id: InputValue<string>, params?: ReadersCreateConnectionSessionParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reader_id` | Required | string | Flint reader ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [ReaderConnectionSession](../models/ReaderConnectionSession.md#readerconnectionsession).

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
| 502 | ServerError |
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

const result = await client.readers.createConnectionSession("rdr_01KEZF7C007JA0G24M7SD6P46C", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/readers-createConnectionSession.mjs)

### readers.delete

Archives a reader and returns it with `status: archived`. A smart reader is unregistered from Stripe shortly after, so its hardware can be paired again; a Tap to Pay reader stops getting connection sessions at once. Refused with `RESOURCE_IN_USE` while a payment is presented on the reader. Archiving an archived reader returns it unchanged. Sends `reader.archived`.

`DELETE /v1/readers/{reader_id}`

Signature: `delete(reader_id: InputValue<string>, params?: ReadersDeleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reader_id` | Required | string | Flint reader ID. |
| `expected_version` | Optional | integer | Optional version most recently read. A stale value fails with `VERSION_CONFLICT` and the current version. Format: `uint64`. minimum: `1`. maximum: `9007199254740991`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [Reader](../models/Reader.md#reader).

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

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.readers.delete("rdr_01KEZF7C007JA0G24M7SD6P46C", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/readers-delete.mjs)

### readers.get

Returns a reader, including an archived one, with the payment presented on it now in `active_payment_intent_id`.

`GET /v1/readers/{reader_id}`

Signature: `get(reader_id: InputValue<string>, params?: ReadersGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

Field definitions: [shared fields](#request-fields-1).

#### Response

Returned payload: [Reader](../models/Reader.md#reader).

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

```typescript
const result = await client.readers.get("rdr_01KEZF7C007JA0G24M7SD6P46C", {}, {  });
```

[Complete runnable example](../examples/readers-get.mjs)

### readers.list

Lists readers newest first, then by `reader_id`. Archived readers are listed only when the `status` filter names `archived`. Default order: created_at descending, then reader_id descending.

`GET /v1/readers`

Signature: `list(params?: ReadersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Omitted, the list leaves out archived rows; name archived to include them. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"archived"`. Values: `"active"`, `"archived"`. |
| `location_id` | Optional | string | Exact match on the reader's Flint location ID. minLength: `1`. pattern: `^loc_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `device_id` | Optional | string | Exact match on the reader's Flint device ID. minLength: `1`. pattern: `^dev_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `type` | Optional | Array of string or string | Exact match on the reader's type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"smart_reader"`, `"tap_to_pay"`. Values: `"smart_reader"`, `"tap_to_pay"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [ReaderListResponse](../models/ReaderListResponse.md#readerlistresponse).

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

```typescript
const result = await client.readers.list({}, {  });
```

[Complete runnable example](../examples/readers-list.mjs)

### readers.simulate

Sandbox only. Presents a Stripe test card on a simulated reader (registered with `registration_code: simulated-s700`) for the payment presented on it, so the result arrives the way a real tap's does. Returns the reader. A live credential gets `403 FORBIDDEN` with reason `test_mode_required`.

`POST /v1/readers/{reader_id}/simulate`

Signature: `simulate(reader_id: InputValue<string>, params: ReadersSimulateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reader_id` | Required | string | Flint reader ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [SimulateReaderRequestInput](../models/SimulateReaderRequest.md#simulatereaderrequest) | Sandbox only. Presents a test card on a simulated reader. |

Body model: [SimulateReaderRequestInput](../models/SimulateReaderRequest.md#simulatereaderrequest).

#### readers.simulate body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `card_brand` | Optional | string | The brand of the test card to present. Defaults to `visa`. Declines present Visa test cards whatever brand you send. Values: `"visa"`, `"mastercard"`, `"amex"`, `"discover"`. |
| `outcome` | Required | string | The buyer's and issuer's decision. Values: `"approved"`, `"declined"`, `"insufficient_funds"`. |
| `tip_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The tip the buyer picks, when the payment was sent with the tip screen on. USD only. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

#### Response

Returned payload: [Reader](../models/Reader.md#reader).

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
| 502 | ServerError |
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

const result = await client.readers.simulate("rdr_01KEZF7C007JA0G24M7SD6P46C", {outcome: "approved"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/readers-simulate.mjs)

### readers.update

Changes a reader's `name`, `device_id` (`null` clears it) and `metadata` (merged by key). A reader's `type` and `location_id` never change: to move a reader, archive it and register it again at the new location. An archived reader can't change. Sends `reader.updated`.

`PATCH /v1/readers/{reader_id}`

Signature: `update(reader_id: InputValue<string>, params: ReadersUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reader_id` | Required | string | Flint reader ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdateReaderRequestInput](../models/UpdateReaderRequest.md#updatereaderrequest) | A sparse reader update. A reader's type and location never change. minProperties: `1`. |

Body model: [UpdateReaderRequestInput](../models/UpdateReaderRequest.md#updatereaderrequest).

#### readers.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `device_id` | Optional | string or null | The device the reader takes payments for. `null` clears it. Naming a device needs `accounts.devices.read` as well. minLength: `1`. |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Keys to set, merged into the reader's metadata. A key with an empty value is removed; `null` clears all metadata. |
| `name` | Optional | string | Your label for the reader. Can't be null. minLength: `1`. maxLength: `255`. |

#### Response

Returned payload: [Reader](../models/Reader.md#reader).

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

const result = await client.readers.update("rdr_01KEZF7C007JA0G24M7SD6P46C", {expected_version: 1, name: "Back counter"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/readers-update.mjs)

