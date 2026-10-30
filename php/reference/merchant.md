[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# merchant

### merchant.get

Returns the authenticated merchant.

`GET /v1/merchant`

Signature: `get(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expand` | Optional | Array of string or string | Supported expansions: organization. Expansion requires merchants.profile.read plus accounts.organizations.read. Limits: at most 10 unique expand paths per request. Pass expand=organization. Items values: `"organization"`. Values: `"organization"`. |

#### Response

Returned payload: [Merchant](../models/Merchant.md#merchant).

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

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->merchant->get([], new RequestOptions());
```

[Complete runnable example](../examples/merchant-get.php)

### merchant.update

Applies a sparse update to the authenticated merchant's profile, shared across live and all sandboxes. Every mutable field requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required and one detail per supplied shared field, including nulls and metadata changes. Nothing is saved on refusal.

`PATCH /v1/merchant`

Signature: `update(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
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
| 410 | ApiError |
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

