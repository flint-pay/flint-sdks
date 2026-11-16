[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardAllocationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount this gift card covers. |
| `gift_card_id` | Optional | string or null | ID of the gift card the amount is taken from. `gift_card_id`: [declared alternatives](../models/OrderGiftCardAllocationPreviousAttributes.md#ordergiftcardallocationpreviousattributesgift_card_id). |

### OrderGiftCardAllocationPreviousAttributes.gift_card_id

### OrderGiftCardAllocationPreviousAttributes.gift_card_id variant 1

anyOf variant 1: ID of the gift card the amount is taken from..

- Value shape: string. ID of the gift card the amount is taken from. 

### OrderGiftCardAllocationPreviousAttributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the amount is taken from. 

