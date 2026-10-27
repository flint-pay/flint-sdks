[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceTipInput

A tip requested on an invoice, set as a fixed amount or a percentage, with an optional name and description.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `description` | Optional | string |  |
| `name` | Optional | string |  |
| `percent` | Optional | number | multipleOf: `0.0001`. |

