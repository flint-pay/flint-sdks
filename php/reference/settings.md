[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# settings

### settings.get

Returns the settings stored for the authenticated merchant in this environment.

`GET /v1/settings`

Signature: `get(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](authContext.md#request-fields).

#### Response

Returned payload: [Settings](../models/Settings.md#settings).

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

Field definitions: [shared fields](authContext.md#request-fields).

#### Response

Returned payload: [Settings](../models/Settings.md#settings).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->settings->getEffective([], new RequestOptions());
```

[Complete runnable example](../examples/settings-getEffective.php)

### settings.update

Applies a sparse patch to merchant settings. See each field for how it is patched. A partner app install token can't send `checkout.enabled_payment_options`, `customer_account.buyer_capabilities`, `inventory.origin_policies`, `invoices.autopay_retry_policy`, `invoices.default_collection_mode`, `invoices.default_invoice_payment_term_id`, `invoices.payment_policy`, `invoices.remit_to_address`, `payment_limits`, `payments.statement_descriptor`, `subscriptions.default_billing_schedule_owner`, `subscriptions.dunning_end_action`, `subscriptions.dunning_retry_days`, `subscriptions.external_dunning_end_action`, `tax`, or `tax_identity`, or null for `checkout`, `customer_account`, `inventory`, `invoices`, or `subscriptions`; each returns `400 INVALID_REQUEST` with a `NOT_ALLOWED` detail whose `param` names the field.

`PATCH /v1/settings`

Signature: `update(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdateSettingsRequestInput](../models/UpdateSettingsRequestInput.md#updatesettingsrequestinput) | The request body for: Update merchant settings. minProperties: `1`. |

Body model: [UpdateSettingsRequestInput](../models/UpdateSettingsRequestInput.md#updatesettingsrequestinput).

#### settings.update body fields

Field definitions: [shared fields](../models/UpdateSettingsRequestInput.md#updatesettingsrequestinput). Models: [BrandingSettingsRequestInput](../models/BrandingSettingsRequestInput.md#brandingsettingsrequestinput), [CheckoutSettingsRequestInput](../models/CheckoutSettingsRequestInput.md#checkoutsettingsrequestinput), [CustomerAccountSettingsRequestInput](../models/CustomerAccountSettingsRequestInput.md#customeraccountsettingsrequestinput), [CustomerEmailDeliverySettingsRequestInput](../models/CustomerEmailDeliverySettingsRequestInput.md#customeremaildeliverysettingsrequestinput), [FulfillmentSettingsRequestInput](../models/FulfillmentSettingsRequestInput.md#fulfillmentsettingsrequestinput), [InventorySettingsRequestInput](../models/InventorySettingsRequestInput.md#inventorysettingsrequestinput), [InvoiceSettingsPatchInput](../models/InvoiceSettingsPatchInput.md#invoicesettingspatchinput), [LegalSettingsRequestInput](../models/LegalSettingsRequestInput.md#legalsettingsrequestinput), [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput), [PaymentLimitSettingsPatchInput](../models/PaymentLimitSettingsPatchInput.md#paymentlimitsettingspatchinput), [PaymentSettingsPatchInput](../models/PaymentSettingsPatchInput.md#paymentsettingspatchinput), [PromotionSettingsRequestInput](../models/PromotionSettingsRequestInput.md#promotionsettingsrequestinput), [SubscriptionSettingsRequestInput](../models/SubscriptionSettingsRequestInput.md#subscriptionsettingsrequestinput), [TaxSettingsRequestInput](../models/TaxSettingsRequestInput.md#taxsettingsrequestinput), [TaxIdentityPatchInput](../models/TaxIdentityPatchInput.md#taxidentitypatchinput), [TippingSettingsPatchInput](../models/TippingSettingsPatchInput.md#tippingsettingspatchinput).

#### Response

Returned payload: [Settings](../models/Settings.md#settings).

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

$result = $client->settings->update([
  'metadata' => (object) [
    'channel' => 'sdk-example',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/settings-update.php)

