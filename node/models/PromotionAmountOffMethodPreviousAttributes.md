[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionAmountOffMethodPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation` | Optional | string or null | How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Values: `"each"`, `"across"`. `allocation`: [declared alternatives](../models/PromotionAmountOffMethodPreviousAttributes.md#promotionamountoffmethodpreviousattributesallocation). |
| `amount_off_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Positive fixed discount in the primary currency. allocation determines whether it applies to each matched item or once across the matched set. `amount_off_money`: [declared alternatives](../models/PromotionAmountOffMethodPreviousAttributes.md#promotionamountoffmethodpreviousattributesamount_off_money). |
| `calculation_basis` | Optional | string or null | What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Values: `"subtotal_pre_tax"`, `"subtotal_post_tax"`. `calculation_basis`: [declared alternatives](../models/PromotionAmountOffMethodPreviousAttributes.md#promotionamountoffmethodpreviousattributescalculation_basis). |
| `currency_options` | Optional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Alternative positive fixed discounts, keyed by currency code. Each Money currency must match its key. `currency_options`: [declared alternatives](../models/PromotionAmountOffMethodPreviousAttributes.md#promotionamountoffmethodpreviousattributescurrency_options). |
| `discounted_item_rules` | Optional | [PromotionRuleGroupPreviousAttributes](../models/PromotionRuleGroupPreviousAttributes.md#promotionrulegrouppreviousattributes) or null | Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST` with `param` naming this field. |
| `recurrence` | Optional | [PromotionRecurrencePreviousAttributes](../models/PromotionRecurrencePreviousAttributes.md#promotionrecurrencepreviousattributes) or null | Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. |
| `type` | Optional | string or null | Selects the amount_off discount effect and its allowed fields. Values: `"amount_off"`. `type`: [declared alternatives](../models/PromotionAmountOffMethodPreviousAttributes.md#promotionamountoffmethodpreviousattributestype). |

### PromotionAmountOffMethodPreviousAttributes.allocation

### PromotionAmountOffMethodPreviousAttributes.allocation variant 1

anyOf variant 1: How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each..

- Value shape: string. How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Values: `"each"`, `"across"`.

### PromotionAmountOffMethodPreviousAttributes.allocation variant 2

anyOf variant 2.

- Value shape: null. How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. 

### PromotionAmountOffMethodPreviousAttributes.amount_off_money

Positive fixed discount in the primary currency. allocation determines whether it applies to each matched item or once across the matched set.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PromotionAmountOffMethodPreviousAttributes.amount_off_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PromotionAmountOffMethodPreviousAttributes.amount_off_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Positive fixed discount in the primary currency. allocation determines whether it applies to each matched item or once across the matched set. 

### PromotionAmountOffMethodPreviousAttributes.amount_off_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### PromotionAmountOffMethodPreviousAttributes.amount_off_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### PromotionAmountOffMethodPreviousAttributes.calculation_basis

### PromotionAmountOffMethodPreviousAttributes.calculation_basis variant 1

anyOf variant 1: What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge promotions; sending it there returns `400 INVALID_REQUEST`..

- Value shape: string. What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Values: `"subtotal_pre_tax"`, `"subtotal_post_tax"`.

### PromotionAmountOffMethodPreviousAttributes.calculation_basis variant 2

anyOf variant 2.

- Value shape: null. What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. 

### PromotionAmountOffMethodPreviousAttributes.currency_options

### PromotionAmountOffMethodPreviousAttributes.currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Alternative positive fixed discounts, keyed by currency code. Each Money currency must match its key. 

### PromotionAmountOffMethodPreviousAttributes.currency_options variant 2

anyOf variant 2.

- Value shape: null. Alternative positive fixed discounts, keyed by currency code. Each Money currency must match its key. 

### PromotionAmountOffMethodPreviousAttributes.currency_options variant 1.{} fields 1

Field definitions: [CheckoutTipConfigPreviousAttributes.smart_tip_money_options variant 1.[] fields 1](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributessmart_tip_money_options-variant-1-fields-1).

### PromotionAmountOffMethodPreviousAttributes.type

### PromotionAmountOffMethodPreviousAttributes.type variant 1

anyOf variant 1: Selects the amount_off discount effect and its allowed fields..

- Value shape: string. Selects the amount_off discount effect and its allowed fields. Values: `"amount_off"`.

### PromotionAmountOffMethodPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. Selects the amount_off discount effect and its allowed fields. 

