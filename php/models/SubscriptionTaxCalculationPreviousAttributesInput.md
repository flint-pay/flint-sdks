[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionTaxCalculationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components_source` | Optional | string or null | Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`. `components_source`: [declared alternatives](../models/SubscriptionTaxCalculationPreviousAttributesInput.md#subscriptiontaxcalculationpreviousattributesinputcomponents_source). |
| `mode` | Optional | string or null | How the subscription's orders calculate tax. Values: `"automatic"`, `"external"`. `mode`: [declared alternatives](../models/SubscriptionTaxCalculationPreviousAttributesInput.md#subscriptiontaxcalculationpreviousattributesinputmode). |

### SubscriptionTaxCalculationPreviousAttributesInput.components_source

### SubscriptionTaxCalculationPreviousAttributesInput.components_source variant 1

anyOf variant 1: Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`..

- Value shape: string. Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. Values: `"callback"`.

### SubscriptionTaxCalculationPreviousAttributesInput.components_source variant 2

anyOf variant 2.

- Value shape: null. Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation callback selected in `tax.calculation_callback_id`. Required with mode `external`; not allowed with `automatic`. 

### SubscriptionTaxCalculationPreviousAttributesInput.mode

### SubscriptionTaxCalculationPreviousAttributesInput.mode variant 1

anyOf variant 1: How the subscription's orders calculate tax..

- Value shape: string. How the subscription's orders calculate tax. Values: `"automatic"`, `"external"`.

### SubscriptionTaxCalculationPreviousAttributesInput.mode variant 2

anyOf variant 2.

- Value shape: null. How the subscription's orders calculate tax. 

