[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSplitReversalPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The split's share taken back. |
| `created_at` | Optional | string or null | When the reversal was recorded. `created_at`: [declared alternatives](../models/PaymentSplitReversalPreviousAttributes.md#paymentsplitreversalpreviousattributescreated_at). |
| `payment_split_reversal_id` | Optional | string or null | Unique identifier for the reversal. `payment_split_reversal_id`: [declared alternatives](../models/PaymentSplitReversalPreviousAttributes.md#paymentsplitreversalpreviousattributespayment_split_reversal_id). |
| `reason` | Optional | string or null | Why Flint created the reversal. Values: `"refund"`, `"dispute"`, `"other"`. `reason`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesreversals-variant-1-fields-1reason). |
| `reinstated_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Funds returned to whoever funded the reversal, such as after a won dispute or failed refund. |
| `shortfall_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part the collecting merchant covered. |
| `source` | Optional | [ResourceReferencePreviousAttributes](../models/ResourceReferencePreviousAttributes.md#resourcereferencepreviousattributes) or null | The refund or dispute behind the reversal. `source`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesreversals-variant-1-fields-1source). |
| `status` | Optional | string or null | The reversal lifecycle status. Values: `"pending"`, `"succeeded"`, `"canceled"`. `status`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesreversals-variant-1-fields-1status). |
| `succeeded_at` | Optional | string or null | When the split's share was recovered. Present when succeeded. `succeeded_at`: [declared alternatives](../models/PaymentSplitReversalPreviousAttributes.md#paymentsplitreversalpreviousattributessucceeded_at). |

### PaymentSplitReversalPreviousAttributes.created_at

### PaymentSplitReversalPreviousAttributes.created_at variant 1

anyOf variant 1: When the reversal was recorded..

- Value shape: string. When the reversal was recorded. When the reversal was recorded. Format: `date-time`. 

### PaymentSplitReversalPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the reversal was recorded. 

### PaymentSplitReversalPreviousAttributes.payment_split_reversal_id

### PaymentSplitReversalPreviousAttributes.payment_split_reversal_id variant 1

anyOf variant 1: Unique identifier for the reversal..

- Value shape: string. Unique identifier for the reversal. 

### PaymentSplitReversalPreviousAttributes.payment_split_reversal_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the reversal. 

### PaymentSplitReversalPreviousAttributes.reason

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.reason](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesreversals-variant-1-fields-1reason).

### PaymentSplitReversalPreviousAttributes.source

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.source](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesreversals-variant-1-fields-1source).

### PaymentSplitReversalPreviousAttributes.status

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals variant 1.[] fields 1.status](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesreversals-variant-1-fields-1status).

### PaymentSplitReversalPreviousAttributes.succeeded_at

### PaymentSplitReversalPreviousAttributes.succeeded_at variant 1

anyOf variant 1: When the split's share was recovered. Present when succeeded..

- Value shape: string. When the split's share was recovered. Present when succeeded. When the split's share was recovered. Present when succeeded. Format: `date-time`. 

### PaymentSplitReversalPreviousAttributes.succeeded_at variant 2

anyOf variant 2.

- Value shape: null. When the split's share was recovered. Present when succeeded. 

