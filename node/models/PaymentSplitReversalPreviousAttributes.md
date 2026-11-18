[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSplitReversalPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The split's share taken back. `amount_money`: [declared alternatives](../models/PaymentSplitReversalPreviousAttributes.md#paymentsplitreversalpreviousattributesamount_money). |
| `created_at` | Optional | string or null | When the reversal was recorded. `created_at`: [declared alternatives](../models/PaymentSplitReversalPreviousAttributes.md#paymentsplitreversalpreviousattributescreated_at). |
| `payment_split_reversal_id` | Optional | string or null | Unique identifier for the reversal. `payment_split_reversal_id`: [declared alternatives](../models/PaymentSplitReversalPreviousAttributes.md#paymentsplitreversalpreviousattributespayment_split_reversal_id). |
| `reason` | Optional | string or null | Why Flint created the reversal. Values: `"refund"`, `"dispute"`, `"other"`. `reason`: [declared alternatives](../models/PaymentSplitReversalPreviousAttributes.md#paymentsplitreversalpreviousattributesreason). |
| `reinstated_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Funds returned to whoever funded the reversal, such as after a won dispute or failed refund. `reinstated_money`: [declared alternatives](../models/PaymentSplitReversalPreviousAttributes.md#paymentsplitreversalpreviousattributesreinstated_money). |
| `shortfall_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part the collecting merchant covered. `shortfall_money`: [declared alternatives](../models/PaymentSplitReversalPreviousAttributes.md#paymentsplitreversalpreviousattributesshortfall_money). |
| `source` | Optional | [ResourceReferencePreviousAttributes](../models/ResourceReferencePreviousAttributes.md#resourcereferencepreviousattributes) or null | The refund or dispute behind the reversal. |
| `status` | Optional | string or null | The reversal lifecycle status. Values: `"pending"`, `"succeeded"`, `"canceled"`. `status`: [declared alternatives](../models/PaymentSplitReversalPreviousAttributes.md#paymentsplitreversalpreviousattributesstatus). |
| `succeeded_at` | Optional | string or null | When the split's share was recovered. Present when succeeded. `succeeded_at`: [declared alternatives](../models/PaymentSplitReversalPreviousAttributes.md#paymentsplitreversalpreviousattributessucceeded_at). |

### PaymentSplitReversalPreviousAttributes.amount_money

The split's share taken back.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PaymentSplitReversalPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PaymentSplitReversalPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The split's share taken back. 

### PaymentSplitReversalPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### PaymentSplitReversalPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### PaymentSplitReversalPreviousAttributes.created_at

### PaymentSplitReversalPreviousAttributes.created_at variant 1

anyOf variant 1: When the reversal was recorded..

- Value shape: string. When the reversal was recorded. When the reversal was recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentSplitReversalPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the reversal was recorded. 

### PaymentSplitReversalPreviousAttributes.payment_split_reversal_id

### PaymentSplitReversalPreviousAttributes.payment_split_reversal_id variant 1

anyOf variant 1: Unique identifier for the reversal..

- Value shape: string. Unique identifier for the reversal. Unique identifier for the reversal. Example: `"psrev_01KEZF7C00XC1HA7S8YCQJDBDM"`. 

### PaymentSplitReversalPreviousAttributes.payment_split_reversal_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the reversal. 

### PaymentSplitReversalPreviousAttributes.reason

### PaymentSplitReversalPreviousAttributes.reason variant 1

anyOf variant 1: Why Flint created the reversal..

- Value shape: string. Why Flint created the reversal. Values: `"refund"`, `"dispute"`, `"other"`.

### PaymentSplitReversalPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why Flint created the reversal. 

### PaymentSplitReversalPreviousAttributes.reinstated_money

Funds returned to whoever funded the reversal, such as after a won dispute or failed refund.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PaymentSplitReversalPreviousAttributes.reinstated_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PaymentSplitReversalPreviousAttributes.reinstated_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Funds returned to whoever funded the reversal, such as after a won dispute or failed refund. 

### PaymentSplitReversalPreviousAttributes.reinstated_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### PaymentSplitReversalPreviousAttributes.reinstated_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### PaymentSplitReversalPreviousAttributes.shortfall_money

The part the collecting merchant covered.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PaymentSplitReversalPreviousAttributes.shortfall_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PaymentSplitReversalPreviousAttributes.shortfall_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The part the collecting merchant covered. 

### PaymentSplitReversalPreviousAttributes.shortfall_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### PaymentSplitReversalPreviousAttributes.shortfall_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### PaymentSplitReversalPreviousAttributes.status

### PaymentSplitReversalPreviousAttributes.status variant 1

anyOf variant 1: The reversal lifecycle status..

- Value shape: string. The reversal lifecycle status. Values: `"pending"`, `"succeeded"`, `"canceled"`.

### PaymentSplitReversalPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. The reversal lifecycle status. 

### PaymentSplitReversalPreviousAttributes.succeeded_at

### PaymentSplitReversalPreviousAttributes.succeeded_at variant 1

anyOf variant 1: When the split's share was recovered. Present when succeeded..

- Value shape: string. When the split's share was recovered. Present when succeeded. When the split's share was recovered. Present when succeeded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentSplitReversalPreviousAttributes.succeeded_at variant 2

anyOf variant 2.

- Value shape: null. When the split's share was recovered. Present when succeeded. 

