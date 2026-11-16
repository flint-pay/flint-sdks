[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionApplicationMethodPreviousAttributes

A flat application method whose type selects its effect fields.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation` | Optional | string or null | How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Values: `"each"`, `"across"`. `allocation`: [declared alternatives](../models/PromotionAmountOffMethodPreviousAttributes.md#promotionamountoffmethodpreviousattributesallocation). |
| `calculation_basis` | Optional | string or null | What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Values: `"subtotal_pre_tax"`, `"subtotal_post_tax"`. `calculation_basis`: [declared alternatives](../models/PromotionAmountOffMethodPreviousAttributes.md#promotionamountoffmethodpreviousattributescalculation_basis). |
| `discounted_item_rules` | Optional | [PromotionRuleGroupPreviousAttributes](../models/PromotionRuleGroupPreviousAttributes.md#promotionrulegrouppreviousattributes) or null | Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST` with `param` naming this field. |
| `max_discounted_quantity` | Conditional | integer or null | Maximum number of matched units that receive the discount. Only valid when type is percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns `400 INVALID_REQUEST` naming this field. Whole-number quantity; fractional quantities are not supported. Flint discounts the first matched units in line-item order (the order items were added), not the cheapest. `max_discounted_quantity`: [declared alternatives](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-1max_discounted_quantity). |
| `percent_off` | Conditional | number or null | Percentage to discount, from 1 to 100. `percent_off`: [declared alternatives](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-1percent_off). |
| `recurrence` | Optional | [PromotionRecurrencePreviousAttributes](../models/PromotionRecurrencePreviousAttributes.md#promotionrecurrencepreviousattributes) or null | Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. |
| `type` | Optional | string or null | `type`: [declared alternatives](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-1type), [declared alternatives](../models/PromotionAmountOffMethodPreviousAttributes.md#promotionamountoffmethodpreviousattributestype), [declared alternatives](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-3type). |
| `amount_off_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Positive fixed discount in the primary currency. allocation determines whether it applies to each matched item or once across the matched set. `amount_off_money`: [declared alternatives](../models/PromotionAmountOffMethodPreviousAttributes.md#promotionamountoffmethodpreviousattributesamount_off_money). |
| `currency_options` | Conditional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Alternative positive fixed discounts, keyed by currency code. Each Money currency must match its key. `currency_options`: [declared alternatives](../models/PromotionAmountOffMethodPreviousAttributes.md#promotionamountoffmethodpreviousattributescurrency_options). |
| `buy_min_quantity` | Conditional | integer or null | Number of qualifying units needed for one application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. `buy_min_quantity`: [declared alternatives](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-3buy_min_quantity). |
| `get_percent_off` | Conditional | number or null | Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items free. `get_percent_off`: [declared alternatives](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-3get_percent_off). |
| `get_quantity` | Conditional | integer or null | Maximum number of reward units discounted per application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. `get_quantity`: [declared alternatives](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-3get_quantity). |
| `max_applications_per_order` | Conditional | integer or null | Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit beyond the qualifying and reward quantities. `max_applications_per_order`: [declared alternatives](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-3max_applications_per_order). |
| `qualifying_item_rules` | Conditional | [PromotionRuleGroupPreviousAttributes](../models/PromotionRuleGroupPreviousAttributes.md#promotionrulegrouppreviousattributes) or null | Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. |
| `reward_selection` | Conditional | string or null | Which matching reward items receive the discount: the cheapest, the highest priced, or those added first to the order. Defaults to cheapest. Values: `"cheapest"`, `"highest_price"`, `"first_added"`. `reward_selection`: [declared alternatives](../models/PromotionApplicationMethodPreviousAttributes.md#promotionapplicationmethodpreviousattributes-variant-3reward_selection). |

### PromotionApplicationMethodPreviousAttributes variant 1: `type` = `"percent_off"`

anyOf PromotionPercentOffMethodPreviousAttributes.

- Optional: `max_discounted_quantity`, `percent_off`.
- Undeclared: `amount_off_money`, `currency_options`, `buy_min_quantity`, `get_percent_off`, `get_quantity`, `max_applications_per_order`, `qualifying_item_rules`, `reward_selection`.
- Constraints for `type`: Selects the percent_off discount effect and its allowed fields. Values: `"percent_off"`.

### PromotionApplicationMethodPreviousAttributes variant 2: `type` = `"amount_off"`

anyOf PromotionAmountOffMethodPreviousAttributes.

- Optional: `amount_off_money`, `currency_options`.
- Undeclared: `max_discounted_quantity`, `percent_off`, `buy_min_quantity`, `get_percent_off`, `get_quantity`, `max_applications_per_order`, `qualifying_item_rules`, `reward_selection`.
- Constraints for `type`: Selects the amount_off discount effect and its allowed fields. Values: `"amount_off"`.

### PromotionApplicationMethodPreviousAttributes variant 3: `type` = `"buy_x_get_y"`

anyOf PromotionBuyXGetYMethodPreviousAttributes.

- Optional: `buy_min_quantity`, `get_percent_off`, `get_quantity`, `max_applications_per_order`, `qualifying_item_rules`, `reward_selection`.
- Undeclared: `max_discounted_quantity`, `percent_off`, `amount_off_money`, `currency_options`.
- Constraints for `type`: Selects the buy_x_get_y discount effect and its allowed fields. Values: `"buy_x_get_y"`.

### PromotionApplicationMethodPreviousAttributes.allocation

Declared alternatives: [PromotionAmountOffMethodPreviousAttributes.allocation](../models/PromotionAmountOffMethodPreviousAttributes.md#promotionamountoffmethodpreviousattributesallocation).

### PromotionApplicationMethodPreviousAttributes.calculation_basis

Declared alternatives: [PromotionAmountOffMethodPreviousAttributes.calculation_basis](../models/PromotionAmountOffMethodPreviousAttributes.md#promotionamountoffmethodpreviousattributescalculation_basis).

### PromotionApplicationMethodPreviousAttributes variant 1.max_discounted_quantity

### PromotionApplicationMethodPreviousAttributes variant 1.max_discounted_quantity variant 1

anyOf variant 1: Maximum number of matched units that receive the discount. Only valid when type is percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns `400 INVALID_REQUEST` naming this field. Whole-number quantity; fractional quantities are not supported. Flint discounts the first matched units in line-item order (the order items were added), not the cheapest..

- Value shape: integer. Maximum number of matched units that receive the discount. Only valid when type is percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns `400 INVALID_REQUEST` naming this field. Whole-number quantity; fractional quantities are not supported. Flint discounts the first matched units in line-item order (the order items were added), not the cheapest. Maximum number of matched units that receive the discount. Only valid when type is percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns `400 INVALID_REQUEST` naming this field. Whole-number quantity; fractional quantities are not supported. Flint discounts the first matched units in line-item order (the order items were added), not the cheapest. Format: `int32`. minimum: `1`. 

### PromotionApplicationMethodPreviousAttributes variant 1.max_discounted_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum number of matched units that receive the discount. Only valid when type is percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns `400 INVALID_REQUEST` naming this field. Whole-number quantity; fractional quantities are not supported. Flint discounts the first matched units in line-item order (the order items were added), not the cheapest. 

### PromotionApplicationMethodPreviousAttributes variant 1.percent_off

### PromotionApplicationMethodPreviousAttributes variant 1.percent_off variant 1

anyOf variant 1: Percentage to discount, from 1 to 100..

- Value shape: number. Percentage to discount, from 1 to 100. Percentage to discount, from 1 to 100. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. 

### PromotionApplicationMethodPreviousAttributes variant 1.percent_off variant 2

anyOf variant 2.

- Value shape: null. Percentage to discount, from 1 to 100. 

### PromotionApplicationMethodPreviousAttributes variant 1.type

### PromotionApplicationMethodPreviousAttributes variant 1.type variant 1

anyOf variant 1: Selects the percent_off discount effect and its allowed fields..

- Value shape: string. Selects the percent_off discount effect and its allowed fields. Values: `"percent_off"`.

### PromotionApplicationMethodPreviousAttributes variant 1.type variant 2

anyOf variant 2.

- Value shape: null. Selects the percent_off discount effect and its allowed fields. 

### PromotionApplicationMethodPreviousAttributes variant 2.amount_off_money

Declared alternatives: [PromotionAmountOffMethodPreviousAttributes.amount_off_money](../models/PromotionAmountOffMethodPreviousAttributes.md#promotionamountoffmethodpreviousattributesamount_off_money).

### PromotionApplicationMethodPreviousAttributes variant 2.currency_options

Declared alternatives: [PromotionAmountOffMethodPreviousAttributes.currency_options](../models/PromotionAmountOffMethodPreviousAttributes.md#promotionamountoffmethodpreviousattributescurrency_options).

### PromotionApplicationMethodPreviousAttributes variant 2.type

Declared alternatives: [PromotionAmountOffMethodPreviousAttributes.type](../models/PromotionAmountOffMethodPreviousAttributes.md#promotionamountoffmethodpreviousattributestype).

### PromotionApplicationMethodPreviousAttributes variant 3.buy_min_quantity

### PromotionApplicationMethodPreviousAttributes variant 3.buy_min_quantity variant 1

anyOf variant 1: Number of qualifying units needed for one application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Number of qualifying units needed for one application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Number of qualifying units needed for one application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. 

### PromotionApplicationMethodPreviousAttributes variant 3.buy_min_quantity variant 2

anyOf variant 2.

- Value shape: null. Number of qualifying units needed for one application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. 

### PromotionApplicationMethodPreviousAttributes variant 3.get_percent_off

### PromotionApplicationMethodPreviousAttributes variant 3.get_percent_off variant 1

anyOf variant 1: Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items free..

- Value shape: number. Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items free. Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items free. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. 

### PromotionApplicationMethodPreviousAttributes variant 3.get_percent_off variant 2

anyOf variant 2.

- Value shape: null. Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items free. 

### PromotionApplicationMethodPreviousAttributes variant 3.get_quantity

### PromotionApplicationMethodPreviousAttributes variant 3.get_quantity variant 1

anyOf variant 1: Maximum number of reward units discounted per application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Maximum number of reward units discounted per application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Maximum number of reward units discounted per application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. 

### PromotionApplicationMethodPreviousAttributes variant 3.get_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum number of reward units discounted per application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. 

### PromotionApplicationMethodPreviousAttributes variant 3.max_applications_per_order

### PromotionApplicationMethodPreviousAttributes variant 3.max_applications_per_order variant 1

anyOf variant 1: Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit beyond the qualifying and reward quantities..

- Value shape: integer. Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit beyond the qualifying and reward quantities. Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit beyond the qualifying and reward quantities. Format: `int32`. minimum: `1`. 

### PromotionApplicationMethodPreviousAttributes variant 3.max_applications_per_order variant 2

anyOf variant 2.

- Value shape: null. Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit beyond the qualifying and reward quantities. 

### PromotionApplicationMethodPreviousAttributes variant 3.reward_selection

### PromotionApplicationMethodPreviousAttributes variant 3.reward_selection variant 1

anyOf variant 1: Which matching reward items receive the discount: the cheapest, the highest priced, or those added first to the order. Defaults to cheapest..

- Value shape: string. Which matching reward items receive the discount: the cheapest, the highest priced, or those added first to the order. Defaults to cheapest. Which matching reward items receive the discount: the cheapest, the highest priced, or those added first to the order. Defaults to cheapest. Default: `"cheapest"`. Values: `"cheapest"`, `"highest_price"`, `"first_added"`.

### PromotionApplicationMethodPreviousAttributes variant 3.reward_selection variant 2

anyOf variant 2.

- Value shape: null. Which matching reward items receive the discount: the cheapest, the highest priced, or those added first to the order. Defaults to cheapest. 

### PromotionApplicationMethodPreviousAttributes variant 3.type

### PromotionApplicationMethodPreviousAttributes variant 3.type variant 1

anyOf variant 1: Selects the buy_x_get_y discount effect and its allowed fields..

- Value shape: string. Selects the buy_x_get_y discount effect and its allowed fields. Values: `"buy_x_get_y"`.

### PromotionApplicationMethodPreviousAttributes variant 3.type variant 2

anyOf variant 2.

- Value shape: null. Selects the buy_x_get_y discount effect and its allowed fields. 

