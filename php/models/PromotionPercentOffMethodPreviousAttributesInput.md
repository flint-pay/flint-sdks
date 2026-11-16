[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionPercentOffMethodPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation` | Optional | string or null | How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Values: `"each"`, `"across"`. `allocation`: [declared alternatives](../models/PromotionAmountOffMethodPreviousAttributesInput.md#promotionamountoffmethodpreviousattributesinputallocation). |
| `calculation_basis` | Optional | string or null | What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Values: `"subtotal_pre_tax"`, `"subtotal_post_tax"`. `calculation_basis`: [declared alternatives](../models/PromotionAmountOffMethodPreviousAttributesInput.md#promotionamountoffmethodpreviousattributesinputcalculation_basis). |
| `discounted_item_rules` | Optional | [PromotionRuleGroupPreviousAttributesInput](../models/PromotionRuleGroupPreviousAttributesInput.md#promotionrulegrouppreviousattributesinput) or null | Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST` with `param` naming this field. |
| `max_discounted_quantity` | Optional | integer or null | Maximum number of matched units that receive the discount. Only valid when type is percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns `400 INVALID_REQUEST` naming this field. Whole-number quantity; fractional quantities are not supported. Flint discounts the first matched units in line-item order (the order items were added), not the cheapest. `max_discounted_quantity`: [declared alternatives](../models/PromotionApplicationMethodPreviousAttributesInput.md#promotionapplicationmethodpreviousattributesinput-variant-1max_discounted_quantity). |
| `percent_off` | Optional | number or null | Percentage to discount, from 1 to 100. `percent_off`: [declared alternatives](../models/PromotionApplicationMethodPreviousAttributesInput.md#promotionapplicationmethodpreviousattributesinput-variant-1percent_off). |
| `recurrence` | Optional | [PromotionRecurrencePreviousAttributesInput](../models/PromotionRecurrencePreviousAttributesInput.md#promotionrecurrencepreviousattributesinput) or null | Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. |
| `type` | Optional | string or null | Selects the percent_off discount effect and its allowed fields. Values: `"percent_off"`. `type`: [declared alternatives](../models/PromotionApplicationMethodPreviousAttributesInput.md#promotionapplicationmethodpreviousattributesinput-variant-1type). |

### PromotionPercentOffMethodPreviousAttributesInput.allocation

Declared alternatives: [PromotionAmountOffMethodPreviousAttributesInput.allocation](../models/PromotionAmountOffMethodPreviousAttributesInput.md#promotionamountoffmethodpreviousattributesinputallocation).

### PromotionPercentOffMethodPreviousAttributesInput.calculation_basis

Declared alternatives: [PromotionAmountOffMethodPreviousAttributesInput.calculation_basis](../models/PromotionAmountOffMethodPreviousAttributesInput.md#promotionamountoffmethodpreviousattributesinputcalculation_basis).

### PromotionPercentOffMethodPreviousAttributesInput.max_discounted_quantity

Declared alternatives: [PromotionApplicationMethodPreviousAttributesInput variant 1.max_discounted_quantity](../models/PromotionApplicationMethodPreviousAttributesInput.md#promotionapplicationmethodpreviousattributesinput-variant-1max_discounted_quantity).

### PromotionPercentOffMethodPreviousAttributesInput.percent_off

Declared alternatives: [PromotionApplicationMethodPreviousAttributesInput variant 1.percent_off](../models/PromotionApplicationMethodPreviousAttributesInput.md#promotionapplicationmethodpreviousattributesinput-variant-1percent_off).

### PromotionPercentOffMethodPreviousAttributesInput.type

Declared alternatives: [PromotionApplicationMethodPreviousAttributesInput variant 1.type](../models/PromotionApplicationMethodPreviousAttributesInput.md#promotionapplicationmethodpreviousattributesinput-variant-1type).

