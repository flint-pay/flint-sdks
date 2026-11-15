[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionTaxRequest

Replaced as a whole: send every field you want to keep.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [CheckoutTaxCalculation](../models/CheckoutTaxCalculation.md#checkouttaxcalculation) or null | How the subscription's orders calculate tax while `enabled` is `true`. Omit it, or send `null`, to use `tax.default_calculation` from your settings, where a `provided` default means automatic. Not allowed while `enabled` is `false`. `calculation`: [declared alternatives](../models/SubscriptionTaxRequest.md#subscriptiontaxrequestcalculation). |
| `enabled` | Required | boolean | Whether the subscription's orders calculate tax. |

### SubscriptionTaxRequest.calculation

How the subscription's orders calculate tax while `enabled` is `true`. Omit it, or send `null`, to use `tax.default_calculation` from your settings, where a `provided` default means automatic. Not allowed while `enabled` is `false`.

Field definitions: [shared fields](SubscriptionTax.md#subscriptiontaxcalculation).

### SubscriptionTaxRequest.calculation variant 1: `components_source` = `"callback"`

anyOf SubscriptionTaxCalculationRequest: Replaced as a whole: send every field you want to keep. `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`, because Flint creates the subscription's orders and nobody can send their components..

- Required: `mode`.
- Optional: `components_source`.

### SubscriptionTaxRequest.calculation variant 2

anyOf variant 2.

- Undeclared: `components_source`, `mode`.
- Value shape: null. How the subscription's orders calculate tax while `enabled` is `true`. Omit it, or send `null`, to use `tax.default_calculation` from your settings, where a `provided` default means automatic. Not allowed while `enabled` is `false`. 

