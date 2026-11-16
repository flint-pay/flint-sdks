[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryChargeTaxCalculationRequestPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Optional | Array of [TaxComponentRequestPreviousAttributesInput](../models/TaxComponentRequestPreviousAttributesInput.md#taxcomponentrequestpreviousattributesinput) or null | The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type. `components`: [declared alternatives](../models/DeliveryChargeTaxCalculationRequestPreviousAttributesInput.md#deliverychargetaxcalculationrequestpreviousattributesinputcomponents). |
| `mode` | Optional | string or null | Optional. If you send it, it must be `external`, because delivery charge templates apply only to orders that use external tax. Values: `"external"`. `mode`: [declared alternatives](../models/DeliveryChargeTaxCalculationRequestPreviousAttributesInput.md#deliverychargetaxcalculationrequestpreviousattributesinputmode). |
| `price_mode` | Optional | string or null | Whether the delivery charge already includes the tax. Values: `"additive"`, `"inclusive"`. `price_mode`: [declared alternatives](../models/DeliveryChargeTaxCalculationRequestPreviousAttributesInput.md#deliverychargetaxcalculationrequestpreviousattributesinputprice_mode). |

### DeliveryChargeTaxCalculationRequestPreviousAttributesInput.components

### DeliveryChargeTaxCalculationRequestPreviousAttributesInput.components variant 1

anyOf variant 1: The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type..

- Value shape: Array of [TaxComponentRequestPreviousAttributesInput](../models/TaxComponentRequestPreviousAttributesInput.md#taxcomponentrequestpreviousattributesinput). The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type. The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type. minItems: `1`. 

### DeliveryChargeTaxCalculationRequestPreviousAttributesInput.components variant 2

anyOf variant 2.

- Value shape: null. The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type. 

### DeliveryChargeTaxCalculationRequestPreviousAttributesInput.mode

### DeliveryChargeTaxCalculationRequestPreviousAttributesInput.mode variant 1

anyOf variant 1: Optional. If you send it, it must be `external`, because delivery charge templates apply only to orders that use external tax..

- Value shape: string. Optional. If you send it, it must be `external`, because delivery charge templates apply only to orders that use external tax. Values: `"external"`.

### DeliveryChargeTaxCalculationRequestPreviousAttributesInput.mode variant 2

anyOf variant 2.

- Value shape: null. Optional. If you send it, it must be `external`, because delivery charge templates apply only to orders that use external tax. 

### DeliveryChargeTaxCalculationRequestPreviousAttributesInput.price_mode

### DeliveryChargeTaxCalculationRequestPreviousAttributesInput.price_mode variant 1

anyOf variant 1: Whether the delivery charge already includes the tax..

- Value shape: string. Whether the delivery charge already includes the tax. Values: `"additive"`, `"inclusive"`.

### DeliveryChargeTaxCalculationRequestPreviousAttributesInput.price_mode variant 2

anyOf variant 2.

- Value shape: null. Whether the delivery charge already includes the tax. 

