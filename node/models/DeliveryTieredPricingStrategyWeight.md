[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryTieredPricingStrategyWeight







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bands` | Required | Array of [DeliveryPricingTierBand](../models/DeliveryPricingTierBand.md#deliverypricingtierband) | One to 25 contiguous bands in ascending order. The final band has no upper bound. minItems: `1`. maxItems: `25`. |
| `basis` | Required | string | Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Values: `"choice_group.total_weight"`. |
| `unit` | Required | string | Required only for choice_group.total_weight and forbidden for every other basis. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |

### DeliveryTieredPricingStrategyWeight variant 1: `basis` = `"choice_group.total_weight"`

anyOf DeliveryTieredPricingStrategyInputWeight: Declared schema DeliveryTieredPricingStrategyInputWeight. The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategyInput`..

No additional constraints.

### DeliveryTieredPricingStrategyWeight variant 2: `basis` = `"choice_group.total_weight"`

anyOf DeliveryTieredPricingStrategyWeight: Declared schema DeliveryTieredPricingStrategyWeight. The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategy`..

No additional constraints.

