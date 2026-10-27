[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerReceivables

A customer's receivable balances by currency and when they were observed.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `balances` | Required | Array of [CustomerReceivableBalance](../models/CustomerReceivableBalance.md#customerreceivablebalance) |  |
| `observed_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

