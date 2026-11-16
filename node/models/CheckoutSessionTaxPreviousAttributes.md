[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionTaxPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [CheckoutTaxCalculationPreviousAttributes](../models/CheckoutTaxCalculationPreviousAttributes.md#checkouttaxcalculationpreviousattributes) or null | The calculation the session's order uses, as set when the session was created. Omitted when the session followed `tax.default_calculation` from your settings; read `tax` on the order for what it uses. `calculation`: [declared alternatives](../models/CheckoutSessionTaxPreviousAttributes.md#checkoutsessiontaxpreviousattributescalculation). |
| `enabled` | Optional | boolean or null | Whether the session collects tax, as set when it was created. `enabled`: [declared alternatives](../models/CheckoutSessionTaxPreviousAttributes.md#checkoutsessiontaxpreviousattributesenabled). |
| `location_fixed_by_merchant` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | The tax location your order already held when this session was created over it. Hosted checkout shows it and does not ask the buyer for another. Omitted when the buyer may give or change the location. |

### CheckoutSessionTaxPreviousAttributes.calculation

The calculation the session's order uses, as set when the session was created. Omitted when the session followed `tax.default_calculation` from your settings; read `tax` on the order for what it uses.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components_source` | Conditional | string or null | Where external tax comes from. Only `callback` is accepted, because Flint creates the order and nobody can send its components: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`. `components_source`: [declared alternatives](../models/CheckoutSessionTaxPreviousAttributes.md#checkoutsessiontaxpreviousattributescalculation-variant-1components_source). |
| `mode` | Conditional | string or null | `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`. Values: `"automatic"`, `"external"`. `mode`: [declared alternatives](../models/CheckoutSessionTaxPreviousAttributes.md#checkoutsessiontaxpreviousattributescalculation-variant-1mode). |

### CheckoutSessionTaxPreviousAttributes.calculation variant 1: `components_source` = `"callback"`

anyOf CheckoutTaxCalculationPreviousAttributes.

- Optional: `components_source`, `mode`.

### CheckoutSessionTaxPreviousAttributes.calculation variant 2

anyOf variant 2.

- Undeclared: `components_source`, `mode`.
- Value shape: null. The calculation the session's order uses, as set when the session was created. Omitted when the session followed `tax.default_calculation` from your settings; read `tax` on the order for what it uses. 

### CheckoutSessionTaxPreviousAttributes.calculation variant 1.components_source

### CheckoutSessionTaxPreviousAttributes.calculation variant 1.components_source variant 1

anyOf variant 1: Where external tax comes from. Only `callback` is accepted, because Flint creates the order and nobody can send its components: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`..

- Value shape: string. Where external tax comes from. Only `callback` is accepted, because Flint creates the order and nobody can send its components: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`.

### CheckoutSessionTaxPreviousAttributes.calculation variant 1.components_source variant 2

anyOf variant 2.

- Value shape: null. Where external tax comes from. Only `callback` is accepted, because Flint creates the order and nobody can send its components: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. 

### CheckoutSessionTaxPreviousAttributes.calculation variant 1.mode

### CheckoutSessionTaxPreviousAttributes.calculation variant 1.mode variant 1

anyOf variant 1: `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`..

- Value shape: string. `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`. Values: `"automatic"`, `"external"`.

### CheckoutSessionTaxPreviousAttributes.calculation variant 1.mode variant 2

anyOf variant 2.

- Value shape: null. `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`. 

### CheckoutSessionTaxPreviousAttributes.enabled

### CheckoutSessionTaxPreviousAttributes.enabled variant 1

anyOf variant 1: Whether the session collects tax, as set when it was created..

- Value shape: boolean. Whether the session collects tax, as set when it was created. 

### CheckoutSessionTaxPreviousAttributes.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether the session collects tax, as set when it was created. 

