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
| `body` | Required | [UpdateSettingsRequestInput](../models/UpdateSettingsRequestInput.md#updatesettingsrequestinput) | The request body for: Update merchant settings. |

Body model: [UpdateSettingsRequestInput](../models/UpdateSettingsRequestInput.md#updatesettingsrequestinput).

#### settings.update body fields

Field definitions: [shared fields](../models/UpdateSettingsRequestInput.md#updatesettingsrequestinput). Models: [BrandingSettingsRequestInput](../models/BrandingSettingsRequestInput.md#brandingsettingsrequestinput), [CheckoutSettingsRequestInput](../models/CheckoutSettingsRequestInput.md#checkoutsettingsrequestinput), [CustomerAccountSettingsRequestInput](../models/CustomerAccountSettingsRequestInput.md#customeraccountsettingsrequestinput), [CustomerEmailDeliverySettingsRequestInput](../models/CustomerEmailDeliverySettingsRequestInput.md#customeremaildeliverysettingsrequestinput), [FulfillmentSettingsRequestInput](../models/FulfillmentSettingsRequestInput.md#fulfillmentsettingsrequestinput), [InventorySettingsRequestInput](../models/InventorySettingsRequestInput.md#inventorysettingsrequestinput), [InvoiceSettingsPatchInput](../models/InvoiceSettingsPatchInput.md#invoicesettingspatchinput), [LegalSettingsRequestInput](../models/LegalSettingsRequestInput.md#legalsettingsrequestinput), [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput), [PaymentLimitSettingsPatchInput](../models/PaymentLimitSettingsPatchInput.md#paymentlimitsettingspatchinput), [PromotionSettingsRequestInput](../models/PromotionSettingsRequestInput.md#promotionsettingsrequestinput), [ReceiptSettingsRequestInput](../models/ReceiptSettingsRequestInput.md#receiptsettingsrequestinput), [SubscriptionSettingsRequestInput](../models/SubscriptionSettingsRequestInput.md#subscriptionsettingsrequestinput), [TaxSettingsRequestInput](../models/TaxSettingsRequestInput.md#taxsettingsrequestinput), [TaxIdentityPatchInput](../models/TaxIdentityPatchInput.md#taxidentitypatchinput), [TippingSettingsPatchInput](../models/TippingSettingsPatchInput.md#tippingsettingspatchinput).

#### Response

Returned payload: [Settings](../models/Settings.md#settings).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
| 410 | ApiError |
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

$result = $client->settings->update([
  'metadata' => (object) [
    'channel' => 'sdk-example',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/settings-update.php)

