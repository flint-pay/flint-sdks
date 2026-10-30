[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returnPolicies

### returnPolicies.create

Create a Return policy with its first revision. The policy ID is stable across revisions, and each published revision is immutable.

`POST /v1/return-policies`

Signature: `create(params: ReturnPoliciesCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateReturnPolicyRequestInput](../models/CreateReturnPolicyRequest.md#createreturnpolicyrequest) | The request body for: Create return policy. |

Body model: [CreateReturnPolicyRequestInput](../models/CreateReturnPolicyRequest.md#createreturnpolicyrequest).

#### returnPolicies.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | minLength: `1`. |
| `revision` | Required | [ReturnPolicyRevisionRequestInput](../models/ReturnPolicyRevisionRequest.md#returnpolicyrevisionrequest) | The rules for a return policy revision: scope, eligibility, return window, approval and resolution modes, shipping, and restocking fee. |

#### Response

Returned payload: [ReturnPolicy](../models/ReturnPolicy.md#returnpolicy).

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

const result = await client.returnPolicies.create({name: "example", revision: {approval_mode: "automatic", eligibility_result: "ineligible", is_merchandise_return_required: true, priority: 1, scope: {match_type: "all"}}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnPolicies-create.mjs)

### returnPolicies.createRevision

Publish a new immutable Return policy revision while preserving the stable policy identity. Send the policy's current version as expected_version to reject a concurrent policy edit or publish.

`POST /v1/return-policies/{return_policy_id}/revisions`

Signature: `createRevision(return_policy_id: InputValue<string>, params: ReturnPoliciesCreateRevisionParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_policy_id` | Required | string | Flint return policy id. |
| `body` | Required | [PublishReturnPolicyRevisionRequestInput](../models/PublishReturnPolicyRevisionRequest.md#publishreturnpolicyrevisionrequest) | The request body for: Publish return policy revision. |

Body model: [PublishReturnPolicyRevisionRequestInput](../models/PublishReturnPolicyRevisionRequest.md#publishreturnpolicyrevisionrequest).

#### returnPolicies.createRevision body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Required | integer | Required current version of the Return policy. A stale value returns VERSION_CONFLICT. Publishing increments the policy version. Format: `int64`. minimum: `1`. |
| `revision` | Required | [ReturnPolicyRevisionRequestInput](../models/ReturnPolicyRevisionRequest.md#returnpolicyrevisionrequest) | The rules for a return policy revision: scope, eligibility, return window, approval and resolution modes, shipping, and restocking fee. |

#### Response

Returned payload: [ReturnPolicy](../models/ReturnPolicy.md#returnpolicy).

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

const result = await client.returnPolicies.createRevision("rpol_01ARZ3NDEKTSV4RRFFQ69G5FAV", {expected_version: 1, revision: {approval_mode: "automatic", eligibility_result: "ineligible", is_merchandise_return_required: true, priority: 1, scope: {match_type: "all"}}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnPolicies-createRevision.mjs)

### returnPolicies.delete

Retire a Return policy so it is no longer evaluated and no longer appears as an active choice.

`DELETE /v1/return-policies/{return_policy_id}`

Signature: `delete(return_policy_id: InputValue<string>, params?: ReturnPoliciesDeleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_policy_id` | Required | string | Flint return policy id. |
| `expected_version` | Optional | integer | Optional. The policy's current version. If it changed, the archive fails with 409 VERSION_CONFLICT and nothing changes. Format: `int64`. minimum: `1`. |

#### Response

Returned payload: [ReturnPolicy](../models/ReturnPolicy.md#returnpolicy).

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

const result = await client.returnPolicies.delete("rpol_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnPolicies-delete.mjs)

### returnPolicies.get

Retrieve one Return policy. Supports expand for current_revision.

`GET /v1/return-policies/{return_policy_id}`

Signature: `get(return_policy_id: InputValue<string>, params?: ReturnPoliciesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_policy_id` | Required | string | Flint return policy id. |
| `expand` | Optional | Array of string or string | Supported expansions: current_revision. Expanded relationships are returned only when explicitly requested and authorized. Limits: at most 10 unique expand paths per request. Pass expand=current_revision. Items values: `"current_revision"`. Values: `"current_revision"`. |

#### Response

Returned payload: [ReturnPolicy](../models/ReturnPolicy.md#returnpolicy).

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
const result = await client.returnPolicies.get("rpol_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/returnPolicies-get.mjs)

### returnPolicies.getRevision

Retrieve one immutable policy revision, including the exact rules a Return was evaluated against.

`GET /v1/return-policies/{return_policy_id}/revisions/{return_policy_revision_id}`

Signature:

```typescript
getRevision(return_policy_id: InputValue<string>,
 return_policy_revision_id: InputValue<string>,
 params?: ReturnPoliciesGetRevisionParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_policy_id` | Required | string | Flint return policy id. |
| `return_policy_revision_id` | Required | string | Flint return policy revision id. |

#### Response

Returned payload: [ReturnPolicyRevision](../models/ReturnPolicyRevision.md#returnpolicyrevision).

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
const result = await client.returnPolicies.getRevision("rpol_01ARZ3NDEKTSV4RRFFQ69G5FAV", "rpolv_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/returnPolicies-getRevision.mjs)

### returnPolicies.list

List Return policies with their status. Include the current revision with expand=current_revision. Default order: created_at descending, then return_policy_id descending.

`GET /v1/return-policies`

Signature: `list(params?: ReturnPoliciesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `query` | Optional | string | Search by return policy ID, name, or external reference ID. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `expand` | Optional | Array of string or string | Supported expansions: current_revision. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Pass expand=current_revision. Items values: `"current_revision"`. Values: `"current_revision"`. |

#### Response

Returned payload: [ListReturnPoliciesResponse](../models/ListReturnPoliciesResponse.md#listreturnpoliciesresponse).

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
const result = await client.returnPolicies.list({}, {  });
```

[Complete runnable example](../examples/returnPolicies-list.mjs)

### returnPolicies.listRevisions

List every published revision of a Return policy. Default order: created_at descending, then return_policy_revision_id descending.

`GET /v1/return-policies/{return_policy_id}/revisions`

Signature:

```typescript
listRevisions(return_policy_id: InputValue<string>,
 params?: ReturnPoliciesListRevisionsParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_policy_id` | Required | string | Flint return policy id. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [ListReturnPolicyRevisionsResponse](../models/ListReturnPolicyRevisionsResponse.md#listreturnpolicyrevisionsresponse).

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

Pagination: `listRevisionsItems`, `listRevisionsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.returnPolicies.listRevisions("rpol_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/returnPolicies-listRevisions.mjs)

### returnPolicies.update

Update policy identity fields or set status to active or inactive. Rules live on revisions, so changing a window, fee, or scope means publishing a new revision.

`PATCH /v1/return-policies/{return_policy_id}`

Signature: `update(return_policy_id: InputValue<string>, params: ReturnPoliciesUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_policy_id` | Required | string | Flint return policy id. |
| `body` | Required | [UpdateReturnPolicyRequestInput](../models/UpdateReturnPolicyRequest.md#updatereturnpolicyrequest) | The request body for: Update return policy. |

Body model: [UpdateReturnPolicyRequestInput](../models/UpdateReturnPolicyRequest.md#updatereturnpolicyrequest).

#### returnPolicies.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |

#### Response

Returned payload: [ReturnPolicy](../models/ReturnPolicy.md#returnpolicy).

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

const result = await client.returnPolicies.update("rpol_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Standard returns"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/returnPolicies-update.mjs)

