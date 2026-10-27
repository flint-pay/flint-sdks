[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderReturnCreditSettlementInput

A return credit applied to an order payment, with the amount and the return and resolution it came from.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `return_id` | Required | string |  |
| `return_resolution_id` | Required | string |  |

