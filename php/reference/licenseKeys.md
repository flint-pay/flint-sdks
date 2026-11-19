[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# licenseKeys

### licenseKeys.disable

Adds a merchant restriction, including when another cause already disables the key. A second merchant restriction returns 409 ACTION_NOT_ALLOWED with reason already_applied.

`POST /v1/license-keys/{license_key_id}/disable`

Signature: `disable(string|Model $license_key_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_id` | Required | string | The license key ID. Must be a valid ID with prefix lk_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `body` | Optional | [DisableLicenseKeyRequestInput](../models/DisableLicenseKeyRequestInput.md#disablelicensekeyrequestinput) | The request body for: Disable a license key. |

Body model: [DisableLicenseKeyRequestInput](../models/DisableLicenseKeyRequestInput.md#disablelicensekeyrequestinput).

#### licenseKeys.disable body fields

Field definitions: [shared fields](../models/DisableLicenseKeyRequestInput.md#disablelicensekeyrequestinput).

#### Response

Returned payload: [LicenseKey](../models/LicenseKey.md#licensekey).

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

$result = $client->licenseKeys->disable('lk_01KEZF7C000QD7VJ83G43V0NSN', [
  'expected_version' => 1,
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/licenseKeys-disable.php)

### licenseKeys.get

Returns the license key's details and its last four characters when assigned.

`GET /v1/license-keys/{license_key_id}`

Signature: `get(string|Model $license_key_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_id` | Required | string | The license key ID. Must be a valid ID with prefix lk_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: customer, order. Include the order or customer summary. Limits: at most 10 unique expand paths per request. Items values: `"customer"`, `"order"`. Values: `"customer"`, `"order"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [LicenseKey](../models/LicenseKey.md#licensekey).

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
$result = $client->licenseKeys->get('lk_01KEZF7C000QD7VJ83G43V0NSN', [], new RequestOptions());
```

[Complete runnable example](../examples/licenseKeys-get.php)

### licenseKeys.list

Lists issued license keys. With the checkout credential, send its paid order's order_id. Only pagination parameters are also accepted. The paying credential receives the assigned key. A credential from a launch URL a merchant reads or requests after payment receives masked results only. Default order: created_at descending, then license_key_id descending.

`GET /v1/license-keys`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `order_id` | Optional | string | Exact order ID, including the starting order of a subscription key. pattern: `^ord_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. |
| `customer_id` | Optional | string | Exact customer ID of the owning order or subscription. pattern: `^cus_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. |
| `subscription_id` | Optional | string | Exact subscription ID. pattern: `^sub_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. |
| `product_id` | Optional | string | Exact product ID. pattern: `^prod_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. |
| `variant_id` | Optional | string | Exact variant ID. pattern: `^var_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. |
| `license_key_pool_id` | Optional | string | Exact license key pool ID. pattern: `^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. |
| `email` | Optional | string | Exact buyer or customer email. Ignores case and surrounding whitespace in stored addresses, with accents preserved. Send one bare email address. Format: `email`. |
| `status` | Optional | Array of string or string | Filter by effective license key status. An active key past its expiry matches expired. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"active"`, `"disabled"`, `"expired"`. Values: `"pending"`, `"active"`, `"disabled"`, `"expired"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: customer, order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Checkout session credentials cannot use expand on this route. Items values: `"customer"`, `"order"`. Values: `"customer"`, `"order"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [LicenseKeyListResponse](../models/LicenseKeyListResponse.md#licensekeylistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->licenseKeys->list([
  'order_id' => 'ord_01KEZF7C0054GQKJ142A8X367A',
], new RequestOptions());
```

[Complete runnable example](../examples/licenseKeys-list.php)

### licenseKeys.lookup

Finds a license key by its full value in your merchant and environment, regardless of status. A malformed key returns 400 INVALID_REQUEST with detail INVALID_VALUE at key. An unknown key returns 404 RESOURCE_NOT_FOUND at key.

`POST /v1/license-keys/lookup`

Signature: `lookup(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [LookupLicenseKeyRequestInput](../models/LookupLicenseKeyRequestInput.md#lookuplicensekeyrequestinput) | The full key to look up. |

Body model: [LookupLicenseKeyRequestInput](../models/LookupLicenseKeyRequestInput.md#lookuplicensekeyrequestinput).

#### licenseKeys.lookup body fields

Field definitions: [shared fields](../models/LookupLicenseKeyRequestInput.md#lookuplicensekeyrequestinput).

#### Response

Returned payload: [LicenseKey](../models/LicenseKey.md#licensekey).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->licenseKeys->lookup([
  'key' => 'EXAMPLE-LICENSE-KEY-DO-NOT-USE',
], new RequestOptions());
```

[Complete runnable example](../examples/licenseKeys-lookup.php)

### licenseKeys.reinstate

Lifts all restrictions currently in force. Any ongoing cause stays overridden until it ends. With no restrictions in force the action returns 409 ACTION_NOT_ALLOWED with reason already_applied.

`POST /v1/license-keys/{license_key_id}/reinstate`

Signature: `reinstate(string|Model $license_key_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_id` | Required | string | The license key ID. Must be a valid ID with prefix lk_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `body` | Optional | [LicenseKeyVersionRequestInput](../models/MerchantSignupVersionRequestInput.md#merchantsignupversionrequestinput) | The request body for: Reinstate a license key; Rotate a license key. |

#### Response

Returned payload: [LicenseKey](../models/LicenseKey.md#licensekey).

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

$result = $client->licenseKeys->reinstate('lk_01KEZF7C000QD7VJ83G43V0NSN', [
  'expected_version' => 1,
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/licenseKeys-reinstate.php)

### licenseKeys.resend

Queues an email to the buyer address on file and returns the unchanged license key resource. Flint accepts one resend per key every 60 seconds. A sooner request returns 429 with Retry-After.

`POST /v1/license-keys/{license_key_id}/resend`

Signature: `resend(string|Model $license_key_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_id` | Required | string | The license key ID. Must be a valid ID with prefix lk_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `body` | Optional | [ResendLicenseKeyRequestInput](../models/ResendLicenseKeyRequestInput.md#resendlicensekeyrequestinput) | The request body for: Resend a license key. |

Body model: [ResendLicenseKeyRequestInput](../models/ResendLicenseKeyRequestInput.md#resendlicensekeyrequestinput).

#### Response

Returned payload: [LicenseKey](../models/LicenseKey.md#licensekey).

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

$result = $client->licenseKeys->resend('lk_01KEZF7C000QD7VJ83G43V0NSN', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/licenseKeys-resend.php)

### licenseKeys.reveal

Returns the full key formatted for display. A key awaiting assignment returns 409 ACTION_NOT_ALLOWED with reason status_not_reached. Each successful call is audited. Within 24 hours the original credential can replay the result with its key.

`POST /v1/license-keys/{license_key_id}/reveal`

Signature: `reveal(string|Model $license_key_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_id` | Required | string | The license key ID. Must be a valid ID with prefix lk_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `body` | Optional | [RevealLicenseKeyRequestInput](../models/RevealLicenseKeyRequestInput.md#reveallicensekeyrequestinput) | The request body for: Reveal a license key. |

Body model: [RevealLicenseKeyRequestInput](../models/RevealLicenseKeyRequestInput.md#reveallicensekeyrequestinput).

#### Response

Returned payload: [LicenseKeyWithKey](../models/LicenseKeyWithKey.md#licensekeywithkey).

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

$result = $client->licenseKeys->reveal('lk_01KEZF7C000QD7VJ83G43V0NSN', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/licenseKeys-reveal.php)

### licenseKeys.rotateKey

Replaces a generated key, invalidates the old string and releases every active installation. The response contains the new key. No email is sent. Within 24 hours the original credential can replay the result with its key while the key's version is unchanged. A pool key returns 409 ACTION_NOT_ALLOWED with reason not_offered.

`POST /v1/license-keys/{license_key_id}/rotate-key`

Signature: `rotateKey(string|Model $license_key_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](#request-fields-4). Models: [LicenseKeyVersionRequestInput](../models/MerchantSignupVersionRequestInput.md#merchantsignupversionrequestinput).

#### Response

Returned payload: [LicenseKeyWithKey](../models/LicenseKeyWithKey.md#licensekeywithkey).

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

$result = $client->licenseKeys->rotateKey('lk_01KEZF7C000QD7VJ83G43V0NSN', [
  'expected_version' => 1,
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/licenseKeys-rotateKey.php)

### licenseKeys.update

Changes the activation limit, expiry, or metadata. A lower limit leaves existing installations active. Send null for an unlimited limit or to clear expiry. Only an assigned order key can have an expiry.

`PATCH /v1/license-keys/{license_key_id}`

Signature: `update(string|Model $license_key_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `license_key_id` | Required | string | The license key ID. Must be a valid ID with prefix lk_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `body` | Required | [UpdateLicenseKeyRequestInput](../models/UpdateLicenseKeyRequestInput.md#updatelicensekeyrequestinput) | The request body for: Update a license key. |

Body model: [UpdateLicenseKeyRequestInput](../models/UpdateLicenseKeyRequestInput.md#updatelicensekeyrequestinput).

#### licenseKeys.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Optional | integer or null | Maximum active installations. Send null to clear the limit. Format: `int32`. minimum: `1`. maximum: `10000`. |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `expires_at` | Optional | string or null | Expiry for an assigned order key. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Merchant-defined key-value patch. Send null to clear all merchant metadata. |

#### licenseKeys.update: variant 1



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Required | integer or null | Maximum active installations. Send null to clear the limit. Format: `int32`. minimum: `1`. maximum: `10000`. |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `expires_at` | Optional | string or null | Expiry for an assigned order key. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Merchant-defined key-value patch. Send null to clear all merchant metadata. |

#### licenseKeys.update: variant 2



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Optional | integer or null | Maximum active installations. Send null to clear the limit. Format: `int32`. minimum: `1`. maximum: `10000`. |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `expires_at` | Required | string or null | Expiry for an assigned order key. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Merchant-defined key-value patch. Send null to clear all merchant metadata. |

#### licenseKeys.update: variant 3



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Optional | integer or null | Maximum active installations. Send null to clear the limit. Format: `int32`. minimum: `1`. maximum: `10000`. |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `expires_at` | Optional | string or null | Expiry for an assigned order key. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `metadata` | Required | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Merchant-defined key-value patch. Send null to clear all merchant metadata. |

#### Response

Returned payload: [LicenseKey](../models/LicenseKey.md#licensekey).

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

$result = $client->licenseKeys->update('lk_01KEZF7C000QD7VJ83G43V0NSN', [
  'activation_limit' => 2,
  'expected_version' => 1,
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/licenseKeys-update.php)

### licenseKeys.validate

Checks whether a key can be used for one of the listed products. You can omit Authorization or send a merchant API key with commerce.license_keys.read. API key calls use the read rate-limit class. Every product must belong to the same merchant and environment. An invalid key returns 200 with is_valid set to false. A product outside the selected merchant or environment returns 404 at its index in product_ids.

`POST /v1/license-keys/validate`

Signature: `validate(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [ValidateLicenseKeyRequestInput](../models/ValidateLicenseKeyRequestInput.md#validatelicensekeyrequestinput) | The full license key and the products the caller accepts. |

Body model: [ValidateLicenseKeyRequestInput](../models/ValidateLicenseKeyRequestInput.md#validatelicensekeyrequestinput).

#### licenseKeys.validate body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `key` | Required | string | The full license key. Generated keys match on the last 25 normalized characters. Pool keys match exactly after surrounding whitespace is trimmed. minLength: `1`. |
| `license_key_activation_id` | Optional | string | An activation to check on this key, when the app has one. minLength: `1`. pattern: `^lka_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. |
| `product_ids` | Required | Array of string | The products this app accepts. Every ID must belong to the same merchant and environment. Without an API key, the first product sets the merchant and environment. minItems: `1`. maxItems: `20`. uniqueItems: `true`. Items: minLength: `1`. pattern: `^prod_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. |

#### Response

Returned payload: [LicenseKeyValidation](../models/LicenseKeyValidation.md#licensekeyvalidation).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->licenseKeys->validate([
  'key' => 'EXAMPLE-LICENSE-KEY-DO-NOT-USE',
  'product_ids' => [
    'prod_01KEZF7C00BVSHCNWVH528HB66',
  ],
], new RequestOptions());
```

[Complete runnable example](../examples/licenseKeys-validate.php)

