[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingTieredTieredChoiceGroupFulfillmentQuantity

The `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bands` | Required | Array of ([DeliveryMethodConfigurationPricingTieredTieredChoiceGroupFulfillmentQuantityBandsItem](../models/DeliveryMethodConfigurationPricingTieredTieredChoiceGroupFulfillmentQuantityBandsItem.md#deliverymethodconfigurationpricingtieredtieredchoicegroupfulfillmentquantitybandsitem) and object) |  |
| `basis` | Required | string | Quantity measured by the tier bands. Money subtotal bases use minor currency units. Values: [5 declared values](DeliveryTieredPricingStrategyInputQuantityOrMoneyInput.md#deliverytieredpricingstrategyinputquantityormoneyinput-basis-values). |
| `unit` | Optional | string | Required only for choice_group.total_weight and forbidden for every other basis. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |

