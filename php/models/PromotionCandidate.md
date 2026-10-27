[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionCandidate

A promotion considered for an order, with its discount amounts, its stacking rules, and why it was or was not applied.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Calculated discount amount for this promotion candidate before final application, when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `applied_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Discount amount applied to the order for candidates in applied[]. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `combines_with` | Optional | [PromotionCombinesWith](../models/PromotionCombinesWith.md#promotioncombineswith) | Which kinds of discounts a promotion can combine with: line item, order, and service charge discounts. |
| `current_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Current money amount counted toward threshold_money for available[] candidates. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `customer_facing_name` | Required | string |  |
| `discount_class` | Optional | string | Values: `"order"`, `"line_item"`, `"service_charge"`. |
| `exclusivity` | Optional | [PromotionExclusivity](../models/PromotionExclusivity.md#promotionexclusivity) | Only one promotion in an exclusivity group continues. See Promotion for the evaluation order. |
| `gap_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Additional money amount needed to reach threshold_money for available[] candidates. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `order_charge_ids` | Optional | Array of string |  |
| `order_line_item_ids` | Optional | Array of string |  |
| `promotion_code` | Optional | string |  |
| `promotion_code_id` | Optional | string |  |
| `promotion_decline_reason` | Optional | string | Values: [20 declared values](PromotionCandidateInput.md#promotioncandidateinput-promotion_decline_reason-values). |
| `promotion_id` | Required | string |  |
| `threshold_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Minimum money amount required by a threshold rule for available[] candidates. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `would_have_applied_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Discount amount this candidate would have applied if it had been eligible and won conflict resolution. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

