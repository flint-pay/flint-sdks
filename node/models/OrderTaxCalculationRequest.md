[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxCalculationRequest

How tax is calculated on an order: automatically, or externally with the tax components you supply.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Optional | Array of [OrderTaxComponentRequest](../models/OrderTaxComponentRequest.md#ordertaxcomponentrequest) | Flat order taxes, such as a retail delivery fee. Send them in `external` mode; `automatic` mode doesn't accept them. |
| `mode` | Required | string | Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Values: `"automatic"`, `"external"`. |
| `price_mode` | Required | string | Whether prices already include tax. `automatic` mode and flat order taxes require `additive`. Values: `"additive"`, `"inclusive"`. |

### OrderTaxCalculationRequest variant 1: `mode` = `"automatic"`

oneOf with mode: "automatic": The `automatic` variant of `OrderTaxCalculationInput`..

- Constraints for `mode`: Values: `"automatic"`.

### OrderTaxCalculationRequest variant 2: `mode` = `"external"`

oneOf with mode: "external": The `external` variant of `OrderTaxCalculationInput`..

- Constraints for `mode`: Values: `"external"`.

