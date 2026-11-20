[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SignedMoneyInput

Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Required | integer string | Signed amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `currency` | Required | string | Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |

