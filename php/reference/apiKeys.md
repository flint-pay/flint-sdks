[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# apiKeys

### apiKeys.create

Creates a merchant-bound external API key. secret_key is returned only in the initial successful response and accepted idempotent replays of the same create request.

`POST /v1/api-keys`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateAPIKeyRequestInput](../models/CreateAPIKeyRequestInput.md#createapikeyrequestinput) | The request body for: Create an API key. |

Body model: [CreateAPIKeyRequestInput](../models/CreateAPIKeyRequestInput.md#createapikeyrequestinput).

#### apiKeys.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scope_preset` | Optional | string | A predefined set of scopes to grant instead of listing them. Flint resolves it when it creates the key and stores the resulting scopes, so scopes added to Flint later are not added to the key. Send either scopes or scope_preset. Values: `"full_access"`, `"read_only"`. |
| `scopes` | Optional | Array of string | The scopes to grant. Send either scopes or scope_preset. Items values: [95 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |

#### apiKeys.create body oneOf variant 1



#### apiKeys.create body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scope_preset` | Optional | string | A predefined set of scopes to grant instead of listing them. Flint resolves it when it creates the key and stores the resulting scopes, so scopes added to Flint later are not added to the key. Send either scopes or scope_preset. Values: `"full_access"`, `"read_only"`. |
| `scopes` | Required | Array of string | The scopes to grant. Send either scopes or scope_preset. Items values: [95 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |

#### apiKeys.create body oneOf variant 2



#### apiKeys.create body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scope_preset` | Required | string | A predefined set of scopes to grant instead of listing them. Flint resolves it when it creates the key and stores the resulting scopes, so scopes added to Flint later are not added to the key. Send either scopes or scope_preset. Values: `"full_access"`, `"read_only"`. |
| `scopes` | Optional | Array of string | The scopes to grant. Send either scopes or scope_preset. Items values: [95 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |

#### Response

Returned payload: [APIKeyWithSecret](../models/APIKeyWithSecret.md#apikeywithsecret).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->apiKeys->create([
  'name' => 'example',
  'scopes' => [],
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
| `api_key_id` | Required | string |  |

#### Response

Returned payload: [APIKey](../models/APIKey.md#apikey).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->apiKeys->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/apiKeys-get.php)

### apiKeys.list

Returns merchant-bound external API key metadata. Internal keys, demo-session keys, and secrets are never returned.

`GET /v1/api-keys`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"expired"`, `"revoked"`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"created_at"`, `"last_used_at"`, `"name"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |

#### Response

Returned payload: [ApiKeysListResponse200](../models/ApiKeysListResponse200.md#apikeyslistresponse200).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

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
| `api_key_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [ConfigurationVersionRequestInput](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput) | The request body for: Revoke an API key. |

Body model: [ConfigurationVersionRequestInput](../models/SkipMeSubscriptionCycleRequestInput.md#skipmesubscriptioncyclerequestinput).

#### apiKeys.revoke body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [APIKey](../models/APIKey.md#apikey).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `revokeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->apiKeys->revoke('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/apiKeys-revoke.php)

### apiKeys.update

Updates an API key's name, scopes, or expires_at. Expired keys can be updated, and a future expires_at reactivates one. A revoked key can't be updated. An API key caller may grant only scopes it holds and can manage only keys whose scopes it holds.

`PATCH /v1/api-keys/{api_key_id}`

Signature: `update(string|Model $api_key_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_key_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateAPIKeyRequestInput](../models/UpdateAPIKeyRequestInput.md#updateapikeyrequestinput) | The request body for: Update an API key. |

Body model: [UpdateAPIKeyRequestInput](../models/UpdateAPIKeyRequestInput.md#updateapikeyrequestinput).

#### apiKeys.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Resource version last read by the caller. Required when scopes is present, including an empty array. Optional for scalar updates. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `expires_at` | Optional | string or null | Future RFC3339 timestamp. Send null to clear an existing API-key expiration. Format: `date-time`. minLength: `1`. |
| `name` | Optional | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | Items values: [95 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |

#### Response

Returned payload: [APIKey](../models/APIKey.md#apikey).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->apiKeys->update('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/apiKeys-update.php)

