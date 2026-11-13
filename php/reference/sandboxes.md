[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# sandboxes

### sandboxes.create

Creates a new empty test sandbox for the current merchant. Send `issue_test_key: true` to also receive a test key bound to it; this also requires `accounts.api_keys.write`.

`POST /v1/sandboxes`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateSandboxRequestInput](../models/CreateSandboxRequestInput.md#createsandboxrequestinput) | The request body for: Create sandbox. |

Body model: [CreateSandboxRequestInput](../models/CreateSandboxRequestInput.md#createsandboxrequestinput).

#### sandboxes.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Optional | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `initial_onboarding` | Optional | string | The onboarding state the sandbox starts in, and returns to when you reset it. `complete` prefills a verified test identity; `not_started` leaves requirements due so you can rehearse onboarding. Default: `"complete"`. Values: `"complete"`, `"not_started"`. |
| `issue_test_key` | Optional | boolean |  |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. For a test key, use only scopes whose key_modes includes test in x-flint-scopes. The developer.sandboxes.read and developer.sandboxes.write scopes are valid on test keys; developer.partner_apps.read and developer.partner_apps.write are live-only. minItems: `1`. uniqueItems: `true`. Items values: [102 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |
| `test_key_expires_at` | Optional | string | Future RFC 3339 timestamp when the issued test key expires. Allowed only with issue_test_key true. Omit for a key that doesn't expire. Format: `date-time`. minLength: `1`. |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### sandboxes.create: Test key



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Optional | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `initial_onboarding` | Optional | string | The onboarding state the sandbox starts in, and returns to when you reset it. `complete` prefills a verified test identity; `not_started` leaves requirements due so you can rehearse onboarding. Default: `"complete"`. Values: `"complete"`, `"not_started"`. |
| `issue_test_key` | Required | boolean | Values: `true`. |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. For a test key, use only scopes whose key_modes includes test in x-flint-scopes. The developer.sandboxes.read and developer.sandboxes.write scopes are valid on test keys; developer.partner_apps.read and developer.partner_apps.write are live-only. minItems: `1`. uniqueItems: `true`. Items values: [102 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |
| `test_key_expires_at` | Optional | string | Future RFC 3339 timestamp when the issued test key expires. Allowed only with issue_test_key true. Omit for a key that doesn't expire. Format: `date-time`. minLength: `1`. |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### sandboxes.create: Full



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"full"`. |
| `initial_onboarding` | Optional | string | The onboarding state the sandbox starts in, and returns to when you reset it. `complete` prefills a verified test identity; `not_started` leaves requirements due so you can rehearse onboarding. Default: `"complete"`. Values: `"complete"`, `"not_started"`. |
| `issue_test_key` | Required | boolean | Values: `true`. |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. For a test key, use only scopes whose key_modes includes test in x-flint-scopes. The developer.sandboxes.read and developer.sandboxes.write scopes are valid on test keys; developer.partner_apps.read and developer.partner_apps.write are live-only. minItems: `1`. uniqueItems: `true`. Items values: [102 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |
| `test_key_expires_at` | Optional | string | Future RFC 3339 timestamp when the issued test key expires. Allowed only with issue_test_key true. Omit for a key that doesn't expire. Format: `date-time`. minLength: `1`. |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### sandboxes.create: Read only



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"read_only"`. |
| `initial_onboarding` | Optional | string | The onboarding state the sandbox starts in, and returns to when you reset it. `complete` prefills a verified test identity; `not_started` leaves requirements due so you can rehearse onboarding. Default: `"complete"`. Values: `"complete"`, `"not_started"`. |
| `issue_test_key` | Required | boolean | Values: `true`. |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. For a test key, use only scopes whose key_modes includes test in x-flint-scopes. The developer.sandboxes.read and developer.sandboxes.write scopes are valid on test keys; developer.partner_apps.read and developer.partner_apps.write are live-only. minItems: `1`. uniqueItems: `true`. Items values: [102 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |
| `test_key_expires_at` | Optional | string | Future RFC 3339 timestamp when the issued test key expires. Allowed only with issue_test_key true. Omit for a key that doesn't expire. Format: `date-time`. minLength: `1`. |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### sandboxes.create: Restricted



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"restricted"`. |
| `initial_onboarding` | Optional | string | The onboarding state the sandbox starts in, and returns to when you reset it. `complete` prefills a verified test identity; `not_started` leaves requirements due so you can rehearse onboarding. Default: `"complete"`. Values: `"complete"`, `"not_started"`. |
| `issue_test_key` | Required | boolean | Values: `true`. |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Required | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. For a test key, use only scopes whose key_modes includes test in x-flint-scopes. The developer.sandboxes.read and developer.sandboxes.write scopes are valid on test keys; developer.partner_apps.read and developer.partner_apps.write are live-only. minItems: `1`. uniqueItems: `true`. Items values: [102 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |
| `test_key_expires_at` | Optional | string | Future RFC 3339 timestamp when the issued test key expires. Allowed only with issue_test_key true. Omit for a key that doesn't expire. Format: `date-time`. minLength: `1`. |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### sandboxes.create: No test key



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Optional | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `initial_onboarding` | Optional | string | The onboarding state the sandbox starts in, and returns to when you reset it. `complete` prefills a verified test identity; `not_started` leaves requirements due so you can rehearse onboarding. Default: `"complete"`. Values: `"complete"`, `"not_started"`. |
| `issue_test_key` | Optional | boolean | Values: `false`. |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. For a test key, use only scopes whose key_modes includes test in x-flint-scopes. The developer.sandboxes.read and developer.sandboxes.write scopes are valid on test keys; developer.partner_apps.read and developer.partner_apps.write are live-only. minItems: `1`. uniqueItems: `true`. Items values: [102 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |
| `test_key_expires_at` | Optional | string | Future RFC 3339 timestamp when the issued test key expires. Allowed only with issue_test_key true. Omit for a key that doesn't expire. Format: `date-time`. minLength: `1`. |
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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->sandboxes->create([
  'access' => 'restricted',
  'issue_test_key' => true,
  'name' => 'QA',
  'scopes' => [
    'commerce.orders.read',
    'commerce.orders.write',
  ],
  'test_key_name' => 'QA integration key',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/sandboxes-create.php)

### sandboxes.delete

Archives a non-default sandbox and frees its original name for reuse. A sandbox whose reset stopped after deletion started can be archived; its previous and new data are then deleted in the background.

`DELETE /v1/sandboxes/{sandbox_id}`

Signature: `delete(string|Model $sandbox_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->sandboxes->delete('test_01KEZF7C00JC77HTMTB2XHNPE0', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/sandboxes-delete.php)

### sandboxes.get

Returns a single sandbox by ID. A test credential (API key, CLI login, or workload token) can read only the sandbox it is bound to; any other `sandbox_id` gets 404 `RESOURCE_NOT_FOUND`.

`GET /v1/sandboxes/{sandbox_id}`

Signature: `get(string|Model $sandbox_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->sandboxes->get('test_01KEZF7C00JC77HTMTB2XHNPE0', [], new RequestOptions());
```

[Complete runnable example](../examples/sandboxes-get.php)

### sandboxes.list

Returns the merchant's sandboxes. Flint guarantees a default test sandbox for every merchant. Use an onboarding session during setup or a live credential afterward. Test credentials cannot list sandboxes. Default order: is_default descending, then created_at descending, then sandbox_id descending.

`GET /v1/sandboxes`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](partnerApps.md#request-fields-8).

#### Response

Returned payload: [SandboxListResponse](../models/SandboxListResponse.md#sandboxlistresponse).

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

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->sandboxes->list([], new RequestOptions());
```

[Complete runnable example](../examples/sandboxes-list.php)

### sandboxes.reset

Deletes a sandbox's data and keeps its identity and connections. The default sandbox can be reset too. A test credential (API key, CLI login, or workload token) with `developer.sandboxes.write` can reset only the sandbox it is bound to; any other `sandbox_id` gets 404 `RESOURCE_NOT_FOUND`, and the credential keeps working after the reset. The sandbox keeps its `sandbox_id`, name, and `is_default`; every credential bound to it, including API keys, workload identities, CLI logins, and connected app installs; its webhook endpoints with their secrets and API versions; its test payment account and readiness; its payment method, checkout, and custom domains; and its processing fee assignments. Everything else is deleted: catalog, customers, orders, payments, invoices, subscriptions, test clocks, settings, locations, risk lists, request logs, events, deliveries, and idempotency keys. Returns the same sandbox with `status` `active` and a new `updated_at`. Requests that start while the reset runs get 409 `OPERATION_IN_PROGRESS` with reason `sandbox_resetting`; retry them after Retry-After. A second reset while one is running gets 409 `OPERATION_IN_PROGRESS`. Failed resets retry with delays of 1, 2, 4, 8, 16, 32, and 60 minutes, with at most eight attempts. Each attempt counts when it starts, including interrupted attempts. `reset_failed_at` records when a reset stops. If deletion has not started, the sandbox keeps its previous data and accepts requests again. If deletion has started, requests get 409 `ACTION_NOT_ALLOWED` with reason `sandbox_reset_failed`, without Retry-After. Reset it again to resume, or archive a non-default sandbox. A successful reset clears `reset_failed_at`. Requests already running when the reset started finish against the old data, and their results don't survive the reset. A retry with the same Idempotency-Key returns the recorded response; a new key resets again. Each sandbox allows one reset every 10 seconds and 500 resets per UTC day, shared by every credential that can reset it; past either limit the request gets 429 `RATE_LIMIT_EXCEEDED` with Retry-After, and a same-key retry doesn't count again. See the sandboxes guide.

`POST /v1/sandboxes/{sandbox_id}/reset`

Signature: `reset(string|Model $sandbox_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->sandboxes->reset('test_01KEZF7C00JC77HTMTB2XHNPE0', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/sandboxes-reset.php)

