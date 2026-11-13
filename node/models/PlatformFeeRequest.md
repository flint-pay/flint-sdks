[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeRequest

A platform fee the partner app charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes no share of it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee in minor units, in the payment's currency. A fixed amount: compute any percentage yourself. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/PlatformFeeRequest.md#platformfeerequestamount_money). |

### PlatformFeeRequest.amount_money

The fee in minor units, in the payment's currency. A fixed amount: compute any percentage yourself. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

