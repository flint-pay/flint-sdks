[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionTaxPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | ([CheckoutTaxCalculationPreviousAttributes](../models/CheckoutTaxCalculationPreviousAttributes.md#checkouttaxcalculationpreviousattributes) or null) or null | How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic. `calculation`: [declared alternatives](../models/SubscriptionTaxPreviousAttributes.md#subscriptiontaxpreviousattributescalculation). |
| `enabled` | Optional | boolean or null | Whether the subscription's orders calculate tax. `enabled`: [declared alternatives](../models/SubscriptionTaxPreviousAttributes.md#subscriptiontaxpreviousattributesenabled). |

### SubscriptionTaxPreviousAttributes.calculation

How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components_source` | Conditional | string or null | Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`. `components_source`: [declared alternatives](../models/CheckoutTaxCalculationPreviousAttributes.md#checkouttaxcalculationpreviousattributes-variant-2components_source). |
| `mode` | Conditional | string or null | How the subscription's orders calculate tax. Values: `"automatic"`, `"external"`. `mode`: [declared alternatives](../models/CheckoutTaxCalculationPreviousAttributes.md#checkouttaxcalculationpreviousattributes-variant-2mode). |

### SubscriptionTaxPreviousAttributes.calculation variant 1: `components_source` = `"callback"`

anyOf variant 1: How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic.; anyOf SubscriptionTaxCalculationPreviousAttributes.

- Optional: `components_source`, `mode`.

### SubscriptionTaxPreviousAttributes.calculation variant 2, 3

anyOf variant 1: How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic.; anyOf variant 2; anyOf variant 2.

- Undeclared: `components_source`, `mode`.
- Value shape: null. How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic. 

### SubscriptionTaxPreviousAttributes.calculation variant 1.components_source

Declared alternatives: [CheckoutTaxCalculationPreviousAttributes variant 2.components_source](../models/CheckoutTaxCalculationPreviousAttributes.md#checkouttaxcalculationpreviousattributes-variant-2components_source).

### SubscriptionTaxPreviousAttributes.calculation variant 1.mode

Declared alternatives: [CheckoutTaxCalculationPreviousAttributes variant 2.mode](../models/CheckoutTaxCalculationPreviousAttributes.md#checkouttaxcalculationpreviousattributes-variant-2mode).

### SubscriptionTaxPreviousAttributes.enabled

### SubscriptionTaxPreviousAttributes.enabled variant 1

anyOf variant 1: Whether the subscription's orders calculate tax..

- Value shape: boolean. Whether the subscription's orders calculate tax. 

### SubscriptionTaxPreviousAttributes.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether the subscription's orders calculate tax. 

