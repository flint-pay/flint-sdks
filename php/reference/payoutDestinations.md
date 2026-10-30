[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# payoutDestinations

### payoutDestinations.delete

Archives the payout destination and returns it with `status: archived`. It stays readable by ID. You can't delete the active default destination. Safe to retry with the same Idempotency-Key.

`DELETE /v1/payout-destinations/{payout_destination_id}`

Signature: `delete(string|Model $payout_destination_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payout_destination_id` | Required | string | Flint payout destination ID. |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [PayoutDestination](../models/PayoutDestination.md#payoutdestination).

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
| 504 | ServerError |

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

$result = $client->payoutDestinations->delete('pdest_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/payoutDestinations-delete.php)

### payoutDestinations.get

Returns one payout destination by ID.

`GET /v1/payout-destinations/{payout_destination_id}`

Signature: `get(string|Model $payout_destination_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payout_destination_id` | Required | string | Flint payout destination ID. |

#### Response

Returned payload: [PayoutDestination](../models/PayoutDestination.md#payoutdestination).

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
$result = $client->payoutDestinations->get('pdest_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/payoutDestinations-get.php)

### payoutDestinations.list

Returns a paginated list of payout destinations available to the authenticated merchant. Default order: created_at descending, then payout_destination_id descending.

`GET /v1/payout-destinations`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `type` | Optional | Array of string or string | Optional payout destination type filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"bank_account"`, `"debit_card"`. Values: `"bank_account"`, `"debit_card"`. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"active"`, `"verification_required"`, `"disabled"`, `"archived"`, `"failed"`. Values: `"pending"`, `"active"`, `"verification_required"`, `"disabled"`, `"archived"`, `"failed"`. |
| `available_payout_methods` | Optional | Array of string or string | Optional available payout method filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"standard"`. Values: `"standard"`. |
| `default_for_currency` | Optional | boolean | Whether to return only destinations that are the default for their currency. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [PayoutDestinationListResponse](../models/PayoutDestinationListResponse.md#payoutdestinationlistresponse).

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
$result = $client->payoutDestinations->list([], new RequestOptions());
```

[Complete runnable example](../examples/payoutDestinations-list.php)

### payoutDestinations.update

Updates mutable metadata and settings for a payout destination. Safe to retry with the same Idempotency-Key.

`PATCH /v1/payout-destinations/{payout_destination_id}`

Signature: `update(string|Model $payout_destination_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payout_destination_id` | Required | string | Flint payout destination ID. |
| `body` | Required | [UpdatePayoutDestinationRequestInput](../models/UpdatePayoutDestinationRequestInput.md#updatepayoutdestinationrequestinput) | The request body for: Update payout destination metadata. |

Body model: [UpdatePayoutDestinationRequestInput](../models/UpdatePayoutDestinationRequestInput.md#updatepayoutdestinationrequestinput).

#### payoutDestinations.update body fields

Field definitions: [shared fields](../models/UpdatePayoutDestinationRequestInput.md#updatepayoutdestinationrequestinput). Models: [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput).

#### Response

Returned payload: [PayoutDestination](../models/PayoutDestination.md#payoutdestination).

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
| 504 | ServerError |

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

$result = $client->payoutDestinations->update('pdest_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'metadata' => (object) [
    'accounting_reference' => 'settlement-001',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/payoutDestinations-update.php)

