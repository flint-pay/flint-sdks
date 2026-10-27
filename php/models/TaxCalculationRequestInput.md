[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationRequestInput

Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of [TaxComponentRequestInput](../models/TaxComponentRequestInput.md#taxcomponentrequestinput) | minItems: `1`. |
| `price_mode` | Required | string | Values: `"additive"`, `"inclusive"`. |

