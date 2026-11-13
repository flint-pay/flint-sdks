[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutTaxConfig







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [CheckoutTaxCalculation](../models/CheckoutTaxCalculation.md#checkouttaxcalculation) | How the order Flint creates calculates tax while tax is enabled. Omitted when it follows `tax.default_calculation` from your settings, where a `provided` default means automatic. On a payment link update, send null to follow your settings again. `calculation`: [field definitions](../models/CheckoutTaxConfig.md#checkouttaxconfig-variant-1calculation), [field definitions](../models/CheckoutTaxConfig.md#checkouttaxconfig-variant-2calculation). |
| `enabled` | Optional | boolean | Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings. |

### CheckoutTaxConfig variant 1

anyOf variant 1: Declared schema CheckoutTaxConfig. Whether tax is collected for a checkout session or payment link..

No additional constraints.

### CheckoutTaxConfig variant 2

anyOf variant 2: Declared schema CheckoutTaxConfigRequest. Whether tax is collected for a checkout session or payment link..

No additional constraints.

### CheckoutTaxConfig variant 1.calculation

How the order Flint creates calculates tax while tax is enabled. Omitted when it follows `tax.default_calculation` from your settings, where a `provided` default means automatic. On a payment link update, send null to follow your settings again. The calculation the order Flint creates uses while tax is enabled. Replaced as a whole: send every field you want to keep. Omit it to use `tax.default_calculation` from your settings; a `provided` default applies only to orders you create, so it means automatic here.

Field definitions: [shared fields](CheckoutTaxCalculationRequestInput.md#checkouttaxcalculationrequestinput).

### CheckoutTaxConfig variant 2.calculation

How the order Flint creates calculates tax while tax is enabled. Omitted when it follows `tax.default_calculation` from your settings, where a `provided` default means automatic. On a payment link update, send null to follow your settings again. The calculation the order Flint creates uses while tax is enabled. Replaced as a whole: send every field you want to keep. Omit it to use `tax.default_calculation` from your settings; a `provided` default applies only to orders you create, so it means automatic here.

Field definitions: [shared fields](CheckoutTaxCalculationRequestInput.md#checkouttaxcalculationrequestinput).

