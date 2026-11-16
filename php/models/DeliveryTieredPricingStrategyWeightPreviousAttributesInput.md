[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryTieredPricingStrategyWeightPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bands` | Optional | Array of [DeliveryPricingTierBandPreviousAttributesInput](../models/DeliveryPricingTierBandPreviousAttributesInput.md#deliverypricingtierbandpreviousattributesinput) or null | One to 25 contiguous bands in ascending order. The final band has no upper bound. `bands`: [declared alternatives](../models/DeliveryTieredPricingStrategyPreviousAttributesInput.md#deliverytieredpricingstrategypreviousattributesinputbands). |
| `basis` | Optional | string or null | Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Values: `"choice_group.total_weight"`. `basis`: [declared alternatives](../models/DeliveryTieredPricingStrategyWeightPreviousAttributesInput.md#deliverytieredpricingstrategyweightpreviousattributesinputbasis). |
| `unit` | Optional | string or null | Required only for choice_group.total_weight and forbidden for every other basis. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. `unit`: [declared alternatives](../models/DeliveryTieredPricingStrategyPreviousAttributesInput.md#deliverytieredpricingstrategypreviousattributesinputunit). |

### DeliveryTieredPricingStrategyWeightPreviousAttributesInput.bands

Declared alternatives: [DeliveryTieredPricingStrategyPreviousAttributesInput.bands](../models/DeliveryTieredPricingStrategyPreviousAttributesInput.md#deliverytieredpricingstrategypreviousattributesinputbands).

### DeliveryTieredPricingStrategyWeightPreviousAttributesInput.basis

### DeliveryTieredPricingStrategyWeightPreviousAttributesInput.basis variant 1

anyOf variant 1: Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote..

- Value shape: string. Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Values: `"choice_group.total_weight"`.

### DeliveryTieredPricingStrategyWeightPreviousAttributesInput.basis variant 2

anyOf variant 2.

- Value shape: null. Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. 

### DeliveryTieredPricingStrategyWeightPreviousAttributesInput.unit

Declared alternatives: [DeliveryTieredPricingStrategyPreviousAttributesInput.unit](../models/DeliveryTieredPricingStrategyPreviousAttributesInput.md#deliverytieredpricingstrategypreviousattributesinputunit).

