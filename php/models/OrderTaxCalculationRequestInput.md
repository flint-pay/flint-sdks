[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxCalculationRequestInput

How tax is calculated on an order: automatically, or externally with the tax components you supply.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Optional | Array of [OrderTaxComponentRequestInput](../models/OrderTaxComponentRequestInput.md#ordertaxcomponentrequestinput) |  |
| `mode` | Required | string | Values: `"automatic"`, `"external"`. |
| `price_mode` | Required | string | Values: `"additive"`, `"inclusive"`. |

### OrderTaxCalculationRequestInput variant 1: `mode` = `"automatic"`

oneOf variant 1: The `automatic` variant of `OrderTaxCalculationInput`..

- Constraints for `mode`: Values: `"automatic"`.

### OrderTaxCalculationRequestInput variant 2: `mode` = `"external"`

oneOf variant 2: The `external` variant of `OrderTaxCalculationInput`..

- Constraints for `mode`: Values: `"external"`.

