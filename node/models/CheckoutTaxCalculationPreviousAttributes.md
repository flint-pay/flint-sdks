[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutTaxCalculationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components_source` | Optional | string or null | `components_source`: [declared alternatives](../models/CheckoutSessionTaxPreviousAttributes.md#checkoutsessiontaxpreviousattributescalculation-variant-1components_source), [declared alternatives](../models/CheckoutTaxCalculationPreviousAttributes.md#checkouttaxcalculationpreviousattributes-variant-2components_source). |
| `mode` | Optional | string or null | `mode`: [declared alternatives](../models/CheckoutSessionTaxPreviousAttributes.md#checkoutsessiontaxpreviousattributescalculation-variant-1mode), [declared alternatives](../models/CheckoutTaxCalculationPreviousAttributes.md#checkouttaxcalculationpreviousattributes-variant-2mode). |

### CheckoutTaxCalculationPreviousAttributes variant 1: `components_source` = `"callback"`

anyOf variant 1: Declared schema CheckoutTaxCalculationPreviousAttributes. .

- Constraints for `components_source`: Where external tax comes from. Only `callback` is accepted, because Flint creates the order and nobody can send its components: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`.
- Constraints for `mode`: `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`. Values: `"automatic"`, `"external"`.

### CheckoutTaxCalculationPreviousAttributes variant 2: `components_source` = `"callback"`

anyOf variant 2: Declared schema SubscriptionTaxCalculationPreviousAttributes. .

- Constraints for `components_source`: Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`.
- Constraints for `mode`: How the subscription's orders calculate tax. Values: `"automatic"`, `"external"`.

### CheckoutTaxCalculationPreviousAttributes variant 1.components_source

Declared alternatives: [CheckoutSessionTaxPreviousAttributes.calculation variant 1.components_source](../models/CheckoutSessionTaxPreviousAttributes.md#checkoutsessiontaxpreviousattributescalculation-variant-1components_source).

### CheckoutTaxCalculationPreviousAttributes variant 1.mode

Declared alternatives: [CheckoutSessionTaxPreviousAttributes.calculation variant 1.mode](../models/CheckoutSessionTaxPreviousAttributes.md#checkoutsessiontaxpreviousattributescalculation-variant-1mode).

### CheckoutTaxCalculationPreviousAttributes variant 2.components_source

### CheckoutTaxCalculationPreviousAttributes variant 2.components_source variant 1

anyOf variant 1: Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`..

- Value shape: string. Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`.

### CheckoutTaxCalculationPreviousAttributes variant 2.components_source variant 2

anyOf variant 2.

- Value shape: null. Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. 

### CheckoutTaxCalculationPreviousAttributes variant 2.mode

### CheckoutTaxCalculationPreviousAttributes variant 2.mode variant 1

anyOf variant 1: How the subscription's orders calculate tax..

- Value shape: string. How the subscription's orders calculate tax. Values: `"automatic"`, `"external"`.

### CheckoutTaxCalculationPreviousAttributes variant 2.mode variant 2

anyOf variant 2.

- Value shape: null. How the subscription's orders calculate tax. 

