[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeMoneyInput

Request input. Response: [MoneyValue](../models/MoneyValue.md#moneyvalue).

A positive platform fee in integer minor units plus an ISO 4217 currency code.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Required | integer string | Fee in the currency's minor unit, at least 1. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `currency` | Required | string | ISO 4217 currency code for this amount. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |

