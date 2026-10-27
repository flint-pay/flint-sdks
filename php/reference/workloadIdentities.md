[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# workloadIdentities

### workloadIdentities.create

Creates an active identity in the authenticated environment and validates issuer discovery. Dashboard callers creating live identities need fresh identity verification. Machine callers may grant only scopes they hold in this environment.

`POST /v1/workload-identities`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateWorkloadIdentityRequestInput](../models/CreateWorkloadIdentityRequestInput.md#createworkloadidentityrequestinput) | The request body for: Create a workload identity. |

Body model: [CreateWorkloadIdentityRequestInput](../models/CreateWorkloadIdentityRequestInput.md#createworkloadidentityrequestinput).

#### workloadIdentities.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `audience` | Optional | string | Immutable token audience. Defaults to Flint's configured issuer URL when omitted. minLength: `1`. maxLength: `255`. |
| `claim_conditions` | Optional | Array of [WorkloadIdentityClaimConditionRequestInput](../models/WorkloadIdentityClaimConditionRequestInput.md#workloadidentityclaimconditionrequestinput) | Bounded value array, at most 10. Defaults to []. Any glob requires an exact claim condition; shared issuers require tenant pinning. maxItems: `10`. uniqueItems: `true`. |
| `issuer` | Required | string | Immutable public HTTPS issuer with a DNS host, optional port 443, and no userinfo, query, or fragment. Compared exactly. minLength: `1`. maxLength: `255`. |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Required | Array of string | Complete scope set to grant. Machine callers may grant only scopes they hold in the same environment. minItems: `1`. uniqueItems: `true`. Items values: [95 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |
| `subject` | Required | string | minLength: `1`. maxLength: `1024`. |
| `subject_match` | Optional | string | Default: `"exact"`. Values: `"exact"`, `"glob"`. |

#### Response

Returned payload: [WorkloadIdentity](../models/WorkloadIdentity.md#workloadidentity).

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

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->workloadIdentities->create([
  'name' => 'example',
  'issuer' => 'example',
  'subject' => 'example',
  'scopes' => [
    'accounts.api_keys.read',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/workloadIdentities-create.php)

### workloadIdentities.get

Returns an identity in the authenticated environment, including an archived identity.

`GET /v1/workload-identities/{workload_identity_id}`

Signature: `get(string|Model $workload_identity_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `workload_identity_id` | Required | string |  |

#### Response

Returned payload: [WorkloadIdentity](../models/WorkloadIdentity.md#workloadidentity).

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

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->workloadIdentities->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/workloadIdentities-get.php)

### workloadIdentities.list

Returns identities in the authenticated environment, ordered by created_at descending and workload_identity_id descending by default. Archived identities are excluded unless status includes archived.

`GET /v1/workload-identities`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"inactive"`, `"archived"`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"created_at"`, `"last_used_at"`, `"name"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |

#### Response

Returned payload: [WorkloadIdentitiesListResponse200](../models/WorkloadIdentitiesListResponse200.md#workloadidentitieslistresponse200).

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

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->workloadIdentities->list([], new RequestOptions());
```

[Complete runnable example](../examples/workloadIdentities-list.php)

### workloadIdentities.remove

Soft-archives the identity and returns it with status archived. The identity remains readable by ID and cannot be reactivated. Repeating DELETE without a stale fence returns the archived identity without changing its version.

`DELETE /v1/workload-identities/{workload_identity_id}`

Signature: `remove(string|Model $workload_identity_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `workload_identity_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [WorkloadIdentity](../models/WorkloadIdentity.md#workloadidentity).

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

Complete body and metadata: `removeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->workloadIdentities->remove('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/workloadIdentities-remove.php)

### workloadIdentities.update

Updates mutable policy fields. expected_version is optional for scalar updates and required when claim_conditions or scopes is supplied. Arrays replace their entire value. Issuer and audience are immutable. Dashboard callers reactivating or widening live identities need fresh identity verification.

`PATCH /v1/workload-identities/{workload_identity_id}`

Signature: `update(string|Model $workload_identity_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `workload_identity_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateWorkloadIdentityRequestInput](../models/UpdateWorkloadIdentityRequestInput.md#updateworkloadidentityrequestinput) | The request body for: Update a workload identity. |

Body model: [UpdateWorkloadIdentityRequestInput](../models/UpdateWorkloadIdentityRequestInput.md#updateworkloadidentityrequestinput).

#### workloadIdentities.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `claim_conditions` | Optional | Array of [WorkloadIdentityClaimConditionRequestInput](../models/WorkloadIdentityClaimConditionRequestInput.md#workloadidentityclaimconditionrequestinput) | Bounded value array, at most 10. Defaults to []. Any glob requires an exact claim condition; shared issuers require tenant pinning. maxItems: `10`. uniqueItems: `true`. |
| `expected_version` | Optional | integer string | Version most recently read. Required when claim_conditions or scopes is supplied; optional for scalar updates. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `name` | Optional | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | Complete scope set to grant. Machine callers may grant only scopes they hold in the same environment. minItems: `1`. uniqueItems: `true`. Items values: [95 declared values](../models/APIKeyInput.md#apikeyinput-scopes--values). |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |
| `subject` | Optional | string | minLength: `1`. maxLength: `1024`. |
| `subject_match` | Optional | string | Default: `"exact"`. Values: `"exact"`, `"glob"`. |

#### Response

Returned payload: [WorkloadIdentity](../models/WorkloadIdentity.md#workloadidentity).

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

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->workloadIdentities->update('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/workloadIdentities-update.php)

