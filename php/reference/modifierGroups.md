[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# modifierGroups

### modifierGroups.create

Create modifier group.

`POST /v1/modifier-groups`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateModifierGroupRequestInput](../models/CreateInlineModifierGroupRequestInput.md#createinlinemodifiergrouprequestinput) | The request body for: Create modifier group. |

Body model: [CreateModifierGroupRequestInput](../models/CreateInlineModifierGroupRequestInput.md#createinlinemodifiergrouprequestinput).

#### modifierGroups.create body fields

Field definitions: [shared fields](../models/CreateInlineModifierGroupRequestInput.md#createinlinemodifiergrouprequestinput). Models: [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput), [CreateModifierRequestInput](../models/CreateModifierRequestInput.md#createmodifierrequestinput), [TextModifierConfigRequestInput](../models/TextModifierConfigRequestInput.md#textmodifierconfigrequestinput).

#### Response

Returned payload: [ModifierGroup](../models/ModifierGroup.md#modifiergroup).

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

$result = $client->modifierGroups->create([
  'name' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/modifierGroups-create.php)

### modifierGroups.delete

Retire modifier group. Returns the archived resource exactly as GET returns it. Repeating DELETE returns 200 without changing version or updated_at, sending a webhook, or checking references. When expected_version is present, it is compared before the archived replay; a stale version returns 409 VERSION_CONFLICT with current_version.

`DELETE /v1/modifier-groups/{modifier_group_id}`

Signature: `delete(string|Model $modifier_group_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_group_id` | Required | string | Flint modifier group ID. |
| `expected_version` | Optional | integer | Optional modifier group version last read by the caller. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [ModifierGroup](../models/ModifierGroup.md#modifiergroup).

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

$result = $client->modifierGroups->delete('mg_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/modifierGroups-delete.php)

### modifierGroups.get

Get modifier group.

`GET /v1/modifier-groups/{modifier_group_id}`

Signature: `get(string|Model $modifier_group_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_group_id` | Required | string | Flint modifier group ID. |

#### Response

Returned payload: [ModifierGroup](../models/ModifierGroup.md#modifiergroup).

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
$result = $client->modifierGroups->get('mg_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/modifierGroups-get.php)

### modifierGroups.list

List modifier groups. Default order: created_at descending, then modifier_group_id descending.

`GET /v1/modifier-groups`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `modifier_group_type` | Optional | Array of string or string | Filter by modifier group type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"list"`, `"text"`. Values: `"list"`, `"text"`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search across modifier group ID, external reference ID, name, and description. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as mg_01. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by modifier_group_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |

#### Response

Returned payload: [ModifierGroupListResponse](../models/ModifierGroupListResponse.md#modifiergrouplistresponse).

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
$result = $client->modifierGroups->list([], new RequestOptions());
```

[Complete runnable example](../examples/modifierGroups-list.php)

### modifierGroups.update

Update modifier group. An archived resource returns 409 ACTION_NOT_ALLOWED with reason archived and current_status archived. The error identifies the archived resource; a create under an archived parent identifies that parent.

`PATCH /v1/modifier-groups/{modifier_group_id}`

Signature: `update(string|Model $modifier_group_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_group_id` | Required | string | Flint modifier group ID. |
| `body` | Required | [UpdateModifierGroupRequestInput](../models/UpdateModifierGroupRequestInput.md#updatemodifiergrouprequestinput) | The request body for: Update modifier group. |

Body model: [UpdateModifierGroupRequestInput](../models/UpdateModifierGroupRequestInput.md#updatemodifiergrouprequestinput).

#### modifierGroups.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantities` | Optional | boolean | Whether buyers can select more than one unit of a list modifier. |
| `expected_version` | Optional | integer | Modifier group version last read by the caller. Required when modifiers is present. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `max_quantity` | Optional | integer or null | Maximum whole-number quantity for each selected list modifier. Omit it to keep the current value; send null to clear it. Fractional quantities are not supported. Format: `int64`. |
| `max_selected` | Optional | integer or null | Maximum number of distinct list modifiers buyers can select. Omit it to keep the current value; send null to remove the limit. Format: `int32`. |
| `max_total_quantity` | Optional | integer or null | Maximum combined whole-number quantity across selected list modifiers. Omit it to keep the current value; send null to clear it. Fractional quantities are not supported. Format: `int64`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Omitted metadata is unchanged. Objects merge by key, null values delete keys, an empty object is a no-op, and null clears all metadata. The merged map can contain at most 50 keys. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `min_quantity` | Optional | integer or null | Minimum whole-number quantity for each selected list modifier. Omit it to keep the current value; send null to clear it. Fractional quantities are not supported. Format: `int64`. |
| `min_selected` | Optional | integer or null | Minimum number of distinct list modifiers buyers must select. Omit it to keep the current value; send null to remove the minimum. Format: `int32`. |
| `modifiers` | Optional | Array of [ModifierRequestInput](../models/ModifierRequestInput.md#modifierrequestinput) | Replaces all modifiers atomically. Include modifier_id to retain an existing modifier, omit the ID to create one, and omit a previous modifier to archive it. Omit the array to leave modifiers unchanged. An empty array clears modifiers when the group rules permit it. Null is not accepted. Items: A modifier you supply when creating or updating a modifier group, such as an add-on with a price change. |
| `name` | Optional | string | Name of the modifier group shown to buyers. minLength: `1`. maxLength: `255`. |
| `show_on_fulfillment` | Optional | boolean | Whether selections from this group appear in fulfillment details unless overridden for a modifier set. |
| `show_on_receipt` | Optional | boolean | Whether selections from this group appear on buyer receipts unless overridden for a modifier set. |
| `status` | Optional | string | Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. Values: `"active"`, `"inactive"`. |
| `text` | Optional | [TextModifierConfigPatchRequestInput](../models/TextModifierConfigPatchRequestInput.md#textmodifierconfigpatchrequestinput) or null | Patch text entry rules by field. Omitted fields keep their current values; null clears the text configuration when the group rules permit it. An empty object is invalid. |

#### Response

Returned payload: [ModifierGroup](../models/ModifierGroup.md#modifiergroup).

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

$result = $client->modifierGroups->update('mg_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'name' => 'Add-ons',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/modifierGroups-update.php)

