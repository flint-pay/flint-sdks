[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryTieredPricingStrategyWeight







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bands` | Required | Array of [DeliveryPricingTierBand](../models/DeliveryPricingTierBand.md#deliverypricingtierband) |  |
| `basis` | Required | string | Quantity measured by the tier bands. Money subtotal bases use minor currency units. Values: `"choice_group.total_weight"`. |
| `unit` | Required | string | Required only for choice_group.total_weight and forbidden for every other basis. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |

### DeliveryTieredPricingStrategyWeight variant 1: `basis` = `"choice_group.total_weight"`

anyOf variant 1: Declared schema DeliveryTieredPricingStrategyInputWeight. The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategyInput`..

No additional constraints.

### DeliveryTieredPricingStrategyWeight variant 2: `basis` = `"choice_group.total_weight"`

anyOf variant 2: Declared schema DeliveryTieredPricingStrategyWeight. The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategy`..

No additional constraints.

