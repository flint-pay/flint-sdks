[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundValueAllocationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The value allocated to the card. |
| `gift_card_id` | Optional | string or null | ID of the gift card that received the value. `gift_card_id`: [declared alternatives](../models/RefundGiftCardDestinationPreviousAttributes.md#refundgiftcarddestinationpreviousattributesgift_card_id). |
| `gift_card_load_id` | Optional | string or null | ID of the load that holds the value. `gift_card_load_id`: [declared alternatives](../models/GiftCardPurchaseRefundValueAllocationPreviousAttributes.md#giftcardpurchaserefundvalueallocationpreviousattributesgift_card_load_id). |

### GiftCardPurchaseRefundValueAllocationPreviousAttributes.gift_card_id

Declared alternatives: [RefundGiftCardDestinationPreviousAttributes.gift_card_id](../models/RefundGiftCardDestinationPreviousAttributes.md#refundgiftcarddestinationpreviousattributesgift_card_id).

### GiftCardPurchaseRefundValueAllocationPreviousAttributes.gift_card_load_id

### GiftCardPurchaseRefundValueAllocationPreviousAttributes.gift_card_load_id variant 1

anyOf variant 1: ID of the load that holds the value..

- Value shape: string. ID of the load that holds the value. 

### GiftCardPurchaseRefundValueAllocationPreviousAttributes.gift_card_load_id variant 2

anyOf variant 2.

- Value shape: null. ID of the load that holds the value. 

