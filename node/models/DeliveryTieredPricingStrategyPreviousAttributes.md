[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryTieredPricingStrategyPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bands` | Optional | Array of [DeliveryPricingTierBandPreviousAttributes](../models/DeliveryPricingTierBandPreviousAttributes.md#deliverypricingtierbandpreviousattributes) or null | One to 25 contiguous bands in ascending order. The final band has no upper bound. `bands`: [declared alternatives](../models/DeliveryTieredPricingStrategyPreviousAttributes.md#deliverytieredpricingstrategypreviousattributesbands). |
| `basis` | Optional | (string or null) | Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Values: [7 declared values](DeliveryPricingStrategy.md#deliverypricingstrategytiered-fields-1-basis-values). `basis`: [declared alternatives](../models/DeliveryTieredPricingStrategyPreviousAttributes.md#deliverytieredpricingstrategypreviousattributes-variant-1basis), [declared alternatives](../models/DeliveryTieredPricingStrategyPreviousAttributes.md#deliverytieredpricingstrategypreviousattributes-variant-2basis). |
| `unit` | Optional | string or null | Required only for choice_group.total_weight and forbidden for every other basis. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. `unit`: [declared alternatives](../models/DeliveryTieredPricingStrategyPreviousAttributes.md#deliverytieredpricingstrategypreviousattributesunit). |

### DeliveryTieredPricingStrategyPreviousAttributes variant 1: `basis` = `"choice_group.total_weight"`

anyOf DeliveryTieredPricingStrategyWeightPreviousAttributes.

- Constraints for `basis`: Values: `"choice_group.total_weight"`.

### DeliveryTieredPricingStrategyPreviousAttributes variant 2

anyOf DeliveryTieredPricingStrategyQuantityOrMoneyPreviousAttributes.

- Constraints for `basis`: Values: `"choice_group.fulfillment_quantity"`, `"choice_group.merchandise_subtotal_before_discounts"`, `"choice_group.merchandise_subtotal_after_line_item_discounts"`, `"order.merchandise_subtotal_before_discounts"`, `"order.merchandise_subtotal_after_line_item_discounts"`, `"caller.tier_key"`.

### DeliveryTieredPricingStrategyPreviousAttributes.bands

### DeliveryTieredPricingStrategyPreviousAttributes.bands variant 1

anyOf variant 1: One to 25 contiguous bands in ascending order. The final band has no upper bound..

- Value shape: Array of [DeliveryPricingTierBandPreviousAttributes](../models/DeliveryPricingTierBandPreviousAttributes.md#deliverypricingtierbandpreviousattributes). One to 25 contiguous bands in ascending order. The final band has no upper bound. One to 25 contiguous bands in ascending order. The final band has no upper bound. minItems: `1`. maxItems: `25`. 

### DeliveryTieredPricingStrategyPreviousAttributes.bands variant 2

anyOf variant 2.

- Value shape: null. One to 25 contiguous bands in ascending order. The final band has no upper bound. 

### DeliveryTieredPricingStrategyPreviousAttributes variant 1.basis

### DeliveryTieredPricingStrategyPreviousAttributes variant 1.basis variant 1

anyOf group 1 variant 1: Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote..

- Value shape: string. Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Values: `"choice_group.total_weight"`, `"choice_group.fulfillment_quantity"`, `"choice_group.merchandise_subtotal_before_discounts"`, `"choice_group.merchandise_subtotal_after_line_item_discounts"`, `"order.merchandise_subtotal_before_discounts"`, `"order.merchandise_subtotal_after_line_item_discounts"`, `"caller.tier_key"`.

### DeliveryTieredPricingStrategyPreviousAttributes variant 1.basis variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. 

### DeliveryTieredPricingStrategyPreviousAttributes variant 1.basis variant 3

anyOf group 2 variant 1: Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote..

- Value shape: string. Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Values: `"choice_group.total_weight"`.

### DeliveryTieredPricingStrategyPreviousAttributes.unit

### DeliveryTieredPricingStrategyPreviousAttributes.unit variant 1

anyOf variant 1: Required only for choice_group.total_weight and forbidden for every other basis..

- Value shape: string. Required only for choice_group.total_weight and forbidden for every other basis. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`.

### DeliveryTieredPricingStrategyPreviousAttributes.unit variant 2

anyOf variant 2.

- Value shape: null. Required only for choice_group.total_weight and forbidden for every other basis. 

### DeliveryTieredPricingStrategyPreviousAttributes variant 2.basis

### DeliveryTieredPricingStrategyPreviousAttributes variant 2.basis variant 1

anyOf group 1 variant 1: Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote..

- Value shape: string. Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Values: `"choice_group.total_weight"`, `"choice_group.fulfillment_quantity"`, `"choice_group.merchandise_subtotal_before_discounts"`, `"choice_group.merchandise_subtotal_after_line_item_discounts"`, `"order.merchandise_subtotal_before_discounts"`, `"order.merchandise_subtotal_after_line_item_discounts"`, `"caller.tier_key"`.

### DeliveryTieredPricingStrategyPreviousAttributes variant 2.basis variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. 

### DeliveryTieredPricingStrategyPreviousAttributes variant 2.basis variant 3

anyOf group 2 variant 1: Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote..

- Value shape: string. Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Values: `"choice_group.fulfillment_quantity"`, `"choice_group.merchandise_subtotal_before_discounts"`, `"choice_group.merchandise_subtotal_after_line_item_discounts"`, `"order.merchandise_subtotal_before_discounts"`, `"order.merchandise_subtotal_after_line_item_discounts"`, `"caller.tier_key"`.

