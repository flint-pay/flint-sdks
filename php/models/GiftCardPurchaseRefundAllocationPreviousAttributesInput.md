[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundAllocationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The part of the amount the buyer paid that this refund or reversal returns. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `order_manual_reversal_id` | Optional | string or null | ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. `order_manual_reversal_id`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributesInput.md#giftcardpurchaserefundallocationpreviousattributesinputorder_manual_reversal_id). |
| `purchase_refund_allocation_id` | Optional | string or null | ID of this entry in the load's purchase refunds. `purchase_refund_allocation_id`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributesInput.md#giftcardpurchaserefundallocationpreviousattributesinputpurchase_refund_allocation_id). |
| `recovery` | Optional | [GiftCardPurchaseRefundRecoveryPreviousAttributesInput](../models/GiftCardPurchaseRefundRecoveryPreviousAttributesInput.md#giftcardpurchaserefundrecoverypreviousattributesinput) or null | How the value was restored after the refund failed. `null` when no recovery happened. |
| `refund_id` | Optional | string or null or null | ID of the refund. `null` when the entry reverses a manual payment, which has no refund. `refund_id`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributesInput.md#giftcardpurchaserefundallocationpreviousattributesinputrefund_id). |
| `status` | Optional | string or null | Whether the refund has succeeded, failed, or is still pending. Values: `"pending"`, `"succeeded"`, `"failed"`. `status`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributesInput.md#giftcardpurchaserefundallocationpreviousattributesinputstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `value_allocations` | Optional | Array of [GiftCardPurchaseRefundValueAllocationPreviousAttributesInput](../models/GiftCardPurchaseRefundValueAllocationPreviousAttributesInput.md#giftcardpurchaserefundvalueallocationpreviousattributesinput) or null | Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. `value_allocations`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributesInput.md#giftcardpurchaserefundallocationpreviousattributesinputvalue_allocations). |
| `value_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The unspent face value this entry removes from the load. |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributesInput.md#giftcardfundingdisputepreviousattributesinputversion). |

### GiftCardPurchaseRefundAllocationPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### GiftCardPurchaseRefundAllocationPreviousAttributesInput.order_manual_reversal_id

### GiftCardPurchaseRefundAllocationPreviousAttributesInput.order_manual_reversal_id variant 1

anyOf variant 1: ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment..

- Value shape: string. ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. Example: `"omp_01KEZF7C007J18203RBJKB9TYE"`. 

### GiftCardPurchaseRefundAllocationPreviousAttributesInput.order_manual_reversal_id variant 2

anyOf variant 2.

- Value shape: null. ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. 

### GiftCardPurchaseRefundAllocationPreviousAttributesInput.purchase_refund_allocation_id

### GiftCardPurchaseRefundAllocationPreviousAttributesInput.purchase_refund_allocation_id variant 1

anyOf variant 1: ID of this entry in the load's purchase refunds..

- Value shape: string. ID of this entry in the load's purchase refunds. ID of this entry in the load's purchase refunds. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. 

### GiftCardPurchaseRefundAllocationPreviousAttributesInput.purchase_refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of this entry in the load's purchase refunds. 

### GiftCardPurchaseRefundAllocationPreviousAttributesInput.refund_id

### GiftCardPurchaseRefundAllocationPreviousAttributesInput.refund_id variant 1

anyOf variant 1: ID of the refund. `null` when the entry reverses a manual payment, which has no refund..

- Value shape: (string or null). ID of the refund. `null` when the entry reverses a manual payment, which has no refund. ID of the refund. `null` when the entry reverses a manual payment, which has no refund. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### GiftCardPurchaseRefundAllocationPreviousAttributesInput.refund_id variant 2

anyOf variant 2.

- Value shape: null. ID of the refund. `null` when the entry reverses a manual payment, which has no refund. 

### GiftCardPurchaseRefundAllocationPreviousAttributesInput.status

### GiftCardPurchaseRefundAllocationPreviousAttributesInput.status variant 1

anyOf variant 1: Whether the refund has succeeded, failed, or is still pending..

- Value shape: string. Whether the refund has succeeded, failed, or is still pending. Values: `"pending"`, `"succeeded"`, `"failed"`.

### GiftCardPurchaseRefundAllocationPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Whether the refund has succeeded, failed, or is still pending. 

### GiftCardPurchaseRefundAllocationPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### GiftCardPurchaseRefundAllocationPreviousAttributesInput.value_allocations

### GiftCardPurchaseRefundAllocationPreviousAttributesInput.value_allocations variant 1

anyOf variant 1: Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load..

- Value shape: Array of [GiftCardPurchaseRefundValueAllocationPreviousAttributesInput](../models/GiftCardPurchaseRefundValueAllocationPreviousAttributesInput.md#giftcardpurchaserefundvalueallocationpreviousattributesinput). Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. 

### GiftCardPurchaseRefundAllocationPreviousAttributesInput.value_allocations variant 2

anyOf variant 2.

- Value shape: null. Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. 

### GiftCardPurchaseRefundAllocationPreviousAttributesInput.version

Declared alternatives: [GiftCardFundingDisputePreviousAttributesInput.version](../models/GiftCardFundingDisputePreviousAttributesInput.md#giftcardfundingdisputepreviousattributesinputversion).

