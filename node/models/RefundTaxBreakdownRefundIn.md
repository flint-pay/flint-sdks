[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundTaxBreakdownRefundIn

The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax refunds explicitly.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `tax_breakdown_id` | Required | string | minLength: `1`. |
| `tax_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |

### RefundTaxBreakdownRefundIn.tax_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

