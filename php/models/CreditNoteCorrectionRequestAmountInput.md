[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteCorrectionRequestAmountInput

The `amount` variant of `CreditNoteCorrectionRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Positive billed value to credit in the invoice currency, no more than the frozen source line's remaining value. Consumes proportional remaining tax and discount without consuming quantity; later quantity corrections use the reduced remaining value. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `quantity` | Optional | integer string | Positive whole units; fractional quantities are not supported. No more than the source line's remaining uncredited quantity. Credits that fraction of its remaining billed value, rounded half up once at line level. Earlier amount corrections reduce that remaining value without consuming quantity. A share that rounds to zero is rejected; use a larger quantity or a positive amount. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `type` | Required | string | quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Values: `"amount"`. |

