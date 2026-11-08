[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerReceivables

A customer's receivable balances by currency and when they were observed.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `balances` | Required | Array of [CustomerReceivableBalance](../models/CustomerReceivableBalance.md#customerreceivablebalance) | One balance per currency in which the customer has an outstanding or overdue amount. Empty when the customer owes nothing. `balances[]`: [field definitions](../models/CustomerResponse.md#customerresponsedatareceivablesbalances). |
| `observed_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

### CustomerReceivables.balances[]

Field definitions: [CustomerResponse.data.receivables.balances[]](../models/CustomerResponse.md#customerresponsedatareceivablesbalances).

