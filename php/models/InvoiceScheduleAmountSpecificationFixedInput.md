[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleAmountSpecificationFixedInput

The `fixed` variant of `InvoiceScheduleAmountSpecification`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `percent` | Optional | number | multipleOf: `0.0001`. |
| `type` | Required | string | Values: `"fixed"`. |

