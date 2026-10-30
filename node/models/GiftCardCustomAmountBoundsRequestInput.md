[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardCustomAmountBoundsRequestInput

Request input. Response: [GiftCardCustomAmountBounds](../models/GiftCardCustomAmountBounds.md#giftcardcustomamountbounds).

The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_money` | Required | object | Largest gift card value buyers can choose, in the face value currency. `maximum_money`: [field definitions](../models/GiftCardCustomAmountBoundsRequestInput.md#giftcardcustomamountboundsrequestinputmaximum_money). |
| `minimum_money` | Required | object | Smallest gift card value buyers can choose, in the face value currency. `minimum_money`: [field definitions](../models/GiftCardCustomAmountBoundsRequestInput.md#giftcardcustomamountboundsrequestinputminimum_money). |

### GiftCardCustomAmountBoundsRequestInput.maximum_money

Largest gift card value buyers can choose, in the face value currency.

Field definitions: [shared fields](AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money).

### GiftCardCustomAmountBoundsRequestInput.minimum_money

Smallest gift card value buyers can choose, in the face value currency.

Field definitions: [shared fields](AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money).

