[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# licenseKeyActivations

### licenseKeyActivations.create

Registers a device for a key in one of the listed products. Returns 201 for a new activation or 200 when the fingerprint already has an active activation. Returns 409 when the key is inactive or has no slots. You can omit Authorization or send an API key with commerce.license_keys.write.

`POST /v1/license-key-activations`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateLicenseKeyActivationRequestInput](../models/CreateLicenseKeyActivationRequestInput.md#createlicensekeyactivationrequestinput) | The request body for: Activate a license key. |

Body model: [CreateLicenseKeyActivationRequestInput](../models/CreateLicenseKeyActivationRequestInput.md#createlicensekeyactivationrequestinput).

#### licenseKeyActivations.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fingerprint` | Optional | string | An identifier for this installation. An active installation with the same fingerprint is reused. minLength: `1`. maxLength: `255`. |
| `key` | Required | string | The full license key. Generated keys match on the last 25 normalized characters. Pool keys match exactly after surrounding whitespace is trimmed. minLength: `1`. |
| `name` | Required | string | Device name shown to the buyer and merchant. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `255`. |
| `product_ids` | Required | Array of string | The products this app accepts. Every ID must belong to the same merchant and environment. Without an API key, the first product sets the merchant and environment. minItems: `1`. maxItems: `20`. uniqueItems: `true`. Items: minLength: `1`. pattern: `^prod_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. |

#### Response

Returned payload: [LicenseKeyActivation](../models/LicenseKeyActivationCreatedMerchantEventDataObject.md#licensekeyactivationcreatedmerchanteventdataobject).

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

$result = $client->licenseKeyActivations->create([
  'key' => 'EXAMPLE-LICENSE-KEY-DO-NOT-USE',
  'name' => 'Example desktop',
  'product_ids' => [
    'prod_01KEZF7C00BVSHCNWVH528HB66',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/licenseKeyActivations-create.php)

### licenseKeyActivations.get

Returns the device and its activation status.

`GET /v1/license-key-activations/{license_key_activation_id}`

Signature: `get(string|Model $license_key_activation_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_activation_id` | Required | string | The activation ID. Must be a valid ID with prefix lka_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [LicenseKeyActivation](../models/LicenseKeyActivationCreatedMerchantEventDataObject.md#licensekeyactivationcreatedmerchanteventdataobject).

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
$result = $client->licenseKeyActivations->get('lka_01KEZF7C00NZEZVCZW3SRDMHTZ', [], new RequestOptions());
```

[Complete runnable example](../examples/licenseKeyActivations-get.php)

### licenseKeyActivations.list

Lists activations for one issued license key, newest first by created_at and then by license_key_activation_id, both descending. Default order: created_at descending, then license_key_activation_id descending.

`GET /v1/license-key-activations`

Signature: `list(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `license_key_id` | Required | string | The license key whose activations to list. pattern: `^lk_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. |
| `status` | Optional | Array of string or string | Filter by one or more activation statuses. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"released"`. Values: `"active"`, `"released"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [LicenseKeyActivationListResponse](../models/LicenseKeyActivationListResponse.md#licensekeyactivationlistresponse).

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
$result = $client->licenseKeyActivations->list([
  'license_key_id' => 'lk_01KEZF7C000QD7VJ83G43V0NSN',
], new RequestOptions());
```

[Complete runnable example](../examples/licenseKeyActivations-list.php)

### licenseKeyActivations.release

Releases an activation and frees its slot. Send a merchant API key with commerce.license_keys.write, or send both product_ids and the activation's own key. If a merchant sends a key, it must belong to this activation. Returns 401 when neither form of authority is present, 404 when the activation is unavailable to the caller, and 409 when it is already released.

`POST /v1/license-key-activations/{license_key_activation_id}/release`

Signature: `release(string|Model $license_key_activation_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_activation_id` | Required | string | The activation to release. Must be a valid ID with prefix lka_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `body` | Optional | [ReleaseLicenseKeyActivationRequestInput](../models/ReleaseLicenseKeyActivationRequestInput.md#releaselicensekeyactivationrequestinput) | The request body for: Release a license key activation. |

Body model: [ReleaseLicenseKeyActivationRequestInput](../models/ReleaseLicenseKeyActivationRequestInput.md#releaselicensekeyactivationrequestinput).

#### licenseKeyActivations.release body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `key` | Optional | string | The activation's full license key. Without a merchant credential, send it with product_ids. minLength: `1`. |
| `product_ids` | Optional | Array of string | The products this app accepts. Without a merchant credential, send this array with key to prove you hold the license. minItems: `1`. maxItems: `20`. uniqueItems: `true`. Items: minLength: `1`. pattern: `^prod_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. |

#### Response

Returned payload: [LicenseKeyActivation](../models/LicenseKeyActivationCreatedMerchantEventDataObject.md#licensekeyactivationcreatedmerchanteventdataobject).

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

$result = $client->licenseKeyActivations->release('lka_01KEZF7C00NZEZVCZW3SRDMHTZ', [
  'key' => 'EXAMPLE-LICENSE-KEY-DO-NOT-USE',
  'product_ids' => [
    'prod_01KEZF7C00BVSHCNWVH528HB66',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/licenseKeyActivations-release.php)

