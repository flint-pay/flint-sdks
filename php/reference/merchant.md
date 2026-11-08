[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# merchant

### merchant.get

Returns the authenticated merchant.

`GET /v1/merchant`

Signature: `get(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](authContext.md#request-fields).

#### Response

Returned payload: [Merchant](../models/Merchant.md#merchant).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->merchant->get([], new RequestOptions());
```

[Complete runnable example](../examples/merchant-get.php)

### merchant.update

Applies a sparse update to the authenticated merchant's profile, shared across live and all sandboxes. Every mutable field requires a live-mode credential or a Dashboard session in any selected environment. Test credentials fail with `FORBIDDEN` and reason `live_mode_required`, with one detail per supplied shared field, including nulls and metadata changes. Nothing is saved on refusal. A partner app install token can change only `business_name`, `icon`, and `logo`; another field returns `400 INVALID_REQUEST` with a `NOT_ALLOWED` detail whose `param` names it.

`PATCH /v1/merchant`

Signature: `update(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdateMerchantRequestInput](../models/UpdateMerchantRequestInput.md#updatemerchantrequestinput) | The request body for: Update merchant. |

Body model: [UpdateMerchantRequestInput](../models/UpdateMerchantRequestInput.md#updatemerchantrequestinput).

#### merchant.update body fields

Field definitions: [shared fields](../models/UpdateMerchantRequestInput.md#updatemerchantrequestinput). Models: [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput), [ImageRequestInput](../models/ImageRequestInput.md#imagerequestinput), [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput).

#### Response

Returned payload: [Merchant](../models/Merchant.md#merchant).

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
| 502 | ServerError |
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

$result = $client->merchant->update([
  'business_name' => 'Example Shop',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/merchant-update.php)

