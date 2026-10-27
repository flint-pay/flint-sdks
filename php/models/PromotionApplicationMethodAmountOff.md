[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionApplicationMethodAmountOff

A flat application method whose type selects its effect fields.

The `amount_off` variant of `PromotionApplicationMethod`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation` | Optional | string | How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Values: `"each"`, `"across"`. |
| `amount_off_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Positive fixed discount in the primary currency. allocation determines whether it applies to each matched item or once across the matched set. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculation_basis` | Optional | string | Basis for merchandise promotion calculations. Omit for service_charge promotions because service-charge discounts are calculated from the targeted charges. Values: `"subtotal_pre_tax"`, `"subtotal_post_tax"`. |
| `currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Alternative positive fixed discounts, keyed by currency code. Each Money currency must match its key. |
| `discounted_item_rules` | Optional | Alternative shapes (see declared variants) | Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. `discounted_item_rules`: [declared alternatives](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules). |
| `recurrence` | Optional | object and Alternative shapes (see declared variants) | Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever. `recurrence`: [declared alternatives](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffrecurrence). |
| `type` | Required | string | Selects the amount_off discount effect and its allowed fields. Values: `"amount_off"`. |

### PromotionApplicationMethodAmountOff.discounted_item_rules

Declared alternatives: [PromotionApplicationMethodPercentOff.discounted_item_rules](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules).

### PromotionApplicationMethodAmountOff.recurrence

Declared alternatives: [PromotionApplicationMethodPercentOff.recurrence](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffrecurrence).

