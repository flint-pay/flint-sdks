[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateTablePricingStrategyPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `rates` | Optional | Array of [DeliveryPricingRatePreviousAttributesInput](../models/DeliveryPricingRatePreviousAttributesInput.md#deliverypricingratepreviousattributesinput) or null | One to 100 rates. Flint checks them from the highest priority to the lowest and uses the first match. `rates`: [declared alternatives](../models/DeliveryRateTablePricingStrategyPreviousAttributesInput.md#deliveryratetablepricingstrategypreviousattributesinputrates). |
| `unmatched_behavior` | Optional | string or null | What happens when no rate matches. Values: `"unavailable"`. `unmatched_behavior`: [declared alternatives](../models/DeliveryRateTablePricingStrategyPreviousAttributesInput.md#deliveryratetablepricingstrategypreviousattributesinputunmatched_behavior). |

### DeliveryRateTablePricingStrategyPreviousAttributesInput.rates

### DeliveryRateTablePricingStrategyPreviousAttributesInput.rates variant 1

anyOf variant 1: One to 100 rates. Flint checks them from the highest priority to the lowest and uses the first match..

- Value shape: Array of [DeliveryPricingRatePreviousAttributesInput](../models/DeliveryPricingRatePreviousAttributesInput.md#deliverypricingratepreviousattributesinput). One to 100 rates. Flint checks them from the highest priority to the lowest and uses the first match. One to 100 rates. Flint checks them from the highest priority to the lowest and uses the first match. minItems: `1`. maxItems: `100`. 

### DeliveryRateTablePricingStrategyPreviousAttributesInput.rates variant 2

anyOf variant 2.

- Value shape: null. One to 100 rates. Flint checks them from the highest priority to the lowest and uses the first match. 

### DeliveryRateTablePricingStrategyPreviousAttributesInput.unmatched_behavior

### DeliveryRateTablePricingStrategyPreviousAttributesInput.unmatched_behavior variant 1

anyOf variant 1: What happens when no rate matches..

- Value shape: string. What happens when no rate matches. Values: `"unavailable"`.

### DeliveryRateTablePricingStrategyPreviousAttributesInput.unmatched_behavior variant 2

anyOf variant 2.

- Value shape: null. What happens when no rate matches. 

