[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionTaxPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [SubscriptionTaxCalculationPreviousAttributesInput](../models/SubscriptionTaxCalculationPreviousAttributesInput.md#subscriptiontaxcalculationpreviousattributesinput) or null | How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic. |
| `enabled` | Optional | boolean or null | Whether the subscription's orders calculate tax. `enabled`: [declared alternatives](../models/SubscriptionTaxPreviousAttributesInput.md#subscriptiontaxpreviousattributesinputenabled). |

### SubscriptionTaxPreviousAttributesInput.enabled

### SubscriptionTaxPreviousAttributesInput.enabled variant 1

anyOf variant 1: Whether the subscription's orders calculate tax..

- Value shape: boolean. Whether the subscription's orders calculate tax. 

### SubscriptionTaxPreviousAttributesInput.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether the subscription's orders calculate tax. 

