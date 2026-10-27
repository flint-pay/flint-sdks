[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# riskLists

### riskLists.addItems

Adds up to 500 values, each validated and normalized for the list's item_type. The additions array reports each value's outcome: values already on the list come back as existing, so a batch is safe to resend. Returns 201 when at least one value was added and 200 when none were. Payments see the change from the next attempt.

`POST /v1/risk-lists/{risk_list_id}/items`

Signature: `addItems(string|Model $risk_list_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_list_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [AddRiskListItemsRequestInput](../models/AddRiskListItemsRequestInput.md#addrisklistitemsrequestinput) | Values to add to the risk list. Values are trimmed and compared exactly after item-type normalization for deduplication and membership. card_fingerprint is the 32-character hexadecimal value from PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and Unicode composition. string and email are lowercased, with accents preserved. email requires a bare address. email_domain is lowercased, has one final dot removed, and converts internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8 digits, including leading zeros, and matches the full value. customer_id preserves the validated ID. |

Body model: [AddRiskListItemsRequestInput](../models/AddRiskListItemsRequestInput.md#addrisklistitemsrequestinput).

#### riskLists.addItems body fields

Field definitions: [shared fields](../models/AddRiskListItemsRequestInput.md#addrisklistitemsrequestinput).

#### Response

Returned payload: [AddRiskListItemsResult](../models/AddRiskListItemsResult.md#addrisklistitemsresult).

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

Complete body and metadata: `addItemsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->riskLists->addItems('example', [
  'values' => [
    'sdk-example',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/riskLists-addItems.php)

### riskLists.create

Creates an empty list. Rules refer to it by alias, which can't be changed or reused, even after the list is archived. item_type decides how values are validated and compared.

`POST /v1/risk-lists`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateRiskListRequestInput](../models/CreateRiskListRequestInput.md#createrisklistrequestinput) | The request body for: Create a risk list. |

Body model: [CreateRiskListRequestInput](../models/CreateRiskListRequestInput.md#createrisklistrequestinput).

#### riskLists.create body fields

Field definitions: [shared fields](../models/CreateRiskListRequestInput.md#createrisklistrequestinput).

#### Response

Returned payload: [RiskList](../models/RiskList.md#risklist).

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

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

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

### riskLists.deleteItem

Removes a value from a list permanently. Payments see the change from the next attempt.

`DELETE /v1/risk-lists/{risk_list_id}/items/{risk_list_item_id}`

Signature: `deleteItem(string|Model $risk_list_id, string|Model $risk_list_item_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_list_id` | Required | string |  |
| `risk_list_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [RiskListItem](../models/RiskListItem.md#risklistitem).

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

Complete body and metadata: `deleteItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->riskLists->deleteItem('example', 'example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/riskLists-deleteItem.php)

### riskLists.get

Retrieves a risk list. item_count is its current number of values.

`GET /v1/risk-lists/{risk_list_id}`

Signature: `get(string|Model $risk_list_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_list_id` | Required | string |  |

#### Response

Returned payload: [RiskList](../models/RiskList.md#risklist).

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
$result = $client->riskLists->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/riskLists-get.php)

### riskLists.getItem

Retrieves one value on a list.

`GET /v1/risk-lists/{risk_list_id}/items/{risk_list_item_id}`

Signature: `getItem(string|Model $risk_list_id, string|Model $risk_list_item_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_list_id` | Required | string |  |
| `risk_list_item_id` | Required | string |  |

#### Response

Returned payload: [RiskListItem](../models/RiskListItem.md#risklistitem).

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

Complete body and metadata: `getItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->riskLists->getItem('example', 'example', [], new RequestOptions());
```

[Complete runnable example](../examples/riskLists-getItem.php)

### riskLists.list

Lists risk lists, newest first, including Flint's default block lists. Archived lists appear only when status includes archived.

`GET /v1/risk-lists`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `alias` | Optional | string | minLength: `1`. maxLength: `128`. pattern: `^[a-z][a-z0-9_]{0,127}$`. |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"archived"`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [RiskListsListResponse200](../models/RiskListsListResponse200.md#risklistslistresponse200).

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

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->riskLists->list([], new RequestOptions());
```

[Complete runnable example](../examples/riskLists-list.php)

### riskLists.listRiskListItems

Lists a list's values, newest first.

`GET /v1/risk-lists/{risk_list_id}/items`

Signature: `listRiskListItems(string|Model $risk_list_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `value` | Optional | string | minLength: `1`. maxLength: `512`. |
| `risk_list_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [RiskListsListRiskListItemsResponse200](../models/RiskListsListRiskListItemsResponse200.md#risklistslistrisklistitemsresponse200).

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

Complete body and metadata: `listRiskListItemsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listRiskListItemsItems`, `listRiskListItemsPages`, `listRiskListItemsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->riskLists->listRiskListItems('example', [], new RequestOptions());
```

[Complete runnable example](../examples/riskLists-listRiskListItems.php)

### riskLists.remove

Archives a list you created. Fails with 409 RESOURCE_IN_USE while an active rule names it. Archived lists can't be used by rules or edited.

`DELETE /v1/risk-lists/{risk_list_id}`

Signature: `remove(string|Model $risk_list_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_list_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [RiskList](../models/RiskList.md#risklist).

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

$result = $client->riskLists->remove('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/riskLists-remove.php)

### riskLists.update

Renames a list you created. Flint's default lists can't be renamed.

`PATCH /v1/risk-lists/{risk_list_id}`

Signature: `update(string|Model $risk_list_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `risk_list_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateRiskListRequestInput](../models/UpdateRiskListRequestInput.md#updaterisklistrequestinput) | The request body for: Update a risk list. |

Body model: [UpdateRiskListRequestInput](../models/UpdateRiskListRequestInput.md#updaterisklistrequestinput).

#### riskLists.update body fields

Field definitions: [shared fields](../models/UpdateRiskListRequestInput.md#updaterisklistrequestinput).

#### Response

Returned payload: [RiskList](../models/RiskList.md#risklist).

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

$result = $client->riskLists->update('example', [
  'name' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/riskLists-update.php)

