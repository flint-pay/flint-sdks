[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# apiKeys

### apiKeys.create

Creates a merchant-bound external API key. secret_key is returned only in the initial successful response and accepted idempotent replays of the same create request.

`POST /v1/api-keys`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateAPIKeyRequestInput](../models/CreateAPIKeyRequestInput.md#createapikeyrequestinput) | The request body for: Create an API key. |

Body model: [CreateAPIKeyRequestInput](../models/CreateAPIKeyRequestInput.md#createapikeyrequestinput).

#### apiKeys.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |

#### apiKeys.create with `access: "full"`

The `full` variant of `CreateAPIKeyRequest`.

Body model: [CreateAPIKeyRequestFullInput](../models/CreateAPIKeyRequestFullInput.md#createapikeyrequestfullinput).

#### apiKeys.create with `access: "read_only"`

The `read_only` variant of `CreateAPIKeyRequest`.

Body model: [CreateAPIKeyRequestReadOnlyInput](../models/CreateAPIKeyRequestReadOnlyInput.md#createapikeyrequestreadonlyinput).

#### apiKeys.create with `access: "restricted"`

The `restricted` variant of `CreateAPIKeyRequest`.

Body model: [CreateAPIKeyRequestRestrictedInput](../models/CreateAPIKeyRequestRestrictedInput.md#createapikeyrequestrestrictedinput).

#### Response

Returned payload: [APIKeyWithSecret](../models/APIKeyWithSecret.md#apikeywithsecret).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->apiKeys->create([
  'access' => 'restricted',
  'expires_at' => '2027-03-17T14:30:00Z',
  'name' => 'Sandbox orders integration',
  'scopes' => [
    'accounts.api_keys.read',
    'commerce.orders.read',
    'commerce.orders.write',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/apiKeys-create.php)

### apiKeys.get

Returns external API key metadata. Secrets, internal keys, and demo-session keys are not returned.

`GET /v1/api-keys/{api_key_id}`

Signature: `get(string|Model $api_key_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_key_id` | Required | string | Flint API key ID. |

#### Response

Returned payload: [APIKey](../models/APIKey.md#apikey).

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

```php
$result = $client->apiKeys->get('key_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/apiKeys-get.php)

### apiKeys.list

Returns merchant-bound external API key metadata. Internal keys, demo-session keys, and secrets are never returned. Default order: created_at descending, then api_key_id descending.

`GET /v1/api-keys`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string or string | Optional API key status filter. Active keys have no expiration or a future expires_at. Expired keys are not revoked and have expires_at at or before the current time. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"expired"`, `"revoked"`. Values: `"active"`, `"expired"`, `"revoked"`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by api_key_id. Default: `"created_at"`. Values: `"created_at"`, `"last_used_at"`, `"name"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |

#### Response

Returned payload: [APIKeyListResponse](../models/APIKeyListResponse.md#apikeylistresponse).

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

```php
$result = $client->apiKeys->list([], new RequestOptions());
```

[Complete runnable example](../examples/apiKeys-list.php)

### apiKeys.revoke

Permanently revokes an external API key and returns metadata with status revoked.

`POST /v1/api-keys/{api_key_id}/revoke`

Signature: `revoke(string|Model $api_key_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_key_id` | Required | string | Flint API key ID. |
| `body` | Optional | [ConfigurationVersionRequestInput](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput) | The request body for: Revoke an API key. |

Body model: [ConfigurationVersionRequestInput](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput).

#### apiKeys.revoke body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [APIKey](../models/APIKey.md#apikey).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->apiKeys->revoke('key_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/apiKeys-revoke.php)

### apiKeys.update

Updates an API key's name, access, scopes, or expires_at. Expired keys can be updated, and a future expires_at reactivates one. A revoked key can't be updated. An API key caller may grant only scopes it holds and can manage only keys whose scopes it holds.

`PATCH /v1/api-keys/{api_key_id}`

Signature: `update(string|Model $api_key_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_key_id` | Required | string | Flint API key ID. |
| `body` | Required | [UpdateAPIKeyRequestInput](../models/UpdateAPIKeyRequestInput.md#updateapikeyrequestinput) | The request body for: Update an API key. |

Body model: [UpdateAPIKeyRequestInput](../models/UpdateAPIKeyRequestInput.md#updateapikeyrequestinput).

#### apiKeys.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Optional | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when access or scopes is present. Optional for scalar updates. Format: `uint64`. minimum: `1`. |
| `expires_at` | Optional | string or null | Future RFC3339 timestamp. Send null to clear an existing API-key expiration. Format: `date-time`. minLength: `1`. |
| `name` | Optional | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |

#### apiKeys.update: Full



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when access or scopes is present. Optional for scalar updates. Format: `uint64`. minimum: `1`. |
| `expires_at` | Optional | string or null | Future RFC3339 timestamp. Send null to clear an existing API-key expiration. Format: `date-time`. minLength: `1`. |
| `name` | Optional | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |

#### apiKeys.update: Read only



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"read_only"`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when access or scopes is present. Optional for scalar updates. Format: `uint64`. minimum: `1`. |
| `expires_at` | Optional | string or null | Future RFC3339 timestamp. Send null to clear an existing API-key expiration. Format: `date-time`. minLength: `1`. |
| `name` | Optional | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |

#### apiKeys.update: Restricted



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"restricted"`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when access or scopes is present. Optional for scalar updates. Format: `uint64`. minimum: `1`. |
| `expires_at` | Optional | string or null | Future RFC3339 timestamp. Send null to clear an existing API-key expiration. Format: `date-time`. minLength: `1`. |
| `name` | Optional | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Required | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [96 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |

#### apiKeys.update: No access change



Field definitions: [shared fields](#apikeysupdate-body-fields).

#### Response

Returned payload: [APIKey](../models/APIKey.md#apikey).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->apiKeys->update('key_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'name' => 'Reporting key',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/apiKeys-update.php)

