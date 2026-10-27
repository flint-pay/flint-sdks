[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateSettingsRequest

The request body for: Update merchant settings.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `branding` | Optional | [BrandingSettingsRequest](../models/BrandingSettingsRequest.md#brandingsettingsrequest) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `checkout` | Optional | [CheckoutSettings](../models/CheckoutSettings.md#checkoutsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `customer_account` | Optional | [CustomerAccountSettings](../models/CustomerAccountSettings.md#customeraccountsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Flint then serves the default Flint-hosted account, and GET /v1/settings omits customer_account. |
| `customer_email_delivery` | Optional | [CustomerEmailDeliverySettings](../models/CustomerEmailDeliverySettings.md#customeremaildeliverysettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `expected_version` | Optional | integer string | The Settings.version last read by the caller. Required when tax_identity is present, including null. Stale versions return VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `fulfillment` | Optional | [FulfillmentSettings](../models/FulfillmentSettings.md#fulfillmentsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `inventory` | Optional | [InventorySettings](../models/InventorySettings.md#inventorysettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `invoices` | Optional | [InvoiceSettingsPatch](../models/InvoiceSettingsPatch.md#invoicesettingspatch) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `legal` | Optional | [LegalSettingsRequest](../models/LegalSettingsRequest.md#legalsettingsrequest) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. `legal`: [declared alternatives](../models/UpdateSettingsRequest.md#updatesettingsrequestlegal). |
| `metadata` | Optional | Map of (string or null) or null | Merged by key. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `payment_limits` | Optional | [PaymentLimitSettingsPatch](../models/PaymentLimitSettingsPatch.md#paymentlimitsettingspatch) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Clearing merchant limits preserves Flint support approvals. Cleared maps are omitted from reads. |
| `promotions` | Optional | [PromotionSettings](../models/PromotionSettings.md#promotionsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `receipts` | Optional | [ReceiptSettingsRequest](../models/ReceiptSettingsRequest.md#receiptsettingsrequest) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `subscriptions` | Optional | [SubscriptionSettings](../models/SubscriptionSettings.md#subscriptionsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `tax` | Optional | [TaxSettingsRequest](../models/TaxSettingsRequest.md#taxsettingsrequest) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `tax_identity` | Optional | [TaxIdentityPatch](../models/TaxIdentityPatch.md#taxidentitypatch) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Legal identity displayed on invoices and credit notes. Requires expected_version whenever present. |
| `tipping` | Optional | [TippingSettingsPatch](../models/TippingSettingsPatch.md#tippingsettingspatch) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |

### UpdateSettingsRequest.legal

Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contract_url` | Conditional | string or null | Send null to clear it. minLength: `1`. |
| `refund_policy_url` | Conditional | string or null | Send null to clear it. minLength: `1`. |
| `require_terms_of_service` | Conditional | boolean |  |
| `shipping_policy_url` | Conditional | string or null | Send null to clear it. minLength: `1`. |
| `terms_of_service_url` | Conditional | string or null | Send null to clear it. minLength: `1`. |

### UpdateSettingsRequest.legal variant 1

anyOf variant 1: Changes to a merchant's legal settings. Send null on a URL to clear it..

- Optional: `contract_url`, `refund_policy_url`, `require_terms_of_service`, `shipping_policy_url`, `terms_of_service_url`.

### UpdateSettingsRequest.legal variant 2

anyOf variant 2.

- Undeclared: `contract_url`, `refund_policy_url`, `require_terms_of_service`, `shipping_policy_url`, `terms_of_service_url`.
- Value shape: null. Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. 

