[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MoneyValue







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `currency` | Required | string | ISO 4217 currency code for this amount. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |

### MoneyValue variant 1

anyOf variant 1: Declared schema MoneyValue. Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Constraints for `amount`: Amount in the currency's minor unit, such as cents for USD. minimum: `0`.

### MoneyValue variant 2

anyOf variant 2: Declared schema SignedMoney. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Constraints for `amount`: Signed amount in the currency's minor unit, such as cents for USD.

