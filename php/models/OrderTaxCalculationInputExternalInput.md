[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxCalculationInputExternalInput

The `external` variant of `OrderTaxCalculationInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Optional | Array of [OrderTaxComponentRequestInput](../models/OrderTaxComponentRequestInput.md#ordertaxcomponentrequestinput) |  |
| `mode` | Required | string | Values: `"external"`. |
| `price_mode` | Required | string | Values: `"additive"`, `"inclusive"`. |

