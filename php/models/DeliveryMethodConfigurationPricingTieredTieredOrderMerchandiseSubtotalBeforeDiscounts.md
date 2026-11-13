[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingTieredTieredOrderMerchandiseSubtotalBeforeDiscounts

The `caller.tier_key` variant of `DeliveryTieredPricingStrategy`. The `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bands` | Required | Array of ([DeliveryMethodConfigurationPricingTieredTieredOrderMerchandiseSubtotalBeforeDiscountsBandsItem](../models/DeliveryMethodConfigurationPricingTieredTieredOrderMerchandiseSubtotalBeforeDiscountsBandsItem.md#deliverymethodconfigurationpricingtieredtieredordermerchandisesubtotalbeforediscountsbandsitem) and object) | One to 25 contiguous bands in ascending order. The final band has no upper bound. minItems: `1`. maxItems: `25`. |
| `basis` | Required | string | Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Values: [6 declared values](DeliveryTieredPricingStrategyInputQuantityOrMoneyInput.md#deliverytieredpricingstrategyinputquantityormoneyinput-basis-values). |
| `unit` | Optional | string | Required only for choice_group.total_weight and forbidden for every other basis. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |

