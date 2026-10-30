[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# modifierSets

### modifierSets.create

Create modifier set.

`POST /v1/modifier-sets`

Signature: `create(params: ModifierSetsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateModifierSetRequestInput](../models/CreateModifierSetRequest.md#createmodifiersetrequest) | The request body for: Create modifier set. |

Body model: [CreateModifierSetRequestInput](../models/CreateModifierSetRequest.md#createmodifiersetrequest).

#### modifierSets.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `modifier_groups` | Optional | Array of [CreateModifierSetGroupRequestInput](../models/CreateModifierSetGroupRequest.md#createmodifiersetgrouprequest) | Ordered group entries in this set, including references to reusable groups and groups owned by the set. Items: A modifier group to add to a modifier set, either an existing group by ID or one defined inline, chosen by `source`. |
| `name` | Required | string | Name used to identify this modifier set. minLength: `1`. maxLength: `255`. |
| `status` | Optional | string | Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Default: `"active"`. Values: `"active"`, `"inactive"`. |

#### Response

Returned payload: [ModifierSet](../models/ModifierSet.md#modifierset).

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

const result = await client.modifierSets.create({name: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/modifierSets-create.mjs)

### modifierSets.delete

Retire modifier set. Returns the archived resource exactly as GET returns it. Repeating DELETE returns 200 without changing version or updated_at, sending a webhook, or checking references. When expected_version is present, it is compared before the archived replay; a stale version returns 409 VERSION_CONFLICT with current_version.

`DELETE /v1/modifier-sets/{modifier_set_id}`

Signature: `delete(modifier_set_id: InputValue<string>, params?: ModifierSetsDeleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_set_id` | Required | string | Flint modifier set ID. |
| `expected_version` | Optional | integer | Optional modifier set version last read by the caller. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [ModifierSet](../models/ModifierSet.md#modifierset).

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

const result = await client.modifierSets.delete("ms_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/modifierSets-delete.mjs)

### modifierSets.get

Get modifier set.

`GET /v1/modifier-sets/{modifier_set_id}`

Signature: `get(modifier_set_id: InputValue<string>, params?: ModifierSetsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_set_id` | Required | string | Flint modifier set ID. |

#### Response

Returned payload: [ModifierSet](../models/ModifierSet.md#modifierset).

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
const result = await client.modifierSets.get("ms_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/modifierSets-get.mjs)

### modifierSets.list

List modifier sets. Default order: created_at descending, then modifier_set_id descending.

`GET /v1/modifier-sets`

Signature: `list(params?: ModifierSetsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search across modifier set ID, external reference ID, name, and description. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as ms_01. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by modifier_set_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |

#### Response

Returned payload: [ModifierSetListResponse](../models/ModifierSetListResponse.md#modifiersetlistresponse).

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

```typescript
const result = await client.modifierSets.list({}, {  });
```

[Complete runnable example](../examples/modifierSets-list.mjs)

### modifierSets.update

Update modifier set. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived and current_status archived. The error identifies the archived resource; a create under an archived parent identifies that parent.

`PATCH /v1/modifier-sets/{modifier_set_id}`

Signature: `update(modifier_set_id: InputValue<string>, params: ModifierSetsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_set_id` | Required | string | Flint modifier set ID. |
| `body` | Required | [UpdateModifierSetRequestInput](../models/UpdateModifierSetRequest.md#updatemodifiersetrequest) | The request body for: Update modifier set. |

Body model: [UpdateModifierSetRequestInput](../models/UpdateModifierSetRequest.md#updatemodifiersetrequest).

#### modifierSets.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Modifier set version last read by the caller. Required when modifier_groups is present. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Omitted metadata is unchanged. Objects merge by key, null values delete keys, an empty object is a no-op, and null clears all metadata. The merged map can contain at most 50 keys. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `modifier_groups` | Optional | Array of [ModifierSetGroupRequestInput](../models/ModifierSetGroupRequest.md#modifiersetgrouprequest) | Replaces the set's group entries atomically. Include modifier_set_group_id to retain an entry or omit it to create one. Entries omitted from the array are removed. Omit the array to leave entries unchanged; send [] to clear them. Items: A modifier group you add to a modifier set, either an existing group by ID or a new inline group, with selection limits and overrides. |
| `name` | Optional | string | Name used to identify this modifier set. minLength: `1`. maxLength: `255`. |
| `status` | Optional | string | Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Values: `"active"`, `"inactive"`. |

#### Response

Returned payload: [ModifierSet](../models/ModifierSet.md#modifierset).

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

const result = await client.modifierSets.update("ms_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Lunch options"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/modifierSets-update.mjs)

