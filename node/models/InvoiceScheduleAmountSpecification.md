[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleAmountSpecification

How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount to collect, in the invoice currency. Required with fixed and not accepted with any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/InvoiceScheduleAmountSpecification.md#invoicescheduleamountspecificationamount_money). |
| `percent` | Conditional | number | Percentage of snapshot.pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. multipleOf: `0.0001`. |
| `type` | Required | string | How the entry's amount is set. Values: `"fixed"`, `"percentage"`, `"remaining_balance"`. |

### InvoiceScheduleAmountSpecification variant 1: `type` = `"fixed"`

oneOf with type: "fixed": The `fixed` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (present(`percent`)).
- Required: `amount_money`.
- Optional: `percent`.
- Constraints for `type`: Values: `"fixed"`.

### InvoiceScheduleAmountSpecification variant 2: `type` = `"percentage"`

oneOf with type: "percentage": The `percentage` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (present(`amount_money`)).
- Required: `percent`.
- Optional: `amount_money`.
- Constraints for `type`: Values: `"percentage"`.

### InvoiceScheduleAmountSpecification variant 3: `type` = `"remaining_balance"`

oneOf with type: "remaining_balance": The `remaining_balance` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (at least one(present(`amount_money`); present(`percent`))).
- Optional: `amount_money`, `percent`.
- Constraints for `type`: Values: `"remaining_balance"`.

### InvoiceScheduleAmountSpecification.amount_money

The amount to collect, in the invoice currency. Required with fixed and not accepted with any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

