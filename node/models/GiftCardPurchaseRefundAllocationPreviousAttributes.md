[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundAllocationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of the amount the buyer paid that this refund or reversal returns. `consideration_money`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesconsideration_money). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `order_manual_reversal_id` | Optional | string or null | ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. `order_manual_reversal_id`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesorder_manual_reversal_id). |
| `purchase_refund_allocation_id` | Optional | string or null | ID of this entry in the load's purchase refunds. `purchase_refund_allocation_id`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributespurchase_refund_allocation_id). |
| `recovery` | Optional | [GiftCardPurchaseRefundRecoveryPreviousAttributes](../models/GiftCardPurchaseRefundRecoveryPreviousAttributes.md#giftcardpurchaserefundrecoverypreviousattributes) or null | How the value was restored after the refund failed. `null` when no recovery happened. |
| `refund_id` | Optional | string or null | ID of the refund. `null` when the entry reverses a manual payment, which has no refund. `refund_id`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesrefund_id). |
| `status` | Optional | string or null | Whether the refund has succeeded, failed, or is still pending. Values: `"pending"`, `"succeeded"`, `"failed"`. `status`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `value_allocations` | Optional | Array of [GiftCardPurchaseRefundValueAllocationPreviousAttributes](../models/GiftCardPurchaseRefundValueAllocationPreviousAttributes.md#giftcardpurchaserefundvalueallocationpreviousattributes) or null | Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. `value_allocations`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesvalue_allocations). |
| `value_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The unspent face value this entry removes from the load. `value_money`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesvalue_money). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesversion). |

### GiftCardPurchaseRefundAllocationPreviousAttributes.consideration_money

The part of the amount the buyer paid that this refund or reversal returns.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### GiftCardPurchaseRefundAllocationPreviousAttributes.consideration_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### GiftCardPurchaseRefundAllocationPreviousAttributes.consideration_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The part of the amount the buyer paid that this refund or reversal returns. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.consideration_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### GiftCardPurchaseRefundAllocationPreviousAttributes.consideration_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### GiftCardPurchaseRefundAllocationPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### GiftCardPurchaseRefundAllocationPreviousAttributes.order_manual_reversal_id

### GiftCardPurchaseRefundAllocationPreviousAttributes.order_manual_reversal_id variant 1

anyOf variant 1: ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment..

- Value shape: string. ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. Example: `"omp_01KEZF7C007J18203RBJKB9TYE"`. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.order_manual_reversal_id variant 2

anyOf variant 2.

- Value shape: null. ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.purchase_refund_allocation_id

### GiftCardPurchaseRefundAllocationPreviousAttributes.purchase_refund_allocation_id variant 1

anyOf variant 1: ID of this entry in the load's purchase refunds..

- Value shape: string. ID of this entry in the load's purchase refunds. ID of this entry in the load's purchase refunds. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.purchase_refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of this entry in the load's purchase refunds. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.refund_id

### GiftCardPurchaseRefundAllocationPreviousAttributes.refund_id variant 1

anyOf variant 1: ID of the refund. `null` when the entry reverses a manual payment, which has no refund..

- Value shape: string. ID of the refund. `null` when the entry reverses a manual payment, which has no refund. ID of the refund. `null` when the entry reverses a manual payment, which has no refund. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.refund_id variant 2

anyOf variant 2.

- Value shape: null. ID of the refund. `null` when the entry reverses a manual payment, which has no refund. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.status

### GiftCardPurchaseRefundAllocationPreviousAttributes.status variant 1

anyOf variant 1: Whether the refund has succeeded, failed, or is still pending..

- Value shape: string. Whether the refund has succeeded, failed, or is still pending. Values: `"pending"`, `"succeeded"`, `"failed"`.

### GiftCardPurchaseRefundAllocationPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the refund has succeeded, failed, or is still pending. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### GiftCardPurchaseRefundAllocationPreviousAttributes.value_allocations

### GiftCardPurchaseRefundAllocationPreviousAttributes.value_allocations variant 1

anyOf variant 1: Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load..

- Value shape: Array of [GiftCardPurchaseRefundValueAllocationPreviousAttributes](../models/GiftCardPurchaseRefundValueAllocationPreviousAttributes.md#giftcardpurchaserefundvalueallocationpreviousattributes). Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.value_allocations variant 2

anyOf variant 2.

- Value shape: null. Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.value_money

The unspent face value this entry removes from the load.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### GiftCardPurchaseRefundAllocationPreviousAttributes.value_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### GiftCardPurchaseRefundAllocationPreviousAttributes.value_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The unspent face value this entry removes from the load. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.value_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### GiftCardPurchaseRefundAllocationPreviousAttributes.value_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### GiftCardPurchaseRefundAllocationPreviousAttributes.version

Declared alternatives: [GiftCardFundingDisputePreviousAttributes.version](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesversion).

