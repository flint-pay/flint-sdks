[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingStrategyPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Optional | [DeliveryCalculatedPricingStrategyPreviousAttributesInput](../models/DeliveryCalculatedPricingStrategyPreviousAttributesInput.md#deliverycalculatedpricingstrategypreviousattributesinput) or null | Calculated pricing settings. Set only when `type` is `calculated`. |
| `callback` | Optional | [DeliveryExternalPricingStrategyPreviousAttributesInput](../models/DeliveryExternalPricingStrategyPreviousAttributesInput.md#deliveryexternalpricingstrategypreviousattributesinput) or null | Rate callback pricing settings. Set only when `type` is `callback`. |
| `caller_supplied` | Optional | [DeliveryExternalPricingStrategyPreviousAttributesInput](../models/DeliveryExternalPricingStrategyPreviousAttributesInput.md#deliveryexternalpricingstrategypreviousattributesinput) or null | Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. |
| `fixed` | Optional | [DeliveryFixedPricingStrategyPreviousAttributesInput](../models/DeliveryFixedPricingStrategyPreviousAttributesInput.md#deliveryfixedpricingstrategypreviousattributesinput) or null | Fixed pricing settings. Set only when `type` is `fixed`. |
| `rate_table` | Optional | [DeliveryRateTablePricingStrategyPreviousAttributesInput](../models/DeliveryRateTablePricingStrategyPreviousAttributesInput.md#deliveryratetablepricingstrategypreviousattributesinput) or null | Rate table pricing settings. Set only when `type` is `rate_table`. |
| `tiered` | Optional | [DeliveryTieredPricingStrategyPreviousAttributesInput](../models/DeliveryTieredPricingStrategyPreviousAttributesInput.md#deliverytieredpricingstrategypreviousattributesinput) or null | Tiered pricing settings. Set only when `type` is `tiered`. |
| `type` | Optional | (string or null) and Alternative shapes (see declared variants) | How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`. `type`: [declared alternatives](../models/DeliveryPricingStrategyPreviousAttributesInput.md#deliverypricingstrategypreviousattributesinput-variant-1type), [declared alternatives](../models/DeliveryPricingStrategyPreviousAttributesInput.md#deliverypricingstrategypreviousattributesinput-variant-2type), [declared alternatives](../models/DeliveryPricingStrategyPreviousAttributesInput.md#deliverypricingstrategypreviousattributesinput-variant-3type), [declared alternatives](../models/DeliveryPricingStrategyPreviousAttributesInput.md#deliverypricingstrategypreviousattributesinput-variant-4type), [declared alternatives](../models/DeliveryPricingStrategyPreviousAttributesInput.md#deliverypricingstrategypreviousattributesinput-variant-5type), [declared alternatives](../models/DeliveryPricingStrategyPreviousAttributesInput.md#deliverypricingstrategypreviousattributesinput-variant-6type). |

### DeliveryPricingStrategyPreviousAttributesInput variant 1: `type` = `"calculated"`

anyOf DeliveryPricingStrategyCalculatedPreviousAttributes.

- Constraints for `type`: Values: `"calculated"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 2: `type` = `"callback"`

anyOf DeliveryPricingStrategyCallbackPreviousAttributes.

- Constraints for `type`: Values: `"callback"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 3: `type` = `"caller_supplied"`

anyOf DeliveryPricingStrategyCallerSuppliedPreviousAttributes.

- Constraints for `type`: Values: `"caller_supplied"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 4: `type` = `"fixed"`

anyOf DeliveryPricingStrategyFixedPreviousAttributes.

- Constraints for `type`: Values: `"fixed"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 5: `type` = `"rate_table"`

anyOf DeliveryPricingStrategyRateTablePreviousAttributes.

- Constraints for `type`: Values: `"rate_table"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 6: `type` = `"tiered"`

anyOf DeliveryPricingStrategyTieredPreviousAttributes.

- Constraints for `type`: Values: `"tiered"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 1.type

### DeliveryPricingStrategyPreviousAttributesInput variant 1.type variant 1

anyOf group 1 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the method sets its price. Set the property named by this value. 

### DeliveryPricingStrategyPreviousAttributesInput variant 1.type variant 3

anyOf group 2 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"calculated"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 1.type variant 5

anyOf group 3 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: any. How the method sets its price. Set the property named by this value. Values: `"calculated"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 2.type

### DeliveryPricingStrategyPreviousAttributesInput variant 2.type variant 1

anyOf group 1 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the method sets its price. Set the property named by this value. 

### DeliveryPricingStrategyPreviousAttributesInput variant 2.type variant 3

anyOf group 2 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"callback"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 2.type variant 5

anyOf group 3 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: any. How the method sets its price. Set the property named by this value. Values: `"callback"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 3.type

### DeliveryPricingStrategyPreviousAttributesInput variant 3.type variant 1

anyOf group 1 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 3.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the method sets its price. Set the property named by this value. 

### DeliveryPricingStrategyPreviousAttributesInput variant 3.type variant 3

anyOf group 2 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"caller_supplied"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 3.type variant 5

anyOf group 3 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: any. How the method sets its price. Set the property named by this value. Values: `"caller_supplied"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 4.type

### DeliveryPricingStrategyPreviousAttributesInput variant 4.type variant 1

anyOf group 1 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 4.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the method sets its price. Set the property named by this value. 

### DeliveryPricingStrategyPreviousAttributesInput variant 4.type variant 3

anyOf group 2 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 4.type variant 5

anyOf group 3 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: any. How the method sets its price. Set the property named by this value. Values: `"fixed"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 5.type

### DeliveryPricingStrategyPreviousAttributesInput variant 5.type variant 1

anyOf group 1 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 5.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the method sets its price. Set the property named by this value. 

### DeliveryPricingStrategyPreviousAttributesInput variant 5.type variant 3

anyOf group 2 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"rate_table"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 5.type variant 5

anyOf group 3 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: any. How the method sets its price. Set the property named by this value. Values: `"rate_table"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 6.type

### DeliveryPricingStrategyPreviousAttributesInput variant 6.type variant 1

anyOf group 1 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 6.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the method sets its price. Set the property named by this value. 

### DeliveryPricingStrategyPreviousAttributesInput variant 6.type variant 3

anyOf group 2 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"tiered"`.

### DeliveryPricingStrategyPreviousAttributesInput variant 6.type variant 5

anyOf group 3 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: any. How the method sets its price. Set the property named by this value. Values: `"tiered"`.

