[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returnInspections

### returnInspections.decideLineItem

Record the accept or reject outcome for inspected quantity. expected_version compares against the inspection version. Accepted quantity becomes dispositionable and satisfies after_inspection release timing.

`POST /v1/return-inspections/{return_inspection_id}/line-items/{return_inspection_line_item_id}/decide`

Signature:

```text
decideLineItem(string|
  Model $return_inspection_id,
 string|
  Model $return_inspection_line_item_id,
 array|
  Model $params,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_inspection_id` | Required | string | Flint return inspection id. |
| `return_inspection_line_item_id` | Required | string | Flint return inspection line item id. |
| `body` | Required | [DecideReturnInspectionLineItemRequestInput](../models/DecideReturnInspectionLineItemRequestInput.md#decidereturninspectionlineitemrequestinput) | The request body for: Decide return inspection line item. |

Body model: [DecideReturnInspectionLineItemRequestInput](../models/DecideReturnInspectionLineItemRequestInput.md#decidereturninspectionlineitemrequestinput).

#### returnInspections.decideLineItem body fields

Field definitions: [shared fields](../models/DecideReturnInspectionLineItemRequestInput.md#decidereturninspectionlineitemrequestinput).

#### Response

Returned payload: [ReturnInspection](../models/ReturnInspection.md#returninspection).

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

$result = $client->returnInspections->decideLineItem('retins_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'retinli_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'acceptance_decision_reason' => 'inspection_result',
  'acceptance_status' => 'accepted',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returnInspections-decideLineItem.php)

### returnInspections.get

Retrieve one inspection with its line items, findings, and current or superseded observation status.

`GET /v1/return-inspections/{return_inspection_id}`

Signature: `get(string|Model $return_inspection_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_inspection_id` | Required | string | Flint return inspection id. |

#### Response

Returned payload: [ReturnInspection](../models/ReturnInspection.md#returninspection).

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
$result = $client->returnInspections->get('retins_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/returnInspections-get.php)

### returnInspections.list

List inspection observations. Omitting return_id lists inspections across every Return for the merchant. Default order: created_at descending, then return_inspection_id descending.

`GET /v1/return-inspections`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `acceptance_status` | Optional | Array of string or string | Filter by acceptance status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"accepted"`, `"rejected"`, `"review_required"`. Values: `"accepted"`, `"rejected"`, `"review_required"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `inspected_after` | Optional | string | Inclusive lower bound on inspected_at. Format: `date-time`. |
| `inspected_before` | Optional | string | Exclusive upper bound on inspected_at. Format: `date-time`. |
| `inspection_location_id` | Optional | string | Filter by inspection location id. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `query` | Optional | string | Search by return inspection ID or external reference ID. |
| `return_id` | Optional | string | Filter by return id. |
| `return_line_item_id` | Optional | string | Filter by return line item id. |
| `return_receipt_id` | Optional | string | Filter by return receipt id. |
| `source_system_type` | Optional | Array of string or string | Filter by source system type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"other"`, `"flint"`. Values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"other"`, `"flint"`. |
| `status` | Optional | Array of string or string | Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"current"`, `"superseded"`. Values: `"current"`, `"superseded"`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |

#### Response

Returned payload: [ListReturnInspectionsResponse](../models/ListReturnInspectionsResponse.md#listreturninspectionsresponse).

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
$result = $client->returnInspections->list([], new RequestOptions());
```

[Complete runnable example](../examples/returnInspections-list.php)

