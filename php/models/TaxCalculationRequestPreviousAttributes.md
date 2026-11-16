[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationRequestPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Optional | Array of [TaxComponentRequestPreviousAttributes](../models/TaxComponentRequestPreviousAttributes.md#taxcomponentrequestpreviousattributes) or null | The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. `components`: [declared alternatives](../models/TaxCalculationRequestPreviousAttributes.md#taxcalculationrequestpreviousattributescomponents). |
| `price_mode` | Optional | string or null | Whether the price this tax applies to already includes the tax. Values: `"additive"`, `"inclusive"`. `price_mode`: [declared alternatives](../models/TaxCalculationRequestPreviousAttributes.md#taxcalculationrequestpreviousattributesprice_mode). |

### TaxCalculationRequestPreviousAttributes.components

### TaxCalculationRequestPreviousAttributes.components variant 1

anyOf variant 1: The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax..

- Value shape: Array of [TaxComponentRequestPreviousAttributes](../models/TaxComponentRequestPreviousAttributes.md#taxcomponentrequestpreviousattributes). The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. minItems: `1`. 

### TaxCalculationRequestPreviousAttributes.components variant 2

anyOf variant 2.

- Value shape: null. The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. 

### TaxCalculationRequestPreviousAttributes.price_mode

### TaxCalculationRequestPreviousAttributes.price_mode variant 1

anyOf variant 1: Whether the price this tax applies to already includes the tax..

- Value shape: string. Whether the price this tax applies to already includes the tax. Values: `"additive"`, `"inclusive"`.

### TaxCalculationRequestPreviousAttributes.price_mode variant 2

anyOf variant 2.

- Value shape: null. Whether the price this tax applies to already includes the tax. 

