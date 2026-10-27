[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingInvoiceLineItem

One line on a merchant billing invoice, either a subscription charge or a credit, with quantity, unit price, and total.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `merchant_billing_invoice_line_item_id` | Required | string |  |
| `name` | Required | string | Name of the subscription charge or credit. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Unsigned line total, calculated as quantity multiplied by unit_price_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/MerchantBillingInvoiceLineItem.md#merchantbillinginvoicelineitemtotal_money). |
| `type` | Required | string | Whether the line adds a subscription charge or applies credit. Values: `"subscription"`, `"credit"`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |

### MerchantBillingInvoiceLineItem.total_money

Unsigned line total, calculated as quantity multiplied by unit_price_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### MerchantBillingInvoiceLineItem.unit_price_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

