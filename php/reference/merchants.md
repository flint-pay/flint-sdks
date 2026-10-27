[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# merchants

### merchants.get

Returns the authenticated merchant.

`GET /v1/merchant`

Signature: `get(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expand` | Optional | Array of string | Items values: `"organization"`. |

#### Response

Returned payload: [Merchant](../models/Merchant.md#merchant).

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

Authentication modes: `merchant`, `onboarding`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->merchants->get([], new RequestOptions());
```

[Complete runnable example](../examples/merchants-get.php)

### merchants.update

Applies a sparse update to the authenticated merchant's public business profile fields. The api_version field changes the merchant's live default and requires a live-mode API key or the live dashboard environment.

`PATCH /v1/merchant`

Signature: `update(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateMerchantRequestInput](../models/UpdateMerchantRequestInput.md#updatemerchantrequestinput) | The request body for: Update merchant. |

Body model: [UpdateMerchantRequestInput](../models/UpdateMerchantRequestInput.md#updatemerchantrequestinput).

#### merchants.update body fields

Field definitions: [shared fields](../models/UpdateMerchantRequestInput.md#updatemerchantrequestinput). Models: [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput), [ImageRequestInput](../models/ImageRequestInput.md#imagerequestinput).

#### Response

Returned payload: [Merchant](../models/Merchant.md#merchant).

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

$result = $client->merchants->update([], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/merchants-update.php)

