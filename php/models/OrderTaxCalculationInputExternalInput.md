[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxCalculationInputExternalInput

The `external` variant of `OrderTaxCalculationInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Optional | Array of [OrderTaxComponentRequestInput](../models/OrderTaxComponentRequestInput.md#ordertaxcomponentrequestinput) | Flat order taxes, such as a retail delivery fee. Send them in `external` mode; `automatic` mode doesn't accept them. |
| `mode` | Required | string | Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Values: `"external"`. |
| `price_mode` | Required | string | Whether prices already include tax. `automatic` mode and flat order taxes require `additive`. Values: `"additive"`, `"inclusive"`. |

