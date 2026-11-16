[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SplitReversalReferencePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount fixed at allocation, unchanged by recovery or reinstatement. `amount_money`: [declared alternatives](../models/SplitReversalReferencePreviousAttributes.md#splitreversalreferencepreviousattributesamount_money). |
| `payment_split_id` | Optional | string or null | The split whose seller share was allocated. `payment_split_id`: [declared alternatives](../models/SplitReversalReferencePreviousAttributes.md#splitreversalreferencepreviousattributespayment_split_id). |
| `payment_split_reversal_id` | Optional | string or null | The reversal in PaymentSplit.reversals that records recovery status. `payment_split_reversal_id`: [declared alternatives](../models/SplitReversalReferencePreviousAttributes.md#splitreversalreferencepreviousattributespayment_split_reversal_id). |

### SplitReversalReferencePreviousAttributes.amount_money

The amount fixed at allocation, unchanged by recovery or reinstatement.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### SplitReversalReferencePreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### SplitReversalReferencePreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The amount fixed at allocation, unchanged by recovery or reinstatement. 

### SplitReversalReferencePreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### SplitReversalReferencePreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### SplitReversalReferencePreviousAttributes.payment_split_id

### SplitReversalReferencePreviousAttributes.payment_split_id variant 1

anyOf variant 1: The split whose seller share was allocated..

- Value shape: string. The split whose seller share was allocated. The split whose seller share was allocated. Example: `"psplit_01KEZF7C00Y5HA4Z8D4KRA07K8"`. 

### SplitReversalReferencePreviousAttributes.payment_split_id variant 2

anyOf variant 2.

- Value shape: null. The split whose seller share was allocated. 

### SplitReversalReferencePreviousAttributes.payment_split_reversal_id

### SplitReversalReferencePreviousAttributes.payment_split_reversal_id variant 1

anyOf variant 1: The reversal in PaymentSplit.reversals that records recovery status..

- Value shape: string. The reversal in PaymentSplit.reversals that records recovery status. The reversal in PaymentSplit.reversals that records recovery status. Example: `"psrev_01KEZF7C00XC1HA7S8YCQJDBDM"`. 

### SplitReversalReferencePreviousAttributes.payment_split_reversal_id variant 2

anyOf variant 2.

- Value shape: null. The reversal in PaymentSplit.reversals that records recovery status. 

