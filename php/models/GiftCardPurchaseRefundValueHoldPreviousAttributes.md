[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundValueHoldPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `purchase_refund_allocation_id` | Optional | string or null | ID of the pending purchase refund entry that holds the value. `purchase_refund_allocation_id`: [declared alternatives](../models/GiftCardPurchaseRefundValueHoldPreviousAttributes.md#giftcardpurchaserefundvalueholdpreviousattributespurchase_refund_allocation_id). |
| `refund_id` | Optional | string or null | ID of the pending refund that holds the value. `refund_id`: [declared alternatives](../models/GiftCardPurchaseRefundValueHoldPreviousAttributes.md#giftcardpurchaserefundvalueholdpreviousattributesrefund_id). |
| `root_gift_card_id` | Optional | string or null | ID of the original card whose purchase is being refunded. `root_gift_card_id`: [declared alternatives](../models/GiftCardPurchaseRefundValueHoldPreviousAttributes.md#giftcardpurchaserefundvalueholdpreviousattributesroot_gift_card_id). |
| `root_gift_card_load_id` | Optional | string or null | ID of the original funding load that is being refunded. `root_gift_card_load_id`: [declared alternatives](../models/GiftCardPurchaseRefundValueHoldPreviousAttributes.md#giftcardpurchaserefundvalueholdpreviousattributesroot_gift_card_load_id). |
| `value_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The unspent value held. |

### GiftCardPurchaseRefundValueHoldPreviousAttributes.purchase_refund_allocation_id

### GiftCardPurchaseRefundValueHoldPreviousAttributes.purchase_refund_allocation_id variant 1

anyOf variant 1: ID of the pending purchase refund entry that holds the value..

- Value shape: string. ID of the pending purchase refund entry that holds the value. 

### GiftCardPurchaseRefundValueHoldPreviousAttributes.purchase_refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the pending purchase refund entry that holds the value. 

### GiftCardPurchaseRefundValueHoldPreviousAttributes.refund_id

### GiftCardPurchaseRefundValueHoldPreviousAttributes.refund_id variant 1

anyOf variant 1: ID of the pending refund that holds the value..

- Value shape: string. ID of the pending refund that holds the value. 

### GiftCardPurchaseRefundValueHoldPreviousAttributes.refund_id variant 2

anyOf variant 2.

- Value shape: null. ID of the pending refund that holds the value. 

### GiftCardPurchaseRefundValueHoldPreviousAttributes.root_gift_card_id

### GiftCardPurchaseRefundValueHoldPreviousAttributes.root_gift_card_id variant 1

anyOf variant 1: ID of the original card whose purchase is being refunded..

- Value shape: string. ID of the original card whose purchase is being refunded. 

### GiftCardPurchaseRefundValueHoldPreviousAttributes.root_gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the original card whose purchase is being refunded. 

### GiftCardPurchaseRefundValueHoldPreviousAttributes.root_gift_card_load_id

### GiftCardPurchaseRefundValueHoldPreviousAttributes.root_gift_card_load_id variant 1

anyOf variant 1: ID of the original funding load that is being refunded..

- Value shape: string. ID of the original funding load that is being refunded. 

### GiftCardPurchaseRefundValueHoldPreviousAttributes.root_gift_card_load_id variant 2

anyOf variant 2.

- Value shape: null. ID of the original funding load that is being refunded. 

