[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionTaxCalculationInput

Replaced as a whole: send every field you want to keep. `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`, because Flint creates the subscription's orders and nobody can send their components.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components_source` | Optional | string | Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`. |
| `mode` | Required | string | How the subscription's orders calculate tax. Values: `"automatic"`, `"external"`. |

