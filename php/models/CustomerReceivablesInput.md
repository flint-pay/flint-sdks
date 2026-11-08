[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerReceivablesInput

A customer's receivable balances by currency and when they were observed.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `balances` | Required | Array of [CustomerReceivableBalanceInput](../models/CustomerReceivableBalanceInput.md#customerreceivablebalanceinput) | One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing. |
| `observed_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

