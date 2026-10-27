[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryTieredPricingStrategyQuantityOrMoney







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bands` | Required | Array of [DeliveryPricingTierBand](../models/DeliveryPricingTierBand.md#deliverypricingtierband) |  |
| `basis` | Required | string | Quantity measured by the tier bands. Money subtotal bases use minor currency units. Values: [5 declared values](DeliveryTieredPricingStrategyInputQuantityOrMoneyInput.md#deliverytieredpricingstrategyinputquantityormoneyinput-basis-values). |
| `unit` | Optional | string | Required only for choice_group.total_weight and forbidden for every other basis. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |

### DeliveryTieredPricingStrategyQuantityOrMoney variant 1

anyOf variant 1: Declared schema DeliveryTieredPricingStrategyInputQuantityOrMoney. The `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategyInput`. The `choice_group.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategyInput`. The `choice_group.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategyInput`. The `order.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategyInput`. The `order.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategyInput`..

- Condition: not (present(`unit`)).

### DeliveryTieredPricingStrategyQuantityOrMoney variant 2

anyOf variant 2: Declared schema DeliveryTieredPricingStrategyQuantityOrMoney. The `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`..

- Condition: not (present(`unit`)).

