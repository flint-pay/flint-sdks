[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# payoutSettings

### payoutSettings.deletePayoutDestination

Disables an eligible payout destination and returns its final state. Safe to retry with the same Idempotency-Key.

`DELETE /v1/payout-settings/destinations/{payout_destination_id}`

Signature: `deletePayoutDestination(string|Model $payout_destination_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payout_destination_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [PayoutDestination](../models/PayoutDestination.md#payoutdestination).

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
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `deletePayoutDestinationWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->payoutSettings->deletePayoutDestination('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/payoutSettings-deletePayoutDestination.php)

### payoutSettings.get

Returns payout settings that control default payout behavior for the authenticated merchant.

`GET /v1/payout-settings`

Signature: `get(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

No request fields.

#### Response

Returned payload: [PayoutSettings](../models/PayoutSettings.md#payoutsettings).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
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
$result = $client->payoutSettings->get([], new RequestOptions());
```

[Complete runnable example](../examples/payoutSettings-get.php)

### payoutSettings.getPayoutDestination

Returns one payout destination by ID.

`GET /v1/payout-settings/destinations/{payout_destination_id}`

Signature: `getPayoutDestination(string|Model $payout_destination_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payout_destination_id` | Required | string |  |

#### Response

Returned payload: [PayoutDestination](../models/PayoutDestination.md#payoutdestination).

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

Complete body and metadata: `getPayoutDestinationWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->payoutSettings->getPayoutDestination('example', [], new RequestOptions());
```

[Complete runnable example](../examples/payoutSettings-getPayoutDestination.php)

### payoutSettings.listPayoutDestinations

Returns a paginated list of payout destinations available to the authenticated merchant.

`GET /v1/payout-settings/destinations`

Signature: `listPayoutDestinations(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `type` | Optional | Array of string | minItems: `1`. Items values: `"bank_account"`, `"debit_card"`. |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"pending"`, `"active"`, `"verification_required"`, `"disabled"`, `"archived"`, `"failed"`. |
| `available_payout_method` | Optional | Array of string | minItems: `1`. Items values: `"standard"`. |
| `default_for_currency` | Optional | boolean |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [PayoutSettingsListPayoutDestinationsResponse200](../models/PayoutSettingsListPayoutDestinationsResponse200.md#payoutsettingslistpayoutdestinationsresponse200).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listPayoutDestinationsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listPayoutDestinationsItems`, `listPayoutDestinationsPages`, `listPayoutDestinationsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->payoutSettings->listPayoutDestinations([], new RequestOptions());
```

[Complete runnable example](../examples/payoutSettings-listPayoutDestinations.php)

### payoutSettings.update

Updates mutable payout settings for the authenticated merchant. Safe to retry with the same Idempotency-Key.

`PATCH /v1/payout-settings`

Signature: `update(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdatePayoutSettingsRequestInput](../models/UpdatePayoutSettingsRequestInput.md#updatepayoutsettingsrequestinput) | The request body for: Update payout settings. |

Body model: [UpdatePayoutSettingsRequestInput](../models/UpdatePayoutSettingsRequestInput.md#updatepayoutsettingsrequestinput).

#### payoutSettings.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_payout_destinations` | Optional | Map of string | Map values: minLength: `1`. |
| `delay_days_override` | Optional | integer or null | Format: `int32`. |
| `interval` | Optional | string | Values: `"manual"`, `"daily"`, `"weekly"`, `"monthly"`. |
| `minimum_balance_by_currency` | Optional | Map of ([MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) or null) |  |
| `monthly_payout_days` | Optional | Array of integer | Items: Format: `int32`. |
| `statement_descriptor` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `weekly_payout_days` | Optional | Array of string | Weekdays on which weekly payouts are sent. Allowed values are monday, tuesday, wednesday, thursday, and friday. Items values: `"monday"`, `"tuesday"`, `"wednesday"`, `"thursday"`, `"friday"`. |

#### Response

Returned payload: [PayoutSettings](../models/PayoutSettings.md#payoutsettings).

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

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->payoutSettings->update([], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/payoutSettings-update.php)

### payoutSettings.updatePayoutDestination

Updates mutable metadata and settings for a payout destination. Safe to retry with the same Idempotency-Key.

`PATCH /v1/payout-settings/destinations/{payout_destination_id}`

Signature: `updatePayoutDestination(string|Model $payout_destination_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payout_destination_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdatePayoutDestinationRequestInput](../models/UpdatePayoutDestinationRequestInput.md#updatepayoutdestinationrequestinput) | The request body for: Update payout destination metadata. |

Body model: [UpdatePayoutDestinationRequestInput](../models/UpdatePayoutDestinationRequestInput.md#updatepayoutdestinationrequestinput).

#### payoutSettings.updatePayoutDestination body fields

Field definitions: [shared fields](../models/UpdatePayoutDestinationRequestInput.md#updatepayoutdestinationrequestinput).

#### Response

Returned payload: [PayoutDestination](../models/PayoutDestination.md#payoutdestination).

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

Complete body and metadata: `updatePayoutDestinationWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->payoutSettings->updatePayoutDestination('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/payoutSettings-updatePayoutDestination.php)

