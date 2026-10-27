[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryTieredPricingStrategyInputQuantityOrMoneyInput

Request input. Response: [DeliveryTieredPricingStrategyQuantityOrMoney](../models/DeliveryTieredPricingStrategyQuantityOrMoney.md#deliverytieredpricingstrategyquantityormoney).

The `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategyInput`. The `choice_group.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategyInput`. The `choice_group.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategyInput`. The `order.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategyInput`. The `order.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategyInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bands` | Required | Array of [DeliveryPricingTierBandRequestInput](../models/DeliveryPricingTierBandRequestInput.md#deliverypricingtierbandrequestinput) |  |
| `basis` | Required | string | Quantity measured by the tier bands. Money subtotal bases use minor currency units. Values: [5 declared values](#deliverytieredpricingstrategyinputquantityormoneyinput-basis-values). |
| `unit` | Optional | string | Required only for choice_group.total_weight and forbidden for every other basis. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |

#### DeliveryTieredPricingStrategyInputQuantityOrMoneyInput basis values

- `"choice_group.fulfillment_quantity"`
- `"choice_group.merchandise_subtotal_before_discounts"`
- `"choice_group.merchandise_subtotal_after_line_item_discounts"`
- `"order.merchandise_subtotal_before_discounts"`
- `"order.merchandise_subtotal_after_line_item_discounts"`

