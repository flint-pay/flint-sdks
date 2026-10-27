[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundTaxBreakdownRefund

The tax refunded for one tax breakdown on an order.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_charge_id` | Optional | string |  |
| `tax_breakdown_id` | Required | string |  |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |

### RefundTaxBreakdownRefund.tax_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

