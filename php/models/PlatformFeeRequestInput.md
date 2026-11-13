[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeRequestInput

A platform fee the partner app charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes no share of it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The fee in minor units, in the payment's currency. A fixed amount: compute any percentage yourself. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

