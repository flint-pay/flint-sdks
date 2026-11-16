[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingBalance

Current Flint merchant billing balance for one billing account and currency.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Account credit Flint holds for you that hasn't been applied yet, unsigned. Each application lowers both amounts and records a credit_applied entry. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `available_credit_money`: [field definitions](../models/MerchantBillingBalance.md#merchantbillingbalanceavailable_credit_money). |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `merchant_billing_balance_id` | Required | string | Stable identifier for this billing account and currency balance projection. Example: `"mbbal_01KEZF7C002TWWZA70R4DRVJC9"`. |
| `observed_at` | Required | string | RFC3339 timestamp for the balance snapshot. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What you owe Flint now, unsigned. Available credit isn't subtracted: credit lowers this amount only when Flint applies it, which records a credit_applied entry. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `outstanding_money`: [field definitions](../models/MerchantBillingBalance.md#merchantbillingbalanceoutstanding_money). |
| `past_due_at` | Optional | string | Due date of the oldest unpaid past-due amount, as an RFC 3339 UTC timestamp. Omitted when nothing is past due. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `past_due_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount that is past its due date and still unpaid. Zero when nothing is past due. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `past_due_money`: [field definitions](../models/MerchantBillingBalance.md#merchantbillingbalancepast_due_money). |
| `payout_hold_at` | Optional | string | Time at which Flint holds payouts if the past-due amount is still unpaid, as an RFC 3339 UTC timestamp. The hold can begin later than this while a collection is in progress. Payouts are actually held when `readiness.payouts.status_reason` on the Merchant is `billing_suspended`. Omitted when no hold is scheduled, for example when the only past-due amounts never hold payouts. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### MerchantBillingBalance.available_credit_money

Account credit Flint holds for you that hasn't been applied yet, unsigned. Each application lowers both amounts and records a credit_applied entry. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### MerchantBillingBalance.outstanding_money

What you owe Flint now, unsigned. Available credit isn't subtracted: credit lowers this amount only when Flint applies it, which records a credit_applied entry. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### MerchantBillingBalance.past_due_money

Amount that is past its due date and still unpaid. Zero when nothing is past due. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

