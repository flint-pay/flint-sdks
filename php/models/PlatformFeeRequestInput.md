[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeRequestInput

A platform fee the partner app charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes no share of it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [PlatformFeeMoneyInput](../models/PlatformFeeMoneyInput.md#platformfeemoneyinput) | The fee, at least 1 minor unit, in the payment's currency. A fixed amount: compute any percentage yourself. Omit platform_fee when creating a payment without a fee. A positive platform fee in integer minor units plus an ISO 4217 currency code. |

