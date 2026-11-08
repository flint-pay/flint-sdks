[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CashOutGiftCardRequest

The request body for: Record a cash-out.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount of cash you paid the buyer outside Flint, taken off the gift card's balance. Above zero, in the card's currency, and not more than the card's unreserved value. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CashOutGiftCardRequest.md#cashoutgiftcardrequestamount_money). |
| `cash_out_reference` | Required | string | Your reference for the cash you paid the buyer outside Flint, such as a receipt number. Required; 1 to 255 characters. The value is preserved exactly as sent. minLength: `1`. maxLength: `255`. |
| `expected_version` | Optional | integer | The gift card version last read. The command changes this card only when its current version matches. Format: `int64`. minimum: `1`. |

### CashOutGiftCardRequest.amount_money

Amount of cash you paid the buyer outside Flint, taken off the gift card's balance. Above zero, in the card's currency, and not more than the card's unreserved value. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

