[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSplitReversalInput

A read-only nested child of a payment split, created by Flint for a refund or dispute. Embedded whole in PaymentSplit.reversals; no routes of its own.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The split's share taken back. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | When the reversal was recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `payment_split_reversal_id` | Required | string | Unique identifier for the reversal. Example: `"psrev_01KEZF7C00XC1HA7S8YCQJDBDM"`. |
| `reason` | Required | string | Why Flint created the reversal. Values: `"refund"`, `"dispute"`, `"other"`. |
| `reinstated_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Funds returned to whoever funded the reversal, such as after a won dispute or failed refund. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `shortfall_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The part the collecting merchant covered. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `source` | Required | [ResourceReferenceInput](../models/ResourceReferenceInput.md#resourcereferenceinput) | The refund or dispute behind the reversal. A reference to another resource by `resource_type` and `resource_id`. |
| `status` | Required | string | The reversal lifecycle status. Values: `"pending"`, `"succeeded"`, `"canceled"`. |
| `succeeded_at` | Optional | string | When the split's share was recovered. Present when succeeded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

