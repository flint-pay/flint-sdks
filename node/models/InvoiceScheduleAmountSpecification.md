[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleAmountSpecification

How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `percent` | Conditional | number | multipleOf: `0.0001`. |
| `type` | Required | string | Values: `"fixed"`, `"percentage"`, `"remaining_balance"`. |

### InvoiceScheduleAmountSpecification variant 1: `type` = `"fixed"`

oneOf variant 1: The `fixed` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (present(`percent`)).
- Required: `amount_money`.
- Optional: `percent`.
- Constraints for `type`: Values: `"fixed"`.

### InvoiceScheduleAmountSpecification variant 2: `type` = `"percentage"`

oneOf variant 2: The `percentage` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (present(`amount_money`)).
- Required: `percent`.
- Optional: `amount_money`.
- Constraints for `type`: Values: `"percentage"`.

### InvoiceScheduleAmountSpecification variant 3: `type` = `"remaining_balance"`

oneOf variant 3: The `remaining_balance` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (at least one(present(`amount_money`); present(`percent`))).
- Optional: `amount_money`, `percent`.
- Constraints for `type`: Values: `"remaining_balance"`.

### InvoiceScheduleAmountSpecification.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

