[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderReturnCreditSettlement

A return credit applied to an order payment, with the amount and the return and resolution it came from.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `return_id` | Required | string |  |
| `return_resolution_id` | Required | string |  |

### OrderReturnCreditSettlement.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

