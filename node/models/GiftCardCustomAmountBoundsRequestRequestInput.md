[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardCustomAmountBoundsRequestRequestInput

Request input. Response: [GiftCardCustomAmountBounds](../models/GiftCardCustomAmountBounds.md#giftcardcustomamountbounds).

The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_money` | Required | object | Largest gift card value buyers can choose, in the face value currency. `maximum_money`: [field definitions](../models/GiftCardCustomAmountBoundsRequestRequestInput.md#giftcardcustomamountboundsrequestrequestinputmaximum_money). |
| `minimum_money` | Required | object | Smallest gift card value buyers can choose, in the face value currency. `minimum_money`: [field definitions](../models/GiftCardCustomAmountBoundsRequestRequestInput.md#giftcardcustomamountboundsrequestrequestinputminimum_money). |

### GiftCardCustomAmountBoundsRequestRequestInput.maximum_money

Largest gift card value buyers can choose, in the face value currency.

Field definitions: [shared fields](AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money).

### GiftCardCustomAmountBoundsRequestRequestInput.minimum_money

Smallest gift card value buyers can choose, in the face value currency.

Field definitions: [shared fields](AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money).

