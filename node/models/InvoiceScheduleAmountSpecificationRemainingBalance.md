[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleAmountSpecificationRemainingBalance

The `remaining_balance` variant of `InvoiceScheduleAmountSpecification`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `percent` | Optional | number | multipleOf: `0.0001`. |
| `type` | Required | string | Values: `"remaining_balance"`. |

### InvoiceScheduleAmountSpecificationRemainingBalance.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

