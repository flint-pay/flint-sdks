[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleAmountSpecificationInput

How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `percent` | Conditional | number | multipleOf: `0.0001`. |
| `type` | Required | string | Values: `"fixed"`, `"percentage"`, `"remaining_balance"`. |

### InvoiceScheduleAmountSpecificationInput variant 1: `type` = `"fixed"`

oneOf variant 1: The `fixed` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (present(`percent`)).
- Required: `amount_money`.
- Optional: `percent`.
- Constraints for `type`: Values: `"fixed"`.

### InvoiceScheduleAmountSpecificationInput variant 2: `type` = `"percentage"`

oneOf variant 2: The `percentage` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (present(`amount_money`)).
- Required: `percent`.
- Optional: `amount_money`.
- Constraints for `type`: Values: `"percentage"`.

### InvoiceScheduleAmountSpecificationInput variant 3: `type` = `"remaining_balance"`

oneOf variant 3: The `remaining_balance` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (at least one(present(`amount_money`); present(`percent`))).
- Optional: `amount_money`, `percent`.
- Constraints for `type`: Values: `"remaining_balance"`.

