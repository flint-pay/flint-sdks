[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerReceivableBalanceInput

A customer's outstanding and overdue amounts in one currency.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `outstanding_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Total still owed across the customer's invoices in this currency: invoice totals minus payments applied and balance reductions. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `overdue_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Part of the outstanding amount that is past its due date at `observed_at`. Invoices with a payment schedule count only their past-due installments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

