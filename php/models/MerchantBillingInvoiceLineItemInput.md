[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingInvoiceLineItemInput

One line on a merchant billing invoice, either a subscription charge or a credit, with quantity, unit price, and total.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When Flint added this line to the invoice. Format: `date-time`. |
| `merchant_billing_invoice_line_item_id` | Required | string | Stable identifier of this line item. |
| `name` | Required | string | Name of the subscription charge or credit. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Unsigned line total, calculated as quantity multiplied by unit_price_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | Whether the line adds a subscription charge or applies credit. Values: `"subscription"`, `"credit"`. |
| `unit_price_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Unsigned price of one unit. total_money is quantity times this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

