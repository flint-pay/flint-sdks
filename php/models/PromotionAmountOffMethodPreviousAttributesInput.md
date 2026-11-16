[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionAmountOffMethodPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation` | Optional | string or null | How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Values: `"each"`, `"across"`. `allocation`: [declared alternatives](../models/PromotionAmountOffMethodPreviousAttributesInput.md#promotionamountoffmethodpreviousattributesinputallocation). |
| `amount_off_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Positive fixed discount in the primary currency. allocation determines whether it applies to each matched item or once across the matched set. |
| `calculation_basis` | Optional | string or null | What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Values: `"subtotal_pre_tax"`, `"subtotal_post_tax"`. `calculation_basis`: [declared alternatives](../models/PromotionAmountOffMethodPreviousAttributesInput.md#promotionamountoffmethodpreviousattributesinputcalculation_basis). |
| `currency_options` | Optional | Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Alternative positive fixed discounts, keyed by currency code. Each Money currency must match its key. `currency_options`: [declared alternatives](../models/PromotionAmountOffMethodPreviousAttributesInput.md#promotionamountoffmethodpreviousattributesinputcurrency_options). |
| `discounted_item_rules` | Optional | [PromotionRuleGroupPreviousAttributesInput](../models/PromotionRuleGroupPreviousAttributesInput.md#promotionrulegrouppreviousattributesinput) or null | Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST` with `param` naming this field. |
| `recurrence` | Optional | [PromotionRecurrencePreviousAttributesInput](../models/PromotionRecurrencePreviousAttributesInput.md#promotionrecurrencepreviousattributesinput) or null | Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. |
| `type` | Optional | string or null | Selects the amount_off discount effect and its allowed fields. Values: `"amount_off"`. `type`: [declared alternatives](../models/PromotionAmountOffMethodPreviousAttributesInput.md#promotionamountoffmethodpreviousattributesinputtype). |

### PromotionAmountOffMethodPreviousAttributesInput.allocation

### PromotionAmountOffMethodPreviousAttributesInput.allocation variant 1

anyOf variant 1: How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each..

- Value shape: string. How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Values: `"each"`, `"across"`.

### PromotionAmountOffMethodPreviousAttributesInput.allocation variant 2

anyOf variant 2.

- Value shape: null. How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. 

### PromotionAmountOffMethodPreviousAttributesInput.calculation_basis

### PromotionAmountOffMethodPreviousAttributesInput.calculation_basis variant 1

anyOf variant 1: What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge promotions; sending it there returns `400 INVALID_REQUEST`..

- Value shape: string. What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Values: `"subtotal_pre_tax"`, `"subtotal_post_tax"`.

### PromotionAmountOffMethodPreviousAttributesInput.calculation_basis variant 2

anyOf variant 2.

- Value shape: null. What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. 

### PromotionAmountOffMethodPreviousAttributesInput.currency_options

### PromotionAmountOffMethodPreviousAttributesInput.currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput). Alternative positive fixed discounts, keyed by currency code. Each Money currency must match its key. 

### PromotionAmountOffMethodPreviousAttributesInput.currency_options variant 2

anyOf variant 2.

- Value shape: null. Alternative positive fixed discounts, keyed by currency code. Each Money currency must match its key. 

### PromotionAmountOffMethodPreviousAttributesInput.type

### PromotionAmountOffMethodPreviousAttributesInput.type variant 1

anyOf variant 1: Selects the amount_off discount effect and its allowed fields..

- Value shape: string. Selects the amount_off discount effect and its allowed fields. Values: `"amount_off"`.

### PromotionAmountOffMethodPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. Selects the amount_off discount effect and its allowed fields. 

