[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SimulateReaderRequestInput

Sandbox only. Presents a test card on a simulated reader.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `card_brand` | Optional | string | The brand of the test card to present. Defaults to `visa`. Declines present Visa test cards whatever brand you send. Values: `"visa"`, `"mastercard"`, `"amex"`, `"discover"`. |
| `outcome` | Required | string | The buyer's and issuer's decision. Values: `"approved"`, `"declined"`, `"insufficient_funds"`. |
| `tip_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The tip the buyer picks, when the payment was sent with the tip screen on. USD only. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

