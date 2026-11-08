[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceTipInput

A tip requested on an invoice, set as a fixed amount or a percentage, with an optional name and description.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Fixed tip amount, when the tip is set as an amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `description` | Optional | string | Optional description that stays on the tip for your reporting. |
| `name` | Optional | string | Optional name that stays on the tip for your reporting. |
| `percent` | Optional | number | Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. multipleOf: `0.0001`. |

