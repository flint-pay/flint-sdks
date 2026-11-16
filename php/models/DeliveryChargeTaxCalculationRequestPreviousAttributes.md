[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryChargeTaxCalculationRequestPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Optional | Array of [TaxComponentRequestPreviousAttributes](../models/TaxComponentRequestPreviousAttributes.md#taxcomponentrequestpreviousattributes) or null | The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type. `components`: [declared alternatives](../models/DeliveryChargeTaxCalculationRequestPreviousAttributes.md#deliverychargetaxcalculationrequestpreviousattributescomponents). |
| `mode` | Optional | string or null | Optional. If you send it, it must be `external`, because delivery charge templates apply only to orders that use external tax. Values: `"external"`. `mode`: [declared alternatives](../models/DeliveryChargeTaxCalculationRequestPreviousAttributes.md#deliverychargetaxcalculationrequestpreviousattributesmode). |
| `price_mode` | Optional | string or null | Whether the delivery charge already includes the tax. Values: `"additive"`, `"inclusive"`. `price_mode`: [declared alternatives](../models/DeliveryChargeTaxCalculationRequestPreviousAttributes.md#deliverychargetaxcalculationrequestpreviousattributesprice_mode). |

### DeliveryChargeTaxCalculationRequestPreviousAttributes.components

### DeliveryChargeTaxCalculationRequestPreviousAttributes.components variant 1

anyOf variant 1: The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type..

- Value shape: Array of [TaxComponentRequestPreviousAttributes](../models/TaxComponentRequestPreviousAttributes.md#taxcomponentrequestpreviousattributes). The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type. The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type. minItems: `1`. 

### DeliveryChargeTaxCalculationRequestPreviousAttributes.components variant 2

anyOf variant 2.

- Value shape: null. The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type. 

### DeliveryChargeTaxCalculationRequestPreviousAttributes.mode

### DeliveryChargeTaxCalculationRequestPreviousAttributes.mode variant 1

anyOf variant 1: Optional. If you send it, it must be `external`, because delivery charge templates apply only to orders that use external tax..

- Value shape: string. Optional. If you send it, it must be `external`, because delivery charge templates apply only to orders that use external tax. Values: `"external"`.

### DeliveryChargeTaxCalculationRequestPreviousAttributes.mode variant 2

anyOf variant 2.

- Value shape: null. Optional. If you send it, it must be `external`, because delivery charge templates apply only to orders that use external tax. 

### DeliveryChargeTaxCalculationRequestPreviousAttributes.price_mode

### DeliveryChargeTaxCalculationRequestPreviousAttributes.price_mode variant 1

anyOf variant 1: Whether the delivery charge already includes the tax..

- Value shape: string. Whether the delivery charge already includes the tax. Values: `"additive"`, `"inclusive"`.

### DeliveryChargeTaxCalculationRequestPreviousAttributes.price_mode variant 2

anyOf variant 2.

- Value shape: null. Whether the delivery charge already includes the tax. 

