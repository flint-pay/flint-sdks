[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundAllocation

An entry in a gift card load's purchase refunds.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the amount the buyer paid that this refund or reversal returns. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `order_manual_reversal_id` | Optional | string | ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. |
| `purchase_refund_allocation_id` | Required | string | ID of this entry in the load's purchase refunds. |
| `recovery` | Optional | [GiftCardPurchaseRefundRecovery](../models/GiftCardPurchaseRefundRecovery.md#giftcardpurchaserefundrecovery) | How the value was restored after the refund failed. `null` when no recovery happened. Records how value was recovered for a gift card purchase refund, on the original or a replacement card, with the destinations that received it. `recovery`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_refundsrecovery). |
| `refund_id` | Required | string or null | ID of the refund. `null` when the entry reverses a manual payment, which has no refund. |
| `status` | Required | string | Whether the refund has succeeded, failed, or is still pending. Values: `"pending"`, `"succeeded"`, `"failed"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `value_allocations` | Optional | Array of [GiftCardPurchaseRefundValueAllocation](../models/GiftCardPurchaseRefundValueAllocation.md#giftcardpurchaserefundvalueallocation) | Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. `value_allocations[]`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_refundsvalue_allocations). |
| `value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The unspent face value this entry removes from the load. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. |

### GiftCardPurchaseRefundAllocation.recovery

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load.purchase_refunds[].recovery](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_refundsrecovery).

### GiftCardPurchaseRefundAllocation.value_allocations[]

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load.purchase_refunds[].value_allocations[]](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_refundsvalue_allocations).

