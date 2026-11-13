[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# taxCalculationCallbacks

### taxCalculationCallbacks.checkConnection

Tax calculation callback configuration is scoped to the selected environment. Partner installation tokens are unsupported. Sends a signed connection_check request. A 2xx response succeeds unless it sets a Content-Type other than application/json or its body is larger than maximum_response_bytes. Runs for inactive and active callbacks without changing the circuit breaker.

`POST /v1/tax-calculation-callbacks/{tax_calculation_callback_id}/check-connection`

Signature: `checkConnection(string|Model $tax_calculation_callback_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `tax_calculation_callback_id` | Required | string | Tax calculation callback ID. |

#### Response

Returned payload: [TaxCalculationCallbackConnectionCheck](../models/TaxCalculationCallbackConnectionCheck.md#taxcalculationcallbackconnectioncheck).

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

$result = $client->taxCalculationCallbacks->checkConnection('tcb_01KEZF7C00N7SER74Y2E6D1ZGT', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/taxCalculationCallbacks-checkConnection.php)

### taxCalculationCallbacks.create

Tax calculation callback configuration is scoped to the selected environment. Partner installation tokens are unsupported. Creates an inactive callback and immutable revision 1. signing_methods defaults to ["jwt"]. Verify the JWT with Flint's public JWKS, aud equal to tax_calculation_callback_id, and body_sha256 over the exact request bytes. HMAC secrets are returned only once when hmac is selected.

`POST /v1/tax-calculation-callbacks`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateTaxCalculationCallbackRequestInput](../models/CreateTaxCalculationCallbackRequestInput.md#createtaxcalculationcallbackrequestinput) | The request body for: Create a tax calculation callback. |

Body model: [CreateTaxCalculationCallbackRequestInput](../models/CreateTaxCalculationCallbackRequestInput.md#createtaxcalculationcallbackrequestinput).

#### taxCalculationCallbacks.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [TaxCalculationCallbackConfigurationRequestInput](../models/TaxCalculationCallbackConfigurationInput.md#taxcalculationcallbackconfigurationinput) | The endpoint URL and request limits. Only `url` is required. Settings for a tax calculation callback: the endpoint `url` Flint calls, request timeout, request and response size limits, and redirect policy. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `name` | Required | string | Your label for the callback, from 1 to 255 characters. minLength: `1`. maxLength: `255`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethodInput.md#webhooksigningmethodinput) | How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. Defaults to `jwt`. minItems: `1`. uniqueItems: `true`. Default: `["jwt"]`. Items values: `"jwt"`, `"hmac"`. |

#### Response

Returned payload: [TaxCalculationCallback](../models/TaxCalculationCallback.md#taxcalculationcallback).

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

$result = $client->taxCalculationCallbacks->create([
  'configuration' => (object) [
    'url' => 'https://example.com/tax',
  ],
  'name' => 'Merchant tax engine',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/taxCalculationCallbacks-create.php)

### taxCalculationCallbacks.createTestDelivery

Tax calculation callback configuration is scoped to the selected environment. Partner installation tokens are unsupported. Sends a signed synthetic tax_calculation request with test true and empty line_items and charges. The response must echo tax_calculation_evaluation_id and return empty line_item_calculations and charge_calculations. Runs for inactive and active callbacks without changing the circuit breaker.

`POST /v1/tax-calculation-callbacks/{tax_calculation_callback_id}/test-deliveries`

Signature: `createTestDelivery(string|Model $tax_calculation_callback_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `tax_calculation_callback_id` | Required | string | Tax calculation callback ID. |

#### Response

Returned payload: [TaxCalculationCallbackTestDelivery](../models/TaxCalculationCallbackTestDelivery.md#taxcalculationcallbacktestdelivery).

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

$result = $client->taxCalculationCallbacks->createTestDelivery('tcb_01KEZF7C00N7SER74Y2E6D1ZGT', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/taxCalculationCallbacks-createTestDelivery.php)

### taxCalculationCallbacks.delete

Tax calculation callback configuration is scoped to the selected environment. Partner installation tokens are unsupported. Archives the callback. Select another callback or clear tax.calculation_callback_id before archiving the selected callback.

`DELETE /v1/tax-calculation-callbacks/{tax_calculation_callback_id}`

Signature: `delete(string|Model $tax_calculation_callback_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `tax_calculation_callback_id` | Required | string | Tax calculation callback ID. |
| `expected_version` | Optional | integer | Current callback version. Format: `uint64`. minimum: `1`. maximum: `9007199254740991`. |

#### Response

Returned payload: [TaxCalculationCallback](../models/TaxCalculationCallback.md#taxcalculationcallback).

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

$result = $client->taxCalculationCallbacks->delete('tcb_01KEZF7C00N7SER74Y2E6D1ZGT', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/taxCalculationCallbacks-delete.php)

### taxCalculationCallbacks.get

Tax calculation callback configuration is scoped to the selected environment. Partner installation tokens are unsupported.

`GET /v1/tax-calculation-callbacks/{tax_calculation_callback_id}`

Signature: `get(string|Model $tax_calculation_callback_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `tax_calculation_callback_id` | Required | string | Tax calculation callback ID. |

#### Response

Returned payload: [TaxCalculationCallback](../models/TaxCalculationCallback.md#taxcalculationcallback).

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
$result = $client->taxCalculationCallbacks->get('tcb_01KEZF7C00N7SER74Y2E6D1ZGT', [], new RequestOptions());
```

[Complete runnable example](../examples/taxCalculationCallbacks-get.php)

### taxCalculationCallbacks.list

Tax calculation callback configuration is scoped to the selected environment. Partner installation tokens are unsupported. Default order: created_at descending, then tax_calculation_callback_id descending.

`GET /v1/tax-calculation-callbacks`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `query` | Optional | string | Search tax_calculation_callback_id, name, and external_reference_id. maxLength: `255`. |
| `external_reference_id` | Optional | string | Match the external reference ID. minLength: `1`. maxLength: `255`. |
| `status` | Optional | Array of string or string | Filter by status. Omitted, the list leaves out archived rows; name archived to include them. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |

#### Response

Returned payload: [TaxCalculationCallbackListResponse](../models/TaxCalculationCallbackListResponse.md#taxcalculationcallbacklistresponse).

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
$result = $client->taxCalculationCallbacks->list([], new RequestOptions());
```

[Complete runnable example](../examples/taxCalculationCallbacks-list.php)

### taxCalculationCallbacks.rotateSecret

Tax calculation callback configuration is scoped to the selected environment. Partner installation tokens are unsupported. Issues an HMAC secret and adds hmac when needed. Returns the new secret once. The previous secret remains valid during the same overlap as delivery callbacks.

`POST /v1/tax-calculation-callbacks/{tax_calculation_callback_id}/rotate-secret`

Signature: `rotateSecret(string|Model $tax_calculation_callback_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `tax_calculation_callback_id` | Required | string | Tax calculation callback ID. |

#### Response

Returned payload: [TaxCalculationCallbackSigningKey](../models/TaxCalculationCallbackSigningKey.md#taxcalculationcallbacksigningkey).

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

$result = $client->taxCalculationCallbacks->rotateSecret('tcb_01KEZF7C00N7SER74Y2E6D1ZGT', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/taxCalculationCallbacks-rotateSecret.php)

### taxCalculationCallbacks.update

Tax calculation callback configuration is scoped to the selected environment. Partner installation tokens are unsupported. Configuration and signing-method changes require expected_version and publish an immutable revision. Configuration fields are patched individually. Change status on its own. A callback selected by tax.calculation_callback_id cannot be deactivated.

`PATCH /v1/tax-calculation-callbacks/{tax_calculation_callback_id}`

Signature: `update(string|Model $tax_calculation_callback_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `tax_calculation_callback_id` | Required | string | Tax calculation callback ID. |
| `body` | Required | [UpdateTaxCalculationCallbackRequestInput](../models/UpdateTaxCalculationCallbackRequestInput.md#updatetaxcalculationcallbackrequestinput) | The request body for: Update a tax calculation callback. minProperties: `1`. |

Body model: [UpdateTaxCalculationCallbackRequestInput](../models/UpdateTaxCalculationCallbackRequestInput.md#updatetaxcalculationcallbackrequestinput).

#### taxCalculationCallbacks.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [TaxCalculationCallbackConfigurationPatchRequestInput](../models/TaxCalculationCallbackConfigurationPatchRequestInput.md#taxcalculationcallbackconfigurationpatchrequestinput) | Changes to the callback's configuration. Requires expected_version. Changes to a tax calculation callback's configuration. Only the keys you send change; keys you leave out keep their current values. Null restores an optional key's default. Requires expected_version. minProperties: `1`. |
| `expected_version` | Optional | integer | The `version` you last read. A stale value is refused with a version conflict. Required with `configuration` and `signing_methods`. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Optional | string | New label for the callback. minLength: `1`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethodInput.md#webhooksigningmethodinput) | How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. Replaces the whole set. Requires expected_version. Removing hmac deletes the current and previous secrets. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Activates or deactivates the callback. Send it alone, with at most `expected_version`. - `active`: Makes the callback selectable in `tax.calculation_callback_id`. - `inactive`: Stops the callback from being selected. Refused while your settings select it. Values: `"active"`, `"inactive"`. |

#### taxCalculationCallbacks.update: variant 1



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [TaxCalculationCallbackConfigurationPatchRequestInput](../models/TaxCalculationCallbackConfigurationPatchRequestInput.md#taxcalculationcallbackconfigurationpatchrequestinput) | Changes to the callback's configuration. Requires expected_version. Changes to a tax calculation callback's configuration. Only the keys you send change; keys you leave out keep their current values. Null restores an optional key's default. Requires expected_version. minProperties: `1`. |
| `expected_version` | Optional | integer | The `version` you last read. A stale value is refused with a version conflict. Required with `configuration` and `signing_methods`. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Required | string | New label for the callback. minLength: `1`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethodInput.md#webhooksigningmethodinput) | How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. Replaces the whole set. Requires expected_version. Removing hmac deletes the current and previous secrets. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Activates or deactivates the callback. Send it alone, with at most `expected_version`. - `active`: Makes the callback selectable in `tax.calculation_callback_id`. - `inactive`: Stops the callback from being selected. Refused while your settings select it. Values: `"active"`, `"inactive"`. |

#### taxCalculationCallbacks.update: variant 2



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [TaxCalculationCallbackConfigurationPatchRequestInput](../models/TaxCalculationCallbackConfigurationPatchRequestInput.md#taxcalculationcallbackconfigurationpatchrequestinput) | Changes to the callback's configuration. Requires expected_version. Changes to a tax calculation callback's configuration. Only the keys you send change; keys you leave out keep their current values. Null restores an optional key's default. Requires expected_version. minProperties: `1`. |
| `expected_version` | Optional | integer | The `version` you last read. A stale value is refused with a version conflict. Required with `configuration` and `signing_methods`. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Optional | string | New label for the callback. minLength: `1`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethodInput.md#webhooksigningmethodinput) | How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. Replaces the whole set. Requires expected_version. Removing hmac deletes the current and previous secrets. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Activates or deactivates the callback. Send it alone, with at most `expected_version`. - `active`: Makes the callback selectable in `tax.calculation_callback_id`. - `inactive`: Stops the callback from being selected. Refused while your settings select it. Values: `"active"`, `"inactive"`. |

#### taxCalculationCallbacks.update: variant 3



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [TaxCalculationCallbackConfigurationPatchRequestInput](../models/TaxCalculationCallbackConfigurationPatchRequestInput.md#taxcalculationcallbackconfigurationpatchrequestinput) | Changes to the callback's configuration. Requires expected_version. Changes to a tax calculation callback's configuration. Only the keys you send change; keys you leave out keep their current values. Null restores an optional key's default. Requires expected_version. minProperties: `1`. |
| `expected_version` | Optional | integer | The `version` you last read. A stale value is refused with a version conflict. Required with `configuration` and `signing_methods`. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Optional | string | New label for the callback. minLength: `1`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethodInput.md#webhooksigningmethodinput) | How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. Replaces the whole set. Requires expected_version. Removing hmac deletes the current and previous secrets. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Activates or deactivates the callback. Send it alone, with at most `expected_version`. - `active`: Makes the callback selectable in `tax.calculation_callback_id`. - `inactive`: Stops the callback from being selected. Refused while your settings select it. Values: `"active"`, `"inactive"`. |

#### taxCalculationCallbacks.update: variant 4



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [TaxCalculationCallbackConfigurationPatchRequestInput](../models/TaxCalculationCallbackConfigurationPatchRequestInput.md#taxcalculationcallbackconfigurationpatchrequestinput) | Changes to the callback's configuration. Requires expected_version. Changes to a tax calculation callback's configuration. Only the keys you send change; keys you leave out keep their current values. Null restores an optional key's default. Requires expected_version. minProperties: `1`. |
| `expected_version` | Optional | integer | The `version` you last read. A stale value is refused with a version conflict. Required with `configuration` and `signing_methods`. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Optional | string | New label for the callback. minLength: `1`. |
| `signing_methods` | Required | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethodInput.md#webhooksigningmethodinput) | How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. Replaces the whole set. Requires expected_version. Removing hmac deletes the current and previous secrets. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Activates or deactivates the callback. Send it alone, with at most `expected_version`. - `active`: Makes the callback selectable in `tax.calculation_callback_id`. - `inactive`: Stops the callback from being selected. Refused while your settings select it. Values: `"active"`, `"inactive"`. |

#### taxCalculationCallbacks.update: variant 5



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [TaxCalculationCallbackConfigurationPatchRequestInput](../models/TaxCalculationCallbackConfigurationPatchRequestInput.md#taxcalculationcallbackconfigurationpatchrequestinput) | Changes to the callback's configuration. Requires expected_version. Changes to a tax calculation callback's configuration. Only the keys you send change; keys you leave out keep their current values. Null restores an optional key's default. Requires expected_version. minProperties: `1`. |
| `expected_version` | Optional | integer | The `version` you last read. A stale value is refused with a version conflict. Required with `configuration` and `signing_methods`. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Optional | string | New label for the callback. minLength: `1`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethodInput.md#webhooksigningmethodinput) | How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. Replaces the whole set. Requires expected_version. Removing hmac deletes the current and previous secrets. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Required | string | Activates or deactivates the callback. Send it alone, with at most `expected_version`. - `active`: Makes the callback selectable in `tax.calculation_callback_id`. - `inactive`: Stops the callback from being selected. Refused while your settings select it. Values: `"active"`, `"inactive"`. |

#### Response

Returned payload: [TaxCalculationCallback](../models/TaxCalculationCallback.md#taxcalculationcallback).

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

$result = $client->taxCalculationCallbacks->update('tcb_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'name' => 'Tax engine',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/taxCalculationCallbacks-update.php)

