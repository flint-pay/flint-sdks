[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerReceivableBalance

A customer's outstanding and overdue amounts in one currency.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total still owed across the customer's invoices in this currency: invoice totals minus payments applied and balance reductions. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `outstanding_money`: [field definitions](../models/CustomerReceivableBalance.md#customerreceivablebalanceoutstanding_money). |
| `overdue_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Part of the outstanding amount that is past its due date at `observed_at`. Invoices with a payment schedule count only their past-due installments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `overdue_money`: [field definitions](../models/CustomerReceivableBalance.md#customerreceivablebalanceoverdue_money). |

### CustomerReceivableBalance.outstanding_money

Total still owed across the customer's invoices in this currency: invoice totals minus payments applied and balance reductions. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### CustomerReceivableBalance.overdue_money

Part of the outstanding amount that is past its due date at `observed_at`. Invoices with a payment schedule count only their past-due installments. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

