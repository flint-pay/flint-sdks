[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionCandidateInput

A promotion considered for an order, with its discount amounts, its stacking rules, and why it was or was not applied.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Calculated discount amount for this promotion candidate before final application, when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `applied_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Discount amount applied to the order for candidates in applied[]. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `combines_with` | Optional | [PromotionCombinesWithInput](../models/PromotionCombinesWithInput.md#promotioncombineswithinput) | Which kinds of discounts a promotion can combine with: line item, order, and service charge discounts. |
| `current_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Current money amount counted toward threshold_money for available[] candidates. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `customer_facing_name` | Required | string |  |
| `discount_class` | Optional | string | Values: `"order"`, `"line_item"`, `"service_charge"`. |
| `exclusivity` | Optional | [PromotionExclusivityInput](../models/PromotionExclusivityInput.md#promotionexclusivityinput) | Only one promotion in an exclusivity group continues. See Promotion for the evaluation order. |
| `gap_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Additional money amount needed to reach threshold_money for available[] candidates. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `order_charge_ids` | Optional | Array of string |  |
| `order_line_item_ids` | Optional | Array of string |  |
| `promotion_code` | Optional | string |  |
| `promotion_code_id` | Optional | string |  |
| `promotion_decline_reason` | Optional | string | Values: [20 declared values](#promotioncandidateinput-promotion_decline_reason-values). |
| `promotion_id` | Required | string |  |
| `threshold_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Minimum money amount required by a threshold rule for available[] candidates. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `would_have_applied_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Discount amount this candidate would have applied if it had been eligible and won conflict resolution. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

#### PromotionCandidateInput promotion_decline_reason values

- `"already_applied"`
- `"automatic_disabled"`
- `"buy_item_missing"`
- `"code_invalid"`
- `"code_required"`
- `"codes_disabled"`
- `"currency_mismatch"`
- `"exhausted"`
- `"expired"`
- `"inactive"`
- `"max_promotions_reached"`
- `"minimum_not_met"`
- `"no_discountable_balance"`
- `"not_combinable"`
- `"not_eligible"`
- `"not_yet_started"`
- `"superseded"`
- `"superseded_by_better_offer"`
- `"superseded_by_higher_priority"`
- `"unknown_type"`

