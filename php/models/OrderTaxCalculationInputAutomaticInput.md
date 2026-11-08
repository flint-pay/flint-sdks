[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxCalculationInputAutomaticInput

The `automatic` variant of `OrderTaxCalculationInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Values: `"automatic"`. |
| `price_mode` | Required | string | Whether prices already include tax. `automatic` mode and flat order taxes require `additive`. Values: `"additive"`, `"inclusive"`. |

