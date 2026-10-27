[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# settings

### settings.get

Returns the settings stored for the authenticated merchant in this environment.

`GET /v1/settings`

Signature: `get(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)`

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.settings.get({}, {  });
```

[Complete runnable example](../examples/settings-get.mjs)

### settings.getEffective

Returns the authenticated merchant's settings for this environment with Flint's defaults filled in.

`GET /v1/settings/effective`

Signature: `getEffective(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)`

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getEffectiveWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.settings.getEffective({}, {  });
```

[Complete runnable example](../examples/settings-getEffective.mjs)

### settings.update

Applies a sparse patch to merchant settings. See each field for how it is patched.

`PATCH /v1/settings`

Signature:

```typescript
update(params: (InputValue<UpdateSettingsRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateSettingsRequestInput](../models/UpdateSettingsRequest.md#updatesettingsrequest) | The request body for: Update merchant settings. |

Body model: [UpdateSettingsRequestInput](../models/UpdateSettingsRequest.md#updatesettingsrequest).

#### settings.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `branding` | Optional | [BrandingSettingsRequestInput](../models/BrandingSettingsRequest.md#brandingsettingsrequest) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `checkout` | Optional | [CheckoutSettingsInput](../models/CheckoutSettings.md#checkoutsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `customer_account` | Optional | [CustomerAccountSettingsInput](../models/CustomerAccountSettings.md#customeraccountsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Flint then serves the default Flint-hosted account, and GET /v1/settings omits customer_account. |
| `customer_email_delivery` | Optional | [CustomerEmailDeliverySettingsInput](../models/CustomerEmailDeliverySettings.md#customeremaildeliverysettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `expected_version` | Optional | integer string | The Settings.version last read by the caller. Required when tax_identity is present, including null. Stale versions return VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `fulfillment` | Optional | [FulfillmentSettingsInput](../models/FulfillmentSettings.md#fulfillmentsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `inventory` | Optional | [InventorySettingsInput](../models/InventorySettings.md#inventorysettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `invoices` | Optional | [InvoiceSettingsPatchInput](../models/InvoiceSettingsPatch.md#invoicesettingspatch) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `legal` | Optional | [LegalSettingsRequestInput](../models/LegalSettingsRequestInput.md#legalsettingsrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `metadata` | Optional | Map of (string or null) or null | Merged by key. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `payment_limits` | Optional | [PaymentLimitSettingsPatchInput](../models/PaymentLimitSettingsPatch.md#paymentlimitsettingspatch) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Clearing merchant limits preserves Flint support approvals. Cleared maps are omitted from reads. |
| `promotions` | Optional | [PromotionSettingsInput](../models/PromotionSettings.md#promotionsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `receipts` | Optional | [ReceiptSettingsRequestInput](../models/ReceiptSettingsRequest.md#receiptsettingsrequest) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `subscriptions` | Optional | [SubscriptionSettingsInput](../models/SubscriptionSettings.md#subscriptionsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `tax` | Optional | [TaxSettingsRequestInput](../models/TaxSettingsRequest.md#taxsettingsrequest) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `tax_identity` | Optional | [TaxIdentityPatchInput](../models/TaxIdentityRequestInput.md#taxidentityrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Legal identity displayed on invoices and credit notes. Requires expected_version whenever present. |
| `tipping` | Optional | [TippingSettingsPatchInput](../models/TippingSettingsPatch.md#tippingsettingspatch) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.settings.update({}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/settings-update.mjs)

### settings.validateCustomDomain

Starts provider and DNS checks for this domain. Send no body or an empty JSON object. Checks are limited to once every 60 seconds per domain; rate limited responses include Retry-After.

`POST /v1/custom-domains/{custom_domain_id}/validate`

Signature:

```typescript
validateCustomDomain(custom_domain_id: InputValue<string>,
 params?: {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant" | "merchantKey">)
```

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `validateCustomDomainWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.settings.validateCustomDomain("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/settings-validateCustomDomain.mjs)

