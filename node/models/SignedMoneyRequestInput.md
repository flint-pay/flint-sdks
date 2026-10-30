[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SignedMoneyRequestInput

Request input. Response: [MoneyValue](../models/MoneyValue.md#moneyvalue).

Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Required | integer string | Signed amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `currency` | Required | string | ISO 4217 currency code for this amount. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |

