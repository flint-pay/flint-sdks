[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryTieredPricingStrategyWeightPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bands` | Optional | Array of [DeliveryPricingTierBandPreviousAttributes](../models/DeliveryPricingTierBandPreviousAttributes.md#deliverypricingtierbandpreviousattributes) or null | One to 25 contiguous bands in ascending order. The final band has no upper bound. `bands`: [declared alternatives](../models/DeliveryTieredPricingStrategyPreviousAttributes.md#deliverytieredpricingstrategypreviousattributesbands). |
| `basis` | Optional | string or null | Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Values: `"choice_group.total_weight"`. `basis`: [declared alternatives](../models/DeliveryTieredPricingStrategyWeightPreviousAttributes.md#deliverytieredpricingstrategyweightpreviousattributesbasis). |
| `unit` | Optional | string or null | Required only for choice_group.total_weight and forbidden for every other basis. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. `unit`: [declared alternatives](../models/DeliveryTieredPricingStrategyPreviousAttributes.md#deliverytieredpricingstrategypreviousattributesunit). |

### DeliveryTieredPricingStrategyWeightPreviousAttributes.bands

Declared alternatives: [DeliveryTieredPricingStrategyPreviousAttributes.bands](../models/DeliveryTieredPricingStrategyPreviousAttributes.md#deliverytieredpricingstrategypreviousattributesbands).

### DeliveryTieredPricingStrategyWeightPreviousAttributes.basis

### DeliveryTieredPricingStrategyWeightPreviousAttributes.basis variant 1

anyOf variant 1: Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote..

- Value shape: string. Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Values: `"choice_group.total_weight"`.

### DeliveryTieredPricingStrategyWeightPreviousAttributes.basis variant 2

anyOf variant 2.

- Value shape: null. Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. 

### DeliveryTieredPricingStrategyWeightPreviousAttributes.unit

Declared alternatives: [DeliveryTieredPricingStrategyPreviousAttributes.unit](../models/DeliveryTieredPricingStrategyPreviousAttributes.md#deliverytieredpricingstrategypreviousattributesunit).

