[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingBalance

Current Flint merchant billing balance for one billing account and currency.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `merchant_billing_balance_id` | Required | string | Stable identifier for this billing account and currency balance projection. |
| `observed_at` | Required | string | RFC3339 timestamp for the balance snapshot. Format: `date-time`. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

