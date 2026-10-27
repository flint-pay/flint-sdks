[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceDiscount

A discount applied to an invoice, with its source, the discount amount, the amount actually applied, and any promotion.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `applied_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `applied_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `customer_facing_name` | Optional | string |  |
| `discount_class` | Optional | string | Values: `"order"`, `"line_item"`. |
| `promotion_code` | Optional | string |  |
| `promotion_id` | Optional | string |  |
| `source` | Required | string | Values: `"manual"`, `"promotion"`, `"plan_change_credit"`. |

### InvoiceDiscount.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### InvoiceDiscount.applied_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

