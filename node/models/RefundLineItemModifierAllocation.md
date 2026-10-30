[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemModifierAllocation

The part of a line item refund that applies to one modifier, by quantity or amount.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation_basis` | Required | string | Values: `"quantity"`, `"amount"`. |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `modifier_group_name` | Required | string |  |
| `name` | Required | string |  |
| `order_line_item_modifier_id` | Optional | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `refund_line_item_modifier_allocation_id` | Required | string |  |
| `show_on_fulfillment` | Required | boolean |  |
| `show_on_receipt` | Required | boolean |  |
| `source_type` | Required | string | Values: `"catalog_modifier"`, `"text"`. |
| `text_value` | Optional | string |  |

### RefundLineItemModifierAllocation.amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

