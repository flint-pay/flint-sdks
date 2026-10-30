[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# workloadIdentities

### workloadIdentities.create

Creates an active identity in the authenticated environment and validates issuer discovery. Dashboard callers creating live identities need fresh identity verification. Machine callers may grant only scopes they hold in this environment.

`POST /v1/workload-identities`

Signature: `create(params: WorkloadIdentitiesCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateWorkloadIdentityRequestInput](../models/CreateWorkloadIdentityRequest.md#createworkloadidentityrequest) | The request body for: Create a workload identity. |

Body model: [CreateWorkloadIdentityRequestInput](../models/CreateWorkloadIdentityRequest.md#createworkloadidentityrequest).

#### workloadIdentities.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `audience` | Optional | string | Immutable token audience. Defaults to Flint's configured issuer URL when omitted. minLength: `1`. maxLength: `255`. |
| `claim_conditions` | Optional | Array of [WorkloadIdentityClaimConditionRequestInput](../models/WorkloadIdentityClaimConditionRequest.md#workloadidentityclaimconditionrequest) | Bounded value array, at most 10. Defaults to []. Any glob requires an exact claim condition; shared issuers require tenant pinning. maxItems: `10`. uniqueItems: `true`. |
| `issuer` | Required | string | Immutable public HTTPS issuer with a DNS host, optional port 443, and no userinfo, query, or fragment. Compared exactly. minLength: `1`. maxLength: `255`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Required | Array of string | Complete scope set to grant. Machine callers may grant only scopes they hold in the same environment. Items values: [96 declared values](../models/APIKey.md#apikey-scopes--values). |
| `subject` | Required | string | minLength: `1`. maxLength: `1024`. |
| `subject_match` | Optional | string | Default: `"exact"`. Values: `"exact"`, `"glob"`. |

#### Response

Returned payload: [WorkloadIdentity](../models/WorkloadIdentity.md#workloadidentity).

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

const result = await client.workloadIdentities.create({claim_conditions: [{claim: "repository_owner_id", match: "exact", value: "123456"}], issuer: "https://token.actions.githubusercontent.com", name: "Production deploy", scopes: ["commerce.orders.read"], subject: "repo:acme/shop:ref:refs/heads/main"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/workloadIdentities-create.mjs)

### workloadIdentities.delete

Soft-archives the identity and returns it with status archived. The identity remains readable by ID and cannot be reactivated. Repeating DELETE without a stale fence returns the archived identity without changing its version.

`DELETE /v1/workload-identities/{workload_identity_id}`

Signature: `delete(workload_identity_id: InputValue<string>, params?: WorkloadIdentitiesDeleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `workload_identity_id` | Required | string | Flint workload identity ID. |
| `expected_version` | Optional | integer | Optional version most recently read. Format: `int64`. minimum: `1`. |

#### Response

Returned payload: [WorkloadIdentity](../models/WorkloadIdentity.md#workloadidentity).

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

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.workloadIdentities.delete("wid_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/workloadIdentities-delete.mjs)

### workloadIdentities.get

Returns an identity in the authenticated environment, including an archived identity.

`GET /v1/workload-identities/{workload_identity_id}`

Signature:

```typescript
get(workload_identity_id: InputValue<string>,
 params?: WorkloadIdentitiesGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `workload_identity_id` | Required | string | Flint workload identity ID. |

#### Response

Returned payload: [WorkloadIdentity](../models/WorkloadIdentity.md#workloadidentity).

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
const result = await client.workloadIdentities.get("wid_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/workloadIdentities-get.mjs)

### workloadIdentities.list

Returns identities in the authenticated environment, ordered by created_at descending and workload_identity_id descending by default. Archived identities are excluded unless status includes archived. Default order: created_at descending, then workload_identity_id descending.

`GET /v1/workload-identities`

Signature: `list(params?: WorkloadIdentitiesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by workload_identity_id. Default: `"created_at"`. Values: `"created_at"`, `"last_used_at"`, `"name"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |

#### Response

Returned payload: [WorkloadIdentityListResponse](../models/WorkloadIdentityListResponse.md#workloadidentitylistresponse).

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
const result = await client.workloadIdentities.list({}, {  });
```

[Complete runnable example](../examples/workloadIdentities-list.mjs)

### workloadIdentities.update

Updates mutable policy fields. expected_version is optional for scalar updates and required when claim_conditions or scopes is supplied. Arrays replace their entire value. Issuer and audience are immutable. Dashboard callers reactivating or widening live identities need fresh identity verification.

`PATCH /v1/workload-identities/{workload_identity_id}`

Signature: `update(workload_identity_id: InputValue<string>, params: WorkloadIdentitiesUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `workload_identity_id` | Required | string | Flint workload identity ID. |
| `body` | Required | [UpdateWorkloadIdentityRequestInput](../models/UpdateWorkloadIdentityRequest.md#updateworkloadidentityrequest) | The request body for: Update a workload identity. |

Body model: [UpdateWorkloadIdentityRequestInput](../models/UpdateWorkloadIdentityRequest.md#updateworkloadidentityrequest).

#### workloadIdentities.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `claim_conditions` | Optional | Array of [WorkloadIdentityClaimConditionRequestInput](../models/WorkloadIdentityClaimConditionRequest.md#workloadidentityclaimconditionrequest) | Bounded value array, at most 10. Defaults to []. Any glob requires an exact claim condition; shared issuers require tenant pinning. maxItems: `10`. uniqueItems: `true`. |
| `expected_version` | Optional | integer | Version most recently read. Required when claim_conditions or scopes is supplied; optional for scalar updates. Format: `int64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | Complete scope set to grant. Machine callers may grant only scopes they hold in the same environment. Items values: [96 declared values](../models/APIKey.md#apikey-scopes--values). |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |
| `subject` | Optional | string | minLength: `1`. maxLength: `1024`. |
| `subject_match` | Optional | string | Default: `"exact"`. Values: `"exact"`, `"glob"`. |

#### Response

Returned payload: [WorkloadIdentity](../models/WorkloadIdentity.md#workloadidentity).

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

const result = await client.workloadIdentities.update("wid_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Release deploy"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/workloadIdentities-update.mjs)

