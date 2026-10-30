[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDiscount

A discount applied to an order, with its amount, status, and the line items and charges it covers. It comes from a manual discount or a promotion.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `applied_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `applied_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `customer_facing_name` | Optional | string |  |
| `discount_class` | Optional | string | Values: `"order"`, `"line_item"`, `"service_charge"`. |
| `order_charge_ids` | Required | Array of string |  |
| `order_discount_id` | Required | string | Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount. |
| `order_id` | Required | string |  |
| `order_line_item_ids` | Required | Array of string |  |
| `promotion_code` | Optional | string | Promotion code used to create this discount. Present only when source is promotion and a code was used. |
| `promotion_id` | Optional | string | Promotion that created this discount. Present only when source is promotion. |
| `source` | Optional | string | Values: `"manual"`, `"promotion"`, `"plan_change_credit"`. |
| `status` | Required | string | Values: `"pending"`, `"redeemed"`, `"canceled"`. |

### OrderDiscount.amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### OrderDiscount.applied_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

