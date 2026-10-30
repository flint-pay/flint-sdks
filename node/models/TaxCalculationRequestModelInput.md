[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationRequestModelInput

Request input. Response: [TaxCalculationRequest](../models/TaxCalculationRequest.md#taxcalculationrequest).

Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of [TaxComponentRequestModelInput](../models/TaxComponentRequestModelInput.md#taxcomponentrequestmodelinput) | minItems: `1`. |
| `price_mode` | Required | string | Values: `"additive"`, `"inclusive"`. |

