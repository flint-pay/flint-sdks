[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationRequestPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Optional | Array of [TaxComponentRequestPreviousAttributesInput](../models/TaxComponentRequestPreviousAttributesInput.md#taxcomponentrequestpreviousattributesinput) or null | The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. `components`: [declared alternatives](../models/TaxCalculationRequestPreviousAttributesInput.md#taxcalculationrequestpreviousattributesinputcomponents). |
| `price_mode` | Optional | string or null | Whether the price this tax applies to already includes the tax. Values: `"additive"`, `"inclusive"`. `price_mode`: [declared alternatives](../models/TaxCalculationRequestPreviousAttributesInput.md#taxcalculationrequestpreviousattributesinputprice_mode). |

### TaxCalculationRequestPreviousAttributesInput.components

### TaxCalculationRequestPreviousAttributesInput.components variant 1

anyOf variant 1: The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax..

- Value shape: Array of [TaxComponentRequestPreviousAttributesInput](../models/TaxComponentRequestPreviousAttributesInput.md#taxcomponentrequestpreviousattributesinput). The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. minItems: `1`. 

### TaxCalculationRequestPreviousAttributesInput.components variant 2

anyOf variant 2.

- Value shape: null. The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. 

### TaxCalculationRequestPreviousAttributesInput.price_mode

### TaxCalculationRequestPreviousAttributesInput.price_mode variant 1

anyOf variant 1: Whether the price this tax applies to already includes the tax..

- Value shape: string. Whether the price this tax applies to already includes the tax. Values: `"additive"`, `"inclusive"`.

### TaxCalculationRequestPreviousAttributesInput.price_mode variant 2

anyOf variant 2.

- Value shape: null. Whether the price this tax applies to already includes the tax. 

