[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SplitReversalReferencePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The amount fixed at allocation, unchanged by recovery or reinstatement. |
| `payment_split_id` | Optional | string or null | The split whose seller share was allocated. `payment_split_id`: [declared alternatives](../models/SplitReversalReferencePreviousAttributesInput.md#splitreversalreferencepreviousattributesinputpayment_split_id). |
| `payment_split_reversal_id` | Optional | string or null | The reversal in PaymentSplit.reversals that records recovery status. `payment_split_reversal_id`: [declared alternatives](../models/SplitReversalReferencePreviousAttributesInput.md#splitreversalreferencepreviousattributesinputpayment_split_reversal_id). |

### SplitReversalReferencePreviousAttributesInput.payment_split_id

### SplitReversalReferencePreviousAttributesInput.payment_split_id variant 1

anyOf variant 1: The split whose seller share was allocated..

- Value shape: string. The split whose seller share was allocated. The split whose seller share was allocated. Example: `"psplit_01KEZF7C00Y5HA4Z8D4KRA07K8"`. 

### SplitReversalReferencePreviousAttributesInput.payment_split_id variant 2

anyOf variant 2.

- Value shape: null. The split whose seller share was allocated. 

### SplitReversalReferencePreviousAttributesInput.payment_split_reversal_id

### SplitReversalReferencePreviousAttributesInput.payment_split_reversal_id variant 1

anyOf variant 1: The reversal in PaymentSplit.reversals that records recovery status..

- Value shape: string. The reversal in PaymentSplit.reversals that records recovery status. The reversal in PaymentSplit.reversals that records recovery status. Example: `"psrev_01KEZF7C00XC1HA7S8YCQJDBDM"`. 

### SplitReversalReferencePreviousAttributesInput.payment_split_reversal_id variant 2

anyOf variant 2.

- Value shape: null. The reversal in PaymentSplit.reversals that records recovery status. 

