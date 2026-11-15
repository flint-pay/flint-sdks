[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SimulateReaderRequest

Sandbox only. Presents a test card on a simulated reader.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `card_brand` | Optional | string | The brand of the test card to present. Defaults to `visa`. Declines present Visa test cards whatever brand you send. Values: `"visa"`, `"mastercard"`, `"amex"`, `"discover"`. |
| `outcome` | Required | string | The buyer's and issuer's decision. Values: `"approved"`, `"declined"`, `"insufficient_funds"`. |
| `tip_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The tip the buyer picks, when the payment was sent with the tip screen on. USD only. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tip_money`: [field definitions](../models/SimulateReaderRequest.md#simulatereaderrequesttip_money). |

### SimulateReaderRequest.tip_money

The tip the buyer picks, when the payment was sent with the tip screen on. USD only. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

