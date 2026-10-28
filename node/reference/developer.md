[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# developer

### developer.createPartnerApp

Creates a partner app owned by the authenticated merchant. Use a developer setup session during setup or a normal external API key afterward.

`POST /v1/partner-apps`

Signature:

```typescript
createPartnerApp(params: (InputValue<CreatePartnerAppRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "onboarding">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreatePartnerAppRequestInput](../models/CreatePartnerAppRequest.md#createpartnerapprequest) | The request body for: Create partner app. |

Body model: [CreatePartnerAppRequestInput](../models/CreatePartnerAppRequest.md#createpartnerapprequest).

#### developer.createPartnerApp body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean | Defaults to false: no client secret is generated. Register a public key, JWKS URL, or workload identity to authenticate with a client assertion. Set true explicitly to issue a client secret at creation. Default: `false`. |
| `default_requested_permissions` | Optional | Array of string | Items: minLength: `1`. |
| `name` | Required | string | minLength: `1`. |
| `permission_manifest` | Required | Array of [PartnerAppPermissionManifestEntryRequestRequestInput](../models/PartnerAppPermissionManifestEntryRequestRequestInput.md#partnerapppermissionmanifestentryrequestrequestinput) |  |
| `redirect_uris` | Required | Array of string | Items: minLength: `1`. |

#### Response

Returned payload: [PartnerAppWithSecret](../models/PartnerAppWithSecret.md#partnerappwithsecret).

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

Complete body and metadata: `createPartnerAppWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.developer.createPartnerApp({name: "example", permission_manifest: [], redirect_uris: []}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/developer-createPartnerApp.mjs)

### developer.createPartnerAppCredential

Registers an immutable public key, JWKS URL, or workload identity for client assertion authentication. An app can have at most 20 active credentials. Dashboard callers need fresh identity verification. Replace a credential by creating a new one, then removing the old one.

`POST /v1/partner-apps/{partner_app_id}/credentials`

Signature: `createPartnerAppCredential(input: DeveloperCreatePartnerAppCredentialInput, options?: RequestOptions)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreatePartnerAppCredentialRequestInput](../models/CreatePartnerAppCredentialRequest.md#createpartnerappcredentialrequest) | An immutable public key, JWKS URL, or workload identity credential for partner app client authentication. |

Body model: [CreatePartnerAppCredentialRequestInput](../models/CreatePartnerAppCredentialRequest.md#createpartnerappcredentialrequest).

#### developer.createPartnerAppCredential body oneOf variant 1

The `public_key` variant of `CreatePartnerAppCredentialRequest`.

Body model: [CreatePartnerAppCredentialPublicKeyRequestInput](../models/CreatePartnerAppCredentialPublicKeyRequest.md#createpartnerappcredentialpublickeyrequest).

#### developer.createPartnerAppCredential body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Optional | string | Optional name to identify this credential. minLength: `1`. maxLength: `100`. |
| `public_key` | Required | [PartnerAppCredentialPublicKeyRequestInput](../models/PartnerAppCredentialPublicKeyRequest.md#partnerappcredentialpublickeyrequest) | The public JSON Web Key to register for client authentication. |
| `type` | Required | string | Credential type. Values: `"public_key"`. |

#### developer.createPartnerAppCredential body oneOf variant 2

The `jwks_url` variant of `CreatePartnerAppCredentialRequest`.

Body model: [CreatePartnerAppCredentialJWKSURLRequestInput](../models/CreatePartnerAppCredentialJWKSURLRequest.md#createpartnerappcredentialjwksurlrequest).

#### developer.createPartnerAppCredential body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `jwks_url` | Required | [PartnerAppCredentialJWKSURLRequestInput](../models/PartnerAppCredentialJWKSURLRequestInput.md#partnerappcredentialjwksurlrequestinput) | A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before registering the credential. |
| `name` | Optional | string | Optional name to identify this credential. minLength: `1`. maxLength: `100`. |
| `type` | Required | string | Credential type. Values: `"jwks_url"`. |

#### developer.createPartnerAppCredential body oneOf variant 3

The `workload_identity` variant of `CreatePartnerAppCredentialRequest`.

Body model: [CreatePartnerAppCredentialWorkloadIdentityRequestInput](../models/CreatePartnerAppCredentialWorkloadIdentityRequest.md#createpartnerappcredentialworkloadidentityrequest).

#### developer.createPartnerAppCredential body oneOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Optional | string | Optional name to identify this credential. minLength: `1`. maxLength: `100`. |
| `type` | Required | string | Credential type. Values: `"workload_identity"`. |
| `workload_identity` | Required | [PartnerAppCredentialWorkloadIdentityRequestInput](../models/PartnerAppCredentialWorkloadIdentityRequest.md#partnerappcredentialworkloadidentityrequest) | An external OIDC identity whose subject and claim conditions must match exactly the registered policy. |

#### Response

Returned payload: [PartnerAppCredential](../models/PartnerAppCredential.md#partnerappcredential).

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
| 502 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createPartnerAppCredentialWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.developer.createPartnerAppCredential({partner_app_id: "example", body: {type: "public_key", public_key: {jwk: {}}}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/developer-createPartnerAppCredential.mjs)

### developer.createSandbox

Creates a new empty test sandbox for the current merchant. Send `issue_test_key: true` to also receive a test key bound to it.

`POST /v1/sandboxes`

Signature:

```typescript
createSandbox(params: (InputValue<CreateSandboxRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "onboarding">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateSandboxRequestInput](../models/CreateSandboxRequest.md#createsandboxrequest) | The request body for: Create sandbox. |

Body model: [CreateSandboxRequestInput](../models/CreateSandboxRequest.md#createsandboxrequest).

#### developer.createSandbox body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Optional | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `issue_test_key` | Optional | boolean |  |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKey.md#apikey-scopes--values). |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### developer.createSandbox body oneOf variant 1



#### developer.createSandbox body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Optional | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `issue_test_key` | Required | boolean | Values: `true`. |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKey.md#apikey-scopes--values). |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### developer.createSandbox body oneOf variant 1 oneOf variant 1



#### developer.createSandbox body oneOf variant 1 oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`. |
| `issue_test_key` | Required | boolean | Values: `true`. |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKey.md#apikey-scopes--values). |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### developer.createSandbox body oneOf variant 1 oneOf variant 2



#### developer.createSandbox body oneOf variant 1 oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"read_only"`. |
| `issue_test_key` | Required | boolean | Values: `true`. |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKey.md#apikey-scopes--values). |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### developer.createSandbox body oneOf variant 1 oneOf variant 3



#### developer.createSandbox body oneOf variant 1 oneOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"restricted"`. |
| `issue_test_key` | Required | boolean | Values: `true`. |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Required | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKey.md#apikey-scopes--values). |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### developer.createSandbox body oneOf variant 2



#### developer.createSandbox body oneOf variant 2 fields

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

Complete body and metadata: `createSandboxWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.developer.createSandbox({name: "example", issue_test_key: true, access: "full"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/developer-createSandbox.mjs)

### developer.createSandboxAPIKey

Creates a new test API key that is bound to the target sandbox.

`POST /v1/sandboxes/{sandbox_id}/api-keys`

Signature:

```typescript
createSandboxAPIKey(sandbox_id: InputValue<string>,
 params: (InputValue<IssueSandboxAPIKeyRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "onboarding">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `sandbox_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [IssueSandboxAPIKeyRequestInput](../models/IssueSandboxAPIKeyRequest.md#issuesandboxapikeyrequest) | The request body for: Issue sandbox test key. |

Body model: [IssueSandboxAPIKeyRequestInput](../models/IssueSandboxAPIKeyRequest.md#issuesandboxapikeyrequest).

#### developer.createSandboxAPIKey body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKey.md#apikey-scopes--values). |

#### developer.createSandboxAPIKey body oneOf variant 1

The `full` variant of `IssueSandboxAPIKeyRequest`.

Body model: [IssueSandboxAPIKeyRequestFullInput](../models/IssueSandboxAPIKeyRequestFull.md#issuesandboxapikeyrequestfull).

#### developer.createSandboxAPIKey body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKey.md#apikey-scopes--values). |

#### developer.createSandboxAPIKey body oneOf variant 2

The `read_only` variant of `IssueSandboxAPIKeyRequest`.

Body model: [IssueSandboxAPIKeyRequestReadOnlyInput](../models/IssueSandboxAPIKeyRequestReadOnly.md#issuesandboxapikeyrequestreadonly).

#### developer.createSandboxAPIKey body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"read_only"`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKey.md#apikey-scopes--values). |

#### developer.createSandboxAPIKey body oneOf variant 3

The `restricted` variant of `IssueSandboxAPIKeyRequest`.

Body model: [IssueSandboxAPIKeyRequestRestrictedInput](../models/IssueSandboxAPIKeyRequestRestricted.md#issuesandboxapikeyrequestrestricted).

#### developer.createSandboxAPIKey body oneOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"restricted"`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Required | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKey.md#apikey-scopes--values). |

#### Response

Returned payload: [APIKeyWithSecret](../models/APIKeyWithSecret.md#apikeywithsecret).

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

Complete body and metadata: `createSandboxAPIKeyWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.developer.createSandboxAPIKey("example", {name: "example", access: "full"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/developer-createSandboxAPIKey.mjs)

### developer.deletePartnerApp

Archives a partner app (soft delete). The app stays readable with status archived; it cannot be installed, exchange tokens, or receive events, and its client ID is never reused. Revoke every active install first; pending installs are revoked with the app. Delete the app’s webhook endpoints separately.

`DELETE /v1/partner-apps/{partner_app_id}`

Signature:

```typescript
deletePartnerApp(partner_app_id: InputValue<string>,
 params?: {
  "expected_version"?: InputValue<`${bigint}` | bigint>;
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [PartnerApp](../models/PartnerApp.md#partnerapp).

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

Complete body and metadata: `deletePartnerAppWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.developer.deletePartnerApp("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/developer-deletePartnerApp.mjs)

### developer.deletePartnerAppCredential

Soft-removes the credential and immediately stops its use for client authentication. The credential remains readable. Removing an already removed credential returns it unchanged.

`DELETE /v1/partner-apps/{partner_app_id}/credentials/{partner_app_credential_id}`

Signature:

```typescript
deletePartnerAppCredential(partner_app_id: InputValue<string>,
 partner_app_credential_id: InputValue<string>,
 params?: {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string |  |
| `partner_app_credential_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [PartnerAppCredential](../models/PartnerAppCredential.md#partnerappcredential).

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

Complete body and metadata: `deletePartnerAppCredentialWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.developer.deletePartnerAppCredential("example", "example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/developer-deletePartnerAppCredential.mjs)

### developer.deleteSandbox

Retires a non-default sandbox and frees its original name for reuse.

`DELETE /v1/sandboxes/{sandbox_id}`

Signature:

```typescript
deleteSandbox(sandbox_id: InputValue<string>,
 params?: {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "onboarding">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `sandbox_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [Sandbox](../models/Sandbox.md#sandbox).

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

Complete body and metadata: `deleteSandboxWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.developer.deleteSandbox("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/developer-deleteSandbox.mjs)

### developer.getAuthContext

Returns non-secret metadata for an API key or CLI OAuth access token, including its merchant, environment, sandbox binding, and granted scopes. CLI OAuth sessions include auth_type=oauth and a stable oauth_grant_id instead of api_key_id. Multi-context tokens also include oauth_session_id, context_id, and the context name. No additional API scope is required.

`GET /v1/auth-context`

Signature: `getAuthContext(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

No request fields.

#### Response

Returned payload: [AuthContext](../models/AuthContext.md#authcontext).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getAuthContextWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.developer.getAuthContext({}, {  });
```

[Complete runnable example](../examples/developer-getAuthContext.mjs)

### developer.getCurrentAPIKeyRequestLog

Returns one request with redacted headers, the redacted request and response bodies for write routes that capture them, and a curl reproduction. Detail older than 14 days has no headers or bodies.

`GET /v1/api-request-logs/{api_request_log_id}`

Signature:

```typescript
getCurrentAPIKeyRequestLog(api_request_log_id: InputValue<string>,
 params?: {
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Required | string |  |

#### Response

Returned payload: [APIRequestLogDetail](../models/APIRequestLogDetail.md#apirequestlogdetail).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getCurrentAPIKeyRequestLogWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.developer.getCurrentAPIKeyRequestLog("example", {}, {  });
```

[Complete runnable example](../examples/developer-getCurrentAPIKeyRequestLog.mjs)

### developer.getPartnerApp

Returns a single partner app owned by the authenticated merchant.

`GET /v1/partner-apps/{partner_app_id}`

Signature: `getPartnerApp(partner_app_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string |  |

#### Response

Returned payload: [PartnerApp](../models/PartnerApp.md#partnerapp).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getPartnerAppWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.developer.getPartnerApp("example", {}, {  });
```

[Complete runnable example](../examples/developer-getPartnerApp.mjs)

### developer.getPartnerAppCredential

Returns a credential, including a removed credential.

`GET /v1/partner-apps/{partner_app_id}/credentials/{partner_app_credential_id}`

Signature:

```typescript
getPartnerAppCredential(partner_app_id: InputValue<string>,
 partner_app_credential_id: InputValue<string>,
 params?: {
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string |  |
| `partner_app_credential_id` | Required | string |  |

#### Response

Returned payload: [PartnerAppCredential](../models/PartnerAppCredential.md#partnerappcredential).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getPartnerAppCredentialWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.developer.getPartnerAppCredential("example", "example", {}, {  });
```

[Complete runnable example](../examples/developer-getPartnerAppCredential.mjs)

### developer.getPartnerAppInstall

Returns a single install for the installing merchant or the partner app owner.

`GET /v1/partner-apps/{partner_app_id}/installs/{partner_app_install_id}`

Signature:

```typescript
getPartnerAppInstall(partner_app_id: InputValue<string>,
 partner_app_install_id: InputValue<string>,
 params?: {
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string |  |
| `partner_app_install_id` | Required | string |  |

#### Response

Returned payload: [PartnerAppInstall](../models/PartnerAppInstall.md#partnerappinstall).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getPartnerAppInstallWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.developer.getPartnerAppInstall("example", "example", {}, {  });
```

[Complete runnable example](../examples/developer-getPartnerAppInstall.mjs)

### developer.getResourceTimeline

Returns summary-only API request, webhook event, webhook delivery attempt, and image mutation entries for a single public API resource. The caller must have developer.resource_timelines.read and the matching read scope for the requested resource type. Default order: occurred_at descending, then resource_timeline_entry_id descending.

`GET /v1/resource-timelines/{resource_id}`

Signature:

```typescript
getResourceTimeline(resource_id: InputValue<string>,
 params?: {
  "resource_type"?: InputValue<"balance" |
    "balance_transaction" |
    "bundle" |
    "category" |
    "checkout_session" |
    "credit_note" |
    "credit_note_allocation" |
    "customer" |
    "dispute" |
    "fraud_warning" |
    "inventory_count" |
    "inventory_level" |
    "inventory_receipt" |
    "inventory_reservation" |
    "inventory_reservation_line" |
    "inventory_transfer" |
    "invoice" |
    "invoice_payment_term" |
    "merchant_billing_balance" |
    "merchant_billing_invoice" |
    "modifier" |
    "modifier_group" |
    "modifier_set" |
    "order" |
    "payment_intent" |
    "payment_link" |
    "payment_method" |
    "payment_method_domain" |
    "payment_review" |
    "payout" |
    "payout_destination" |
    "payout_settings" |
    "product" |
    "product_variant" |
    "promotion" |
    "promotion_code" |
    "refund" |
    "return" |
    "return_activity" |
    "return_disposition" |
    "return_inspection" |
    "return_receipt" |
    "return_resolution" |
    "risk_list" |
    "risk_list_item" |
    "risk_rule" |
    "subscription" |
    "subscription_plan">;
  "include"?: InputValue<Array<"requests" | "webhooks" | "attempts" | "image_mutations">>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "occurred_after"?: InputValue<string | globalThis.Date>;
  "occurred_before"?: InputValue<string | globalThis.Date>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Required | string |  |
| `resource_type` | Optional | string | Values: [48 declared values](#developergetresourcetimeline-input-resource_type-values). |
| `include` | Optional | Array of string | Items values: `"requests"`, `"webhooks"`, `"attempts"`, `"image_mutations"`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `occurred_after` | Optional | string | Format: `date-time`. |
| `occurred_before` | Optional | string | Format: `date-time`. |

#### developer.getResourceTimeline input resource_type values

- `"balance"`
- `"balance_transaction"`
- `"bundle"`
- `"category"`
- `"checkout_session"`
- `"credit_note"`
- `"credit_note_allocation"`
- `"customer"`
- `"dispute"`
- `"fraud_warning"`
- `"inventory_count"`
- `"inventory_level"`
- `"inventory_receipt"`
- `"inventory_reservation"`
- `"inventory_reservation_line"`
- `"inventory_transfer"`
- `"invoice"`
- `"invoice_payment_term"`
- `"merchant_billing_balance"`
- `"merchant_billing_invoice"`
- `"modifier"`
- `"modifier_group"`
- `"modifier_set"`
- `"order"`
- `"payment_intent"`
- `"payment_link"`
- `"payment_method"`
- `"payment_method_domain"`
- `"payment_review"`
- `"payout"`
- `"payout_destination"`
- `"payout_settings"`
- `"product"`
- `"product_variant"`
- `"promotion"`
- `"promotion_code"`
- `"refund"`
- `"return"`
- `"return_activity"`
- `"return_disposition"`
- `"return_inspection"`
- `"return_receipt"`
- `"return_resolution"`
- `"risk_list"`
- `"risk_list_item"`
- `"risk_rule"`
- `"subscription"`
- `"subscription_plan"`

#### Response

Returned payload: [ResourceTimeline](../models/ResourceTimeline.md#resourcetimeline).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getResourceTimelineWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.developer.getResourceTimeline("example", {}, {  });
```

[Complete runnable example](../examples/developer-getResourceTimeline.mjs)

### developer.getSandbox

Returns a single sandbox by ID.

`GET /v1/sandboxes/{sandbox_id}`

Signature: `getSandbox(sandbox_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `sandbox_id` | Required | string |  |

#### Response

Returned payload: [Sandbox](../models/Sandbox.md#sandbox).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getSandboxWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.developer.getSandbox("example", {}, {  });
```

[Complete runnable example](../examples/developer-getSandbox.mjs)

### developer.listCurrentAPIKeyRequestLogs

Returns request summaries, newest first. With developer.request_logs.read the list covers every caller in the credential's environment. With developer.request_logs.self.read it covers only the calling credential's requests. Headers, bodies and a reproduction are on the detail route. Default order: created_at descending, then api_request_log_id descending.

`GET /v1/api-request-logs`

Signature:

```typescript
listCurrentAPIKeyRequestLogs(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "caller_type"?: InputValue<Array<"api_key" |
    "user" |
    "partner_app_install" |
    "checkout_session" |
    "customer_session" |
    "invoice" |
    "workload_identity">>;
  "caller_id"?: InputValue<string>;
  "request_id"?: InputValue<string>;
  "client_request_id"?: InputValue<string>;
  "client_trace_id"?: InputValue<string>;
  "http_method"?: InputValue<Array<"GET" |
    "HEAD" |
    "POST" |
    "PUT" |
    "PATCH" |
    "DELETE" |
    "OPTIONS" |
    "CONNECT" |
    "TRACE">>;
  "path_query"?: InputValue<string>;
  "resource_type"?: InputValue<Array<"api_key" |
    "api_request_log" |
    "balance" |
    "balance_transaction" |
    "bundle" |
    "bundle_component" |
    "category" |
    "checkout_session" |
    "checkout_session_customer_verification" |
    "credit_note" |
    "credit_note_allocation" |
    "custom_domain" |
    "customer" |
    "customer_address" |
    "customer_deletion_request" |
    "customer_email_preferences" |
    "customer_session" |
    "customer_verification" |
    "delivery_location_set" |
    "delivery_method" |
    "delivery_profile" |
    "delivery_quote" |
    "delivery_rate" |
    "delivery_rate_callback" |
    "delivery_revocation" |
    "delivery_selection" |
    "delivery_zone" |
    "demo_session" |
    "device" |
    "discount" |
    "dispute" |
    "email_change_request" |
    "environment_grant" |
    "feedback_report" |
    "file" |
    "flint_wallet" |
    "flint_wallet_card" |
    "fraud_warning" |
    "fulfillment" |
    "fulfillment_event" |
    "fulfillment_notification" |
    "gift_card" |
    "gift_card_funding_disposition" |
    "gift_card_load" |
    "gift_card_notification" |
    "gift_card_redemption" |
    "gift_card_transaction" |
    "image" |
    "inventory_adjustment" |
    "inventory_allocation_policy" |
    "inventory_allocation_policy_revision" |
    "inventory_count" |
    "inventory_item" |
    "inventory_level" |
    "inventory_movement" |
    "inventory_receipt" |
    "inventory_reservation" |
    "inventory_reservation_line" |
    "inventory_transfer" |
    "inventory_transfer_line" |
    "invoice" |
    "invoice_delivery_attempt" |
    "invoice_late_fee" |
    "invoice_line_item" |
    "invoice_manual_payment" |
    "invoice_payment_attempt" |
    "invoice_payment_term" |
    "location" |
    "merchant" |
    "merchant_billing_balance" |
    "merchant_billing_entry" |
    "merchant_billing_invoice" |
    "modifier" |
    "modifier_group" |
    "modifier_set" |
    "order" |
    "order_charge" |
    "order_line_item" |
    "order_line_item_modifier" |
    "order_payment_attempt" |
    "organization" |
    "package" |
    "package_item" |
    "partner_app" |
    "partner_app_credential" |
    "partner_app_install" |
    "payment_intent" |
    "payment_link" |
    "payment_link_custom_field" |
    "payment_link_line_item" |
    "payment_method" |
    "payment_method_domain" |
    "payment_review" |
    "payout" |
    "payout_destination" |
    "payout_settings" |
    "product" |
    "product_option" |
    "product_option_value" |
    "product_variant" |
    "promotion" |
    "promotion_code" |
    "purchase_refund_allocation" |
    "refund" |
    "refund_allocation" |
    "refund_line_item_adjustment" |
    "report" |
    "report_download" |
    "return" |
    "return_activity" |
    "return_disposition" |
    "return_inspection" |
    "return_inspection_line_item" |
    "return_line_item" |
    "return_policy" |
    "return_policy_revision" |
    "return_reason" |
    "return_receipt" |
    "return_receipt_line_item" |
    "return_resolution" |
    "risk_list" |
    "risk_list_item" |
    "risk_rule" |
    "sandbox" |
    "settings" |
    "shipment" |
    "subscription" |
    "subscription_delivery_migration" |
    "subscription_line_item" |
    "subscription_offer" |
    "subscription_payment_retry" |
    "subscription_plan" |
    "subscription_plan_line_item" |
    "tax_connection" |
    "tax_registration" |
    "user" |
    "webhook_delivery" |
    "webhook_endpoint" |
    "webhook_event" |
    "workload_identity">>;
  "resource_id"?: InputValue<string>;
  "status_bucket"?: InputValue<Array<"success" | "client_error" | "server_error">>;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `caller_type` | Optional | Array of string | minItems: `1`. Items values: `"api_key"`, `"user"`, `"partner_app_install"`, `"checkout_session"`, `"customer_session"`, `"invoice"`, `"workload_identity"`. |
| `caller_id` | Optional | string |  |
| `request_id` | Optional | string | pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `client_request_id` | Optional | string | minLength: `1`. maxLength: `128`. pattern: `^[\x21-\x7E]+$`. |
| `client_trace_id` | Optional | string | pattern: `^[0-9a-f]{32}$`. |
| `http_method` | Optional | Array of string | minItems: `1`. Items values: `"GET"`, `"HEAD"`, `"POST"`, `"PUT"`, `"PATCH"`, `"DELETE"`, `"OPTIONS"`, `"CONNECT"`, `"TRACE"`. |
| `path_query` | Optional | string |  |
| `resource_type` | Optional | Array of string | minItems: `1`. Items values: [140 declared values](../models/APIKey.md#apikeycreated_by-resource_type-values). |
| `resource_id` | Optional | string |  |
| `status_bucket` | Optional | Array of string | minItems: `1`. Items values: `"success"`, `"client_error"`, `"server_error"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |

#### Response

Returned payload: [APIRequestLogListResponse](../models/APIRequestLogListResponse.md#apirequestloglistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listCurrentAPIKeyRequestLogsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listCurrentAPIKeyRequestLogsItems`, `listCurrentAPIKeyRequestLogsPages`, `listCurrentAPIKeyRequestLogsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.developer.listCurrentAPIKeyRequestLogs({}, {  });
```

[Complete runnable example](../examples/developer-listCurrentAPIKeyRequestLogs.mjs)

### developer.listPartnerAppCredentials

Lists active and removed credentials, ordered by partner_app_credential_id ascending. Default order: partner_app_credential_id ascending; this key uniquely orders the results.

`GET /v1/partner-apps/{partner_app_id}/credentials`

Signature:

```typescript
listPartnerAppCredentials(partner_app_id: InputValue<string>,
 params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [PartnerAppCredentialListResponse](../models/PartnerAppCredentialListResponse.md#partnerappcredentiallistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listPartnerAppCredentialsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listPartnerAppCredentialsItems`, `listPartnerAppCredentialsPages`, `listPartnerAppCredentialsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.developer.listPartnerAppCredentials("example", {}, {  });
```

[Complete runnable example](../examples/developer-listPartnerAppCredentials.mjs)

### developer.listPartnerAppInstalls

Returns installs for a partner app owned by the authenticated merchant. Default order: partner_app_install_id ascending; this key uniquely orders the results.

`GET /v1/partner-apps/{partner_app_id}/installs`

Signature:

```typescript
listPartnerAppInstalls(partner_app_id: InputValue<string>,
 params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "merchant_id"?: InputValue<string>;
  "status"?: InputValue<Array<"pending_exchange" | "active" | "revoked">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `merchant_id` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"pending_exchange"`, `"active"`, `"revoked"`. |

#### Response

Returned payload: [PartnerAppInstallListResponse](../models/PartnerAppInstallListResponse.md#partnerappinstalllistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listPartnerAppInstallsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listPartnerAppInstallsItems`, `listPartnerAppInstallsPages`, `listPartnerAppInstallsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.developer.listPartnerAppInstalls("example", {}, {  });
```

[Complete runnable example](../examples/developer-listPartnerAppInstalls.mjs)

### developer.listPartnerApps

Returns partner apps owned by the authenticated merchant. Default order: partner_app_id ascending; this key uniquely orders the results.

`GET /v1/partner-apps`

Signature:

```typescript
listPartnerApps(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "status"?: InputValue<Array<"active" | "archived">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"archived"`. |

#### Response

Returned payload: [PartnerAppListResponse](../models/PartnerAppListResponse.md#partnerapplistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listPartnerAppsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listPartnerAppsItems`, `listPartnerAppsPages`, `listPartnerAppsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.developer.listPartnerApps({}, {  });
```

[Complete runnable example](../examples/developer-listPartnerApps.mjs)

### developer.listSandboxes

Returns the merchant's sandboxes. Flint guarantees a default test sandbox for every merchant. Use an onboarding session token during setup or a normal external API key afterward. Default order: is_default descending, then created_at descending, then sandbox_id descending.

`GET /v1/sandboxes`

Signature:

```typescript
listSandboxes(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "status"?: InputValue<Array<"active" | "archived">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>)
```

#### Request fields

Field definitions: [shared fields](#request-fields-17).

#### Response

Returned payload: [SandboxListResponse](../models/SandboxListResponse.md#sandboxlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listSandboxesWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listSandboxesItems`, `listSandboxesPages`, `listSandboxesPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.developer.listSandboxes({}, {  });
```

[Complete runnable example](../examples/developer-listSandboxes.mjs)

### developer.resetSandbox

Clears a non-default sandbox and returns its replacement environment. The replacement has a new sandbox ID, retains the stable provider-account lineage, and requires newly issued test keys. The archived sandbox's `replaced_by_sandbox_id` names the replacement.

`POST /v1/sandboxes/{sandbox_id}/reset`

Signature:

```typescript
resetSandbox(sandbox_id: InputValue<string>,
 params?: {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "onboarding">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `sandbox_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [Sandbox](../models/Sandbox.md#sandbox).

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

Complete body and metadata: `resetSandboxWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.developer.resetSandbox("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/developer-resetSandbox.mjs)

### developer.revokePartnerAppInstall

The installing merchant or partner app owner can revoke an install and all of its environment grants.

`POST /v1/partner-apps/{partner_app_id}/installs/{partner_app_install_id}/revoke`

Signature:

```typescript
revokePartnerAppInstall(partner_app_id: InputValue<string>,
 partner_app_install_id: InputValue<string>,
 params?: {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string |  |
| `partner_app_install_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [PartnerAppInstall](../models/PartnerAppInstall.md#partnerappinstall).

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

Complete body and metadata: `revokePartnerAppInstallWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.developer.revokePartnerAppInstall("example", "example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/developer-revokePartnerAppInstall.mjs)

### developer.revokePartnerEnvironmentGrant

The installing merchant or partner app owner can revoke a single test or live environment grant for an install.

`POST /v1/partner-apps/{partner_app_id}/installs/{partner_app_install_id}/environment-grants/{environment_grant_id}/revoke`

Signature:

```typescript
revokePartnerEnvironmentGrant(partner_app_id: InputValue<string>,
 partner_app_install_id: InputValue<string>,
 environment_grant_id: InputValue<string>,
 params?: {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string |  |
| `partner_app_install_id` | Required | string |  |
| `environment_grant_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [PartnerAppInstall](../models/PartnerAppInstall.md#partnerappinstall).

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

Complete body and metadata: `revokePartnerEnvironmentGrantWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.developer.revokePartnerEnvironmentGrant("example", "example", "example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/developer-revokePartnerEnvironmentGrant.mjs)

### developer.rotatePartnerAppSecret

Issues a new client secret, returned once. The previous secret keeps working until previous_secret_expires_at: 24 hours by default, or the time in expire_previous_secret_at, up to 7 days. Send a time at or before now to stop the previous secret immediately, for example when it leaked. Rotating again during an overlap ends the older secret at once.

`POST /v1/partner-apps/{partner_app_id}/rotate-secret`

Signature:

```typescript
rotatePartnerAppSecret(partner_app_id: InputValue<string>,
 params?: (InputValue<RotatePartnerAppSecretRequestInput> |
  {
  "expected_version"?: never;
  "expire_previous_secret_at"?: never
}) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [RotatePartnerAppSecretRequestInput](../models/RotatePartnerAppSecretRequestInput.md#rotatepartnerappsecretrequestinput) | The request body for: Rotate partner app secret. |

Body model: [RotatePartnerAppSecretRequestInput](../models/RotatePartnerAppSecretRequestInput.md#rotatepartnerappsecretrequestinput).

#### developer.rotatePartnerAppSecret body fields

Field definitions: [shared fields](../models/RotatePartnerAppSecretRequestInput.md#rotatepartnerappsecretrequestinput).

#### Response

Returned payload: [PartnerAppWithRotatedSecret](../models/PartnerAppWithRotatedSecret.md#partnerappwithrotatedsecret).

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

Complete body and metadata: `rotatePartnerAppSecretWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.developer.rotatePartnerAppSecret("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/developer-rotatePartnerAppSecret.mjs)

### developer.updatePartnerApp

Updates a partner app owned by the authenticated merchant. Send only the fields to change. permission_manifest replaces the whole manifest and requires expected_version. An existing permission can drop scopes but not gain them; removing or narrowing a permission narrows existing environment grants immediately, and tokens issued with the removed scopes stop working. Adding a permission changes no install until the merchant authorizes again.

`PATCH /v1/partner-apps/{partner_app_id}`

Signature:

```typescript
updatePartnerApp(partner_app_id: InputValue<string>,
 params: (InputValue<UpdatePartnerAppRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "onboarding">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdatePartnerAppRequestInput](../models/UpdatePartnerAppRequest.md#updatepartnerapprequest) | The request body for: Update partner app. minProperties: `1`. |

Body model: [UpdatePartnerAppRequestInput](../models/UpdatePartnerAppRequest.md#updatepartnerapprequest).

#### developer.updatePartnerApp body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean |  |
| `default_requested_permissions` | Optional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer string | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntryRequestRequestInput](../models/PartnerAppPermissionManifestEntryRequestRequestInput.md#partnerapppermissionmanifestentryrequestrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `redirect_uris` | Optional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

Fields: [developer.updatePartnerApp body fields](#developerupdatepartnerapp-body-fields).

#### developer.updatePartnerApp body anyOf variant 1



#### developer.updatePartnerApp body anyOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Required | boolean |  |
| `default_requested_permissions` | Optional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer string | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntryRequestRequestInput](../models/PartnerAppPermissionManifestEntryRequestRequestInput.md#partnerapppermissionmanifestentryrequestrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `redirect_uris` | Optional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

#### developer.updatePartnerApp body anyOf variant 2



#### developer.updatePartnerApp body anyOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean |  |
| `default_requested_permissions` | Optional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer string | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `name` | Required | string | minLength: `1`. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntryRequestRequestInput](../models/PartnerAppPermissionManifestEntryRequestRequestInput.md#partnerapppermissionmanifestentryrequestrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `redirect_uris` | Optional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

#### developer.updatePartnerApp body anyOf variant 3



#### developer.updatePartnerApp body anyOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean |  |
| `default_requested_permissions` | Optional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer string | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntryRequestRequestInput](../models/PartnerAppPermissionManifestEntryRequestRequestInput.md#partnerapppermissionmanifestentryrequestrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `redirect_uris` | Required | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

#### developer.updatePartnerApp body anyOf variant 4



#### developer.updatePartnerApp body anyOf variant 4 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean |  |
| `default_requested_permissions` | Optional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer string | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `permission_manifest` | Required | Array of [PartnerAppPermissionManifestEntryRequestRequestInput](../models/PartnerAppPermissionManifestEntryRequestRequestInput.md#partnerapppermissionmanifestentryrequestrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `redirect_uris` | Optional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

#### developer.updatePartnerApp body anyOf variant 5



#### developer.updatePartnerApp body anyOf variant 5 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean |  |
| `default_requested_permissions` | Required | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer string | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntryRequestRequestInput](../models/PartnerAppPermissionManifestEntryRequestRequestInput.md#partnerapppermissionmanifestentryrequestrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `redirect_uris` | Optional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

#### developer.updatePartnerApp body anyOf variant 6



#### developer.updatePartnerApp body anyOf variant 6 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean |  |
| `default_requested_permissions` | Optional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer string | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `permission_manifest` | Optional | Array of [PartnerAppPermissionManifestEntryRequestRequestInput](../models/PartnerAppPermissionManifestEntryRequestRequestInput.md#partnerapppermissionmanifestentryrequestrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `redirect_uris` | Optional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

#### Response

Returned payload: [PartnerApp](../models/PartnerApp.md#partnerapp).

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

Complete body and metadata: `updatePartnerAppWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.developer.updatePartnerApp("example", {api_version: "example", client_secret_enabled: true}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/developer-updatePartnerApp.mjs)

