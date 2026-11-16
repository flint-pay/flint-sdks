[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingStrategyTieredPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Optional | [DeliveryCalculatedPricingStrategyPreviousAttributes](../models/DeliveryCalculatedPricingStrategyPreviousAttributes.md#deliverycalculatedpricingstrategypreviousattributes) or null | Calculated pricing settings. Set only when `type` is `calculated`. |
| `callback` | Optional | [DeliveryExternalPricingStrategyPreviousAttributes](../models/DeliveryExternalPricingStrategyPreviousAttributes.md#deliveryexternalpricingstrategypreviousattributes) or null | Rate callback pricing settings. Set only when `type` is `callback`. |
| `caller_supplied` | Optional | [DeliveryExternalPricingStrategyPreviousAttributes](../models/DeliveryExternalPricingStrategyPreviousAttributes.md#deliveryexternalpricingstrategypreviousattributes) or null | Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. |
| `fixed` | Optional | [DeliveryFixedPricingStrategyPreviousAttributes](../models/DeliveryFixedPricingStrategyPreviousAttributes.md#deliveryfixedpricingstrategypreviousattributes) or null | Fixed pricing settings. Set only when `type` is `fixed`. |
| `rate_table` | Optional | [DeliveryRateTablePricingStrategyPreviousAttributes](../models/DeliveryRateTablePricingStrategyPreviousAttributes.md#deliveryratetablepricingstrategypreviousattributes) or null | Rate table pricing settings. Set only when `type` is `rate_table`. |
| `tiered` | Optional | [DeliveryTieredPricingStrategyPreviousAttributes](../models/DeliveryTieredPricingStrategyPreviousAttributes.md#deliverytieredpricingstrategypreviousattributes) or null | Tiered pricing settings. Set only when `type` is `tiered`. |
| `type` | Optional | (string or null) and Alternative shapes (see declared variants) | How the method sets its price. Set the property named by this value. Values: `"tiered"`. `type`: [declared alternatives](../models/DeliveryPricingStrategyTieredPreviousAttributes.md#deliverypricingstrategytieredpreviousattributestype). |

### DeliveryPricingStrategyTieredPreviousAttributes.type

### DeliveryPricingStrategyTieredPreviousAttributes.type variant 1

anyOf group 1 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"tiered"`.

### DeliveryPricingStrategyTieredPreviousAttributes.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the method sets its price. Set the property named by this value. 

### DeliveryPricingStrategyTieredPreviousAttributes.type variant 3

anyOf group 2 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: any. How the method sets its price. Set the property named by this value. Values: `"tiered"`.

