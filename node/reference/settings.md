[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# settings

### settings.get

Returns the settings stored for the authenticated merchant in this environment.

`GET /v1/settings`

Signature: `get(params?: SettingsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

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

```typescript
const result = await client.settings.get({}, {  });
```

[Complete runnable example](../examples/settings-get.mjs)

### settings.getEffective

Returns the authenticated merchant's settings for this environment with Flint's defaults filled in.

`GET /v1/settings/effective`

Signature: `getEffective(params?: SettingsGetEffectiveParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

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

```typescript
const result = await client.settings.getEffective({}, {  });
```

[Complete runnable example](../examples/settings-getEffective.mjs)

### settings.update

Applies a sparse patch to merchant settings. See each field for how it is patched.

`PATCH /v1/settings`

Signature: `update(params: SettingsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [UpdateSettingsRequestInput](../models/UpdateSettingsRequest.md#updatesettingsrequest) | The request body for: Update merchant settings. |

Body model: [UpdateSettingsRequestInput](../models/UpdateSettingsRequest.md#updatesettingsrequest).

#### settings.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `branding` | Optional | [BrandingSettingsRequestInput](../models/BrandingSettingsRequest.md#brandingsettingsrequest) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `checkout` | Optional | [CheckoutSettingsRequestInput](../models/CheckoutSettingsRequestInput.md#checkoutsettingsrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `customer_account` | Optional | [CustomerAccountSettingsRequestInput](../models/CustomerAccountSettingsRequestInput.md#customeraccountsettingsrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Flint then serves the default Flint-hosted account, and GET /v1/settings omits customer_account. |
| `customer_email_delivery` | Optional | [CustomerEmailDeliverySettingsRequestInput](../models/CustomerEmailDeliverySettings.md#customeremaildeliverysettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `expected_version` | Optional | integer | The Settings.version last read by the caller. Required when tax_identity is present, including null. Stale versions return VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `fulfillment` | Optional | [FulfillmentSettingsRequestInput](../models/FulfillmentSettings.md#fulfillmentsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `inventory` | Optional | [InventorySettingsRequestInput](../models/InventorySettingsRequestInput.md#inventorysettingsrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `invoices` | Optional | [InvoiceSettingsPatchInput](../models/InvoiceSettingsPatch.md#invoicesettingspatch) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `legal` | Optional | [LegalSettingsRequestInput](../models/LegalSettingsRequestInput.md#legalsettingsrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Merged by key. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `payment_limits` | Optional | [PaymentLimitSettingsPatchInput](../models/PaymentLimitSettingsPatch.md#paymentlimitsettingspatch) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Clearing merchant limits preserves Flint support approvals. Cleared maps are omitted from reads. |
| `promotions` | Optional | [PromotionSettingsRequestInput](../models/PromotionSettings.md#promotionsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `receipts` | Optional | [ReceiptSettingsRequestInput](../models/ReceiptSettingsRequest.md#receiptsettingsrequest) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `subscriptions` | Optional | [SubscriptionSettingsRequestInput](../models/SubscriptionSettings.md#subscriptionsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `tax` | Optional | [TaxSettingsRequestInput](../models/TaxSettingsRequest.md#taxsettingsrequest) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `tax_identity` | Optional | [TaxIdentityPatchInput](../models/TaxIdentityRequestInput.md#taxidentityrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Legal identity displayed on invoices and credit notes. Requires expected_version whenever present. |
| `tipping` | Optional | [TippingSettingsPatchInput](../models/TippingSettingsPatch.md#tippingsettingspatch) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.settings.update({metadata: {channel: "sdk-example"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/settings-update.mjs)

