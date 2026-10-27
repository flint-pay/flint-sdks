[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxCalculationInputExternal

The `external` variant of `OrderTaxCalculationInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Optional | Array of [OrderTaxComponentRequest](../models/OrderTaxComponentRequest.md#ordertaxcomponentrequest) |  |
| `mode` | Required | string | Values: `"external"`. |
| `price_mode` | Required | string | Values: `"additive"`, `"inclusive"`. |

