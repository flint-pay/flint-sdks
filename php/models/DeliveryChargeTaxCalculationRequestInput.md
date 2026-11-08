[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryChargeTaxCalculationRequestInput

A percentage tax template for the delivery charges checkout generates, including paid pickup: whether the charge includes the tax, and the tax components. Allowed only on orders that use external tax.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of [TaxComponentRequestInput](../models/TaxComponentRequestInput.md#taxcomponentrequestinput) | The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type. minItems: `1`. |
| `mode` | Optional | string | Optional. If you send it, it must be `external`, because delivery charge templates apply only to orders that use external tax. Values: `"external"`. |
| `price_mode` | Required | string | Whether the delivery charge already includes the tax. Values: `"additive"`, `"inclusive"`. |

