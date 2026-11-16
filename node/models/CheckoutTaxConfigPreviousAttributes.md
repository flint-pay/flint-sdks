[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutTaxConfigPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [CheckoutTaxCalculationPreviousAttributes](../models/CheckoutTaxCalculationPreviousAttributes.md#checkouttaxcalculationpreviousattributes) or null | How the order Flint creates calculates tax while tax is enabled. Omitted when it follows `tax.default_calculation` from your settings, where a `provided` default means automatic. On a payment link update, send null to follow your settings again. `calculation`: [declared alternatives](../models/CheckoutTaxConfigPreviousAttributes.md#checkouttaxconfigpreviousattributescalculation). |
| `enabled` | Optional | boolean or null | Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings. `enabled`: [declared alternatives](../models/CheckoutTaxConfigPreviousAttributes.md#checkouttaxconfigpreviousattributesenabled). |

### CheckoutTaxConfigPreviousAttributes.calculation

How the order Flint creates calculates tax while tax is enabled. Omitted when it follows `tax.default_calculation` from your settings, where a `provided` default means automatic. On a payment link update, send null to follow your settings again.

Field definitions: [shared fields](CheckoutSessionTaxPreviousAttributes.md#checkoutsessiontaxpreviousattributescalculation).

### CheckoutTaxConfigPreviousAttributes.calculation variant 1: `components_source` = `"callback"`

anyOf CheckoutTaxCalculationPreviousAttributes.

- Optional: `components_source`, `mode`.

### CheckoutTaxConfigPreviousAttributes.calculation variant 2

anyOf variant 2.

- Undeclared: `components_source`, `mode`.
- Value shape: null. How the order Flint creates calculates tax while tax is enabled. Omitted when it follows `tax.default_calculation` from your settings, where a `provided` default means automatic. On a payment link update, send null to follow your settings again. 

### CheckoutTaxConfigPreviousAttributes.calculation variant 1.components_source

Declared alternatives: [CheckoutSessionTaxPreviousAttributes.calculation variant 1.components_source](../models/CheckoutSessionTaxPreviousAttributes.md#checkoutsessiontaxpreviousattributescalculation-variant-1components_source).

### CheckoutTaxConfigPreviousAttributes.calculation variant 1.mode

Declared alternatives: [CheckoutSessionTaxPreviousAttributes.calculation variant 1.mode](../models/CheckoutSessionTaxPreviousAttributes.md#checkoutsessiontaxpreviousattributescalculation-variant-1mode).

### CheckoutTaxConfigPreviousAttributes.enabled

### CheckoutTaxConfigPreviousAttributes.enabled variant 1

anyOf variant 1: Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings..

- Value shape: boolean. Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings. 

### CheckoutTaxConfigPreviousAttributes.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings. 

