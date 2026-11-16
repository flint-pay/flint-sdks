[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSplitReversalPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The split's share taken back. |
| `created_at` | Optional | string or null | When the reversal was recorded. `created_at`: [declared alternatives](../models/PaymentSplitReversalPreviousAttributesInput.md#paymentsplitreversalpreviousattributesinputcreated_at). |
| `payment_split_reversal_id` | Optional | string or null | Unique identifier for the reversal. `payment_split_reversal_id`: [declared alternatives](../models/PaymentSplitReversalPreviousAttributesInput.md#paymentsplitreversalpreviousattributesinputpayment_split_reversal_id). |
| `reason` | Optional | string or null | Why Flint created the reversal. Values: `"refund"`, `"dispute"`, `"other"`. `reason`: [declared alternatives](../models/PaymentSplitReversalPreviousAttributesInput.md#paymentsplitreversalpreviousattributesinputreason). |
| `reinstated_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Funds returned to whoever funded the reversal, such as after a won dispute or failed refund. |
| `shortfall_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The part the collecting merchant covered. |
| `source` | Optional | [ResourceReferencePreviousAttributesInput](../models/ResourceReferencePreviousAttributesInput.md#resourcereferencepreviousattributesinput) or null | The refund or dispute behind the reversal. |
| `status` | Optional | string or null | The reversal lifecycle status. Values: `"pending"`, `"succeeded"`, `"canceled"`. `status`: [declared alternatives](../models/PaymentSplitReversalPreviousAttributesInput.md#paymentsplitreversalpreviousattributesinputstatus). |
| `succeeded_at` | Optional | string or null | When the split's share was recovered. Present when succeeded. `succeeded_at`: [declared alternatives](../models/PaymentSplitReversalPreviousAttributesInput.md#paymentsplitreversalpreviousattributesinputsucceeded_at). |

### PaymentSplitReversalPreviousAttributesInput.created_at

### PaymentSplitReversalPreviousAttributesInput.created_at variant 1

anyOf variant 1: When the reversal was recorded..

- Value shape: string. When the reversal was recorded. When the reversal was recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentSplitReversalPreviousAttributesInput.created_at variant 2

anyOf variant 2.

- Value shape: null. When the reversal was recorded. 

### PaymentSplitReversalPreviousAttributesInput.payment_split_reversal_id

### PaymentSplitReversalPreviousAttributesInput.payment_split_reversal_id variant 1

anyOf variant 1: Unique identifier for the reversal..

- Value shape: string. Unique identifier for the reversal. Unique identifier for the reversal. Example: `"psrev_01KEZF7C00XC1HA7S8YCQJDBDM"`. 

### PaymentSplitReversalPreviousAttributesInput.payment_split_reversal_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the reversal. 

### PaymentSplitReversalPreviousAttributesInput.reason

### PaymentSplitReversalPreviousAttributesInput.reason variant 1

anyOf variant 1: Why Flint created the reversal..

- Value shape: string. Why Flint created the reversal. Values: `"refund"`, `"dispute"`, `"other"`.

### PaymentSplitReversalPreviousAttributesInput.reason variant 2

anyOf variant 2.

- Value shape: null. Why Flint created the reversal. 

### PaymentSplitReversalPreviousAttributesInput.status

### PaymentSplitReversalPreviousAttributesInput.status variant 1

anyOf variant 1: The reversal lifecycle status..

- Value shape: string. The reversal lifecycle status. Values: `"pending"`, `"succeeded"`, `"canceled"`.

### PaymentSplitReversalPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. The reversal lifecycle status. 

### PaymentSplitReversalPreviousAttributesInput.succeeded_at

### PaymentSplitReversalPreviousAttributesInput.succeeded_at variant 1

anyOf variant 1: When the split's share was recovered. Present when succeeded..

- Value shape: string. When the split's share was recovered. Present when succeeded. When the split's share was recovered. Present when succeeded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentSplitReversalPreviousAttributesInput.succeeded_at variant 2

anyOf variant 2.

- Value shape: null. When the split's share was recovered. Present when succeeded. 

