[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returnPolicies

### returnPolicies.create

Create a Return policy with its first revision. The policy ID is stable across revisions, and each published revision is immutable.

`POST /v1/return-policies`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateReturnPolicyRequestInput](../models/CreateReturnPolicyRequestInput.md#createreturnpolicyrequestinput) | The request body for: Create return policy. |

Body model: [CreateReturnPolicyRequestInput](../models/CreateReturnPolicyRequestInput.md#createreturnpolicyrequestinput).

#### returnPolicies.create body fields

Field definitions: [shared fields](../models/CreateReturnPolicyRequestInput.md#createreturnpolicyrequestinput). Models: [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput), [ReturnPolicyRevisionRequestInput](../models/ReturnPolicyRevisionRequestInput.md#returnpolicyrevisionrequestinput).

#### Response

Returned payload: [ReturnPolicy](../models/ReturnPolicy.md#returnpolicy).

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

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->returnPolicies->create([
  'name' => 'example',
  'revision' => (object) [
    'approval_mode' => 'automatic',
    'eligibility_result' => 'ineligible',
    'is_merchandise_return_required' => true,
    'priority' => 1,
    'scope' => (object) [
      'match_type' => 'all',
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returnPolicies-create.php)

### returnPolicies.get

Retrieve one Return policy. Supports expand for current_revision.

`GET /v1/return-policies/{return_policy_id}`

Signature: `get(string|Model $return_policy_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_policy_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"current_revision"`. |

#### Response

Returned payload: [ReturnPolicy](../models/ReturnPolicy.md#returnpolicy).

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
$result = $client->returnPolicies->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/returnPolicies-get.php)

### returnPolicies.getRevision

Retrieve one immutable policy revision, including the exact rules a Return was evaluated against.

`GET /v1/return-policies/{return_policy_id}/revisions/{return_policy_revision_id}`

Signature:

```text
getRevision(string|
  Model $return_policy_id,
 string|
  Model $return_policy_revision_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_policy_id` | Required | string |  |
| `return_policy_revision_id` | Required | string |  |

#### Response

Returned payload: [ReturnPolicyRevision](../models/ReturnPolicyRevision.md#returnpolicyrevision).

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

Complete body and metadata: `getRevisionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->returnPolicies->getRevision('example', 'example', [], new RequestOptions());
```

[Complete runnable example](../examples/returnPolicies-getRevision.php)

### returnPolicies.list

List Return policies with their status. Include the current revision with expand=current_revision. Newest first: created_at descending, with return_policy_id descending as the tiebreak. Default order: created_at descending, then return_policy_id descending.

`GET /v1/return-policies`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `page_size` | Optional | integer | Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `query` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"inactive"`, `"archived"`. |
| `expand` | Optional | Array of string | Items values: `"current_revision"`. |

#### Response

Returned payload: [ReturnPoliciesListResponse200](../models/ReturnPoliciesListResponse200.md#returnpolicieslistresponse200).

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
$result = $client->returnPolicies->list([], new RequestOptions());
```

[Complete runnable example](../examples/returnPolicies-list.php)

### returnPolicies.listRevisions

List every published revision of a Return policy. Newest first: created_at descending, with return_policy_revision_id descending as the tiebreak. Default order: created_at descending, then return_policy_revision_id descending.

`GET /v1/return-policies/{return_policy_id}/revisions`

Signature: `listRevisions(string|Model $return_policy_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_policy_id` | Required | string |  |
| `page_size` | Optional | integer | Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [ReturnPoliciesListRevisionsResponse200](../models/ReturnPoliciesListRevisionsResponse200.md#returnpolicieslistrevisionsresponse200).

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

Complete body and metadata: `listRevisionsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listRevisionsItems`, `listRevisionsPages`, `listRevisionsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->returnPolicies->listRevisions('example', [], new RequestOptions());
```

[Complete runnable example](../examples/returnPolicies-listRevisions.php)

### returnPolicies.publishRevision

Publish a new immutable Return policy revision while preserving the stable policy identity. Send the policy's current version as expected_version to reject a concurrent policy edit or publish.

`POST /v1/return-policies/{return_policy_id}/revisions`

Signature: `publishRevision(string|Model $return_policy_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_policy_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [PublishReturnPolicyRevisionRequestInput](../models/PublishReturnPolicyRevisionRequestInput.md#publishreturnpolicyrevisionrequestinput) | The request body for: Publish return policy revision. |

Body model: [PublishReturnPolicyRevisionRequestInput](../models/PublishReturnPolicyRevisionRequestInput.md#publishreturnpolicyrevisionrequestinput).

#### returnPolicies.publishRevision body fields

Field definitions: [shared fields](../models/PublishReturnPolicyRevisionRequestInput.md#publishreturnpolicyrevisionrequestinput). Models: [ReturnPolicyRevisionRequestInput](../models/ReturnPolicyRevisionRequestInput.md#returnpolicyrevisionrequestinput).

#### Response

Returned payload: [ReturnPolicy](../models/ReturnPolicy.md#returnpolicy).

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

Complete body and metadata: `publishRevisionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->returnPolicies->publishRevision('example', [
  'expected_version' => '1',
  'revision' => (object) [
    'approval_mode' => 'automatic',
    'eligibility_result' => 'ineligible',
    'is_merchandise_return_required' => true,
    'priority' => 1,
    'scope' => (object) [
      'match_type' => 'all',
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returnPolicies-publishRevision.php)

### returnPolicies.remove

Retire a Return policy so it is no longer evaluated and no longer appears as an active choice.

`DELETE /v1/return-policies/{return_policy_id}`

Signature: `remove(string|Model $return_policy_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_policy_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [ReturnPolicy](../models/ReturnPolicy.md#returnpolicy).

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

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->returnPolicies->remove('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returnPolicies-remove.php)

### returnPolicies.update

Update policy identity fields or set status to active or inactive. Rules live on revisions, so changing a window, fee, or scope means publishing a new revision.

`PATCH /v1/return-policies/{return_policy_id}`

Signature: `update(string|Model $return_policy_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_policy_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateReturnPolicyRequestInput](../models/UpdateReturnPolicyRequestInput.md#updatereturnpolicyrequestinput) | The request body for: Update return policy. |

Body model: [UpdateReturnPolicyRequestInput](../models/UpdateReturnPolicyRequestInput.md#updatereturnpolicyrequestinput).

#### returnPolicies.update body fields

Field definitions: [shared fields](../models/UpdateReturnPolicyRequestInput.md#updatereturnpolicyrequestinput). Models: [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput).

#### Response

Returned payload: [ReturnPolicy](../models/ReturnPolicy.md#returnpolicy).

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

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->returnPolicies->update('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returnPolicies-update.php)

