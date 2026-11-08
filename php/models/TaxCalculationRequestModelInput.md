[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationRequestModelInput

Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of [TaxComponentRequestModelInput](../models/TaxComponentRequestModelInput.md#taxcomponentrequestmodelinput) | The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. minItems: `1`. |
| `price_mode` | Required | string | Whether the price this tax applies to already includes the tax. Values: `"additive"`, `"inclusive"`. |

