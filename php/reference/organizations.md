[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# organizations

### organizations.create

Creates an organization under parent_organization_id. Flint creates each merchant's top-level organization; the API creates organizations below it.

`POST /v1/organizations`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateOrganizationRequestInput](../models/CreateOrganizationRequestInput.md#createorganizationrequestinput) | The request body for: Create organization. |

Body model: [CreateOrganizationRequestInput](../models/CreateOrganizationRequestInput.md#createorganizationrequestinput).

#### organizations.create body fields

Field definitions: [shared fields](../models/CreateOrganizationRequestInput.md#createorganizationrequestinput). Models: [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput).

#### Response

Returned payload: [Organization](../models/Organization.md#organization).

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

$result = $client->organizations->create([
  'metadata' => (object) [
    'segment' => 'enterprise',
  ],
  'name' => 'Northeast Region',
  'parent_organization_id' => 'org_01JQ4X2R0W0RTM8VJQ8YQ7P9AB',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/organizations-create.php)

### organizations.delete

Soft-deletes an organization and reports status archived. Refused while the organization has active child organizations or a non-closed merchant belongs to it, including your merchant's own organization. Conflicts include up to 10 blocking_resources and the total blocking_resource_count. Current organization access and mutation permissions are checked before idempotent replay. Idempotency keys are scoped to the merchant, mode, environment, and organization.

`DELETE /v1/organizations/{organization_id}`

Signature: `delete(string|Model $organization_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string | Flint organization ID. |
| `expected_version` | Optional | integer | Optional organization version last read by the caller. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [Organization](../models/Organization.md#organization).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->organizations->delete('org_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/organizations-delete.php)

### organizations.get

Returns an accessible organization by ID. An inaccessible organization returns 404; an inaccessible parent requested through expand returns 403 FORBIDDEN with reason expansion_not_permitted.

`GET /v1/organizations/{organization_id}`

Signature: `get(string|Model $organization_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string | Flint organization ID. |
| `expand` | Optional | Array of string or string | Supported expansions: parent_organization. Expansion requires accounts.organizations.read. Limits: at most 10 unique expand paths per request. Pass expand=parent_organization. Items values: `"parent_organization"`. Values: `"parent_organization"`. |

#### Response

Returned payload: [Organization](../models/Organization.md#organization).

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
$result = $client->organizations->get('org_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/organizations-get.php)

### organizations.grantMembership

Sets the role of a user who already belongs to this organization or one of its parent organizations. Returns 201 when it adds a direct membership and 200 when it changes one. It can't add new people; any other user_id returns 404. Current organization access and mutation permissions are checked before idempotent replay. Idempotency keys are scoped to the merchant, mode, environment, and organization.

`POST /v1/organizations/{organization_id}/memberships`

Signature: `grantMembership(string|Model $organization_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string | Flint organization ID. |
| `body` | Required | [GrantOrganizationMembershipRequestInput](../models/GrantOrganizationMembershipRequestInput.md#grantorganizationmembershiprequestinput) | The request body for: Grant organization membership. |

Body model: [GrantOrganizationMembershipRequestInput](../models/GrantOrganizationMembershipRequestInput.md#grantorganizationmembershiprequestinput).

#### organizations.grantMembership body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `role` | Required | string | Values: `"admin"`, `"operator"`, `"viewer"`. |
| `user_id` | Required | string | minLength: `1`. |

#### Response

Returned payload: [OrganizationMembership](../models/OrganizationMembershipInput.md#organizationmembershipinput).

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

$result = $client->organizations->grantMembership('org_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'role' => 'admin',
  'user_id' => 'usr_01JQ4X9G7C2R9M18D1T9EAV1KX',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/organizations-grantMembership.php)

### organizations.list

Returns the organizations accessible to the caller, filtered to the authenticated merchant's organization subtree for external API keys. Pagination uses the last returned sort value and organization_id, so inserting or deleting earlier rows does not shift later pages. Reuse page_token with the same filters and sort; page_size may change. Default order: created_at descending, then organization_id descending.

`GET /v1/organizations`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `parent_organization_id` | Optional | string | Optional parent organization filter. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"archived"`. Values: `"active"`, `"archived"`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by organization_id. Default: `"created_at"`. Values: `"name"`, `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Supported expansions: parent_organization. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Pass expand=parent_organization. Items values: `"parent_organization"`. Values: `"parent_organization"`. |

#### Response

Returned payload: [OrganizationListResponse](../models/OrganizationListResponse.md#organizationlistresponse).

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

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->organizations->list([], new RequestOptions());
```

[Complete runnable example](../examples/organizations-list.php)

### organizations.listMemberships

Returns the direct memberships for an organization. Default order: user_id ascending; this key uniquely orders the results.

`GET /v1/organizations/{organization_id}/memberships`

Signature: `listMemberships(string|Model $organization_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string | Flint organization ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [OrganizationMembershipListResponse](../models/OrganizationMembershipListResponse.md#organizationmembershiplistresponse).

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

Pagination: `listMembershipsItems`, `listMembershipsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->organizations->listMemberships('org_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/organizations-listMemberships.php)

### organizations.removeMembership

Removes a user's direct membership and returns it with status removed. A role the user holds in a parent organization still applies. The owner can't be removed. Current organization access and mutation permissions are checked before idempotent replay. Idempotency keys are scoped to the merchant, mode, environment, and organization.

`DELETE /v1/organizations/{organization_id}/memberships/{user_id}`

Signature: `removeMembership(string|Model $organization_id, string|Model $user_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string | Flint organization ID. |
| `user_id` | Required | string | Flint user ID. |

#### Response

Returned payload: [OrganizationMembership](../models/OrganizationMembershipInput.md#organizationmembershipinput).

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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->organizations->removeMembership('org_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'usr_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/organizations-removeMembership.php)

### organizations.update

Applies a sparse update to an accessible active organization. Send at least one field; metadata: {} is a valid no-op patch. The name field cannot be null. parent_organization_id moves the organization and can't be null. Set metadata to null to clear all metadata. Current organization access and mutation permissions are checked before idempotent replay. Idempotency keys are scoped to the merchant, mode, environment, and organization.

`PATCH /v1/organizations/{organization_id}`

Signature: `update(string|Model $organization_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string | Flint organization ID. |
| `body` | Required | [UpdateOrganizationRequestInput](../models/UpdateOrganizationRequestInput.md#updateorganizationrequestinput) | The request body for: Update organization. minProperties: `1`. |

Body model: [UpdateOrganizationRequestInput](../models/UpdateOrganizationRequestInput.md#updateorganizationrequestinput).

#### organizations.update body fields

Field definitions: [shared fields](../models/UpdateOrganizationRequestInput.md#updateorganizationrequestinput). Models: [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput).

#### Response

Returned payload: [Organization](../models/Organization.md#organization).

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

$result = $client->organizations->update('org_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'name' => 'Example Retail',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/organizations-update.php)

