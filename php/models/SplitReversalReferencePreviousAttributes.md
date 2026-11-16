[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SplitReversalReferencePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount fixed at allocation, unchanged by recovery or reinstatement. |
| `payment_split_id` | Optional | string or null | The split whose seller share was allocated. `payment_split_id`: [declared alternatives](../models/SplitReversalReferencePreviousAttributes.md#splitreversalreferencepreviousattributespayment_split_id). |
| `payment_split_reversal_id` | Optional | string or null | The reversal in PaymentSplit.reversals that records recovery status. `payment_split_reversal_id`: [declared alternatives](../models/SplitReversalReferencePreviousAttributes.md#splitreversalreferencepreviousattributespayment_split_reversal_id). |

### SplitReversalReferencePreviousAttributes.payment_split_id

### SplitReversalReferencePreviousAttributes.payment_split_id variant 1

anyOf variant 1: The split whose seller share was allocated..

- Value shape: string. The split whose seller share was allocated. 

### SplitReversalReferencePreviousAttributes.payment_split_id variant 2

anyOf variant 2.

- Value shape: null. The split whose seller share was allocated. 

### SplitReversalReferencePreviousAttributes.payment_split_reversal_id

### SplitReversalReferencePreviousAttributes.payment_split_reversal_id variant 1

anyOf variant 1: The reversal in PaymentSplit.reversals that records recovery status..

- Value shape: string. The reversal in PaymentSplit.reversals that records recovery status. 

### SplitReversalReferencePreviousAttributes.payment_split_reversal_id variant 2

anyOf variant 2.

- Value shape: null. The reversal in PaymentSplit.reversals that records recovery status. 

