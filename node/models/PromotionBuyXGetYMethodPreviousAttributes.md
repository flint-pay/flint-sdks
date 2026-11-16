[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionBuyXGetYMethodPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation` | Optional | string or null | How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Values: `"each"`, `"across"`. `allocation`: [declared alternatives](../models/PromotionAmountOffMethodPreviousAttributes.md#promotionamountoffmethodpreviousattributesallocation). |
| `buy_min_quantity` | Optional | integer or null | Number of qualifying units needed for one application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. `buy_min_quantity`: [declared alternatives](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-3buy_min_quantity). |
| `calculation_basis` | Optional | string or null | What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Values: `"subtotal_pre_tax"`, `"subtotal_post_tax"`. `calculation_basis`: [declared alternatives](../models/PromotionAmountOffMethodPreviousAttributes.md#promotionamountoffmethodpreviousattributescalculation_basis). |
| `discounted_item_rules` | Optional | [PromotionRuleGroupPreviousAttributes](../models/PromotionRuleGroupPreviousAttributes.md#promotionrulegrouppreviousattributes) or null | Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST` with `param` naming this field. |
| `get_percent_off` | Optional | number or null | Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items free. `get_percent_off`: [declared alternatives](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-3get_percent_off). |
| `get_quantity` | Optional | integer or null | Maximum number of reward units discounted per application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. `get_quantity`: [declared alternatives](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-3get_quantity). |
| `max_applications_per_order` | Optional | integer or null | Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit beyond the qualifying and reward quantities. `max_applications_per_order`: [declared alternatives](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-3max_applications_per_order). |
| `qualifying_item_rules` | Optional | [PromotionRuleGroupPreviousAttributes](../models/PromotionRuleGroupPreviousAttributes.md#promotionrulegrouppreviousattributes) or null | Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. |
| `recurrence` | Optional | [PromotionRecurrencePreviousAttributes](../models/PromotionRecurrencePreviousAttributes.md#promotionrecurrencepreviousattributes) or null | Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. |
| `reward_selection` | Optional | string or null | Which matching reward items receive the discount: the cheapest, the highest priced, or those added first to the order. Defaults to cheapest. Values: `"cheapest"`, `"highest_price"`, `"first_added"`. `reward_selection`: [declared alternatives](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-3reward_selection). |
| `type` | Optional | string or null | Selects the buy_x_get_y discount effect and its allowed fields. Values: `"buy_x_get_y"`. `type`: [declared alternatives](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-3type). |

### PromotionBuyXGetYMethodPreviousAttributes.allocation

Declared alternatives: [PromotionAmountOffMethodPreviousAttributes.allocation](../models/PromotionAmountOffMethodPreviousAttributes.md#promotionamountoffmethodpreviousattributesallocation).

### PromotionBuyXGetYMethodPreviousAttributes.buy_min_quantity

Declared alternatives: [PromotionApplicationMethodPreviousAttributes variant 3.buy_min_quantity](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-3buy_min_quantity).

### PromotionBuyXGetYMethodPreviousAttributes.calculation_basis

Declared alternatives: [PromotionAmountOffMethodPreviousAttributes.calculation_basis](../models/PromotionAmountOffMethodPreviousAttributes.md#promotionamountoffmethodpreviousattributescalculation_basis).

### PromotionBuyXGetYMethodPreviousAttributes.get_percent_off

Declared alternatives: [PromotionApplicationMethodPreviousAttributes variant 3.get_percent_off](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-3get_percent_off).

### PromotionBuyXGetYMethodPreviousAttributes.get_quantity

Declared alternatives: [PromotionApplicationMethodPreviousAttributes variant 3.get_quantity](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-3get_quantity).

### PromotionBuyXGetYMethodPreviousAttributes.max_applications_per_order

Declared alternatives: [PromotionApplicationMethodPreviousAttributes variant 3.max_applications_per_order](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-3max_applications_per_order).

### PromotionBuyXGetYMethodPreviousAttributes.reward_selection

Declared alternatives: [PromotionApplicationMethodPreviousAttributes variant 3.reward_selection](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-3reward_selection).

### PromotionBuyXGetYMethodPreviousAttributes.type

Declared alternatives: [PromotionApplicationMethodPreviousAttributes variant 3.type](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-3type).

