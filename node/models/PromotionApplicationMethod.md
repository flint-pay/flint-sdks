[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionApplicationMethod

A flat application method whose type selects its effect fields.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation` | Optional | string | How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Values: `"each"`, `"across"`. |
| `calculation_basis` | Optional | string | Basis for merchandise promotion calculations. Omit for service_charge promotions because service-charge discounts are calculated from the targeted charges. Values: `"subtotal_pre_tax"`, `"subtotal_post_tax"`. |
| `discounted_item_rules` | Conditional | [PromotionRuleGroup](../models/PromotionRuleGroup.md#promotionrulegroup) | Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. |
| `max_discounted_quantity` | Conditional | integer | Maximum number of matched units that receive the discount. Only valid when type is percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns INVALID_MAX_DISCOUNTED_QUANTITY. Whole-number quantity; fractional quantities are not supported. Flint discounts the first matched units in line-item order (the order items were added), not the cheapest. Format: `int32`. minimum: `1`. |
| `percent_off` | Conditional | number | Percentage to discount, from 1 to 100. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `recurrence` | Optional | [PromotionRecurrence](../models/PromotionRecurrence.md#promotionrecurrence) | Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever. |
| `type` | Required | string |  |
| `amount_off_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Positive fixed discount in the primary currency. allocation determines whether it applies to each matched item or once across the matched set. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_off_money`: [field definitions](../models/PromotionAmountOffMethod.md#promotionamountoffmethodamount_off_money). |
| `currency_options` | Conditional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Alternative positive fixed discounts, keyed by currency code. Each Money currency must match its key. `currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `buy_min_quantity` | Conditional | integer | Number of qualifying units needed for one application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. |
| `get_percent_off` | Conditional | number | Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items free. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `get_quantity` | Conditional | integer | Maximum number of reward units discounted per application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. |
| `max_applications_per_order` | Conditional | integer | Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit beyond the qualifying and reward quantities. Format: `int32`. minimum: `1`. |
| `qualifying_item_rules` | Conditional | [PromotionRuleGroup](../models/PromotionRuleGroup.md#promotionrulegroup) | Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. |
| `reward_selection` | Conditional | string | Which matching reward items receive the discount: the cheapest, the highest priced, or those added first to the order. Defaults to cheapest. Default: `"cheapest"`. Values: `"cheapest"`, `"highest_price"`, `"first_added"`. |

### PromotionApplicationMethod variant 1: `type` = `"percent_off"`

oneOf with type: "percent_off": The `percent_off` variant of `PromotionApplicationMethod`..

- Required: `percent_off`.
- Optional: `discounted_item_rules`, `max_discounted_quantity`.
- Undeclared: `amount_off_money`, `currency_options`, `buy_min_quantity`, `get_percent_off`, `get_quantity`, `max_applications_per_order`, `qualifying_item_rules`, `reward_selection`.
- Constraints for `type`: Selects the percent_off discount effect and its allowed fields. Values: `"percent_off"`.

### PromotionApplicationMethod variant 2: `type` = `"amount_off"`

oneOf with type: "amount_off": The `amount_off` variant of `PromotionApplicationMethod`..

- Required: `amount_off_money`.
- Optional: `currency_options`, `discounted_item_rules`.
- Undeclared: `max_discounted_quantity`, `percent_off`, `buy_min_quantity`, `get_percent_off`, `get_quantity`, `max_applications_per_order`, `qualifying_item_rules`, `reward_selection`.
- Constraints for `type`: Selects the amount_off discount effect and its allowed fields. Values: `"amount_off"`.

### PromotionApplicationMethod variant 3: `type` = `"buy_x_get_y"`

oneOf with type: "buy_x_get_y": The `buy_x_get_y` variant of `PromotionApplicationMethod`..

- Required: `buy_min_quantity`, `discounted_item_rules`, `get_percent_off`, `get_quantity`, `qualifying_item_rules`.
- Optional: `max_applications_per_order`, `reward_selection`.
- Undeclared: `max_discounted_quantity`, `percent_off`, `amount_off_money`, `currency_options`.
- Constraints for `type`: Selects the buy_x_get_y discount effect and its allowed fields. Values: `"buy_x_get_y"`.

### PromotionApplicationMethod variant 2.amount_off_money

Field definitions: [PromotionAmountOffMethod.amount_off_money](../models/PromotionAmountOffMethod.md#promotionamountoffmethodamount_off_money).

### PromotionApplicationMethod variant 2.currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

