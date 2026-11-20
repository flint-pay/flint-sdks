[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MoneyValue







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `currency` | Required | string | minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |

### MoneyValue variant 1

anyOf Money: Declared schema MoneyValue. Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Constraints for `amount`: Amount in the currency's minor unit, such as cents for USD. minimum: `0`.
- Constraints for `currency`: Three-letter uppercase ISO 4217 currency code for this amount, such as USD.

### MoneyValue variant 2

anyOf variant 2: Declared schema PlatformFeeMoney. A positive platform fee in integer minor units plus an ISO 4217 currency code..

- Constraints for `amount`: Fee in the currency's minor unit, at least 1. minimum: `1`.
- Constraints for `currency`: ISO 4217 currency code for this amount. Example: `"USD"`.

### MoneyValue variant 3

anyOf variant 3: Declared schema SignedMoney. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Constraints for `amount`: Signed amount in the currency's minor unit, such as cents for USD.
- Constraints for `currency`: Three-letter uppercase ISO 4217 currency code for this amount, such as USD.

### MoneyValue variant 4

anyOf variant 4: Declared schema SignedMoneyRequest. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Constraints for `amount`: Signed amount in the currency's minor unit, such as cents for USD.
- Constraints for `currency`: Three-letter uppercase ISO 4217 currency code for this amount, such as USD. Example: `"USD"`.

