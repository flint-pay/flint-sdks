[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundValueHoldPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `purchase_refund_allocation_id` | Optional | string or null | ID of the pending purchase refund entry that holds the value. `purchase_refund_allocation_id`: [declared alternatives](../models/GiftCardPurchaseRefundValueHoldPreviousAttributesInput.md#giftcardpurchaserefundvalueholdpreviousattributesinputpurchase_refund_allocation_id). |
| `refund_id` | Optional | string or null | ID of the pending refund that holds the value. `refund_id`: [declared alternatives](../models/GiftCardPurchaseRefundValueHoldPreviousAttributesInput.md#giftcardpurchaserefundvalueholdpreviousattributesinputrefund_id). |
| `root_gift_card_id` | Optional | string or null | ID of the original card whose purchase is being refunded. `root_gift_card_id`: [declared alternatives](../models/GiftCardPurchaseRefundValueHoldPreviousAttributesInput.md#giftcardpurchaserefundvalueholdpreviousattributesinputroot_gift_card_id). |
| `root_gift_card_load_id` | Optional | string or null | ID of the original funding load that is being refunded. `root_gift_card_load_id`: [declared alternatives](../models/GiftCardPurchaseRefundValueHoldPreviousAttributesInput.md#giftcardpurchaserefundvalueholdpreviousattributesinputroot_gift_card_load_id). |
| `value_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The unspent value held. |

### GiftCardPurchaseRefundValueHoldPreviousAttributesInput.purchase_refund_allocation_id

### GiftCardPurchaseRefundValueHoldPreviousAttributesInput.purchase_refund_allocation_id variant 1

anyOf variant 1: ID of the pending purchase refund entry that holds the value..

- Value shape: string. ID of the pending purchase refund entry that holds the value. ID of the pending purchase refund entry that holds the value. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. 

### GiftCardPurchaseRefundValueHoldPreviousAttributesInput.purchase_refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the pending purchase refund entry that holds the value. 

### GiftCardPurchaseRefundValueHoldPreviousAttributesInput.refund_id

### GiftCardPurchaseRefundValueHoldPreviousAttributesInput.refund_id variant 1

anyOf variant 1: ID of the pending refund that holds the value..

- Value shape: string. ID of the pending refund that holds the value. ID of the pending refund that holds the value. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### GiftCardPurchaseRefundValueHoldPreviousAttributesInput.refund_id variant 2

anyOf variant 2.

- Value shape: null. ID of the pending refund that holds the value. 

### GiftCardPurchaseRefundValueHoldPreviousAttributesInput.root_gift_card_id

### GiftCardPurchaseRefundValueHoldPreviousAttributesInput.root_gift_card_id variant 1

anyOf variant 1: ID of the original card whose purchase is being refunded..

- Value shape: string. ID of the original card whose purchase is being refunded. ID of the original card whose purchase is being refunded. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### GiftCardPurchaseRefundValueHoldPreviousAttributesInput.root_gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the original card whose purchase is being refunded. 

### GiftCardPurchaseRefundValueHoldPreviousAttributesInput.root_gift_card_load_id

### GiftCardPurchaseRefundValueHoldPreviousAttributesInput.root_gift_card_load_id variant 1

anyOf variant 1: ID of the original funding load that is being refunded..

- Value shape: string. ID of the original funding load that is being refunded. ID of the original funding load that is being refunded. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. 

### GiftCardPurchaseRefundValueHoldPreviousAttributesInput.root_gift_card_load_id variant 2

anyOf variant 2.

- Value shape: null. ID of the original funding load that is being refunded. 

