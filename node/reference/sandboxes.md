[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# sandboxes

### sandboxes.create

Creates a new empty test sandbox for the current merchant. Send `issue_test_key: true` to also receive a test key bound to it.

`POST /v1/sandboxes`

Signature: `create(params: SandboxesCreateParams, options?: RequestOptions<"merchant" | "onboarding">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateSandboxRequestInput](../models/CreateSandboxRequest.md#createsandboxrequest) | The request body for: Create sandbox. |

Body model: [CreateSandboxRequestInput](../models/CreateSandboxRequest.md#createsandboxrequest).

#### sandboxes.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Optional | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `issue_test_key` | Optional | boolean |  |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKey.md#apikey-scopes--values). |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### sandboxes.create: Test key



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Optional | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `issue_test_key` | Required | boolean | Values: `true`. |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKey.md#apikey-scopes--values). |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### sandboxes.create: Full



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`. |
| `issue_test_key` | Required | boolean | Values: `true`. |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKey.md#apikey-scopes--values). |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### sandboxes.create: Read only



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"read_only"`. |
| `issue_test_key` | Required | boolean | Values: `true`. |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKey.md#apikey-scopes--values). |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### sandboxes.create: Restricted



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"restricted"`. |
| `issue_test_key` | Required | boolean | Values: `true`. |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Required | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKey.md#apikey-scopes--values). |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### sandboxes.create: No test key



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Optional | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `issue_test_key` | Optional | boolean | Values: `false`. |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKey.md#apikey-scopes--values). |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### Response

Returned payload: [CreateDeveloperSandboxResult](../models/CreateDeveloperSandboxResult.md#createdevelopersandboxresult).

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

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.sandboxes.create({access: "restricted", issue_test_key: true, name: "QA", scopes: ["commerce.orders.read", "commerce.orders.write"], test_key_name: "QA integration key"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/sandboxes-create.mjs)

### sandboxes.createAPIKey

Creates a new test API key that is bound to the target sandbox.

`POST /v1/sandboxes/{sandbox_id}/api-keys`

Signature: `createAPIKey(sandbox_id: InputValue<string>, params: SandboxesCreateAPIKeyParams, options?: RequestOptions<"merchant" | "onboarding">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `sandbox_id` | Required | string | Flint sandbox ID. |
| `body` | Required | [IssueSandboxAPIKeyRequestInput](../models/IssueSandboxAPIKeyRequest.md#issuesandboxapikeyrequest) | The request body for: Issue sandbox test key. |

Body model: [IssueSandboxAPIKeyRequestInput](../models/IssueSandboxAPIKeyRequest.md#issuesandboxapikeyrequest).

#### sandboxes.createAPIKey body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKey.md#apikey-scopes--values). |

#### sandboxes.createAPIKey with `access: "full"`

The `full` variant of `IssueSandboxAPIKeyRequest`.

Body model: [IssueSandboxAPIKeyRequestFullInput](../models/IssueSandboxAPIKeyRequestFull.md#issuesandboxapikeyrequestfull).

#### sandboxes.createAPIKey with `access: "read_only"`

The `read_only` variant of `IssueSandboxAPIKeyRequest`.

Body model: [IssueSandboxAPIKeyRequestReadOnlyInput](../models/IssueSandboxAPIKeyRequestReadOnly.md#issuesandboxapikeyrequestreadonly).

#### sandboxes.createAPIKey with `access: "restricted"`

The `restricted` variant of `IssueSandboxAPIKeyRequest`.

Body model: [IssueSandboxAPIKeyRequestRestrictedInput](../models/IssueSandboxAPIKeyRequestRestricted.md#issuesandboxapikeyrequestrestricted).

#### Response

Returned payload: [APIKeyWithSecret](../models/APIKeyWithSecret.md#apikeywithsecret).

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

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.sandboxes.createAPIKey("test_01ARZ3NDEKTSV4RRFFQ69G5FAV", {access: "restricted", name: "Partner demo key", scopes: ["commerce.orders.read", "customers.read"]}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/sandboxes-createAPIKey.mjs)

### sandboxes.delete

Retires a non-default sandbox and frees its original name for reuse.

`DELETE /v1/sandboxes/{sandbox_id}`

Signature: `delete(sandbox_id: InputValue<string>, params?: SandboxesDeleteParams, options?: RequestOptions<"merchant" | "onboarding">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `sandbox_id` | Required | string | Flint sandbox ID. |

#### Response

Returned payload: [Sandbox](../models/Sandbox.md#sandbox).

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

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.sandboxes.delete("test_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/sandboxes-delete.mjs)

### sandboxes.get

Returns a single sandbox by ID.

`GET /v1/sandboxes/{sandbox_id}`

Signature:

```typescript
get(sandbox_id: InputValue<string>,
 params?: SandboxesGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" |
  "onboarding">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `sandbox_id` | Required | string | Flint sandbox ID. |

#### Response

Returned payload: [Sandbox](../models/Sandbox.md#sandbox).

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

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.sandboxes.get("test_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/sandboxes-get.mjs)

### sandboxes.list

Returns the merchant's sandboxes. Flint guarantees a default test sandbox for every merchant. Use an onboarding session token during setup or a normal external API key afterward. Default order: is_default descending, then created_at descending, then sandbox_id descending.

`GET /v1/sandboxes`

Signature: `list(params?: SandboxesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>)`

#### Request fields

Field definitions: [shared fields](partnerApps.md#request-fields-7).

#### Response

Returned payload: [SandboxListResponse](../models/SandboxListResponse.md#sandboxlistresponse).

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

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.sandboxes.list({}, {  });
```

[Complete runnable example](../examples/sandboxes-list.mjs)

### sandboxes.reset

Clears a non-default sandbox and returns its replacement environment. The replacement has a new sandbox ID, retains the stable provider-account lineage, and requires newly issued test keys. The archived sandbox's `replaced_by_sandbox_id` names the replacement.

`POST /v1/sandboxes/{sandbox_id}/reset`

Signature: `reset(sandbox_id: InputValue<string>, params?: SandboxesResetParams, options?: RequestOptions<"merchant" | "onboarding">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `sandbox_id` | Required | string | Flint sandbox ID. |

#### Response

Returned payload: [Sandbox](../models/Sandbox.md#sandbox).

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

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.sandboxes.reset("test_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/sandboxes-reset.mjs)

