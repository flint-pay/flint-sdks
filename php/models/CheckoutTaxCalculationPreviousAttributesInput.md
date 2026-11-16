[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutTaxCalculationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components_source` | Optional | string or null | Where external tax comes from. Only `callback` is accepted, because Flint creates the order and nobody can send its components: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`. `components_source`: [declared alternatives](../models/CheckoutTaxCalculationPreviousAttributesInput.md#checkouttaxcalculationpreviousattributesinputcomponents_source). |
| `mode` | Optional | string or null | `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`. Values: `"automatic"`, `"external"`. `mode`: [declared alternatives](../models/CheckoutTaxCalculationPreviousAttributesInput.md#checkouttaxcalculationpreviousattributesinputmode). |

### CheckoutTaxCalculationPreviousAttributesInput.components_source

### CheckoutTaxCalculationPreviousAttributesInput.components_source variant 1

anyOf variant 1: Where external tax comes from. Only `callback` is accepted, because Flint creates the order and nobody can send its components: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`..

- Value shape: string. Where external tax comes from. Only `callback` is accepted, because Flint creates the order and nobody can send its components: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`.

### CheckoutTaxCalculationPreviousAttributesInput.components_source variant 2

anyOf variant 2.

- Value shape: null. Where external tax comes from. Only `callback` is accepted, because Flint creates the order and nobody can send its components: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. 

### CheckoutTaxCalculationPreviousAttributesInput.mode

### CheckoutTaxCalculationPreviousAttributesInput.mode variant 1

anyOf variant 1: `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`..

- Value shape: string. `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`. Values: `"automatic"`, `"external"`.

### CheckoutTaxCalculationPreviousAttributesInput.mode variant 2

anyOf variant 2.

- Value shape: null. `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`. 

