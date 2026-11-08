[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceTip

A tip requested on an invoice, set as a fixed amount or a percentage, with an optional name and description.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fixed tip amount, when the tip is set as an amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerTip.md#buyertipamount_money). |
| `description` | Optional | string | Optional description that stays on the tip for your reporting. |
| `name` | Optional | string | Optional name that stays on the tip for your reporting. |
| `percent` | Optional | number | Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. multipleOf: `0.0001`. |

### InvoiceTip.amount_money

Field definitions: [BuyerTip.amount_money](../models/BuyerTip.md#buyertipamount_money).

