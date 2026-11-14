[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxDefaultCalculationRequestInput

The calculation an order uses when its request leaves `tax.calculation` unset.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components_source` | Optional | string | Where an external order's components come from: `provided` (the default) when you send them, or `callback` when Flint asks the selected tax calculation callback. Present only with mode `external`. Values: `"provided"`, `"callback"`. |
| `mode` | Required | string | `automatic` calculates tax through the tax connection. `external` uses tax components from `components_source`. Values: `"automatic"`, `"external"`. |

