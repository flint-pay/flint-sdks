[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleAmountSpecificationPercentage

The `percentage` variant of `InvoiceScheduleAmountSpecification`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `percent` | Required | number | multipleOf: `0.0001`. |
| `type` | Required | string | Values: `"percentage"`. |

### InvoiceScheduleAmountSpecificationPercentage.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

