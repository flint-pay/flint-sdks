[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SplitReversalReference

A fixed allocation referencing a read-only reversal nested in a payment split. This reference has no independent lifecycle or write routes.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount fixed at allocation, unchanged by recovery or reinstatement. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `payment_split_id` | Required | string | The split whose seller share was allocated. |
| `payment_split_reversal_id` | Required | string | The reversal in PaymentSplit.reversals that records recovery status. |

