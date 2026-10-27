[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationRequest

Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of [TaxComponentRequest](../models/TaxComponentRequest.md#taxcomponentrequest) | minItems: `1`. |
| `price_mode` | Required | string | Values: `"additive"`, `"inclusive"`. |

