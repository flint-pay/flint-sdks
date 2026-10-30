[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# taxConnection

### taxConnection.connect

Records the seller's attestation and creates or completes the tax account from verified business details and the default line-item tax category in settings. Syncs registrations and removes tax-account copies of deleted registrations. Reconnect retains the tax account and does not turn the default tax setting back on. A rejected stored registration returns attention_required with registration_rejected. Successful configuration marks open calculated automatic-tax orders without an issued invoice incomplete and advances their versions. A same-key retry resumes setup without creating another account; unconfirmed account creation requires support. Retrieve the connection after a lost response.

`POST /v1/tax-connection/connect`

Signature: `connect(params: TaxConnectionConnectParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [ConnectTaxConnectionRequestInput](../models/ConnectTaxConnectionRequest.md#connecttaxconnectionrequest) | The request body for: Connect automatic tax. |

Body model: [ConnectTaxConnectionRequestInput](../models/ConnectTaxConnectionRequest.md#connecttaxconnectionrequest).

#### taxConnection.connect body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Resource version last read by the caller. Omit to apply the change to the current resource. Format: `uint64`. minimum: `1`. |
| `seller_attestation` | Required | [SellerTaxAttestationRequestInput](../models/SellerTaxAttestationRequest.md#sellertaxattestationrequest) | Presence records the seller's agreement to the named disclosure version. The seller's agreement to the current automatic sales tax disclosure, recorded when connect succeeds. |

#### Response

Returned payload: [TaxConnection](../models/TaxConnection.md#taxconnection).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
| 410 | ApiError |
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

const result = await client.taxConnection.connect({expected_version: 1793016000, seller_attestation: {disclosure_version: "2026-11-01.5f3a9c1e"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/taxConnection-connect.mjs)

### taxConnection.createRegistration

Saves one US state registration for a non-overlapping, inclusive date window. Start_date may be up to 365 days ahead; end_date is optional. Before the connection is active, saves locally as pending without creating a tax account. On an active connection, syncs the registration in this request. Acceptance of a registration effective today marks open calculated automatic-tax orders without an issued invoice incomplete, advancing their versions. Scheduled registrations do not invalidate calculations. A definitive rejection before a tax-account registration exists removes the pending registration and leaves working tax and orders unchanged. If a tax-account copy exists or may have been created, rejection cleanup marks those open orders incomplete and advances their versions. Successful cleanup leaves the connection active. An uncertain outcome keeps the registration pending and the connection active; retry with the same key to resume without duplicating the registration. If the key is lost, filter the list by state and match the submitted start_date, delete the pending registration and create again after deletion succeeds.

`POST /v1/tax-connection/registrations`

Signature: `createRegistration(params: TaxConnectionCreateRegistrationParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateTaxRegistrationRequestInput](../models/CreateTaxRegistrationRequestInput.md#createtaxregistrationrequestinput) | Register a US state where the seller collects tax. |

Body model: [CreateTaxRegistrationRequestInput](../models/CreateTaxRegistrationRequestInput.md#createtaxregistrationrequestinput).

#### taxConnection.createRegistration body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string | Country of registration. Only US is accepted. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Default: `"US"`. Values: `"US"`. |
| `end_date` | Optional | string or null | Last day the registration applies, inclusive. Must be on or after start_date and today (UTC). Send null to clear the end date before the registration has ended. Format: `date`. minLength: `1`. |
| `registration_number` | Required | string | Seller's tax registration number. Write-only; responses return only its last four characters. minLength: `1`. maxLength: `255`. Input only. |
| `start_date` | Required | string | First day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. May be up to 365 days in the future. Format: `date`. minLength: `1`. |
| `state` | Required | string | US postal state code or DC. Values: [47 declared values](../models/CreateTaxRegistrationRequest.md#createtaxregistrationrequest-state-values). |

#### Response

Returned payload: [TaxRegistration](../models/TaxRegistration.md#taxregistration).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
| 410 | ApiError |
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

const result = await client.taxConnection.createRegistration({state: "AL", registration_number: "example", start_date: "2026-01-01"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/taxConnection-createRegistration.mjs)

### taxConnection.deleteRegistration

Hard-deletes a pending, rejected or scheduled registration and returns its final snapshot with status removed. While disconnected, deletes locally and records tax-account cleanup for the next connect. Otherwise, removes a possible tax-account copy first. If earlier creation is unconfirmed, an empty tax-account registration list does not prove the copy is absent: EXTERNAL_SERVICE_ERROR keeps the local registration. Retry the same request with the same Idempotency-Key until the copy can be identified and removed. Provider failure retains the local registration. An online deletion of a pending or rejected registration that removes existing or possibly created tax-account coverage marks open calculated automatic-tax orders without an issued invoice incomplete and advances their versions. Scheduled and disconnected deletions do not invalidate calculations. Scheduled deletion removes its tax-account copy immediately unless disconnected, without pausing automatic tax or invalidating calculations. Active and ended registrations cannot be deleted. Later GET returns RESOURCE_NOT_FOUND.

`DELETE /v1/tax-connection/registrations/{tax_registration_id}`

Signature:

```typescript
deleteRegistration(tax_registration_id: InputValue<string>,
 params?: TaxConnectionDeleteRegistrationParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `tax_registration_id` | Required | string | Flint tax registration ID. |
| `expected_version` | Optional | integer | Registration version last read by the caller. Omit to delete the current registration. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [TaxRegistration](../models/TaxRegistration.md#taxregistration).

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

const result = await client.taxConnection.deleteRegistration("trg_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/taxConnection-deleteRegistration.mjs)

### taxConnection.disconnect

Turns automatic tax off while retaining the tax account and registrations for reconnecting. Choose tax_default_behavior explicitly: turn_off stops adding tax to new orders, checkout sessions and renewals that inherit the default; keep leaves the default unchanged, refuses those orders and holds renewals for retry without charging buyers or starting dunning. Payment links that explicitly enable automatic tax are refused when creating a checkout session with either choice. Settings are updated first when needed, then the connection is disconnected and open calculated automatic-tax orders without an issued invoice snapshot become incomplete. Issued invoice snapshots are unchanged. A same-key retry resumes after settings were changed; after a lost response, retrieve the connection and disconnect again if needed.

`POST /v1/tax-connection/disconnect`

Signature: `disconnect(params: TaxConnectionDisconnectParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [DisconnectTaxConnectionRequestInput](../models/DisconnectTaxConnectionRequest.md#disconnecttaxconnectionrequest) | The request body for: Disconnect automatic tax. |

Body model: [DisconnectTaxConnectionRequestInput](../models/DisconnectTaxConnectionRequest.md#disconnecttaxconnectionrequest).

#### taxConnection.disconnect body fields

Field definitions: [shared fields](../models/DisconnectTaxConnectionRequest.md#disconnecttaxconnectionrequest).

#### Response

Returned payload: [DisconnectTaxConnectionResult](../models/DisconnectTaxConnectionResult.md#disconnecttaxconnectionresult).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
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

const result = await client.taxConnection.disconnect({expected_version: 1793016000, tax_default_behavior: "turn_off"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/taxConnection-disconnect.mjs)

### taxConnection.get

Returns the environment's automatic sales tax connection, including before a record exists. Read the disclosure and status_reason to learn what connect needs. Business-detail changes, temporary provider pauses and registration date boundaries are computed at read time and do not advance version or send webhooks.

`GET /v1/tax-connection`

Signature: `get(params?: TaxConnectionGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

No request fields.

#### Response

Returned payload: [TaxConnection](../models/TaxConnection.md#taxconnection).

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

#### Example

```typescript
const result = await client.taxConnection.get({}, {  });
```

[Complete runnable example](../examples/taxConnection-get.mjs)

### taxConnection.getRegistration

Returns one saved tax registration. Removed registrations return RESOURCE_NOT_FOUND.

`GET /v1/tax-connection/registrations/{tax_registration_id}`

Signature:

```typescript
getRegistration(tax_registration_id: InputValue<string>,
 params?: TaxConnectionGetRegistrationParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `tax_registration_id` | Required | string | Flint tax registration ID. |

#### Response

Returned payload: [TaxRegistration](../models/TaxRegistration.md#taxregistration).

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
const result = await client.taxConnection.getRegistration("trg_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/taxConnection-getRegistration.mjs)

### taxConnection.listRegistrations

Returns independent tax registrations ordered by state ascending, then tax_registration_id ascending. Removed registrations never list. After a lost create response, filter by state and match the start_date sent by the create. Default order: state ascending, then tax_registration_id ascending.

`GET /v1/tax-connection/registrations`

Signature: `listRegistrations(params?: TaxConnectionListRegistrationsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Return registrations with these statuses. Removed registrations never list. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"scheduled"`, `"active"`, `"ended"`, `"rejected"`, `"removed"`. Values: `"pending"`, `"scheduled"`, `"active"`, `"ended"`, `"rejected"`, `"removed"`. |
| `state` | Optional | Array of string or string | Return registrations in these exact US postal states. Values match case-sensitively and intersect the status filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [47 declared values](../models/CreateTaxRegistrationRequest.md#createtaxregistrationrequest-state-values). Values: [47 declared values](../models/CreateTaxRegistrationRequest.md#createtaxregistrationrequest-state-values). |

#### Response

Returned payload: [TaxRegistrationListResponse](../models/TaxRegistrationListResponse.md#taxregistrationlistresponse).

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

Pagination: `listRegistrationsItems`, `listRegistrationsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.taxConnection.listRegistrations({}, {  });
```

[Complete runnable example](../examples/taxConnection-listRegistrations.mjs)

### taxConnection.updateRegistration

Updates locally without a tax-account call. Pending and rejected registrations allow registration_number, start_date and end_date; registration_number and start_date require a connection that is not active. Scheduled and active registrations allow only end_date. A pending or rejected registration whose tax-account copy exists or may have been created cannot change start_date; delete it and create it again. Ended registrations cannot be changed. End_date must be on or after start_date and today (UTC); null clears it before the registration ends. Date windows in the same state cannot overlap. To replace an active registration number, set its end_date, then create a replacement starting the next day. Changing end_date does not invalidate calculations made today. An empty patch is invalid.

`PATCH /v1/tax-connection/registrations/{tax_registration_id}`

Signature:

```typescript
updateRegistration(tax_registration_id: InputValue<string>,
 params: TaxConnectionUpdateRegistrationParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `tax_registration_id` | Required | string | Flint tax registration ID. |
| `body` | Required | [UpdateTaxRegistrationRequestInput](../models/UpdateTaxRegistrationRequestInput.md#updatetaxregistrationrequestinput) | Update at least one of registration_number, start_date or end_date. Pending and rejected registrations allow all three fields; registration_number and start_date require a connection that is not active. Scheduled and active registrations allow only end_date. A pending or rejected registration whose tax-account copy exists or may have been created cannot change start_date; delete it and create it again. Ended registrations cannot be changed. A version fence by itself is not a change. |

Body model: [UpdateTaxRegistrationRequestInput](../models/UpdateTaxRegistrationRequestInput.md#updatetaxregistrationrequestinput).

#### taxConnection.updateRegistration body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_date` | Optional | string or null | Last day the registration applies, inclusive. Must be on or after start_date and today (UTC). Send null to clear the end date before the registration has ended. Format: `date`. minLength: `1`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Omit to apply the change to the current resource. Format: `uint64`. minimum: `1`. |
| `registration_number` | Optional | string | Seller's tax registration number. Write-only; responses return only its last four characters. minLength: `1`. maxLength: `255`. Input only. |
| `start_date` | Optional | string | First day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. May be up to 365 days in the future. Format: `date`. minLength: `1`. |

#### taxConnection.updateRegistration: variant 1



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_date` | Optional | string or null | Last day the registration applies, inclusive. Must be on or after start_date and today (UTC). Send null to clear the end date before the registration has ended. Format: `date`. minLength: `1`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Omit to apply the change to the current resource. Format: `uint64`. minimum: `1`. |
| `registration_number` | Required | string | Seller's tax registration number. Write-only; responses return only its last four characters. minLength: `1`. maxLength: `255`. Input only. |
| `start_date` | Optional | string | First day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. May be up to 365 days in the future. Format: `date`. minLength: `1`. |

#### taxConnection.updateRegistration: variant 2



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_date` | Optional | string or null | Last day the registration applies, inclusive. Must be on or after start_date and today (UTC). Send null to clear the end date before the registration has ended. Format: `date`. minLength: `1`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Omit to apply the change to the current resource. Format: `uint64`. minimum: `1`. |
| `registration_number` | Optional | string | Seller's tax registration number. Write-only; responses return only its last four characters. minLength: `1`. maxLength: `255`. Input only. |
| `start_date` | Required | string | First day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. May be up to 365 days in the future. Format: `date`. minLength: `1`. |

#### taxConnection.updateRegistration: variant 3



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_date` | Required | string or null | Last day the registration applies, inclusive. Must be on or after start_date and today (UTC). Send null to clear the end date before the registration has ended. Format: `date`. minLength: `1`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Omit to apply the change to the current resource. Format: `uint64`. minimum: `1`. |
| `registration_number` | Optional | string | Seller's tax registration number. Write-only; responses return only its last four characters. minLength: `1`. maxLength: `255`. Input only. |
| `start_date` | Optional | string | First day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. May be up to 365 days in the future. Format: `date`. minLength: `1`. |

#### Response

Returned payload: [TaxRegistration](../models/TaxRegistration.md#taxregistration).

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

const result = await client.taxConnection.updateRegistration("trg_01ARZ3NDEKTSV4RRFFQ69G5FAV", {end_date: "2026-12-31"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/taxConnection-updateRegistration.mjs)

