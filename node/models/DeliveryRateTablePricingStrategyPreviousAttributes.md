[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateTablePricingStrategyPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `rates` | Optional | Array of [DeliveryPricingRatePreviousAttributes](../models/DeliveryPricingRatePreviousAttributes.md#deliverypricingratepreviousattributes) or null | One to 100 rates. Flint checks them from the highest priority to the lowest and uses the first match. `rates`: [declared alternatives](../models/DeliveryRateTablePricingStrategyPreviousAttributes.md#deliveryratetablepricingstrategypreviousattributesrates). |
| `unmatched_behavior` | Optional | string or null | What happens when no rate matches. Values: `"unavailable"`. `unmatched_behavior`: [declared alternatives](../models/DeliveryRateTablePricingStrategyPreviousAttributes.md#deliveryratetablepricingstrategypreviousattributesunmatched_behavior). |

### DeliveryRateTablePricingStrategyPreviousAttributes.rates

### DeliveryRateTablePricingStrategyPreviousAttributes.rates variant 1

anyOf variant 1: One to 100 rates. Flint checks them from the highest priority to the lowest and uses the first match..

- Value shape: Array of [DeliveryPricingRatePreviousAttributes](../models/DeliveryPricingRatePreviousAttributes.md#deliverypricingratepreviousattributes). One to 100 rates. Flint checks them from the highest priority to the lowest and uses the first match. One to 100 rates. Flint checks them from the highest priority to the lowest and uses the first match. minItems: `1`. maxItems: `100`. 

### DeliveryRateTablePricingStrategyPreviousAttributes.rates variant 2

anyOf variant 2.

- Value shape: null. One to 100 rates. Flint checks them from the highest priority to the lowest and uses the first match. 

### DeliveryRateTablePricingStrategyPreviousAttributes.unmatched_behavior

### DeliveryRateTablePricingStrategyPreviousAttributes.unmatched_behavior variant 1

anyOf variant 1: What happens when no rate matches..

- Value shape: string. What happens when no rate matches. Values: `"unavailable"`.

### DeliveryRateTablePricingStrategyPreviousAttributes.unmatched_behavior variant 2

anyOf variant 2.

- Value shape: null. What happens when no rate matches. 

