[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerReceivablesInput

A customer's receivable balances by currency and when they were observed.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `balances` | Required | Array of [CustomerReceivableBalanceInput](../models/CustomerReceivableBalanceInput.md#customerreceivablebalanceinput) |  |
| `observed_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

