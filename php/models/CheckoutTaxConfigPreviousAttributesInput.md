[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutTaxConfigPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [CheckoutTaxCalculationPreviousAttributesInput](../models/CheckoutTaxCalculationPreviousAttributesInput.md#checkouttaxcalculationpreviousattributesinput) or null | How the order Flint creates calculates tax while tax is enabled. Omitted when it follows `tax.default_calculation` from your settings, where a `provided` default means automatic. On a payment link update, send null to follow your settings again. |
| `enabled` | Optional | boolean or null | Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings. `enabled`: [declared alternatives](../models/CheckoutTaxConfigPreviousAttributesInput.md#checkouttaxconfigpreviousattributesinputenabled). |

### CheckoutTaxConfigPreviousAttributesInput.enabled

### CheckoutTaxConfigPreviousAttributesInput.enabled variant 1

anyOf variant 1: Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings..

- Value shape: boolean. Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings. 

### CheckoutTaxConfigPreviousAttributesInput.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings. 

