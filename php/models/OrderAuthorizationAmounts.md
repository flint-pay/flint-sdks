[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderAuthorizationAmounts

The amounts authorized and still capturable on an order's payments, with the authorization expiry.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `authorized_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capturable_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

