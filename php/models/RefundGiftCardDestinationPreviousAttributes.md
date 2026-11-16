[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundGiftCardDestinationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount credited to this gift card. |
| `gift_card_id` | Optional | string or null | ID of the gift card that received the value. `gift_card_id`: [declared alternatives](../models/RefundGiftCardDestinationPreviousAttributes.md#refundgiftcarddestinationpreviousattributesgift_card_id). |

### RefundGiftCardDestinationPreviousAttributes.gift_card_id

### RefundGiftCardDestinationPreviousAttributes.gift_card_id variant 1

anyOf variant 1: ID of the gift card that received the value..

- Value shape: string. ID of the gift card that received the value. 

### RefundGiftCardDestinationPreviousAttributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card that received the value. 

