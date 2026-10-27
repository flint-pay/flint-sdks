[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returnReasons

### returnReasons.create

Create a merchant Return reason buyers can select. Buyer reasons are distinct from inspection findings, decline reasons, and Refund reasons. Flint handles and all existing merchant handles, including archived reasons, are reserved. A conflicting handle returns 409 ALREADY_EXISTS.

`POST /v1/return-reasons`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateReturnReasonRequestInput](../models/CreateReturnReasonRequestInput.md#createreturnreasonrequestinput) | The request body for: Create return reason. |

Body model: [CreateReturnReasonRequestInput](../models/CreateReturnReasonRequestInput.md#createreturnreasonrequestinput).

#### returnReasons.create body fields

Field definitions: [shared fields](../models/CreateReturnReasonRequestInput.md#createreturnreasonrequestinput).

#### Response

Returned payload: [ReturnReason](../models/ReturnReasonInput.md#returnreasoninput).

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

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->returnReasons->create([
  'handle' => 'example',
  'name' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returnReasons-create.php)

### returnReasons.get

Retrieve one Return reason with its handle, category handles, and status.

`GET /v1/return-reasons/{return_reason_id}`

Signature: `get(string|Model $return_reason_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_reason_id` | Required | string |  |

#### Response

Returned payload: [ReturnReason](../models/ReturnReasonInput.md#returnreasoninput).

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
$result = $client->returnReasons->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/returnReasons-get.php)

### returnReasons.list

List Return reasons, including Flint-provided defaults and merchant-defined reasons. Newest first: created_at descending, with return_reason_id descending as the tiebreak. Flint reasons have a created_at of 1970-01-01T00:00:00Z, so they follow your own.

`GET /v1/return-reasons`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `handle` | Optional | string |  |
| `page_size` | Optional | integer | Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `query` | Optional | string |  |
| `source` | Optional | Array of string | minItems: `1`. Items values: `"flint"`, `"merchant"`. |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"archived"`, `"inactive"`. |

#### Response

Returned payload: [ReturnReasonsListResponse200](../models/ReturnReasonsListResponse200.md#returnreasonslistresponse200).

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

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->returnReasons->list([], new RequestOptions());
```

[Complete runnable example](../examples/returnReasons-list.php)

### returnReasons.remove

Retire a Return reason so buyers can no longer select it. Returns that already recorded it keep the frozen reason name. Flint reasons cannot be archived; set status to inactive instead. Archived merchant handles remain reserved.

`DELETE /v1/return-reasons/{return_reason_id}`

Signature: `remove(string|Model $return_reason_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_reason_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [ReturnReason](../models/ReturnReasonInput.md#returnreasoninput).

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

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->returnReasons->remove('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returnReasons-remove.php)

### returnReasons.update

Update a Return reason. Send null to clear description. A present category_handles array replaces the existing set. Set status to active or inactive to control availability. Flint reasons accept only status and expected_version; create your own reason to use different wording. Use DELETE to archive a merchant reason.

`PATCH /v1/return-reasons/{return_reason_id}`

Signature: `update(string|Model $return_reason_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_reason_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateReturnReasonRequestInput](../models/UpdateReturnReasonRequestInput.md#updatereturnreasonrequestinput) | The request body for: Update return reason. |

Body model: [UpdateReturnReasonRequestInput](../models/UpdateReturnReasonRequestInput.md#updatereturnreasonrequestinput).

#### returnReasons.update body fields

Field definitions: [shared fields](../models/UpdateReturnReasonRequestInput.md#updatereturnreasonrequestinput).

#### Response

Returned payload: [ReturnReason](../models/ReturnReasonInput.md#returnreasoninput).

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

$result = $client->returnReasons->update('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returnReasons-update.php)

