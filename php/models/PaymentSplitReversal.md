[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSplitReversal

A read-only nested child of a payment split, created by Flint for a refund or dispute. Embedded whole in PaymentSplit.reversals; no routes of its own.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The split's share taken back. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | When the reversal was recorded. Format: `date-time`. |
| `payment_split_reversal_id` | Required | string | Unique identifier for the reversal. |
| `reason` | Required | string | Why Flint created the reversal. Values: `"refund"`, `"dispute"`, `"other"`. |
| `reinstated_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Funds returned to whoever funded the reversal, such as after a won dispute or failed refund. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `shortfall_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part the collecting merchant covered. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `source` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) | The refund or dispute behind the reversal. A reference to another resource by `resource_type` and `resource_id`. `source`: [field definitions](../models/PaymentIntentResponse.md#paymentintentresponsedatasplitsreversalssource). |
| `status` | Required | string | The reversal lifecycle status. Values: `"pending"`, `"succeeded"`, `"canceled"`. |
| `succeeded_at` | Optional | string | When the split's share was recovered. Present when succeeded. Format: `date-time`. |

### PaymentSplitReversal.source

Field definitions: [PaymentIntentResponse.data.splits[].reversals[].source](../models/PaymentIntentResponse.md#paymentintentresponsedatasplitsreversalssource).

