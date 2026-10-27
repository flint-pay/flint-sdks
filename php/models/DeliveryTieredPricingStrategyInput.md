[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryTieredPricingStrategyInput

Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bands` | Required | Array of [DeliveryPricingTierBandInput](../models/DeliveryPricingTierBandInput.md#deliverypricingtierbandinput) |  |
| `basis` | Required | string | Quantity measured by the tier bands. Money subtotal bases use minor currency units. Values: [7 declared values](#deliverytieredpricingstrategyinput-basis-values). |
| `unit` | Conditional | string | Required only for choice_group.total_weight and forbidden for every other basis. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |

#### DeliveryTieredPricingStrategyInput basis values

- `"choice_group.total_weight"`
- `"choice_group.fulfillment_quantity"`
- `"choice_group.merchandise_subtotal_before_discounts"`
- `"choice_group.merchandise_subtotal_after_line_item_discounts"`
- `"order.merchandise_subtotal_before_discounts"`
- `"order.merchandise_subtotal_after_line_item_discounts"`
- `"caller.tier_key"`

### DeliveryTieredPricingStrategyInput variant 1: `basis` = `"choice_group.total_weight"`

oneOf variant 1: The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategy`..

- Required: `unit`.
- Constraints for `basis`: Values: `"choice_group.total_weight"`.

### DeliveryTieredPricingStrategyInput variant 2

oneOf variant 2: The `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`..

- Condition: not (present(`unit`)).
- Optional: `unit`.
- Constraints for `basis`: Values: `"choice_group.fulfillment_quantity"`, `"choice_group.merchandise_subtotal_before_discounts"`, `"choice_group.merchandise_subtotal_after_line_item_discounts"`, `"order.merchandise_subtotal_before_discounts"`, `"order.merchandise_subtotal_after_line_item_discounts"`.

