[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingStrategyRateTablePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Optional | [DeliveryCalculatedPricingStrategyPreviousAttributesInput](../models/DeliveryCalculatedPricingStrategyPreviousAttributesInput.md#deliverycalculatedpricingstrategypreviousattributesinput) or null | Calculated pricing settings. Set only when `type` is `calculated`. |
| `callback` | Optional | [DeliveryExternalPricingStrategyPreviousAttributesInput](../models/DeliveryExternalPricingStrategyPreviousAttributesInput.md#deliveryexternalpricingstrategypreviousattributesinput) or null | Rate callback pricing settings. Set only when `type` is `callback`. |
| `caller_supplied` | Optional | [DeliveryExternalPricingStrategyPreviousAttributesInput](../models/DeliveryExternalPricingStrategyPreviousAttributesInput.md#deliveryexternalpricingstrategypreviousattributesinput) or null | Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. |
| `fixed` | Optional | [DeliveryFixedPricingStrategyPreviousAttributesInput](../models/DeliveryFixedPricingStrategyPreviousAttributesInput.md#deliveryfixedpricingstrategypreviousattributesinput) or null | Fixed pricing settings. Set only when `type` is `fixed`. |
| `rate_table` | Optional | [DeliveryRateTablePricingStrategyPreviousAttributesInput](../models/DeliveryRateTablePricingStrategyPreviousAttributesInput.md#deliveryratetablepricingstrategypreviousattributesinput) or null | Rate table pricing settings. Set only when `type` is `rate_table`. |
| `tiered` | Optional | [DeliveryTieredPricingStrategyPreviousAttributesInput](../models/DeliveryTieredPricingStrategyPreviousAttributesInput.md#deliverytieredpricingstrategypreviousattributesinput) or null | Tiered pricing settings. Set only when `type` is `tiered`. |
| `type` | Optional | (string or null) and Alternative shapes (see declared variants) | How the method sets its price. Set the property named by this value. Values: `"rate_table"`. `type`: [declared alternatives](../models/DeliveryPricingStrategyRateTablePreviousAttributesInput.md#deliverypricingstrategyratetablepreviousattributesinputtype). |

### DeliveryPricingStrategyRateTablePreviousAttributesInput.type

### DeliveryPricingStrategyRateTablePreviousAttributesInput.type variant 1

anyOf group 1 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"rate_table"`.

### DeliveryPricingStrategyRateTablePreviousAttributesInput.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the method sets its price. Set the property named by this value. 

### DeliveryPricingStrategyRateTablePreviousAttributesInput.type variant 3

anyOf group 2 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: any. How the method sets its price. Set the property named by this value. Values: `"rate_table"`.

