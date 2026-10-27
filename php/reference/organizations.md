[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# organizations

### organizations.create

Creates an organization under parent_organization_id. Flint creates each merchant's top-level organization; the API creates organizations below it.

`POST /v1/organizations`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateOrganizationRequestInput](../models/CreateOrganizationRequestInput.md#createorganizationrequestinput) | The request body for: Create organization. |

Body model: [CreateOrganizationRequestInput](../models/CreateOrganizationRequestInput.md#createorganizationrequestinput).

#### organizations.create body fields

Field definitions: [shared fields](../models/CreateOrganizationRequestInput.md#createorganizationrequestinput).

#### Response

Returned payload: [Organization](../models/Organization.md#organization).

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

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->organizations->create([
  'name' => 'example',
  'parent_organization_id' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/organizations-create.php)

### organizations.get

Returns an accessible organization by ID. An inaccessible organization returns 404; an inaccessible parent requested through expand returns 403 FORBIDDEN with reason expansion_not_permitted.

`GET /v1/organizations/{organization_id}`

Signature: `get(string|Model $organization_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"parent_organization"`. |

#### Response

Returned payload: [Organization](../models/Organization.md#organization).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->organizations->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/organizations-get.php)

### organizations.grantMembership

Sets the role of a user who already belongs to this organization or one of its parent organizations. Returns 201 when it adds a direct membership and 200 when it changes one. It can't add new people; any other user_id returns 404. Current organization access and mutation permissions are checked before idempotent replay. Idempotency keys are scoped to the merchant, mode, environment, and organization.

`POST /v1/organizations/{organization_id}/memberships`

Signature: `grantMembership(string|Model $organization_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
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

Complete body and metadata: `grantMembershipWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->organizations->grantMembership('example', [
  'role' => 'admin',
  'user_id' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/organizations-grantMembership.php)

### organizations.list

Returns the organizations accessible to the caller, filtered to the authenticated merchant's organization subtree for external API keys. Pagination uses the last returned sort value and organization_id, so inserting or deleting earlier rows does not shift later pages. Reuse page_token with the same filters and sort; page_size may change.

`GET /v1/organizations`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `parent_organization_id` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"archived"`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"name"`, `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `expand` | Optional | Array of string | Items values: `"parent_organization"`. |

#### Response

Returned payload: [OrganizationsListResponse200](../models/OrganizationsListResponse200.md#organizationslistresponse200).

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

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->organizations->list([], new RequestOptions());
```

[Complete runnable example](../examples/organizations-list.php)

### organizations.listMemberships

Returns the direct memberships for an organization.

`GET /v1/organizations/{organization_id}/memberships`

Signature: `listMemberships(string|Model $organization_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [OrganizationsListMembershipsResponse200](../models/OrganizationsListMembershipsResponse200.md#organizationslistmembershipsresponse200).

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

Complete body and metadata: `listMembershipsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listMembershipsItems`, `listMembershipsPages`, `listMembershipsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->organizations->listMemberships('example', [], new RequestOptions());
```

[Complete runnable example](../examples/organizations-listMemberships.php)

### organizations.remove

Soft-deletes an organization and reports status archived. Refused while the organization has active child organizations or a non-closed merchant belongs to it, including your merchant's own organization. Conflicts include up to 10 blocking_resources and the total blocking_resource_count. Current organization access and mutation permissions are checked before idempotent replay. Idempotency keys are scoped to the merchant, mode, environment, and organization.

`DELETE /v1/organizations/{organization_id}`

Signature: `remove(string|Model $organization_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [Organization](../models/Organization.md#organization).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `removeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->organizations->remove('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/organizations-remove.php)

### organizations.revokeMembership

Removes a user's direct membership and returns it with status removed. A role the user holds in a parent organization still applies. The owner can't be removed. Current organization access and mutation permissions are checked before idempotent replay. Idempotency keys are scoped to the merchant, mode, environment, and organization.

`DELETE /v1/organizations/{organization_id}/memberships/{user_id}`

Signature: `revokeMembership(string|Model $organization_id, string|Model $user_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string |  |
| `user_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [OrganizationMembership](../models/OrganizationMembershipInput.md#organizationmembershipinput).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `revokeMembershipWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->organizations->revokeMembership('example', 'example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/organizations-revokeMembership.php)

### organizations.update

Applies a sparse update to an accessible active organization. Send at least one field; metadata: {} is a valid no-op patch. The name field cannot be null. parent_organization_id moves the organization and can't be null. Set metadata to null to clear all metadata. Current organization access and mutation permissions are checked before idempotent replay. Idempotency keys are scoped to the merchant, mode, environment, and organization.

`PATCH /v1/organizations/{organization_id}`

Signature: `update(string|Model $organization_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateOrganizationRequestInput](../models/UpdateOrganizationRequestInput.md#updateorganizationrequestinput) | The request body for: Update organization. minProperties: `1`. |

Body model: [UpdateOrganizationRequestInput](../models/UpdateOrganizationRequestInput.md#updateorganizationrequestinput).

#### organizations.update body fields

Field definitions: [shared fields](../models/UpdateOrganizationRequestInput.md#updateorganizationrequestinput).

#### Response

Returned payload: [Organization](../models/Organization.md#organization).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->organizations->update('example', [
  'expected_version' => '1',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/organizations-update.php)

