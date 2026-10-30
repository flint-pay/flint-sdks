[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteCorrectionRequestAmountInput

The `amount` variant of `CreditNoteCorrectionRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Positive billed value to credit in the invoice currency, no more than the frozen source line's remaining value. Consumes proportional remaining tax and discount without consuming quantity; later quantity corrections use the reduced remaining value. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Values: `"amount"`. |

