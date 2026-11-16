[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionTaxPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [CheckoutTaxCalculationPreviousAttributes](../models/CheckoutTaxCalculationPreviousAttributes.md#checkouttaxcalculationpreviousattributes) or null | `calculation`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributestax-variant-1calculation), [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEvent.md#subscriptionactivatedinstalledmerchantseventdataprevious_attributestax-variant-1calculation). |
| `enabled` | Optional | boolean or null | `enabled`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributestax-variant-1enabled), [declared alternatives](../models/SubscriptionActivatedInstalledMerchantsEvent.md#subscriptionactivatedinstalledmerchantseventdataprevious_attributestax-variant-1enabled). |

### SubscriptionTaxPreviousAttributes variant 1

anyOf variant 1: Declared schema CheckoutTaxConfigPreviousAttributes. .

- Constraints for `calculation`: How the order Flint creates calculates tax while tax is enabled. Omitted when it follows `tax.default_calculation` from your settings, where a `provided` default means automatic. On a payment link update, send null to follow your settings again.
- Constraints for `enabled`: Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings.

### SubscriptionTaxPreviousAttributes variant 2

anyOf variant 2: Declared schema SubscriptionTaxPreviousAttributes. .

- Constraints for `calculation`: How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic.
- Constraints for `enabled`: Whether the subscription's orders calculate tax.

### SubscriptionTaxPreviousAttributes variant 1.calculation

Declared alternatives: [PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tax variant 1.calculation](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributestax-variant-1calculation).

### SubscriptionTaxPreviousAttributes variant 1.enabled

Declared alternatives: [PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tax variant 1.enabled](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributestax-variant-1enabled).

### SubscriptionTaxPreviousAttributes variant 2.calculation

Declared alternatives: [SubscriptionActivatedInstalledMerchantsEvent.data.previous_attributes.tax variant 1.calculation](../models/SubscriptionActivatedInstalledMerchantsEvent.md#subscriptionactivatedinstalledmerchantseventdataprevious_attributestax-variant-1calculation).

### SubscriptionTaxPreviousAttributes variant 2.enabled

Declared alternatives: [SubscriptionActivatedInstalledMerchantsEvent.data.previous_attributes.tax variant 1.enabled](../models/SubscriptionActivatedInstalledMerchantsEvent.md#subscriptionactivatedinstalledmerchantseventdataprevious_attributestax-variant-1enabled).

