[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# organizations

### organizations.create

Creates an organization under parent_organization_id. Flint creates each merchant's top-level organization; the API creates organizations below it.

`POST /v1/organizations`

Signature: `create(params: OrganizationsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateOrganizationRequestInput](../models/CreateOrganizationRequest.md#createorganizationrequest) | The request body for: Create organization. |

Body model: [CreateOrganizationRequestInput](../models/CreateOrganizationRequest.md#createorganizationrequest).

#### organizations.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | minLength: `1`. |
| `parent_organization_id` | Required | string | The organization to create this one under. It must be an active organization you can manage. minLength: `1`. |

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.organizations.create({metadata: {segment: "enterprise"}, name: "Northeast Region", parent_organization_id: "org_01JQ4X2R0W0RTM8VJQ8YQ7P9AB"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/organizations-create.mjs)

### organizations.delete

Soft-deletes an organization and reports status archived. Refused while the organization has active child organizations or a non-closed merchant belongs to it, including your merchant's own organization. Conflicts include up to 10 blocking_resources and the total blocking_resource_count. Current organization access and mutation permissions are checked before idempotent replay. Idempotency keys are scoped to the merchant, mode, environment, and organization.

`DELETE /v1/organizations/{organization_id}`

Signature: `delete(organization_id: InputValue<string>, params?: OrganizationsDeleteParams, options?: RequestOptions<"merchant">)`

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.organizations.delete("org_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/organizations-delete.mjs)

### organizations.get

Returns an accessible organization by ID. An inaccessible organization returns 404; an inaccessible parent requested through expand returns 403 FORBIDDEN with reason expansion_not_permitted.

`GET /v1/organizations/{organization_id}`

Signature: `get(organization_id: InputValue<string>, params?: OrganizationsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

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

```typescript
const result = await client.organizations.get("org_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/organizations-get.mjs)

### organizations.grantMembership

Sets the role of a user who already belongs to this organization or one of its parent organizations. Returns 201 when it adds a direct membership and 200 when it changes one. It can't add new people; any other user_id returns 404. Current organization access and mutation permissions are checked before idempotent replay. Idempotency keys are scoped to the merchant, mode, environment, and organization.

`POST /v1/organizations/{organization_id}/memberships`

Signature: `grantMembership(organization_id: InputValue<string>, params: OrganizationsGrantMembershipParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string | Flint organization ID. |
| `body` | Required | [GrantOrganizationMembershipRequestInput](../models/GrantOrganizationMembershipRequest.md#grantorganizationmembershiprequest) | The request body for: Grant organization membership. |

Body model: [GrantOrganizationMembershipRequestInput](../models/GrantOrganizationMembershipRequest.md#grantorganizationmembershiprequest).

#### organizations.grantMembership body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `role` | Required | string | Values: `"admin"`, `"operator"`, `"viewer"`. |
| `user_id` | Required | string | minLength: `1`. |

#### Response

Returned payload: [OrganizationMembership](../models/OrganizationMembership.md#organizationmembership) | [OrganizationMembership](../models/OrganizationMembership.md#organizationmembership).

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

const result = await client.organizations.grantMembership("org_01ARZ3NDEKTSV4RRFFQ69G5FAV", {role: "admin", user_id: "usr_01JQ4X9G7C2R9M18D1T9EAV1KX"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/organizations-grantMembership.mjs)

### organizations.list

Returns the organizations accessible to the caller, filtered to the authenticated merchant's organization subtree for external API keys. Pagination uses the last returned sort value and organization_id, so inserting or deleting earlier rows does not shift later pages. Reuse page_token with the same filters and sort; page_size may change. Default order: created_at descending, then organization_id descending.

`GET /v1/organizations`

Signature: `list(params?: OrganizationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

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

```typescript
const result = await client.organizations.list({}, {  });
```

[Complete runnable example](../examples/organizations-list.mjs)

### organizations.listMemberships

Returns the direct memberships for an organization. Default order: user_id ascending; this key uniquely orders the results.

`GET /v1/organizations/{organization_id}/memberships`

Signature:

```typescript
listMemberships(organization_id: InputValue<string>,
 params?: OrganizationsListMembershipsParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

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

```typescript
const result = await client.organizations.listMemberships("org_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/organizations-listMemberships.mjs)

### organizations.removeMembership

Removes a user's direct membership and returns it with status removed. A role the user holds in a parent organization still applies. The owner can't be removed. Current organization access and mutation permissions are checked before idempotent replay. Idempotency keys are scoped to the merchant, mode, environment, and organization.

`DELETE /v1/organizations/{organization_id}/memberships/{user_id}`

Signature:

```typescript
removeMembership(organization_id: InputValue<string>,
 user_id: InputValue<string>,
 params?: OrganizationsRemoveMembershipParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string | Flint organization ID. |
| `user_id` | Required | string | Flint user ID. |

#### Response

Returned payload: [OrganizationMembership](../models/OrganizationMembership.md#organizationmembership).

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

const result = await client.organizations.removeMembership("org_01ARZ3NDEKTSV4RRFFQ69G5FAV", "usr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/organizations-removeMembership.mjs)

### organizations.update

Applies a sparse update to an accessible active organization. Send at least one field; metadata: {} is a valid no-op patch. The name field cannot be null. parent_organization_id moves the organization and can't be null. Set metadata to null to clear all metadata. Current organization access and mutation permissions are checked before idempotent replay. Idempotency keys are scoped to the merchant, mode, environment, and organization.

`PATCH /v1/organizations/{organization_id}`

Signature: `update(organization_id: InputValue<string>, params: OrganizationsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `organization_id` | Required | string | Flint organization ID. |
| `body` | Required | [UpdateOrganizationRequestInput](../models/UpdateOrganizationRequest.md#updateorganizationrequest) | The request body for: Update organization. minProperties: `1`. |

Body model: [UpdateOrganizationRequestInput](../models/UpdateOrganizationRequest.md#updateorganizationrequest).

#### organizations.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |
| `parent_organization_id` | Optional | string | Moves the organization, and every organization below it, under another active organization you can manage. Can't be null. minLength: `1`. |

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.organizations.update("org_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Example Retail"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/organizations-update.mjs)

