[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returns

### returns.cancel

Cancel a Return before any merchandise or value work commits. Cancellation is refused once a receipt, inspection, disposition, or resolution exists.

`POST /v1/returns/{return_id}/cancel`

Signature: `cancel(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CancelReturnRequestInput](../models/CancelReturnResolutionRequestInput.md#cancelreturnresolutionrequestinput) | The request body for: Cancel return. |

Body model: [CancelReturnRequestInput](../models/CancelReturnResolutionRequestInput.md#cancelreturnresolutionrequestinput).

#### returns.cancel body fields

Field definitions: [shared fields](../models/CancelReturnResolutionRequestInput.md#cancelreturnresolutionrequestinput).

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

$result = $client->returns->cancel('ret_01KEZF7C00PG93650ZKVQNGF7X', [
  'expected_version' => 1,
  'reason' => 'buyer_request',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returns-cancel.php)

### returns.cancelLineItem

Cancel approved quantity on a Return line item. Quantity already received, inspected, dispositioned, or reserved by a resolution, including a failed one, cannot be canceled, and the conflict response names what is blocking it. Omit handback_quantity to lower the expected handback only as far as the canceled quantity requires. An explicit value cannot leave more merchandise expected than the remaining approved quantity.

`POST /v1/returns/{return_id}/line-items/{return_line_item_id}/cancel`

Signature: `cancelLineItem(string|Model $return_id, string|Model $return_line_item_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `return_line_item_id` | Required | string | Flint return line item id. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CancelReturnLineItemRequestInput](../models/CancelReturnLineItemRequestInput.md#cancelreturnlineitemrequestinput) | The request body for: Cancel return line item. |

Body model: [CancelReturnLineItemRequestInput](../models/CancelReturnLineItemRequestInput.md#cancelreturnlineitemrequestinput).

#### returns.cancelLineItem body fields

Field definitions: [shared fields](../models/CancelReturnLineItemRequestInput.md#cancelreturnlineitemrequestinput).

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

$result = $client->returns->cancelLineItem('ret_01KEZF7C00PG93650ZKVQNGF7X', 'retli_01KEZF7C00R813VR7ECXS062QG', [
  'expected_version' => 2,
  'handback_quantity' => 1,
  'quantity' => 1,
  'reason' => 'buyer_request',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returns-cancelLineItem.php)

### returns.complete

Complete a Return whose completion_mode is manual. The call fails while completion_blockers is non-empty. Automatic Returns complete themselves when the final blocker clears.

`POST /v1/returns/{return_id}/complete`

Signature: `complete(string|Model $return_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [CompleteReturnRequestInput](../models/CompleteReturnRequestInput.md#completereturnrequestinput) | The request body for: Complete return. |

Body model: [CompleteReturnRequestInput](../models/CompleteReturnRequestInput.md#completereturnrequestinput).

#### returns.complete body fields

Field definitions: [shared fields](../models/CompleteReturnRequestInput.md#completereturnrequestinput).

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

$result = $client->returns->complete('ret_01KEZF7C00PG93650ZKVQNGF7X', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returns-complete.php)

### returns.create

Create a requested Return. Every line needs the return_reason_id of an active reason. With an API key, a Return that no policy matches stays available for merchant review rather than failing creation.

`POST /v1/returns`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateReturnRequestInput](../models/CreateReturnRequestInput.md#createreturnrequestinput) | The request body for: Create return. |

Body model: [CreateReturnRequestInput](../models/CreateReturnRequestInput.md#createreturnrequestinput).

#### returns.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `line_items` | Required | Array of [ReturnLineItemRequestInput](../models/ReturnLineItemRequestInput.md#returnlineitemrequestinput) | The lines to check or return, each naming an order line item. minItems: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `order_id` | Required | string | ID of the Order to return items from. minLength: `1`. |

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

$result = $client->returns->create([
  'line_items' => [
    (object) [
      'buyer_note' => 'I changed my mind.',
      'order_line_item_id' => 'li_01KEZF7C00XM6VK5KNWVC3T907',
      'requested_quantity' => 1,
      'requested_resolution_type' => 'refund',
      'return_reason_id' => 'rrsn_01KEZF7C005274REWXTZRJ4BM0',
    ],
  ],
  'order_id' => 'ord_01KEZF7C00RWKW7JDYTZ5A6ET0',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returns-create.php)

### returns.createAccessLink

Creates the link Flint's email about a Return carries, to put in buyer email or messages you send yourself. It opens the Return and its order in your Flint-hosted customer account without a sign-in. Withdrawing the Return needs the buyer to sign in. It works for 30 days or 10 opens, whichever comes first; after that the buyer signs in to see the Return. The url is a bearer credential. Flint returns it only in this response and in a retry with the same idempotency key, so send it only to the buyer and keep it out of logs. A call with a new key creates another link; earlier links keep working until they expire. When customer_account.mode is merchant_hosted it fails with `ACTION_NOT_ALLOWED` and reason `merchant_hosted_customer_accounts`, and for a Return whose order has no customer, with reason `configuration_required`. Send no request body or an empty object ({}). Idempotency is scoped to the merchant, credential, environment, and this resource's route. A replay returns the original link without extending its lifetime or replenishing its opens. Without an idempotency key, each call creates a new link and has no replay result. If Flint cannot retain a result after minting, contact support with the request ID before sending a new request.

`POST /v1/returns/{return_id}/access-links`

Signature: `createAccessLink(string|Model $return_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | object | maxProperties: `0`. |

Body shape: object.

#### Response

Returned payload: [AccessLink](../models/AccessLink.md#accesslink).

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

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->returns->createAccessLink('ret_01KEZF7C00PG93650ZKVQNGF7X', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returns-createAccessLink.php)

### returns.createDisposition

Record an auditable merchandise disposition from either a receipt line or an inspection line. Read dispositions with `GET /v1/return-dispositions?return_id=` or expand `return_dispositions` on `GET /v1/returns/{return_id}`.

`POST /v1/returns/{return_id}/dispositions`

Signature: `createDisposition(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateReturnDispositionRequestInput](../models/CreateReturnDispositionRequestInput.md#createreturndispositionrequestinput) | The request body for: Create return disposition. |

Body model: [CreateReturnDispositionRequestInput](../models/CreateReturnDispositionRequestInput.md#createreturndispositionrequestinput).

#### returns.createDisposition body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `disposition_type` | Required | string | What happens to the received units. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `inventory_location_id` | Optional | string | ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. minLength: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `reason` | Required | string | Why the disposition was made. Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`. |
| `reason_message` | Optional | string | Optional detail about `reason`, kept with the record. minLength: `1`. |
| `replaces_return_disposition_id` | Optional | string | ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. minLength: `1`. |
| `return_inspection_line_item_id` | Optional | string | ID of the inspection line the disposition covers. Absent when it covers a receipt line. minLength: `1`. |
| `return_receipt_line_item_id` | Optional | string | ID of the receipt line the disposition covers. Absent when it covers an inspection line. minLength: `1`. |

#### returns.createDisposition: CreateReturnDispositionRequestReceiptLine

The `Receipt line` variant of `CreateReturnDispositionRequest`.

Body model: [CreateReturnDispositionRequestReceiptLineInput](../models/CreateReturnDispositionRequestReceiptLineInput.md#createreturndispositionrequestreceiptlineinput).

#### returns.createDisposition: CreateReturnDispositionRequestInspectionLine

The `Inspection line` variant of `CreateReturnDispositionRequest`.

Body model: [CreateReturnDispositionRequestInspectionLineInput](../models/CreateReturnDispositionRequestInspectionLineInput.md#createreturndispositionrequestinspectionlineinput).

#### Response

Returned payload: [ReturnDisposition](../models/ReturnDisposition.md#returndisposition).

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

$result = $client->returns->createDisposition('ret_01KEZF7C00PG93650ZKVQNGF7X', [
  'disposition_type' => 'sellable',
  'inventory_location_id' => 'loc_01K1P6G4M7H2N8Q9R3S5T6V7WX',
  'occurred_at' => '2026-09-08T14:20:00Z',
  'quantity' => 1,
  'reason' => 'return_policy',
  'return_receipt_line_item_id' => 'retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returns-createDisposition.php)

### returns.createInspection

Record an immutable inspection observation. Corrections supersede an earlier inspection instead of editing physical history. Read inspections with `GET /v1/return-inspections?return_id=` or expand `return_inspections` on `GET /v1/returns/{return_id}`.

`POST /v1/returns/{return_id}/inspections`

Signature: `createInspection(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateReturnInspectionRequestInput](../models/CreateReturnInspectionRequestInput.md#createreturninspectionrequestinput) | The request body for: Create return inspection. |

Body model: [CreateReturnInspectionRequestInput](../models/CreateReturnInspectionRequestInput.md#createreturninspectionrequestinput).

#### returns.createInspection body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. |
| `correction_reason_message` | Optional | string | Detail about `correction_reason`. minLength: `1`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `inspected_at` | Required | string | When the event occurred, at most 5 minutes in the future. Format: `date-time`. minLength: `1`. |
| `inspection_location_id` | Required | string | Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. minLength: `1`. |
| `line_items` | Required | Array of [ReturnInspectionLineItemRequestInput](../models/ReturnInspectionLineItemRequestInput.md#returninspectionlineitemrequestinput) | The lines recorded. minItems: `1`. |
| `return_receipt_id` | Required | string | ID of the receipt being inspected. minLength: `1`. |
| `source_system` | Optional | [ReturnSourceSystemRequestInput](../models/ReturnSourceSystemRequestInput.md#returnsourcesystemrequestinput) | System that recorded the observation. `null` when no source system was recorded. The system a return event came from, such as a point of sale or warehouse system, with its own identifier. |
| `supersedes_return_inspection_id` | Optional | string | ID of the inspection this one corrects. minLength: `1`. |

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

$result = $client->returns->createInspection('ret_01KEZF7C00PG93650ZKVQNGF7X', [
  'inspected_at' => '2026-09-08T14:15:00Z',
  'inspection_location_id' => 'loc_01K1P6G4M7H2N8Q9R3S5T6V7WX',
  'line_items' => [
    (object) [
      'acceptance_status' => 'accepted',
      'condition' => 'unopened',
      'finding_codes' => [
        'matches_expected_item',
      ],
      'quantity' => 1,
      'return_receipt_line_item_id' => 'retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE',
    ],
  ],
  'return_receipt_id' => 'retrc_01KEZF7C008V637A0ZWN32RQ7A',
  'source_system' => (object) [
    'source_system_type' => 'manual',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returns-createInspection.php)

### returns.createLineItem

Add a line item to a requested Return. The response is the updated Return, not the new line.

`POST /v1/returns/{return_id}/line-items`

Signature: `createLineItem(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [AddReturnLineItemRequestInput](../models/AddReturnLineItemRequestInput.md#addreturnlineitemrequestinput) | The request body for: Add return line item. |

Body model: [AddReturnLineItemRequestInput](../models/AddReturnLineItemRequestInput.md#addreturnlineitemrequestinput).

#### returns.createLineItem body fields

Field definitions: [shared fields](../models/AddReturnLineItemRequestInput.md#addreturnlineitemrequestinput). Models: [ReturnLineItemRequestInput](../models/ReturnLineItemRequestInput.md#returnlineitemrequestinput).

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

$result = $client->returns->createLineItem('ret_01KEZF7C00PG93650ZKVQNGF7X', [
  'expected_return_version' => 2,
  'line_item' => (object) [
    'buyer_note' => 'I changed my mind.',
    'order_line_item_id' => 'li_01KEZF7C00XM6VK5KNWVC3T907',
    'requested_quantity' => 1,
    'requested_resolution_type' => 'refund',
    'return_reason_id' => 'rrsn_01KEZF7C005274REWXTZRJ4BM0',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returns-createLineItem.php)

### returns.createReceipt

Record an immutable merchandise receipt observation. Corrections supersede an earlier receipt instead of editing physical history. Read receipts with `GET /v1/return-receipts?return_id=` or expand `return_receipts` on `GET /v1/returns/{return_id}`.

`POST /v1/returns/{return_id}/receipts`

Signature: `createReceipt(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateReturnReceiptRequestInput](../models/CreateReturnReceiptRequestInput.md#createreturnreceiptrequestinput) | The request body for: Create return receipt. |

Body model: [CreateReturnReceiptRequestInput](../models/CreateReturnReceiptRequestInput.md#createreturnreceiptrequestinput).

#### returns.createReceipt body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. |
| `correction_reason_message` | Optional | string | Detail about `correction_reason`. minLength: `1`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `line_items` | Required | Array of [ReturnReceiptLineItemRequestInput](../models/ReturnReceiptLineItemRequestInput.md#returnreceiptlineitemrequestinput) | The lines recorded. minItems: `1`. |
| `received_at` | Required | string | When the event occurred, at most 5 minutes in the future. Format: `date-time`. minLength: `1`. |
| `receiving_location_id` | Required | string | ID of the Location that received the goods. minLength: `1`. |
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

$result = $client->returns->createReceipt('ret_01KEZF7C00PG93650ZKVQNGF7X', [
  'line_items' => [
    (object) [
      'quantity' => 1,
      'return_line_item_id' => 'retli_01KEZF7C001NHF6JPD83VD0MRK',
      'type' => 'matched',
    ],
  ],
  'received_at' => '2026-09-08T14:00:00Z',
  'receiving_location_id' => 'loc_01K1P6G4M7H2N8Q9R3S5T6V7WX',
  'source_system' => (object) [
    'source_system_type' => 'manual',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returns-createReceipt.php)

### returns.createResolution

Propose a buyer-value outcome for approved quantity. Creating a resolution reserves line value. Confirmation is what freezes it and starts its effects. Read resolutions with `GET /v1/return-resolutions?return_id=` or expand `return_resolutions` on `GET /v1/returns/{return_id}`.

`POST /v1/returns/{return_id}/resolutions`

Signature: `createResolution(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateReturnResolutionRequestInput](../models/CreateReturnResolutionRequestInput.md#createreturnresolutionrequestinput) | The request body for: Create return resolution. |

Body model: [CreateReturnResolutionRequestInput](../models/CreateReturnResolutionRequestInput.md#createreturnresolutionrequestinput).

#### returns.createResolution body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Optional | Array of [ReturnResolutionAdjustmentRequestInput](../models/ReturnResolutionAdjustmentRequestInput.md#returnresolutionadjustmentrequestinput) | Fees and credits to apply to the resolution, at most 50. |
| `corrects_return_resolution_id` | Optional | string | ID of the settled resolution to correct. Send only with `resolution_type: correction`. minLength: `1`. |
| `expected_return_version` | Optional | integer | Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the Return ID and its current version. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_refund_destination` | Optional | string | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `line_items` | Optional | Array of [ReturnResolutionLineItemRequestInput](../models/ReturnResolutionLineItemRequestInput.md#returnresolutionlineitemrequestinput) | Return lines and quantities to cover, up to 100. Not allowed on a correction. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `pricing_basis` | Optional | string | Required for merchant exchange and replacement requests. original_price preserves the selected units' net paid amounts using refund allocation; current_price uses catalog prices; merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit pricing_basis: replacements use original_price; exchanges use original_price when every replacement matches selected returned merchandise by variant, bundle, or product, otherwise current_price. Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `replacement_line_items` | Optional | Array of [ReturnReplacementLineItemRequestInput](../models/ReturnReplacementLineItemRequestInput.md#returnreplacementlineitemrequestinput) | Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. |
| `resolution_type` | Required | string | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |

#### returns.createResolution with `resolution_type: "exchange" | "no_monetary_action" | "refund" | "replacement" | "store_credit"`

The `exchange` variant of `CreateReturnResolutionRequest`. The `no_monetary_action` variant of `CreateReturnResolutionRequest`. The `refund` variant of `CreateReturnResolutionRequest`. The `replacement` variant of `CreateReturnResolutionRequest`. The `store_credit` variant of `CreateReturnResolutionRequest`.

Body model: [CreateReturnResolutionRequestStandardInput](../models/CreateReturnResolutionRequestStandardInput.md#createreturnresolutionrequeststandardinput).

#### returns.createResolution with `resolution_type: "correction"`

The `correction` variant of `CreateReturnResolutionRequest`.

Body model: [CreateReturnResolutionRequestCorrectionInput](../models/CreateReturnResolutionRequestCorrectionInput.md#createreturnresolutionrequestcorrectioninput).

#### Response

Returned payload: [ReturnResolution](../models/ReturnResolution.md#returnresolution).

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

$result = $client->returns->createResolution('ret_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'line_items' => [
    (object) [
      'quantity' => 1,
      'return_line_item_id' => 'retli_01ARZ3NDEKTSV4RRFFQ69G5FAV',
    ],
  ],
  'resolution_type' => 'refund',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returns-createResolution.php)

### returns.decide

Record one decision for every requested line atomically, then open the Return. To defer a line, decline its quantity or remove it with DELETE /v1/returns/{return_id}/line-items/{return_line_item_id} and open a separate Return for it. Omit completion_mode to use the shared pinned policy mode, or automatic when none sets a mode; disagreeing policies require an explicit completion_mode. completion_blockers reports uncovered approved quantity as resolution_not_selected alongside blockers for unfinished resolutions. Start from each buildable pinned policy proposal or the no-policy defaults, replace every supplied decision field, fill release_timing, and validate the result. When an automatic refund can no longer run through the original payment's provider, the request fails with `ACTION_NOT_ALLOWED`; send automatic_resolution_type as null to resolve manually, or choose no_monetary_action.

`POST /v1/returns/{return_id}/decide`

Signature: `decide(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [DecideReturnRequestInput](../models/DecideReturnRequestInput.md#decidereturnrequestinput) | The request body for: Decide return. |

Body model: [DecideReturnRequestInput](../models/DecideReturnRequestInput.md#decidereturnrequestinput).

#### returns.decide body fields

Field definitions: [shared fields](../models/DecideReturnRequestInput.md#decidereturnrequestinput). Models: [ReturnLineDecisionInput](../models/ReturnLineDecisionInput.md#returnlinedecisioninput).

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

$result = $client->returns->decide('ret_00000000000000000000000000', [
  'line_items' => [
    (object) [
      'approved_quantity' => 1,
      'receiving_location_id' => 'loc_00000000000000000000000000',
      'return_line_item_id' => 'retli_00000000000000000000000000',
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returns-decide.php)

### returns.deleteLineItem

Remove a line item from a requested Return. Send optional expected_version as one query parameter to fence against the parent Return version. The response is the updated Return.

`DELETE /v1/returns/{return_id}/line-items/{return_line_item_id}`

Signature: `deleteLineItem(string|Model $return_id, string|Model $return_line_item_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `return_line_item_id` | Required | string | Flint return line item id. |
| `expected_version` | Optional | integer | Optional version of the parent Return. Supply exactly once. A stale value returns VERSION_CONFLICT with the current Return version. Format: `int64`. minimum: `1`. maximum: `9007199254740991`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->returns->deleteLineItem('ret_01KEZF7C00PG93650ZKVQNGF7X', 'retli_01KEZF7C00R813VR7ECXS062QG', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returns-deleteLineItem.php)

### returns.get

Retrieve a Return with its line items, policy evaluation, financial summary, and completion blockers. Supports expand for the order, customer, receipts, inspections, dispositions, resolutions, shipments, and each line item's reason and fulfillment.

`GET /v1/returns/{return_id}`

Signature: `get(string|Model $return_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: customer, line_items.fulfillment, line_items.return_reason, order, return_dispositions, return_inspections, return_receipts, return_resolutions, shipments. Expanded relationships are returned only when explicitly requested and authorized. Limits: at most 10 unique expand paths per request. To-many expansions are capped per path: at 100 related objects for return_dispositions, return_inspections, return_receipts, return_resolutions, and shipments; at 20 for line_items.fulfillment and line_items.return_reason. Items values: [9 declared values](#returnsget-input-expand--values). Values: [9 declared values](#returnsget-input-expand-values). |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### returns.get input expand [] values

- `"customer"`
- `"line_items.fulfillment"`
- `"line_items.return_reason"`
- `"order"`
- `"return_dispositions"`
- `"return_inspections"`
- `"return_receipts"`
- `"return_resolutions"`
- `"shipments"`

#### returns.get input expand values

- `"customer"`
- `"line_items.fulfillment"`
- `"line_items.return_reason"`
- `"order"`
- `"return_dispositions"`
- `"return_inspections"`
- `"return_receipts"`
- `"return_resolutions"`
- `"shipments"`

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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
$result = $client->returns->get('ret_01KEZF7C00PG93650ZKVQNGF7X', [], new RequestOptions());
```

[Complete runnable example](../examples/returns-get.php)

### returns.getLineItem

Retrieve one Return line item, including its quantity counters and the reason the buyer selected.

`GET /v1/returns/{return_id}/line-items/{return_line_item_id}`

Signature: `getLineItem(string|Model $return_id, string|Model $return_line_item_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `return_line_item_id` | Required | string | Flint return line item id. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [ReturnLineItem](../models/ReturnLineItem.md#returnlineitem).

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
$result = $client->returns->getLineItem('ret_01KEZF7C00PG93650ZKVQNGF7X', 'retli_01KEZF7C00R813VR7ECXS062QG', [], new RequestOptions());
```

[Complete runnable example](../examples/returns-getLineItem.php)

### returns.list

List Returns for the merchant, filtered by order, customer, status, decision, merchandise, resolution, or creation window. Filter by idempotency_key to recover a create whose response never arrived. Set sort_direction to asc for oldest first. Default order: created_at descending, then return_id descending.

`GET /v1/returns`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `customer_id` | Optional | string | Filter by customer id. pattern: `^cus_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `decision_status` | Optional | Array of string or string | Filter by decision status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`. Values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. pattern: `^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$`. |
| `merchandise_status` | Optional | Array of string or string | Filter by merchandise status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [10 declared values](#returnslist-input-merchandise_status--values). Values: [10 declared values](#returnslist-input-merchandise_status-values). |
| `order_id` | Optional | string | Filter by order id. pattern: `^ord_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `query` | Optional | string | Search by return ID, return number, external reference ID, the order's number, or the buyer's email. |
| `receiving_location_id` | Optional | string | Filter by receiving location id. pattern: `^loc_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `resolution_status` | Optional | Array of string or string | Filter by resolution status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"not_selected"`, `"pending"`, `"partially_completed"`, `"requires_action"`, `"completed"`, `"failed"`. Values: `"not_selected"`, `"pending"`, `"partially_completed"`, `"requires_action"`, `"completed"`, `"failed"`. |
| `resolution_type` | Optional | Array of string or string | Filter by resolution type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_number` | Optional | string | Filter by return number. |
| `return_reason_id` | Optional | string | Filter by return reason id. pattern: `^rrsn_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by return_id. Default: `"created_at"`. Values: `"created_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `status` | Optional | Array of string or string | Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `work_type` | Optional | Array of string or string | Filter by work type. Matches only returns that are still requested or open. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"decision"`, `"handoff"`, `"receipt"`, `"inspection"`, `"disposition"`, `"resolution"`, `"exception"`. Values: `"decision"`, `"handoff"`, `"receipt"`, `"inspection"`, `"disposition"`, `"resolution"`, `"exception"`. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: customer, order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Items values: `"customer"`, `"order"`. Values: `"customer"`, `"order"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### returns.list input merchandise_status [] values

- `"not_required"`
- `"awaiting_handoff"`
- `"in_transit"`
- `"partially_received"`
- `"inspection_required"`
- `"partially_inspected"`
- `"inspection_review_required"`
- `"disposition_required"`
- `"resolved"`
- `"exception"`

#### returns.list input merchandise_status values

- `"not_required"`
- `"awaiting_handoff"`
- `"in_transit"`
- `"partially_received"`
- `"inspection_required"`
- `"partially_inspected"`
- `"inspection_review_required"`
- `"disposition_required"`
- `"resolved"`
- `"exception"`

#### Response

Returned payload: [ListReturnsResponse](../models/ListReturnsResponse.md#listreturnsresponse).

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
$result = $client->returns->list([], new RequestOptions());
```

[Complete runnable example](../examples/returns-list.php)

### returns.listActivities

Read the merchant history of a Return for timelines and audit. Read the referenced resources for current state. Activities are newest first by default; use sort_direction=asc for chronological order. Default order: created_at descending, then return_activity_id descending.

`GET /v1/returns/{return_id}/activities`

Signature: `listActivities(string|Model $return_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [ListReturnActivitiesResponse](../models/ListReturnActivitiesResponse.md#listreturnactivitiesresponse).

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

Pagination: `listActivitiesItems`, `listActivitiesPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->returns->listActivities('ret_01KEZF7C00PG93650ZKVQNGF7X', [], new RequestOptions());
```

[Complete runnable example](../examples/returns-listActivities.php)

### returns.listLineItems

List the line items on a Return with their quantity counters, eligibility, frozen display identity, and return value. Default order: created_at descending, then return_line_item_id descending.

`GET /v1/returns/{return_id}/line-items`

Signature: `listLineItems(string|Model $return_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `fulfillment_id` | Optional | string | Filter by fulfillment id. pattern: `^ful_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `merchandise_status` | Optional | Array of string or string | Filter by merchandise status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [10 declared values](#returnslistlineitems-input-merchandise_status--values). Values: [10 declared values](#returnslistlineitems-input-merchandise_status-values). |
| `order_line_item_id` | Optional | string | Filter by order line item id. pattern: `^li_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `resolution_status` | Optional | Array of string or string | Filter by resolution status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"not_selected"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`. Values: `"not_selected"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`. |
| `return_reason_id` | Optional | string | Filter by return reason id. pattern: `^rrsn_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `status` | Optional | Array of string or string | Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### returns.listLineItems input merchandise_status [] values

- `"not_required"`
- `"awaiting_handoff"`
- `"in_transit"`
- `"partially_received"`
- `"inspection_required"`
- `"partially_inspected"`
- `"inspection_review_required"`
- `"disposition_required"`
- `"resolved"`
- `"exception"`

#### returns.listLineItems input merchandise_status values

- `"not_required"`
- `"awaiting_handoff"`
- `"in_transit"`
- `"partially_received"`
- `"inspection_required"`
- `"partially_inspected"`
- `"inspection_review_required"`
- `"disposition_required"`
- `"resolved"`
- `"exception"`

#### Response

Returned payload: [ListReturnLineItemsResponse](../models/ListReturnLineItemsResponse.md#listreturnlineitemsresponse).

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

Pagination: `listLineItemsItems`, `listLineItemsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->returns->listLineItems('ret_01KEZF7C00PG93650ZKVQNGF7X', [], new RequestOptions());
```

[Complete runnable example](../examples/returns-listLineItems.php)

### returns.process

Record decisions, receipts, inspections, dispositions, and resolutions for an existing requested or open Return in one request. On a requested Return, send one decision for every requested line; missing decisions fail with `ACTION_NOT_ALLOWED` and reason `status_not_reached`. Omit completion_mode to use the shared pinned policy mode, or automatic when none sets a mode; disagreeing policies require an explicit completion_mode. On an open Return, omit decision and completion_mode to keep committed values, or send those values unchanged; changed values fail with `ACTION_NOT_ALLOWED` and reason `field_locked`. completion_blockers includes resolution_not_selected for any uncovered approved quantity alongside blockers for unfinished resolutions. A line can be processed here only while it has no receipt, inspection, disposition, or resolution; otherwise ACTION_NOT_ALLOWED has reason unsupported_state and param line_items[i].return_line_item_id. A receipt location that differs from a line's committed location fails with ACTION_NOT_ALLOWED, reason field_locked, and param receipt.receiving_location_id. Missing receipt or receipt.receiving_location_id fails with INVALID_REQUEST and detail REQUIRED. For each line, received_quantity must equal its committed return_required_quantity. Send inspection exactly when the line requires inspection, with acceptance_status accepted. Refunds, payments, replacement orders, and inventory updates complete asynchronously. expected_version is optional and checked only when sent. If the Return has changed since that version, the request fails with VERSION_CONFLICT. When an automatic refund can no longer run through the original payment's provider, the request fails with `ACTION_NOT_ALLOWED`; on a decision, send automatic_resolution_type as null to resolve manually; on a resolution, choose another resolution_type, such as no_monetary_action, and reimburse the buyer another way. Requires an idempotency key and all three scopes: commerce.returns.write, commerce.returns.operations.write, and commerce.returns.resolutions.write.

`POST /v1/returns/{return_id}/process`

Signature: `process(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [ProcessExistingReturnRequestInput](../models/ProcessExistingReturnRequestInput.md#processexistingreturnrequestinput) | The request body for: Process existing return. |

Body model: [ProcessExistingReturnRequestInput](../models/ProcessExistingReturnRequestInput.md#processexistingreturnrequestinput).

#### returns.process body fields

Field definitions: [shared fields](../models/ProcessExistingReturnRequestInput.md#processexistingreturnrequestinput). Models: [ProcessExistingReturnLineItemRequestInput](../models/ProcessExistingReturnLineItemRequestInput.md#processexistingreturnlineitemrequestinput), [ReturnProcessReceiptRequestInput](../models/ReturnProcessReceiptRequestInput.md#returnprocessreceiptrequestinput).

#### Response

Returned payload: [ReturnProcessResult](../models/ReturnProcessResult.md#returnprocessresult).

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

$result = $client->returns->process('ret_01KEZF7C00PG93650ZKVQNGF7X', [
  'line_items' => [
    (object) [
      'return_line_item_id' => 'retli_01KEZF7C00R813VR7ECXS062QG',
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returns-process.php)

### returns.reopen

Reopen a completed Return to record late compensating facts. Reopening sets completion_mode to manual, so complete the Return again with /complete once completion_blockers is empty. Confirmed money movements are never edited backward, so a monetary fix is a new correction resolution.

`POST /v1/returns/{return_id}/reopen`

Signature: `reopen(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [ReopenReturnRequestInput](../models/ReopenReturnRequestInput.md#reopenreturnrequestinput) | The request body for: Reopen return. |

Body model: [ReopenReturnRequestInput](../models/ReopenReturnRequestInput.md#reopenreturnrequestinput).

#### returns.reopen body fields

Field definitions: [shared fields](../models/ReopenReturnRequestInput.md#reopenreturnrequestinput).

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

$result = $client->returns->reopen('ret_01KEZF7C00PG93650ZKVQNGF7X', [
  'expected_version' => 5,
  'reason' => 'additional_merchandise_received',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returns-reopen.php)

### returns.update

Update caller-owned fields on a Return. Only external_reference_id and metadata are writable. Send optional expected_version to reject a stale Return version; every other change goes through a decision, operation, or resolution command.

`PATCH /v1/returns/{return_id}`

Signature: `update(string|Model $return_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdateReturnRequestInput](../models/UpdateReturnRequestInput.md#updatereturnrequestinput) | The request body for: Update return. minProperties: `1`. |

Body model: [UpdateReturnRequestInput](../models/UpdateReturnRequestInput.md#updatereturnrequestinput).

#### returns.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional version of the Return. A stale value returns VERSION_CONFLICT with the current Return version. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

$result = $client->returns->update('ret_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'external_reference_id' => 'return-2026-001',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returns-update.php)

### returns.updateLineItem

Update a requested Return line item. Send null to clear buyer_note or requested_resolution_type. The response is the updated Return.

`PATCH /v1/returns/{return_id}/line-items/{return_line_item_id}`

Signature: `updateLineItem(string|Model $return_id, string|Model $return_line_item_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `return_line_item_id` | Required | string | Flint return line item id. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdateReturnLineItemRequestInput](../models/UpdateReturnLineItemRequestInput.md#updatereturnlineitemrequestinput) | The request body for: Update return line item. |

Body model: [UpdateReturnLineItemRequestInput](../models/UpdateReturnLineItemRequestInput.md#updatereturnlineitemrequestinput).

#### returns.updateLineItem body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_note` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `int64`. minimum: `1`. |
| `requested_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `requested_resolution_type` | Optional | string or null | Send null to clear it. Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `null`. |
| `return_reason_id` | Optional | string | ID of the return reason for this line. The reason must be active. minLength: `1`. |

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

$result = $client->returns->updateLineItem('ret_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'retli_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'buyer_note' => 'The size did not fit',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returns-updateLineItem.php)

### returns.waiveLineItemInspection

Waive the inspection requirement on a Return line item so received quantity can be dispositioned and resolved without an inspection observation. Received quantity on a waived line satisfies after_inspection release timing.

`POST /v1/returns/{return_id}/line-items/{return_line_item_id}/waive-inspection`

Signature: `waiveLineItemInspection(string|Model $return_id, string|Model $return_line_item_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_id` | Required | string | Flint return id. |
| `return_line_item_id` | Required | string | Flint return line item id. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [WaiveReturnLineInspectionRequestInput](../models/WaiveReturnLineInspectionRequestInput.md#waivereturnlineinspectionrequestinput) | The request body for: Waive return line inspection. |

Body model: [WaiveReturnLineInspectionRequestInput](../models/WaiveReturnLineInspectionRequestInput.md#waivereturnlineinspectionrequestinput).

#### returns.waiveLineItemInspection body fields

Field definitions: [shared fields](../models/WaiveReturnLineInspectionRequestInput.md#waivereturnlineinspectionrequestinput).

#### Response

Returned payload: [ReturnResource](../models/ReturnResource.md#returnresource).

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

$result = $client->returns->waiveLineItemInspection('ret_01KEZF7C00PG93650ZKVQNGF7X', 'retli_01KEZF7C00R813VR7ECXS062QG', [
  'expected_version' => 3,
  'reason' => 'trusted_in_store_handoff',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returns-waiveLineItemInspection.php)

