[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutTaxConfigRequestInput

Request input. Response: [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig).

Whether tax is collected for a checkout session or payment link.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Optional | boolean | Whether Flint calculates automatic tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings. |

