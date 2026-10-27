[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceTip

A tip requested on an invoice, set as a fixed amount or a percentage, with an optional name and description.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `description` | Optional | string |  |
| `name` | Optional | string |  |
| `percent` | Optional | number | multipleOf: `0.0001`. |

### InvoiceTip.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

