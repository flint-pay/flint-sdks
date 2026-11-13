[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutTaxConfigRequestInput

Request input. Response: [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig).

Whether tax is collected for a checkout session or payment link.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [CheckoutTaxCalculationRequestInput](../models/CheckoutTaxCalculationRequestInput.md#checkouttaxcalculationrequestinput) | How the order Flint creates calculates tax while tax is enabled. Omitted when it follows `tax.default_calculation` from your settings, where a `provided` default means automatic. On a payment link update, send null to follow your settings again. The calculation the order Flint creates uses while tax is enabled. Replaced as a whole: send every field you want to keep. Omit it to use `tax.default_calculation` from your settings; a `provided` default applies only to orders you create, so it means automatic here. |
| `enabled` | Optional | boolean | Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings. |

