[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# riskLists

### riskLists.create

Creates an empty list. Rules refer to it by alias, which can't be changed or reused, even after the list is archived. item_type decides how values are validated and compared.

`POST /v1/risk-lists`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateRiskListRequestInput](../models/CreateRiskListRequestInput.md#createrisklistrequestinput) | The request body for: Create a risk list. |

Body model: [CreateRiskListRequestInput](../models/CreateRiskListRequestInput.md#createrisklistrequestinput).

#### riskLists.create body fields

Field definitions: [shared fields](../models/CreateRiskListRequestInput.md#createrisklistrequestinput).

#### Response

Returned payload: [RiskList](../models/RiskList.md#risklist).

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

$result = $client->riskLists->create([
  'alias' => 'example',
  'name' => 'example',
  'item_type' => 'card_fingerprint',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/riskLists-create.php)

### riskLists.createItems

Adds up to 500 values, each validated and normalized for the list's item_type. The additions array reports each value's outcome: values already on the list come back as existing, so a batch is safe to resend. Returns 201 when at least one value was added and 200 when none were. Payments see the change from the next attempt.

`POST /v1/risk-lists/{risk_list_id}/items`

Signature: `createItems(string|Model $risk_list_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_list_id` | Required | string | Flint risk list ID. |
| `body` | Required | [AddRiskListItemsRequestInput](../models/AddRiskListItemsRequestInput.md#addrisklistitemsrequestinput) | Values to add to the risk list. Values are trimmed and compared exactly after item-type normalization for deduplication and membership. card_fingerprint is the 32-character hexadecimal value from PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and Unicode composition. string and email are lowercased, with accents preserved. email requires a bare address. email_domain is lowercased, has one final dot removed, and converts internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8 digits, including leading zeros, and matches the full value. customer_id preserves the validated ID. |

Body model: [AddRiskListItemsRequestInput](../models/AddRiskListItemsRequestInput.md#addrisklistitemsrequestinput).

#### riskLists.createItems body fields

Field definitions: [shared fields](../models/AddRiskListItemsRequestInput.md#addrisklistitemsrequestinput).

#### Response

Returned payload: [AddRiskListItemsResult](../models/AddRiskListItemsResult.md#addrisklistitemsresult).

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

$result = $client->riskLists->createItems('rl_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'values' => [
    'sdk-example',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/riskLists-createItems.php)

### riskLists.delete

Archives a list you created. Fails with 409 RESOURCE_IN_USE while an active rule names it. Flint-managed lists return 409 ACTION_NOT_ALLOWED with reason managed_externally. Archived lists can't be used by rules or edited. Items can still be added to and removed from active Flint-managed lists.

`DELETE /v1/risk-lists/{risk_list_id}`

Signature: `delete(string|Model $risk_list_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_list_id` | Required | string | Flint risk list ID. |
| `expected_version` | Optional | integer | Optional risk list version last read by the caller. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [RiskList](../models/RiskList.md#risklist).

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

$result = $client->riskLists->delete('rl_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/riskLists-delete.php)

### riskLists.deleteItem

Removes a value from a list permanently. Payments see the change from the next attempt.

`DELETE /v1/risk-lists/{risk_list_id}/items/{risk_list_item_id}`

Signature: `deleteItem(string|Model $risk_list_id, string|Model $risk_list_item_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_list_id` | Required | string | Flint risk list ID. |
| `risk_list_item_id` | Required | string | Flint risk list item ID. |

#### Response

Returned payload: [RiskListItem](../models/RiskListItem.md#risklistitem).

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

$result = $client->riskLists->deleteItem('rl_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'rli_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/riskLists-deleteItem.php)

### riskLists.get

Retrieves a risk list. item_count is its current number of values.

`GET /v1/risk-lists/{risk_list_id}`

Signature: `get(string|Model $risk_list_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_list_id` | Required | string | Flint risk list ID. |

#### Response

Returned payload: [RiskList](../models/RiskList.md#risklist).

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
$result = $client->riskLists->get('rl_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/riskLists-get.php)

### riskLists.getItem

Retrieves one value on a list.

`GET /v1/risk-lists/{risk_list_id}/items/{risk_list_item_id}`

Signature: `getItem(string|Model $risk_list_id, string|Model $risk_list_item_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_list_id` | Required | string | Flint risk list ID. |
| `risk_list_item_id` | Required | string | Flint risk list item ID. |

#### Response

Returned payload: [RiskListItem](../models/RiskListItem.md#risklistitem).

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
$result = $client->riskLists->getItem('rl_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'rli_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/riskLists-getItem.php)

### riskLists.list

Lists risk lists, newest first, including Flint's default block lists. Archived lists appear only when status includes archived. Default order: created_at descending, then risk_list_id descending.

`GET /v1/risk-lists`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `alias` | Optional | string | Exact-match filter on the lowercase list alias. No whitespace or case normalization is applied. minLength: `1`. maxLength: `128`. pattern: `^[a-z][a-z0-9_]{0,127}$`. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"archived"`. Values: `"active"`, `"archived"`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [RiskListListResponse](../models/RiskListListResponse.md#risklistlistresponse).

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
$result = $client->riskLists->list([], new RequestOptions());
```

[Complete runnable example](../examples/riskLists-list.php)

### riskLists.listRiskListItems

Lists a list's values, newest first. Default order: created_at descending, then risk_list_item_id descending.

`GET /v1/risk-lists/{risk_list_id}/items`

Signature: `listRiskListItems(string|Model $risk_list_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `value` | Optional | string | Exact-match filter after normalization for the parent list's item_type. Accepts 1 through 512 Unicode characters, following the same normalization as item creation. Commas are literal. Values are trimmed and compared exactly after item-type normalization for deduplication and membership. card_fingerprint is the 32-character hexadecimal value from PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and Unicode composition. string and email are lowercased, with accents preserved. email requires a bare address. email_domain is lowercased, has one final dot removed, and converts internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8 digits, including leading zeros, and matches the full value. customer_id preserves the validated ID. minLength: `1`. maxLength: `512`. |
| `risk_list_id` | Required | string | Flint risk list ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [RiskListItemListResponse](../models/RiskListItemListResponse.md#risklistitemlistresponse).

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

Pagination: `listRiskListItemsItems`, `listRiskListItemsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->riskLists->listRiskListItems('rl_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/riskLists-listRiskListItems.php)

### riskLists.update

Renames a list you created. Flint-managed lists return 409 ACTION_NOT_ALLOWED with reason managed_externally. Items can still be added to and removed from active Flint-managed lists.

`PATCH /v1/risk-lists/{risk_list_id}`

Signature: `update(string|Model $risk_list_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_list_id` | Required | string | Flint risk list ID. |
| `body` | Required | [UpdateRiskListRequestInput](../models/UpdateRiskListRequestInput.md#updaterisklistrequestinput) | The request body for: Update a risk list. |

Body model: [UpdateRiskListRequestInput](../models/UpdateRiskListRequestInput.md#updaterisklistrequestinput).

#### riskLists.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `name` | Required | string | Name of a merchant-created risk list. It can't be cleared. minLength: `1`. |

#### Response

Returned payload: [RiskList](../models/RiskList.md#risklist).

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

$result = $client->riskLists->update('rl_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'name' => 'Review list',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/riskLists-update.php)

