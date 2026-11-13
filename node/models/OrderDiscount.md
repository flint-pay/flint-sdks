[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDiscount

A discount applied to an order, with its amount, status, and the line items and charges it covers. It comes from a manual discount or a promotion.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Discount amount before limits apply, such as 20% of $100 resolving to $20. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/InvoiceDiscount.md#invoicediscountamount_money). |
| `applied_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount the discount took off. It is less than `amount_money` when a limit applies, such as a discount that would take the order below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `applied_money`: [field definitions](../models/InvoiceDiscount.md#invoicediscountapplied_money). |
| `customer_facing_name` | Optional | string | Name the buyer sees for the discount. |
| `discount_class` | Optional | string | Which part of the order the discount reduces. Values: `"order"`, `"line_item"`, `"service_charge"`. |
| `order_charge_ids` | Required | Array of string | IDs of the charges this discount reduces. Items: Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `order_discount_id` | Required | string | Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount. Example: `"ad_01KEZF7C00T30DH97GR0A9BF31"`. |
| `order_id` | Required | string | ID of the order the discount applies to. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_line_item_ids` | Required | Array of string | IDs of the order line items this discount applies to. Items: Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `promotion_code` | Optional | string | Promotion code used to create this discount. Present only when source is promotion and a code was used. |
| `promotion_id` | Optional | string | Promotion that created this discount. Present only when source is promotion. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. |
| `source` | Optional | string | Where the discount came from. Values: `"manual"`, `"promotion"`, `"plan_change_credit"`, `"proration"`, `"prepaid_delivery"`. |
| `status` | Required | string | Redemption state of the discount. Values: `"pending"`, `"redeemed"`, `"canceled"`. |

### OrderDiscount.amount_money

Field definitions: [InvoiceDiscount.amount_money](../models/InvoiceDiscount.md#invoicediscountamount_money).

### OrderDiscount.applied_money

Field definitions: [InvoiceDiscount.applied_money](../models/InvoiceDiscount.md#invoicediscountapplied_money).

