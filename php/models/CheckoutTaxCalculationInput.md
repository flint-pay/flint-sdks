[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutTaxCalculationInput

The calculation the order Flint creates uses while tax is enabled. Replaced as a whole: send every field you want to keep. Omit it to use `tax.default_calculation` from your settings; a `provided` default applies only to orders you create, so it means automatic here.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components_source` | Optional | string | Where external tax comes from. Only `callback` is accepted, because Flint creates the order and nobody can send its components: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`. |
| `mode` | Required | string | `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`. Values: `"automatic"`, `"external"`. |

