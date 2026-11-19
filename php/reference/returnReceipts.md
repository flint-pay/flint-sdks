[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returnReceipts

### returnReceipts.create

Record an immutable merchandise receipt observation. Corrections supersede an earlier receipt instead of editing physical history. Read receipts with `GET /v1/return-receipts?return_id=` or expand `return_receipts` on `GET /v1/returns/{return_id}`.

`POST /v1/return-receipts`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateReturnReceiptRequestInput](../models/CreateReturnReceiptRequestInput.md#createreturnreceiptrequestinput) | The request body for: Create return receipt. |

Body model: [CreateReturnReceiptRequestInput](../models/CreateReturnReceiptRequestInput.md#createreturnreceiptrequestinput).

#### returnReceipts.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. |
| `correction_reason_message` | Optional | string | Detail about `correction_reason`. minLength: `1`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `line_items` | Required | Array of [ReturnReceiptLineItemRequestInput](../models/ReturnReceiptLineItemRequestInput.md#returnreceiptlineitemrequestinput) | The lines recorded. minItems: `1`. |
| `received_at` | Required | string | When the event occurred, at most 5 minutes in the future. Format: `date-time`. minLength: `1`. |
| `receiving_location_id` | Required | string | ID of the Location that received the goods. minLength: `1`. |
| `return_id` | Required | string | ID of the Return the goods belong to. minLength: `1`. |
| `shipment_id` | Optional | string | ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. minLength: `1`. |
| `source_system` | Optional | [ReturnSourceSystemRequestInput](../models/ReturnSourceSystemRequestInput.md#returnsourcesystemrequestinput) | System that recorded the observation. `null` when no source system was recorded. The system a return event came from, such as a point of sale or warehouse system, with its own identifier. |
| `supersedes_return_receipt_id` | Optional | string | ID of the receipt this one corrects. minLength: `1`. |

#### Response

Returned payload: [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->returnReceipts->create([
  'line_items' => [
    (object) [
      'quantity' => 1,
      'return_line_item_id' => 'retli_01KEZF7C001NHF6JPD83VD0MRK',
      'type' => 'matched',
    ],
  ],
  'received_at' => '2026-09-08T14:00:00Z',
  'receiving_location_id' => 'loc_01K1P6G4M7H2N8Q9R3S5T6V7WX',
  'return_id' => 'ret_01KEZF7C00VDTZH2NK73DBK2HZ',
  'source_system' => (object) [
    'source_system_type' => 'manual',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returnReceipts-create.php)

### returnReceipts.get

Retrieve one merchandise receipt with its line items and its current or superseded observation status.

`GET /v1/return-receipts/{return_receipt_id}`

Signature: `get(string|Model $return_receipt_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_receipt_id` | Required | string | Flint return receipt id. Must be a valid ID with prefix retrc_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
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
$result = $client->returnReceipts->get('retrc_01KEZF7C0052GWDW41D9AJAVJZ', [], new RequestOptions());
```

[Complete runnable example](../examples/returnReceipts-get.php)

### returnReceipts.list

List merchandise receipts. Omitting return_id lists receipts across every Return for the merchant. Default order: created_at descending, then return_receipt_id descending.

`GET /v1/return-receipts`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns only resources created in your caller namespace, plus resources created before caller scoping under the original key. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. A match can show `idempotency_key: null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. minLength: `1`. maxLength: `255`. pattern: `^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `query` | Optional | string | Search by return receipt ID or external reference ID. |
| `received_after` | Optional | string | Inclusive lower bound on received_at. Format: `date-time`. |
| `received_before` | Optional | string | Exclusive upper bound on received_at. Format: `date-time`. |
| `receiving_location_id` | Optional | string | Filter by receiving location id. pattern: `^loc_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `return_id` | Optional | string | Filter by return id. pattern: `^ret_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `return_line_item_id` | Optional | string | Filter by return line item id. pattern: `^retli_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `shipment_id` | Optional | string | Filter by shipment id. pattern: `^shp_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `source_system_type` | Optional | Array of string or string | Filter by source system type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"other"`, `"flint"`. Values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"other"`, `"flint"`. |
| `status` | Optional | Array of string or string | Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"current"`, `"superseded"`. Values: `"current"`, `"superseded"`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `verification_status` | Optional | Array of string or string | Filter by verification status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"matched"`, `"unverified"`, `"excess"`. Values: `"matched"`, `"unverified"`, `"excess"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [ListReturnReceiptsResponse](../models/ListReturnReceiptsResponse.md#listreturnreceiptsresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
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
$result = $client->returnReceipts->list([], new RequestOptions());
```

[Complete runnable example](../examples/returnReceipts-list.php)

### returnReceipts.verifyLineItem

Establish the Return line identity for receipt quantity that arrived without one. expected_version compares against the receipt version. Unverified quantity counts toward no line and releases no release timing gate until it is verified.

`POST /v1/return-receipts/{return_receipt_id}/line-items/{return_receipt_line_item_id}/verify`

Signature:

```text
verifyLineItem(string|
  Model $return_receipt_id,
 string|
  Model $return_receipt_line_item_id,
 array|
  Model $params,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_receipt_id` | Required | string | Flint return receipt id. Must be a valid ID with prefix retrc_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `return_receipt_line_item_id` | Required | string | Flint return receipt line item id. Must be a valid ID with prefix retrcli_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [VerifyReturnReceiptLineItemRequestInput](../models/VerifyReturnReceiptLineItemRequestInput.md#verifyreturnreceiptlineitemrequestinput) | The request body for: Verify return receipt line item. |

Body model: [VerifyReturnReceiptLineItemRequestInput](../models/VerifyReturnReceiptLineItemRequestInput.md#verifyreturnreceiptlineitemrequestinput).

#### returnReceipts.verifyLineItem body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional version of the return receipt. A stale value returns VERSION_CONFLICT with the receipt ID and its current version. Format: `int64`. minimum: `1`. |
| `return_line_item_id` | Required | string | ID of the Return line the units were matched to. Absent for unverified units. minLength: `1`. |
| `verification_reason` | Required | string | Why the units were verified against the line. Values: `"order_match_confirmed"`, `"sku_match_confirmed"`, `"inspection_confirmed"`, `"merchant_review"`, `"other"`. |
| `verification_reason_message` | Optional | string | Detail about `verification_reason`. minLength: `1`. |

#### Response

Returned payload: [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
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

$result = $client->returnReceipts->verifyLineItem('retrc_01KEZF7C0052GWDW41D9AJAVJZ', 'retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE', [
  'expected_version' => 1,
  'return_line_item_id' => 'retli_01KEZF7C001NHF6JPD83VD0MRK',
  'verification_reason' => 'sku_match_confirmed',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returnReceipts-verifyLineItem.php)

