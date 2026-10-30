[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingBalance

Current Flint merchant billing balance for one billing account and currency.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Account credit Flint holds for you that hasn't been applied yet, unsigned. Each application lowers both amounts and records a credit_applied entry. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `available_credit_money`: [field definitions](../models/MerchantBillingBalance.md#merchantbillingbalanceavailable_credit_money). |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `merchant_billing_balance_id` | Required | string | Stable identifier for this billing account and currency balance projection. |
| `observed_at` | Required | string | RFC3339 timestamp for the balance snapshot. Format: `date-time`. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What you owe Flint now, unsigned. Available credit isn't subtracted: credit lowers this amount only when Flint applies it, which records a credit_applied entry. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `outstanding_money`: [field definitions](../models/MerchantBillingBalance.md#merchantbillingbalanceoutstanding_money). |

### MerchantBillingBalance.available_credit_money

Account credit Flint holds for you that hasn't been applied yet, unsigned. Each application lowers both amounts and records a credit_applied entry. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### MerchantBillingBalance.outstanding_money

What you owe Flint now, unsigned. Available credit isn't subtracted: credit lowers this amount only when Flint applies it, which records a credit_applied entry. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

