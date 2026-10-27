[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerReceivables

A customer's receivable balances by currency and when they were observed.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `balances` | Required | Array of [CustomerReceivableBalance](../models/CustomerReceivableBalance.md#customerreceivablebalance) | `balances[]`: [field definitions](../models/CustomerReceivables.md#customerreceivablesbalances). |
| `observed_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

### CustomerReceivables.balances[]

A customer's outstanding and overdue amounts in one currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `overdue_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

