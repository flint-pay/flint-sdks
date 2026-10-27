[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceDiscount

A discount applied to an invoice, with its source, the discount amount, the amount actually applied, and any promotion.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `applied_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `customer_facing_name` | Optional | string |  |
| `discount_class` | Optional | string | Values: `"order"`, `"line_item"`. |
| `promotion_code` | Optional | string |  |
| `promotion_id` | Optional | string |  |
| `source` | Required | string | Values: `"manual"`, `"promotion"`, `"plan_change_credit"`. |

