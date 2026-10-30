[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingBalanceInput

Current Flint merchant billing balance for one billing account and currency.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_credit_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Account credit Flint holds for you that hasn't been applied yet, unsigned. Each application lowers both amounts and records a credit_applied entry. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `merchant_billing_balance_id` | Required | string | Stable identifier for this billing account and currency balance projection. |
| `observed_at` | Required | string | RFC3339 timestamp for the balance snapshot. Format: `date-time`. |
| `outstanding_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | What you owe Flint now, unsigned. Available credit isn't subtracted: credit lowers this amount only when Flint applies it, which records a credit_applied entry. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

