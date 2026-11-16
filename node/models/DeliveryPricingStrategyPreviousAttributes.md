[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingStrategyPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Optional | [DeliveryCalculatedPricingStrategyPreviousAttributes](../models/DeliveryCalculatedPricingStrategyPreviousAttributes.md#deliverycalculatedpricingstrategypreviousattributes) or null | Calculated pricing settings. Set only when `type` is `calculated`. |
| `callback` | Optional | [DeliveryExternalPricingStrategyPreviousAttributes](../models/DeliveryExternalPricingStrategyPreviousAttributes.md#deliveryexternalpricingstrategypreviousattributes) or null | Rate callback pricing settings. Set only when `type` is `callback`. |
| `caller_supplied` | Optional | [DeliveryExternalPricingStrategyPreviousAttributes](../models/DeliveryExternalPricingStrategyPreviousAttributes.md#deliveryexternalpricingstrategypreviousattributes) or null | Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. |
| `fixed` | Optional | [DeliveryFixedPricingStrategyPreviousAttributes](../models/DeliveryFixedPricingStrategyPreviousAttributes.md#deliveryfixedpricingstrategypreviousattributes) or null | Fixed pricing settings. Set only when `type` is `fixed`. |
| `rate_table` | Optional | [DeliveryRateTablePricingStrategyPreviousAttributes](../models/DeliveryRateTablePricingStrategyPreviousAttributes.md#deliveryratetablepricingstrategypreviousattributes) or null | Rate table pricing settings. Set only when `type` is `rate_table`. |
| `tiered` | Optional | [DeliveryTieredPricingStrategyPreviousAttributes](../models/DeliveryTieredPricingStrategyPreviousAttributes.md#deliverytieredpricingstrategypreviousattributes) or null | Tiered pricing settings. Set only when `type` is `tiered`. |
| `type` | Optional | (string or null) and Alternative shapes (see declared variants) | How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`. `type`: [declared alternatives](../models/DeliveryPricingStrategyPreviousAttributes.md#deliverypricingstrategypreviousattributes-variant-1type), [declared alternatives](../models/DeliveryPricingStrategyPreviousAttributes.md#deliverypricingstrategypreviousattributes-variant-2type), [declared alternatives](../models/DeliveryPricingStrategyPreviousAttributes.md#deliverypricingstrategypreviousattributes-variant-3type), [declared alternatives](../models/DeliveryPricingStrategyPreviousAttributes.md#deliverypricingstrategypreviousattributes-variant-4type), [declared alternatives](../models/DeliveryPricingStrategyPreviousAttributes.md#deliverypricingstrategypreviousattributes-variant-5type), [declared alternatives](../models/DeliveryPricingStrategyPreviousAttributes.md#deliverypricingstrategypreviousattributes-variant-6type). |

### DeliveryPricingStrategyPreviousAttributes variant 1: `type` = `"calculated"`

anyOf DeliveryPricingStrategyCalculatedPreviousAttributes.

- Constraints for `type`: Values: `"calculated"`.

### DeliveryPricingStrategyPreviousAttributes variant 2: `type` = `"callback"`

anyOf DeliveryPricingStrategyCallbackPreviousAttributes.

- Constraints for `type`: Values: `"callback"`.

### DeliveryPricingStrategyPreviousAttributes variant 3: `type` = `"caller_supplied"`

anyOf DeliveryPricingStrategyCallerSuppliedPreviousAttributes.

- Constraints for `type`: Values: `"caller_supplied"`.

### DeliveryPricingStrategyPreviousAttributes variant 4: `type` = `"fixed"`

anyOf DeliveryPricingStrategyFixedPreviousAttributes.

- Constraints for `type`: Values: `"fixed"`.

### DeliveryPricingStrategyPreviousAttributes variant 5: `type` = `"rate_table"`

anyOf DeliveryPricingStrategyRateTablePreviousAttributes.

- Constraints for `type`: Values: `"rate_table"`.

### DeliveryPricingStrategyPreviousAttributes variant 6: `type` = `"tiered"`

anyOf DeliveryPricingStrategyTieredPreviousAttributes.

- Constraints for `type`: Values: `"tiered"`.

### DeliveryPricingStrategyPreviousAttributes variant 1.type

### DeliveryPricingStrategyPreviousAttributes variant 1.type variant 1

anyOf group 1 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`.

### DeliveryPricingStrategyPreviousAttributes variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the method sets its price. Set the property named by this value. 

### DeliveryPricingStrategyPreviousAttributes variant 1.type variant 3

anyOf group 2 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"calculated"`.

### DeliveryPricingStrategyPreviousAttributes variant 1.type variant 5

anyOf group 3 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: any. How the method sets its price. Set the property named by this value. Values: `"calculated"`.

### DeliveryPricingStrategyPreviousAttributes variant 2.type

### DeliveryPricingStrategyPreviousAttributes variant 2.type variant 1

anyOf group 1 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`.

### DeliveryPricingStrategyPreviousAttributes variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the method sets its price. Set the property named by this value. 

### DeliveryPricingStrategyPreviousAttributes variant 2.type variant 3

anyOf group 2 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"callback"`.

### DeliveryPricingStrategyPreviousAttributes variant 2.type variant 5

anyOf group 3 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: any. How the method sets its price. Set the property named by this value. Values: `"callback"`.

### DeliveryPricingStrategyPreviousAttributes variant 3.type

### DeliveryPricingStrategyPreviousAttributes variant 3.type variant 1

anyOf group 1 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`.

### DeliveryPricingStrategyPreviousAttributes variant 3.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the method sets its price. Set the property named by this value. 

### DeliveryPricingStrategyPreviousAttributes variant 3.type variant 3

anyOf group 2 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"caller_supplied"`.

### DeliveryPricingStrategyPreviousAttributes variant 3.type variant 5

anyOf group 3 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: any. How the method sets its price. Set the property named by this value. Values: `"caller_supplied"`.

### DeliveryPricingStrategyPreviousAttributes variant 4.type

### DeliveryPricingStrategyPreviousAttributes variant 4.type variant 1

anyOf group 1 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`.

### DeliveryPricingStrategyPreviousAttributes variant 4.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the method sets its price. Set the property named by this value. 

### DeliveryPricingStrategyPreviousAttributes variant 4.type variant 3

anyOf group 2 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`.

### DeliveryPricingStrategyPreviousAttributes variant 4.type variant 5

anyOf group 3 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: any. How the method sets its price. Set the property named by this value. Values: `"fixed"`.

### DeliveryPricingStrategyPreviousAttributes variant 5.type

### DeliveryPricingStrategyPreviousAttributes variant 5.type variant 1

anyOf group 1 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`.

### DeliveryPricingStrategyPreviousAttributes variant 5.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the method sets its price. Set the property named by this value. 

### DeliveryPricingStrategyPreviousAttributes variant 5.type variant 3

anyOf group 2 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"rate_table"`.

### DeliveryPricingStrategyPreviousAttributes variant 5.type variant 5

anyOf group 3 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: any. How the method sets its price. Set the property named by this value. Values: `"rate_table"`.

### DeliveryPricingStrategyPreviousAttributes variant 6.type

### DeliveryPricingStrategyPreviousAttributes variant 6.type variant 1

anyOf group 1 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`.

### DeliveryPricingStrategyPreviousAttributes variant 6.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the method sets its price. Set the property named by this value. 

### DeliveryPricingStrategyPreviousAttributes variant 6.type variant 3

anyOf group 2 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"tiered"`.

### DeliveryPricingStrategyPreviousAttributes variant 6.type variant 5

anyOf group 3 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: any. How the method sets its price. Set the property named by this value. Values: `"tiered"`.

