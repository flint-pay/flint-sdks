[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardCustomAmountBounds







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_money` | Required | object | Largest gift card value buyers can choose, in the face value currency. `maximum_money`: [field definitions](../models/GiftCardCustomAmountBounds.md#giftcardcustomamountboundsmaximum_money). |
| `minimum_money` | Required | object | Smallest gift card value buyers can choose, in the face value currency. `minimum_money`: [field definitions](../models/GiftCardCustomAmountBounds.md#giftcardcustomamountboundsminimum_money). |

### GiftCardCustomAmountBounds variant 1

anyOf variant 1: Declared schema GiftCardCustomAmountBounds. The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount..

No additional constraints.

### GiftCardCustomAmountBounds variant 2

anyOf variant 2: Declared schema GiftCardCustomAmountBoundsRequestRequest. The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount..

No additional constraints.

### GiftCardCustomAmountBounds.maximum_money

Largest gift card value buyers can choose, in the face value currency.

Field definitions: [shared fields](AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money).

### GiftCardCustomAmountBounds.minimum_money

Smallest gift card value buyers can choose, in the face value currency.

Field definitions: [shared fields](AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money).

