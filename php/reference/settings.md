[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# settings

### settings.get

Returns the settings stored for the authenticated merchant in this environment.

`GET /v1/settings`

Signature: `get(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

No request fields.

#### Response

Returned payload: [Settings](../models/Settings.md#settings).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->settings->get([], new RequestOptions());
```

[Complete runnable example](../examples/settings-get.php)

### settings.getEffective

Returns the authenticated merchant's settings for this environment with Flint's defaults filled in.

`GET /v1/settings/effective`

Signature: `getEffective(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

No request fields.

#### Response

Returned payload: [Settings](../models/Settings.md#settings).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getEffectiveWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->settings->getEffective([], new RequestOptions());
```

[Complete runnable example](../examples/settings-getEffective.php)

### settings.update

Applies a sparse patch to merchant settings. See each field for how it is patched.

`PATCH /v1/settings`

Signature: `update(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateSettingsRequestInput](../models/UpdateSettingsRequestInput.md#updatesettingsrequestinput) | The request body for: Update merchant settings. |

Body model: [UpdateSettingsRequestInput](../models/UpdateSettingsRequestInput.md#updatesettingsrequestinput).

#### settings.update body fields

Field definitions: [shared fields](../models/UpdateSettingsRequestInput.md#updatesettingsrequestinput). Models: [BrandingSettingsRequestInput](../models/BrandingSettingsRequestInput.md#brandingsettingsrequestinput), [CheckoutSettingsRequestRequestInput](../models/CheckoutSettingsRequestRequestInput.md#checkoutsettingsrequestrequestinput), [CustomerAccountSettingsRequestRequestInput](../models/CustomerAccountSettingsRequestRequestInput.md#customeraccountsettingsrequestrequestinput), [CustomerEmailDeliverySettingsRequestRequestInput](../models/CustomerEmailDeliverySettingsRequestRequestInput.md#customeremaildeliverysettingsrequestrequestinput), [FulfillmentSettingsRequestRequestInput](../models/FulfillmentSettingsRequestRequestInput.md#fulfillmentsettingsrequestrequestinput), [InventorySettingsRequestRequestInput](../models/InventorySettingsRequestRequestInput.md#inventorysettingsrequestrequestinput), [InvoiceSettingsPatchInput](../models/InvoiceSettingsPatchInput.md#invoicesettingspatchinput), [LegalSettingsRequestInput](../models/LegalSettingsRequestInput.md#legalsettingsrequestinput), [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput), [PaymentLimitSettingsPatchInput](../models/PaymentLimitSettingsPatchInput.md#paymentlimitsettingspatchinput), [PromotionSettingsRequestRequestInput](../models/PromotionSettingsRequestRequestInput.md#promotionsettingsrequestrequestinput), [ReceiptSettingsRequestInput](../models/ReceiptSettingsRequestInput.md#receiptsettingsrequestinput), [SubscriptionSettingsRequestRequestInput](../models/SubscriptionSettingsRequestRequestInput.md#subscriptionsettingsrequestrequestinput), [TaxSettingsRequestInput](../models/TaxSettingsRequestInput.md#taxsettingsrequestinput), [TaxIdentityPatchInput](../models/TaxIdentityPatchInput.md#taxidentitypatchinput), [TippingSettingsPatchInput](../models/TippingSettingsPatchInput.md#tippingsettingspatchinput).

#### Response

Returned payload: [Settings](../models/Settings.md#settings).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->settings->update([], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/settings-update.php)

### settings.validateCustomDomain

Starts provider and DNS checks for this domain. Send no body or an empty JSON object. Checks are limited to once every 60 seconds per domain; rate limited responses include Retry-After.

`POST /v1/custom-domains/{custom_domain_id}/validate`

Signature: `validateCustomDomain(string|Model $custom_domain_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_domain_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [CustomDomain](../models/CustomDomain.md#customdomain).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `validateCustomDomainWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->settings->validateCustomDomain('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/settings-validateCustomDomain.php)

