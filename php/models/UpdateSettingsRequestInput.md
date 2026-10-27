[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateSettingsRequestInput

The request body for: Update merchant settings.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `branding` | Optional | [BrandingSettingsRequestInput](../models/BrandingSettingsRequestInput.md#brandingsettingsrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `checkout` | Optional | [CheckoutSettingsInput](../models/CheckoutSettingsInput.md#checkoutsettingsinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `customer_account` | Optional | [CustomerAccountSettingsInput](../models/CustomerAccountSettingsInput.md#customeraccountsettingsinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Flint then serves the default Flint-hosted account, and GET /v1/settings omits customer_account. |
| `customer_email_delivery` | Optional | [CustomerEmailDeliverySettingsInput](../models/CustomerEmailDeliverySettingsInput.md#customeremaildeliverysettingsinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `expected_version` | Optional | integer string | The Settings.version last read by the caller. Required when tax_identity is present, including null. Stale versions return VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `fulfillment` | Optional | [FulfillmentSettingsInput](../models/FulfillmentSettingsInput.md#fulfillmentsettingsinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `inventory` | Optional | [InventorySettingsInput](../models/InventorySettingsInput.md#inventorysettingsinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `invoices` | Optional | [InvoiceSettingsPatchInput](../models/InvoiceSettingsPatchInput.md#invoicesettingspatchinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `legal` | Optional | [LegalSettingsRequestInput](../models/LegalSettingsRequestInput.md#legalsettingsrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `metadata` | Optional | Map of (string or null) or null | Merged by key. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `payment_limits` | Optional | [PaymentLimitSettingsPatchInput](../models/PaymentLimitSettingsPatchInput.md#paymentlimitsettingspatchinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Clearing merchant limits preserves Flint support approvals. Cleared maps are omitted from reads. |
| `promotions` | Optional | [PromotionSettingsInput](../models/PromotionSettingsInput.md#promotionsettingsinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `receipts` | Optional | [ReceiptSettingsRequestInput](../models/ReceiptSettingsRequestInput.md#receiptsettingsrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `subscriptions` | Optional | [SubscriptionSettingsInput](../models/SubscriptionSettingsInput.md#subscriptionsettingsinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `tax` | Optional | [TaxSettingsRequestInput](../models/TaxSettingsRequestInput.md#taxsettingsrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |
| `tax_identity` | Optional | [TaxIdentityPatchInput](../models/TaxIdentityPatchInput.md#taxidentitypatchinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. Legal identity displayed on invoices and credit notes. Requires expected_version whenever present. |
| `tipping` | Optional | [TippingSettingsPatchInput](../models/TippingSettingsPatchInput.md#tippingsettingspatchinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Send null to remove every value you set in this section. |

