[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceDiscount

A discount applied to an invoice, with its source, the discount amount, the amount actually applied, and any promotion.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Discount amount before limits apply, such as 20% of $100 resolving to $20. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/InvoiceDiscount.md#invoicediscountamount_money). |
| `applied_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount the discount took off. It is less than `amount_money` when a limit applies, such as a discount that would take the order below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `applied_money`: [field definitions](../models/InvoiceDiscount.md#invoicediscountapplied_money). |
| `customer_facing_name` | Optional | string | Name the buyer sees for the discount. |
| `discount_class` | Optional | string | Which part of the order the discount reduces. Values: `"order"`, `"line_item"`. |
| `promotion_code` | Optional | string | Promotion code used to create this discount. Present only when `source` is `promotion` and a code was used. |
| `promotion_id` | Optional | string | ID of the promotion that supplied this discount. Absent for a manual discount. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. |
| `source` | Required | string | Where the discount came from. Values: `"manual"`, `"promotion"`, `"plan_change_credit"`, `"proration"`, `"prepaid_delivery"`. |

### InvoiceDiscount.amount_money

Discount amount before limits apply, such as 20% of $100 resolving to $20. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### InvoiceDiscount.applied_money

Amount the discount took off. It is less than `amount_money` when a limit applies, such as a discount that would take the order below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

