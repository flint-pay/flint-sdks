[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# developer

### developer.createPartnerApp

Creates a partner app owned by the authenticated merchant. Use a developer setup session during setup or a normal external API key afterward.

`POST /v1/partner-apps`

Signature: `createPartnerApp(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreatePartnerAppRequestInput](../models/CreatePartnerAppRequestInput.md#createpartnerapprequestinput) | The request body for: Create partner app. |

Body model: [CreatePartnerAppRequestInput](../models/CreatePartnerAppRequestInput.md#createpartnerapprequestinput).

#### developer.createPartnerApp body fields

Field definitions: [shared fields](../models/CreatePartnerAppRequestInput.md#createpartnerapprequestinput). Models: [PartnerAppPermissionManifestEntryRequestRequestInput](../models/PartnerAppPermissionManifestEntryRequestRequestInput.md#partnerapppermissionmanifestentryrequestrequestinput).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->developer->createPartnerApp([
  'name' => 'example',
  'permission_manifest' => [],
  'redirect_uris' => [],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/developer-createPartnerApp.php)

### developer.createPartnerAppCredential

Registers an immutable public key, JWKS URL, or workload identity for client assertion authentication. An app can have at most 20 active credentials. Dashboard callers need fresh identity verification. Replace a credential by creating a new one, then removing the old one.

`POST /v1/partner-apps/{partner_app_id}/credentials`

Signature: `createPartnerAppCredential(DeveloperCreatePartnerAppCredentialInput|array $input, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreatePartnerAppCredentialRequestInput](../models/CreatePartnerAppCredentialRequestInput.md#createpartnerappcredentialrequestinput) | An immutable public key, JWKS URL, or workload identity credential for partner app client authentication. |

Body model: [CreatePartnerAppCredentialRequestInput](../models/CreatePartnerAppCredentialRequestInput.md#createpartnerappcredentialrequestinput).

#### developer.createPartnerAppCredential body oneOf variant 1

The `public_key` variant of `CreatePartnerAppCredentialRequest`.

Body model: [CreatePartnerAppCredentialPublicKeyRequestInput](../models/CreatePartnerAppCredentialPublicKeyRequestInput.md#createpartnerappcredentialpublickeyrequestinput).

#### developer.createPartnerAppCredential body oneOf variant 1 fields

Field definitions: [shared fields](../models/CreatePartnerAppCredentialPublicKeyRequestInput.md#createpartnerappcredentialpublickeyrequestinput). Models: [PartnerAppCredentialPublicKeyRequestInput](../models/PartnerAppCredentialPublicKeyRequestInput.md#partnerappcredentialpublickeyrequestinput).

#### developer.createPartnerAppCredential body oneOf variant 2

The `jwks_url` variant of `CreatePartnerAppCredentialRequest`.

Body model: [CreatePartnerAppCredentialJWKSURLRequestInput](../models/CreatePartnerAppCredentialJWKSURLRequestInput.md#createpartnerappcredentialjwksurlrequestinput).

#### developer.createPartnerAppCredential body oneOf variant 2 fields

Field definitions: [shared fields](../models/CreatePartnerAppCredentialJWKSURLRequestInput.md#createpartnerappcredentialjwksurlrequestinput). Models: [PartnerAppCredentialJWKSURLRequestInput](../models/PartnerAppCredentialJWKSURLRequestInput.md#partnerappcredentialjwksurlrequestinput).

#### developer.createPartnerAppCredential body oneOf variant 3

The `workload_identity` variant of `CreatePartnerAppCredentialRequest`.

Body model: [CreatePartnerAppCredentialWorkloadIdentityRequestInput](../models/CreatePartnerAppCredentialWorkloadIdentityRequestInput.md#createpartnerappcredentialworkloadidentityrequestinput).

#### developer.createPartnerAppCredential body oneOf variant 3 fields

Field definitions: [shared fields](../models/CreatePartnerAppCredentialWorkloadIdentityRequestInput.md#createpartnerappcredentialworkloadidentityrequestinput). Models: [PartnerAppCredentialWorkloadIdentityRequestInput](../models/PartnerAppCredentialWorkloadIdentityRequestInput.md#partnerappcredentialworkloadidentityrequestinput).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->developer->createPartnerAppCredential([
  'partner_app_id' => 'example',
  'body' => (object) [
    'type' => 'public_key',
    'public_key' => (object) [
      'jwk' => (object) [],
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/developer-createPartnerAppCredential.php)

### developer.createSandbox

Creates a new empty test sandbox for the current merchant. Send `issue_test_key: true` to also receive a test key bound to it.

`POST /v1/sandboxes`

Signature: `createSandbox(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateSandboxRequestInput](../models/CreateSandboxRequestInput.md#createsandboxrequestinput) | The request body for: Create sandbox. |

Body model: [CreateSandboxRequestInput](../models/CreateSandboxRequestInput.md#createsandboxrequestinput).

#### developer.createSandbox body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Optional | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `issue_test_key` | Optional | boolean |  |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### developer.createSandbox body oneOf variant 1



#### developer.createSandbox body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Optional | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `issue_test_key` | Required | boolean | Values: `true`. |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### developer.createSandbox body oneOf variant 1 oneOf variant 1



#### developer.createSandbox body oneOf variant 1 oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`. |
| `issue_test_key` | Required | boolean | Values: `true`. |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### developer.createSandbox body oneOf variant 1 oneOf variant 2



#### developer.createSandbox body oneOf variant 1 oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"read_only"`. |
| `issue_test_key` | Required | boolean | Values: `true`. |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### developer.createSandbox body oneOf variant 1 oneOf variant 3



#### developer.createSandbox body oneOf variant 1 oneOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"restricted"`. |
| `issue_test_key` | Required | boolean | Values: `true`. |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Required | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### developer.createSandbox body oneOf variant 2



#### developer.createSandbox body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Optional | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `issue_test_key` | Optional | boolean | Values: `false`. |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |
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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->developer->createSandbox([
  'name' => 'example',
  'issue_test_key' => true,
  'access' => 'full',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/developer-createSandbox.php)

### developer.createSandboxAPIKey

Creates a new test API key that is bound to the target sandbox.

`POST /v1/sandboxes/{sandbox_id}/api-keys`

Signature: `createSandboxAPIKey(string|Model $sandbox_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `sandbox_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [IssueSandboxAPIKeyRequestInput](../models/IssueSandboxAPIKeyRequestInput.md#issuesandboxapikeyrequestinput) | The request body for: Issue sandbox test key. |

Body model: [IssueSandboxAPIKeyRequestInput](../models/IssueSandboxAPIKeyRequestInput.md#issuesandboxapikeyrequestinput).

#### developer.createSandboxAPIKey body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |

#### developer.createSandboxAPIKey body oneOf variant 1

The `full` variant of `IssueSandboxAPIKeyRequest`.

Body model: [IssueSandboxAPIKeyRequestFullInput](../models/IssueSandboxAPIKeyRequestFullInput.md#issuesandboxapikeyrequestfullinput).

#### developer.createSandboxAPIKey body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |

#### developer.createSandboxAPIKey body oneOf variant 2

The `read_only` variant of `IssueSandboxAPIKeyRequest`.

Body model: [IssueSandboxAPIKeyRequestReadOnlyInput](../models/IssueSandboxAPIKeyRequestReadOnlyInput.md#issuesandboxapikeyrequestreadonlyinput).

#### developer.createSandboxAPIKey body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"read_only"`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |

#### developer.createSandboxAPIKey body oneOf variant 3

The `restricted` variant of `IssueSandboxAPIKeyRequest`.

Body model: [IssueSandboxAPIKeyRequestRestrictedInput](../models/IssueSandboxAPIKeyRequestRestrictedInput.md#issuesandboxapikeyrequestrestrictedinput).

#### developer.createSandboxAPIKey body oneOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"restricted"`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Required | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->developer->createSandboxAPIKey('example', [
  'name' => 'example',
  'access' => 'full',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/developer-createSandboxAPIKey.php)

### developer.deletePartnerApp

Archives a partner app (soft delete). The app stays readable with status archived; it cannot be installed, exchange tokens, or receive events, and its client ID is never reused. Revoke every active install first; pending installs are revoked with the app. Delete the app’s webhook endpoints separately.

`DELETE /v1/partner-apps/{partner_app_id}`

Signature: `deletePartnerApp(string|Model $partner_app_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->developer->deletePartnerApp('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/developer-deletePartnerApp.php)

### developer.deletePartnerAppCredential

Soft-removes the credential and immediately stops its use for client authentication. The credential remains readable. Removing an already removed credential returns it unchanged.

`DELETE /v1/partner-apps/{partner_app_id}/credentials/{partner_app_credential_id}`

Signature:

```text
deletePartnerAppCredential(string|
  Model $partner_app_id,
 string|
  Model $partner_app_credential_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->developer->deletePartnerAppCredential('example', 'example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/developer-deletePartnerAppCredential.php)

### developer.deleteSandbox

Retires a non-default sandbox and frees its original name for reuse.

`DELETE /v1/sandboxes/{sandbox_id}`

Signature: `deleteSandbox(string|Model $sandbox_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `sandbox_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [Sandbox](../models/SandboxInput.md#sandboxinput).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->developer->deleteSandbox('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/developer-deleteSandbox.php)

### developer.getAuthContext

Returns non-secret metadata for an API key or CLI OAuth access token, including its merchant, environment, sandbox binding, and granted scopes. CLI OAuth sessions include auth_type=oauth and a stable oauth_grant_id instead of api_key_id. Multi-context tokens also include oauth_session_id, context_id, and the context name. No additional API scope is required.

`GET /v1/auth-context`

Signature: `getAuthContext(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

No request fields.

#### Response

Returned payload: [AuthContext](../models/AuthContextInput.md#authcontextinput).

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

```php
$result = $client->developer->getAuthContext([], new RequestOptions());
```

[Complete runnable example](../examples/developer-getAuthContext.php)

### developer.getCurrentAPIKeyRequestLog

Returns one request with redacted headers, the redacted request and response bodies for write routes that capture them, and a curl reproduction. Detail older than 14 days has no headers or bodies.

`GET /v1/api-request-logs/{api_request_log_id}`

Signature: `getCurrentAPIKeyRequestLog(string|Model $api_request_log_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
$result = $client->developer->getCurrentAPIKeyRequestLog('example', [], new RequestOptions());
```

[Complete runnable example](../examples/developer-getCurrentAPIKeyRequestLog.php)

### developer.getPartnerApp

Returns a single partner app owned by the authenticated merchant.

`GET /v1/partner-apps/{partner_app_id}`

Signature: `getPartnerApp(string|Model $partner_app_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
$result = $client->developer->getPartnerApp('example', [], new RequestOptions());
```

[Complete runnable example](../examples/developer-getPartnerApp.php)

### developer.getPartnerAppCredential

Returns a credential, including a removed credential.

`GET /v1/partner-apps/{partner_app_id}/credentials/{partner_app_credential_id}`

Signature:

```text
getPartnerAppCredential(string|
  Model $partner_app_id,
 string|
  Model $partner_app_credential_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
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

```php
$result = $client->developer->getPartnerAppCredential('example', 'example', [], new RequestOptions());
```

[Complete runnable example](../examples/developer-getPartnerAppCredential.php)

### developer.getPartnerAppInstall

Returns a single install for the installing merchant or the partner app owner.

`GET /v1/partner-apps/{partner_app_id}/installs/{partner_app_install_id}`

Signature:

```text
getPartnerAppInstall(string|
  Model $partner_app_id,
 string|
  Model $partner_app_install_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
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

```php
$result = $client->developer->getPartnerAppInstall('example', 'example', [], new RequestOptions());
```

[Complete runnable example](../examples/developer-getPartnerAppInstall.php)

### developer.getResourceTimeline

Returns summary-only API request, webhook event, webhook delivery attempt, and image mutation entries for a single public API resource. The caller must have developer.resource_timelines.read and the matching read scope for the requested resource type. Default order: occurred_at descending, then resource_timeline_entry_id descending.

`GET /v1/resource-timelines/{resource_id}`

Signature: `getResourceTimeline(string|Model $resource_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
$result = $client->developer->getResourceTimeline('example', [], new RequestOptions());
```

[Complete runnable example](../examples/developer-getResourceTimeline.php)

### developer.getSandbox

Returns a single sandbox by ID.

`GET /v1/sandboxes/{sandbox_id}`

Signature: `getSandbox(string|Model $sandbox_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `sandbox_id` | Required | string |  |

#### Response

Returned payload: [Sandbox](../models/SandboxInput.md#sandboxinput).

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

```php
$result = $client->developer->getSandbox('example', [], new RequestOptions());
```

[Complete runnable example](../examples/developer-getSandbox.php)

### developer.listCurrentAPIKeyRequestLogs

Returns request summaries, newest first. With developer.request_logs.read the list covers every caller in the credential's environment. With developer.request_logs.self.read it covers only the calling credential's requests. Headers, bodies and a reproduction are on the detail route. Default order: created_at descending, then api_request_log_id descending.

`GET /v1/api-request-logs`

Signature: `listCurrentAPIKeyRequestLogs(array|Model|null $params = null, ?RequestOptions $options = null)`

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
| `resource_type` | Optional | Array of string | minItems: `1`. Items values: [140 declared values](../models/APIRequestLogInput.md#apirequestloginput-resource_type-values). |
| `resource_id` | Optional | string |  |
| `status_bucket` | Optional | Array of string | minItems: `1`. Items values: `"success"`, `"client_error"`, `"server_error"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |

#### Response

Returned payload: [DeveloperListCurrentAPIKeyRequestLogsResponse200](../models/DeveloperListCurrentAPIKeyRequestLogsResponse200.md#developerlistcurrentapikeyrequestlogsresponse200).

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

```php
$result = $client->developer->listCurrentAPIKeyRequestLogs([], new RequestOptions());
```

[Complete runnable example](../examples/developer-listCurrentAPIKeyRequestLogs.php)

### developer.listPartnerAppCredentials

Lists active and removed credentials, ordered by partner_app_credential_id ascending. Default order: partner_app_credential_id ascending; this key uniquely orders the results.

`GET /v1/partner-apps/{partner_app_id}/credentials`

Signature: `listPartnerAppCredentials(string|Model $partner_app_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [DeveloperListPartnerAppCredentialsResponse200](../models/DeveloperListPartnerAppCredentialsResponse200.md#developerlistpartnerappcredentialsresponse200).

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

```php
$result = $client->developer->listPartnerAppCredentials('example', [], new RequestOptions());
```

[Complete runnable example](../examples/developer-listPartnerAppCredentials.php)

### developer.listPartnerAppInstalls

Returns installs for a partner app owned by the authenticated merchant. Default order: partner_app_install_id ascending; this key uniquely orders the results.

`GET /v1/partner-apps/{partner_app_id}/installs`

Signature: `listPartnerAppInstalls(string|Model $partner_app_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `merchant_id` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"pending_exchange"`, `"active"`, `"revoked"`. |

#### Response

Returned payload: [DeveloperListPartnerAppInstallsResponse200](../models/PartnerAppInstallsListResponse200.md#partnerappinstallslistresponse200).

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

```php
$result = $client->developer->listPartnerAppInstalls('example', [], new RequestOptions());
```

[Complete runnable example](../examples/developer-listPartnerAppInstalls.php)

### developer.listPartnerApps

Returns partner apps owned by the authenticated merchant. Default order: partner_app_id ascending; this key uniquely orders the results.

`GET /v1/partner-apps`

Signature: `listPartnerApps(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"archived"`. |

#### Response

Returned payload: [DeveloperListPartnerAppsResponse200](../models/DeveloperListPartnerAppsResponse200.md#developerlistpartnerappsresponse200).

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

```php
$result = $client->developer->listPartnerApps([], new RequestOptions());
```

[Complete runnable example](../examples/developer-listPartnerApps.php)

### developer.listSandboxes

Returns the merchant's sandboxes. Flint guarantees a default test sandbox for every merchant. Use an onboarding session token during setup or a normal external API key afterward. Default order: is_default descending, then created_at descending, then sandbox_id descending.

`GET /v1/sandboxes`

Signature: `listSandboxes(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](#request-fields-17).

#### Response

Returned payload: [DeveloperListSandboxesResponse200](../models/DeveloperListSandboxesResponse200.md#developerlistsandboxesresponse200).

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

```php
$result = $client->developer->listSandboxes([], new RequestOptions());
```

[Complete runnable example](../examples/developer-listSandboxes.php)

### developer.resetSandbox

Clears a non-default sandbox and returns its replacement environment. The replacement has a new sandbox ID, retains the stable provider-account lineage, and requires newly issued test keys. The archived sandbox's `replaced_by_sandbox_id` names the replacement.

`POST /v1/sandboxes/{sandbox_id}/reset`

Signature: `resetSandbox(string|Model $sandbox_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `sandbox_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [Sandbox](../models/SandboxInput.md#sandboxinput).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->developer->resetSandbox('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/developer-resetSandbox.php)

### developer.revokePartnerAppInstall

The installing merchant or partner app owner can revoke an install and all of its environment grants.

`POST /v1/partner-apps/{partner_app_id}/installs/{partner_app_install_id}/revoke`

Signature:

```text
revokePartnerAppInstall(string|
  Model $partner_app_id,
 string|
  Model $partner_app_install_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->developer->revokePartnerAppInstall('example', 'example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/developer-revokePartnerAppInstall.php)

### developer.revokePartnerEnvironmentGrant

The installing merchant or partner app owner can revoke a single test or live environment grant for an install.

`POST /v1/partner-apps/{partner_app_id}/installs/{partner_app_install_id}/environment-grants/{environment_grant_id}/revoke`

Signature:

```text
revokePartnerEnvironmentGrant(string|
  Model $partner_app_id,
 string|
  Model $partner_app_install_id,
 string|
  Model $environment_grant_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->developer->revokePartnerEnvironmentGrant('example', 'example', 'example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/developer-revokePartnerEnvironmentGrant.php)

### developer.rotatePartnerAppSecret

Issues a new client secret, returned once. The previous secret keeps working until previous_secret_expires_at: 24 hours by default, or the time in expire_previous_secret_at, up to 7 days. Send a time at or before now to stop the previous secret immediately, for example when it leaked. Rotating again during an overlap ends the older secret at once.

`POST /v1/partner-apps/{partner_app_id}/rotate-secret`

Signature: `rotatePartnerAppSecret(string|Model $partner_app_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->developer->rotatePartnerAppSecret('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/developer-rotatePartnerAppSecret.php)

### developer.updatePartnerApp

Updates a partner app owned by the authenticated merchant. Send only the fields to change. permission_manifest replaces the whole manifest and requires expected_version. An existing permission can drop scopes but not gain them; removing or narrowing a permission narrows existing environment grants immediately, and tokens issued with the removed scopes stop working. Adding a permission changes no install until the merchant authorizes again.

`PATCH /v1/partner-apps/{partner_app_id}`

Signature: `updatePartnerApp(string|Model $partner_app_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdatePartnerAppRequestInput](../models/UpdatePartnerAppRequestInput.md#updatepartnerapprequestinput) | The request body for: Update partner app. minProperties: `1`. |

Body model: [UpdatePartnerAppRequestInput](../models/UpdatePartnerAppRequestInput.md#updatepartnerapprequestinput).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->developer->updatePartnerApp('example', [
  'api_version' => 'example',
  'client_secret_enabled' => true,
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/developer-updatePartnerApp.php)

