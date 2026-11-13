[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxCalculationRequestInput

How tax is calculated on an order: automatically, or externally with the tax components you supply.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Optional | Array of [OrderTaxComponentRequestInput](../models/OrderTaxComponentRequestInput.md#ordertaxcomponentrequestinput) | Flat order taxes, such as a retail delivery fee. Send them in `external` mode; `automatic` mode doesn't accept them. |
| `components_source` | Optional | string | Where external tax components come from. `provided` (the default): you send components for every line item and charge with an amount. `callback`: Flint asks the environment's selected tax calculation callback for them whenever tax would be recalculated, and refuses components, `line_item_calculations`, `charge_calculations`, and `delivery_charge_calculation` in requests. A request that needs an evaluation while no active callback is selected returns `409 ACTION_NOT_ALLOWED` with reason `configuration_required`. Default: `"provided"`. Values: `"provided"`, `"callback"`. |
| `mode` | Required | string | Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Values: `"automatic"`, `"external"`. |
| `price_mode` | Required | string | Whether prices already include tax. `automatic` mode and flat order taxes require `additive`. Values: `"additive"`, `"inclusive"`. |

### OrderTaxCalculationRequestInput variant 1: `mode` = `"automatic"`

oneOf with mode: "automatic": The `automatic` variant of `OrderTaxCalculationInput`..

- Constraints for `mode`: Values: `"automatic"`.

### OrderTaxCalculationRequestInput variant 2: `mode` = `"external"`

oneOf with mode: "external": The `external` variant of `OrderTaxCalculationInput`..

- Constraints for `mode`: Values: `"external"`.

