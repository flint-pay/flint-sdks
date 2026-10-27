[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleAmountSpecificationRemainingBalanceInput

The `remaining_balance` variant of `InvoiceScheduleAmountSpecification`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `percent` | Optional | number | multipleOf: `0.0001`. |
| `type` | Required | string | Values: `"remaining_balance"`. |

