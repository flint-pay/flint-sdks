[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# taxConnection

### taxConnection.connect

Records the seller's attestation and creates or completes the tax account from verified business details and the default line-item tax category in settings. Syncs registrations and removes tax-account copies of deleted registrations. Reconnect retains the tax account and does not turn the default tax setting back on. A rejected stored registration returns attention_required with registration_rejected. Successful configuration marks open calculated automatic-tax orders without an issued invoice incomplete and advances their versions. A same-key retry resumes setup without creating another account; unconfirmed account creation requires support. Retrieve the connection after a lost response.

`POST /v1/tax-connection/connect`

Signature:

```typescript
connect(params: (InputValue<ConnectTaxConnectionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ConnectTaxConnectionRequestInput](../models/ConnectTaxConnectionRequest.md#connecttaxconnectionrequest) | The request body for: Connect automatic tax. |

Body model: [ConnectTaxConnectionRequestInput](../models/ConnectTaxConnectionRequest.md#connecttaxconnectionrequest).

#### taxConnection.connect body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Resource version last read by the caller. Omit to apply the change to the current resource. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `seller_attestation` | Required | [SellerTaxAttestationRequestInput](../models/SellerTaxAttestationRequest.md#sellertaxattestationrequest) | Presence records the seller's agreement to the named disclosure version. The seller's agreement to the current automatic sales tax disclosure, recorded when connect succeeds. |

#### Response

Returned payload: [TaxConnection](../models/TaxConnection.md#taxconnection).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `connectWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.taxConnection.connect({seller_attestation: {disclosure_version: "example"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/taxConnection-connect.mjs)

### taxConnection.createRegistration

Saves one US state registration for a non-overlapping, inclusive date window. Start_date may be up to 365 days ahead; end_date is optional. Before the connection is active, saves locally as pending without creating a tax account. On an active connection, syncs the registration in this request. Acceptance of a registration effective today marks open calculated automatic-tax orders without an issued invoice incomplete, advancing their versions. Scheduled registrations do not invalidate calculations. A definitive rejection before a tax-account registration exists removes the pending registration and leaves working tax and orders unchanged. If a tax-account copy exists or may have been created, rejection cleanup marks those open orders incomplete and advances their versions. Successful cleanup leaves the connection active. An uncertain outcome keeps the registration pending and the connection active; retry with the same key to resume without duplicating the registration. If the key is lost, filter the list by state and match the submitted start_date, delete the pending registration and create again after deletion succeeds.

`POST /v1/tax-connection/registrations`

Signature:

```typescript
createRegistration(params: (InputValue<CreateTaxRegistrationRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
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

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createRegistrationWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

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
 params?: {
  "expected_version"?: InputValue<`${bigint}` | bigint>;
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `tax_registration_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [TaxRegistration](../models/TaxRegistration.md#taxregistration).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `deleteRegistrationWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.taxConnection.deleteRegistration("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/taxConnection-deleteRegistration.mjs)

### taxConnection.disconnect

Turns automatic tax off while retaining the tax account and registrations for reconnecting. Choose tax_default_behavior explicitly: turn_off stops adding tax to new orders, checkout sessions and renewals that inherit the default; keep leaves the default unchanged, refuses those orders and holds renewals for retry without charging buyers or starting dunning. Payment links that explicitly enable automatic tax are refused when creating a checkout session with either choice. Settings are updated first when needed, then the connection is disconnected and open calculated automatic-tax orders without an issued invoice snapshot become incomplete. Issued invoice snapshots are unchanged. A same-key retry resumes after settings were changed; after a lost response, retrieve the connection and disconnect again if needed.

`POST /v1/tax-connection/disconnect`

Signature:

```typescript
disconnect(params: (InputValue<DisconnectTaxConnectionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [DisconnectTaxConnectionRequestInput](../models/DisconnectTaxConnectionRequest.md#disconnecttaxconnectionrequest) | The request body for: Disconnect automatic tax. |

Body model: [DisconnectTaxConnectionRequestInput](../models/DisconnectTaxConnectionRequest.md#disconnecttaxconnectionrequest).

#### taxConnection.disconnect body fields

Field definitions: [shared fields](../models/DisconnectTaxConnectionRequest.md#disconnecttaxconnectionrequest).

#### Response

Returned payload: [DisconnectTaxConnectionResult](../models/DisconnectTaxConnectionResult.md#disconnecttaxconnectionresult).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `disconnectWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.taxConnection.disconnect({tax_default_behavior: "turn_off"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/taxConnection-disconnect.mjs)

### taxConnection.get

Returns the environment's automatic sales tax connection, including before a record exists. Read the disclosure and status_reason to learn what connect needs. Business-detail changes, temporary provider pauses and registration date boundaries are computed at read time and do not advance version or send webhooks.

`GET /v1/tax-connection`

Signature: `get(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

No request fields.

#### Response

Returned payload: [TaxConnection](../models/TaxConnection.md#taxconnection).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.taxConnection.get({}, {  });
```

[Complete runnable example](../examples/taxConnection-get.mjs)

### taxConnection.getRegistration

Returns one saved tax registration. Removed registrations return RESOURCE_NOT_FOUND.

`GET /v1/tax-connection/registrations/{tax_registration_id}`

Signature: `getRegistration(tax_registration_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `tax_registration_id` | Required | string |  |

#### Response

Returned payload: [TaxRegistration](../models/TaxRegistration.md#taxregistration).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getRegistrationWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.taxConnection.getRegistration("example", {}, {  });
```

[Complete runnable example](../examples/taxConnection-getRegistration.mjs)

### taxConnection.listRegistrations

Returns independent tax registrations ordered by state ascending, then tax_registration_id ascending. Removed registrations never list. After a lost create response, filter by state and match the start_date sent by the create. Default order: state ascending, then tax_registration_id ascending.

`GET /v1/tax-connection/registrations`

Signature:

```typescript
listRegistrations(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "status"?: InputValue<Array<"pending" | "scheduled" | "active" | "ended" | "rejected" | "removed">>;
  "state"?: InputValue<Array<"AL" |
    "AK" |
    "AZ" |
    "AR" |
    "CA" |
    "CO" |
    "CT" |
    "DC" |
    "FL" |
    "GA" |
    "HI" |
    "ID" |
    "IL" |
    "IN" |
    "IA" |
    "KS" |
    "KY" |
    "LA" |
    "ME" |
    "MD" |
    "MA" |
    "MI" |
    "MN" |
    "MS" |
    "MO" |
    "NE" |
    "NV" |
    "NJ" |
    "NM" |
    "NY" |
    "NC" |
    "ND" |
    "OH" |
    "OK" |
    "PA" |
    "RI" |
    "SC" |
    "SD" |
    "TN" |
    "TX" |
    "UT" |
    "VT" |
    "VA" |
    "WA" |
    "WV" |
    "WI" |
    "WY">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"pending"`, `"scheduled"`, `"active"`, `"ended"`, `"rejected"`, `"removed"`. |
| `state` | Optional | Array of string | minItems: `1`. Items values: [47 declared values](../models/CreateTaxRegistrationRequest.md#createtaxregistrationrequest-state-values). |

#### Response

Returned payload: [TaxRegistrationListResponse](../models/TaxRegistrationListResponse.md#taxregistrationlistresponse).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listRegistrationsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listRegistrationsItems`, `listRegistrationsPages`, `listRegistrationsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

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
 params: (InputValue<UpdateTaxRegistrationRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `tax_registration_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateTaxRegistrationRequestInput](../models/UpdateTaxRegistrationRequestInput.md#updatetaxregistrationrequestinput) | Update at least one of registration_number, start_date or end_date. Pending and rejected registrations allow all three fields; registration_number and start_date require a connection that is not active. Scheduled and active registrations allow only end_date. A pending or rejected registration whose tax-account copy exists or may have been created cannot change start_date; delete it and create it again. Ended registrations cannot be changed. A version fence by itself is not a change. |

Body model: [UpdateTaxRegistrationRequestInput](../models/UpdateTaxRegistrationRequestInput.md#updatetaxregistrationrequestinput).

#### taxConnection.updateRegistration body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_date` | Optional | string or null | Last day the registration applies, inclusive. Must be on or after start_date and today (UTC). Send null to clear the end date before the registration has ended. Format: `date`. minLength: `1`. |
| `expected_version` | Optional | integer string | Resource version last read by the caller. Omit to apply the change to the current resource. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `registration_number` | Optional | string | Seller's tax registration number. Write-only; responses return only its last four characters. minLength: `1`. maxLength: `255`. Input only. |
| `start_date` | Optional | string | First day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. May be up to 365 days in the future. Format: `date`. minLength: `1`. |

#### taxConnection.updateRegistration body anyOf variant 1



#### taxConnection.updateRegistration body anyOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_date` | Optional | string or null | Last day the registration applies, inclusive. Must be on or after start_date and today (UTC). Send null to clear the end date before the registration has ended. Format: `date`. minLength: `1`. |
| `expected_version` | Optional | integer string | Resource version last read by the caller. Omit to apply the change to the current resource. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `registration_number` | Required | string | Seller's tax registration number. Write-only; responses return only its last four characters. minLength: `1`. maxLength: `255`. Input only. |
| `start_date` | Optional | string | First day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. May be up to 365 days in the future. Format: `date`. minLength: `1`. |

#### taxConnection.updateRegistration body anyOf variant 2



#### taxConnection.updateRegistration body anyOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_date` | Optional | string or null | Last day the registration applies, inclusive. Must be on or after start_date and today (UTC). Send null to clear the end date before the registration has ended. Format: `date`. minLength: `1`. |
| `expected_version` | Optional | integer string | Resource version last read by the caller. Omit to apply the change to the current resource. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `registration_number` | Optional | string | Seller's tax registration number. Write-only; responses return only its last four characters. minLength: `1`. maxLength: `255`. Input only. |
| `start_date` | Required | string | First day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. May be up to 365 days in the future. Format: `date`. minLength: `1`. |

#### taxConnection.updateRegistration body anyOf variant 3



#### taxConnection.updateRegistration body anyOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_date` | Required | string or null | Last day the registration applies, inclusive. Must be on or after start_date and today (UTC). Send null to clear the end date before the registration has ended. Format: `date`. minLength: `1`. |
| `expected_version` | Optional | integer string | Resource version last read by the caller. Omit to apply the change to the current resource. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `registration_number` | Optional | string | Seller's tax registration number. Write-only; responses return only its last four characters. minLength: `1`. maxLength: `255`. Input only. |
| `start_date` | Optional | string | First day the registration applies, inclusive. Flint checks it against each sale's local date. Status and validation use the UTC date. May be up to 365 days in the future. Format: `date`. minLength: `1`. |

#### Response

Returned payload: [TaxRegistration](../models/TaxRegistration.md#taxregistration).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateRegistrationWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.taxConnection.updateRegistration("example", {registration_number: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/taxConnection-updateRegistration.mjs)

