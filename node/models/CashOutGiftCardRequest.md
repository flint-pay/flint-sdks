[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CashOutGiftCardRequest

The request body for: Record a cash-out.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `cash_out_reference` | Required | string | Your reference for the cash you paid the buyer outside Flint, such as a receipt number. Required; 1 to 255 characters. The value is preserved exactly as sent. minLength: `1`. maxLength: `255`. |
| `expected_version` | Optional | integer string | The gift card version last read. The command changes this card only when its current version matches. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

### CashOutGiftCardRequest.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

