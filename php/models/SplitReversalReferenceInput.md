[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SplitReversalReferenceInput

A fixed allocation referencing a read-only reversal nested in a payment split. This reference has no independent lifecycle or write routes.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The amount fixed at allocation, unchanged by recovery or reinstatement. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `payment_split_id` | Required | string | The split whose seller share was allocated. Example: `"psplit_01KEZF7C00Y5HA4Z8D4KRA07K8"`. |
| `payment_split_reversal_id` | Required | string | The reversal in PaymentSplit.reversals that records recovery status. Example: `"psrev_01KEZF7C00XC1HA7S8YCQJDBDM"`. |

