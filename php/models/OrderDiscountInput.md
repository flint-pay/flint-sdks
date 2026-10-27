[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDiscountInput

A discount applied to an order, with its amount, status, and the line items and charges it covers. It comes from a manual discount or a promotion.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `applied_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
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

