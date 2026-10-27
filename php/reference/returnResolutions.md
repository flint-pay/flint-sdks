[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returnResolutions

### returnResolutions.cancel

Cancel a resolution and release the line value it reserved. A failed resolution can be canceled only when it never created a Refund, PaymentIntent, or Order, or when it is an unpaid exchange. Effects that already succeeded are undone with a compensating correction instead.

`POST /v1/return-resolutions/{return_resolution_id}/cancel`

Signature: `cancel(string|Model $return_resolution_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CancelReturnResolutionRequestInput](../models/CancelReturnRequestInput.md#cancelreturnrequestinput) | The request body for: Cancel return resolution. |

Body model: [CancelReturnResolutionRequestInput](../models/CancelReturnRequestInput.md#cancelreturnrequestinput).

#### returnResolutions.cancel body fields

Field definitions: [shared fields](../models/CancelReturnRequestInput.md#cancelreturnrequestinput).

#### Response

Returned payload: [ReturnResolution](../models/ReturnResolution.md#returnresolution).

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

Complete body and metadata: `cancelWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->returnResolutions->cancel('example', [
  'reason' => 'buyer_request',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returnResolutions-cancel.php)

### returnResolutions.confirm

Confirm a proposed resolution and freeze its economic facts. Execution can remain pending behind line-qualified execution blockers.

`POST /v1/return-resolutions/{return_resolution_id}/confirm`

Signature: `confirm(string|Model $return_resolution_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ConfirmReturnResolutionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput) | The request body for: Confirm return resolution. |

Body model: [ConfirmReturnResolutionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput).

#### returnResolutions.confirm body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

#### Response

Returned payload: [ReturnResolution](../models/ReturnResolution.md#returnresolution).

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

Complete body and metadata: `confirmWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->returnResolutions->confirm('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returnResolutions-confirm.php)

### returnResolutions.get

Retrieve one resolution with its amounts, adjustments, execution blockers, and linked refunds, payments, and replacement order. Supports expand for those links.

`GET /v1/return-resolutions/{return_resolution_id}`

Signature: `get(string|Model $return_resolution_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"payment_intents"`, `"refunds"`, `"replacement_order"`. |

#### Response

Returned payload: [ReturnResolution](../models/ReturnResolution.md#returnresolution).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->returnResolutions->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/returnResolutions-get.php)

### returnResolutions.getOrCreateCheckoutSession

Create or reuse a hosted or embedded checkout session for the buyer's balance on a replacement order linked to this return resolution. Returns 200 when reusing an existing session and 201 when creating one. Omit surface to use hosted. The same surface reuses the open session; changing surface replaces an idle session and is refused while a payment is in progress. Use redirects to set where the buyer goes after paying or canceling. The return_url field is an alias for redirects.success_url on hosted checkout or payment_return_url on embedded checkout and must be an address of the merchant's customer account. A reused session takes a new success destination only until a payment starts, then keeps its existing destination.

`POST /v1/return-resolutions/{return_resolution_id}/checkout-session`

Signature: `getOrCreateCheckoutSession(string|Model $return_resolution_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](me.md#request-fields-14). Models: [GetOrCreateReturnResolutionCheckoutSessionRequestInput](../models/GetOrCreateReturnResolutionCheckoutSessionRequestInput.md#getorcreatereturnresolutioncheckoutsessionrequestinput).

#### Response

Returned payload: [CheckoutSessionWithSecret](../models/CheckoutSessionWithSecret.md#checkoutsessionwithsecret).

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
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getOrCreateCheckoutSessionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->returnResolutions->getOrCreateCheckoutSession('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returnResolutions-getOrCreateCheckoutSession.php)

### returnResolutions.list

List resolutions. Filter by corrects_return_resolution_id to retrieve the correction history for a resolution that already settled. Newest first: created_at descending, with return_resolution_id descending as the tiebreak.

`GET /v1/return-resolutions`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_required_by` | Optional | Array of string | minItems: `1`. Items values: `"buyer"`, `"merchant"`, `"integration"`. |
| `corrects_return_resolution_id` | Optional | string |  |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `page_size` | Optional | integer | Format: `int32`. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `query` | Optional | string |  |
| `resolution_type` | Optional | Array of string | minItems: `1`. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Optional | string |  |
| `return_line_item_id` | Optional | string |  |
| `return_policy_revision_id` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"proposed"`, `"pending"`, `"requires_action"`, `"fulfilled"`, `"failed"`, `"canceled"`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `expand` | Optional | Array of string | Items values: `"replacement_order"`. |

#### Response

Returned payload: [ReturnResolutionsListResponse200](../models/ReturnResolutionsListResponse200.md#returnresolutionslistresponse200).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->returnResolutions->list([], new RequestOptions());
```

[Complete runnable example](../examples/returnResolutions-list.php)

### returnResolutions.release

Release a confirmed resolution that is waiting on a manual release. Available only while action_reason is manual_release.

`POST /v1/return-resolutions/{return_resolution_id}/release`

Signature: `release(string|Model $return_resolution_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ReleaseReturnResolutionRequestInput](../models/ReleaseReturnResolutionRequestInput.md#releasereturnresolutionrequestinput) | The request body for: Release return resolution. |

Body model: [ReleaseReturnResolutionRequestInput](../models/ReleaseReturnResolutionRequestInput.md#releasereturnresolutionrequestinput).

#### returnResolutions.release body fields

Field definitions: [shared fields](../models/ReleaseReturnResolutionRequestInput.md#releasereturnresolutionrequestinput).

#### Response

Returned payload: [ReturnResolution](../models/ReturnResolution.md#returnresolution).

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

Complete body and metadata: `releaseWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->returnResolutions->release('example', [
  'reason' => 'merchant_approved',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returnResolutions-release.php)

### returnResolutions.retry

Retry a failed resolution. For gift_card_refund_destination_required, send gift_card_refund_destination: new_gift_card to persist the destination before starting the new attempt. The override is accepted for refund, exchange, and corrections of resolutions other than store_credit. A new attempt starts, historical payment and refund IDs stay on the resolution, and a late event from an earlier attempt cannot settle the new attempt. Fails with ACTION_NOT_ALLOWED, with the line's current_status, when a Return line the resolution covers is no longer approved, such as after it was canceled, and with RETURN_VALUE_EXCEEDED when an approved line no longer has the quantity the resolution covers. Retry is available only when failure_code allows it, and supported_actions includes retry in that case. A failure that retry cannot fix returns 409 ACTION_NOT_ALLOWED; cancel the resolution instead.

`POST /v1/return-resolutions/{return_resolution_id}/retry`

Signature: `retry(string|Model $return_resolution_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [RetryReturnResolutionRequestInput](../models/RetryReturnResolutionRequestInput.md#retryreturnresolutionrequestinput) | The request body for: Retry return resolution. |

Body model: [RetryReturnResolutionRequestInput](../models/RetryReturnResolutionRequestInput.md#retryreturnresolutionrequestinput).

#### returnResolutions.retry body fields

Field definitions: [shared fields](../models/RetryReturnResolutionRequestInput.md#retryreturnresolutionrequestinput).

#### Response

Returned payload: [ReturnResolution](../models/ReturnResolution.md#returnresolution).

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

Complete body and metadata: `retryWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->returnResolutions->retry('example', [
  'reason' => 'dependency_recovered',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returnResolutions-retry.php)

### returnResolutions.update

Update a proposed resolution before confirmation. A present line_items, replacement_line_items, or adjustments array replaces that collection and requires expected_version.

`PATCH /v1/return-resolutions/{return_resolution_id}`

Signature: `update(string|Model $return_resolution_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_resolution_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateReturnResolutionRequestInput](../models/UpdateReturnResolutionRequestInput.md#updatereturnresolutionrequestinput) | The request body for: Update return resolution. |

Body model: [UpdateReturnResolutionRequestInput](../models/UpdateReturnResolutionRequestInput.md#updatereturnresolutionrequestinput).

#### returnResolutions.update body fields

Field definitions: [shared fields](../models/UpdateReturnResolutionRequestInput.md#updatereturnresolutionrequestinput). Models: [UpdateReturnResolutionAdjustmentRequestInput](../models/UpdateReturnResolutionAdjustmentRequestInput.md#updatereturnresolutionadjustmentrequestinput), [UpdateReturnResolutionLineItemRequestInput](../models/UpdateReturnResolutionLineItemRequestInput.md#updatereturnresolutionlineitemrequestinput), [UpdateReturnReplacementLineItemRequestInput](../models/UpdateReturnReplacementLineItemRequestInput.md#updatereturnreplacementlineitemrequestinput).

#### Response

Returned payload: [ReturnResolution](../models/ReturnResolution.md#returnresolution).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->returnResolutions->update('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/returnResolutions-update.php)

