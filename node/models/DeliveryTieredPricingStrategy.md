[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryTieredPricingStrategy







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bands` | Required | Array of [DeliveryPricingTierBand](../models/DeliveryPricingTierBand.md#deliverypricingtierband) |  |
| `basis` | Required | string | Quantity measured by the tier bands. Money subtotal bases use minor currency units. Values: [7 declared values](DeliveryPricingStrategy.md#deliverypricingstrategytiered-fields-1-basis-values). |
| `unit` | Conditional | string | Required only for choice_group.total_weight and forbidden for every other basis. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |

### DeliveryTieredPricingStrategy variant 1: `basis` = `"choice_group.total_weight"`

anyOf variant 1: Declared schema DeliveryTieredPricingStrategy. Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases.; oneOf variant 1: The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategy`..

- Required: `unit`.
- Constraints for `basis`: Values: `"choice_group.total_weight"`.

### DeliveryTieredPricingStrategy variant 2

anyOf variant 1: Declared schema DeliveryTieredPricingStrategy. Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases.; oneOf variant 2: The `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`..

- Condition: not (present(`unit`)).
- Optional: `unit`.
- Constraints for `basis`: Values: `"choice_group.fulfillment_quantity"`, `"choice_group.merchandise_subtotal_before_discounts"`, `"choice_group.merchandise_subtotal_after_line_item_discounts"`, `"order.merchandise_subtotal_before_discounts"`, `"order.merchandise_subtotal_after_line_item_discounts"`.

### DeliveryTieredPricingStrategy variant 3: `basis` = `"choice_group.total_weight"`

anyOf variant 2: Declared schema DeliveryTieredPricingStrategyRequest. Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the basis is total weight.; oneOf variant 1: The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategyInput`..

- Required: `unit`.
- Constraints for `basis`: Values: `"choice_group.total_weight"`.

### DeliveryTieredPricingStrategy variant 4

anyOf variant 2: Declared schema DeliveryTieredPricingStrategyRequest. Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the basis is total weight.; oneOf variant 2: The `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategyInput`. The `choice_group.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategyInput`. The `choice_group.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategyInput`. The `order.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategyInput`. The `order.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategyInput`..

- Condition: not (present(`unit`)).
- Optional: `unit`.
- Constraints for `basis`: Values: `"choice_group.fulfillment_quantity"`, `"choice_group.merchandise_subtotal_before_discounts"`, `"choice_group.merchandise_subtotal_after_line_item_discounts"`, `"order.merchandise_subtotal_before_discounts"`, `"order.merchandise_subtotal_after_line_item_discounts"`.

