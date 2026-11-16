[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardSelectionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The card's available balance. |
| `gift_card_id` | Optional | string or null | ID of the gift card selected for the order. `gift_card_id`: [declared alternatives](../models/OrderGiftCardSelectionPreviousAttributesInput.md#ordergiftcardselectionpreviousattributesinputgift_card_id). |
| `last4` | Optional | string or null | Last four characters of the card's current code. `last4`: [declared alternatives](../models/OrderGiftCardSelectionPreviousAttributesInput.md#ordergiftcardselectionpreviousattributesinputlast4). |
| `requires_authorization` | Optional | boolean or null | Whether the card's current code must be applied again before the order can use it. `requires_authorization`: [declared alternatives](../models/OrderGiftCardSelectionPreviousAttributesInput.md#ordergiftcardselectionpreviousattributesinputrequires_authorization). |

### OrderGiftCardSelectionPreviousAttributesInput.gift_card_id

### OrderGiftCardSelectionPreviousAttributesInput.gift_card_id variant 1

anyOf variant 1: ID of the gift card selected for the order..

- Value shape: string. ID of the gift card selected for the order. ID of the gift card selected for the order. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### OrderGiftCardSelectionPreviousAttributesInput.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card selected for the order. 

### OrderGiftCardSelectionPreviousAttributesInput.last4

### OrderGiftCardSelectionPreviousAttributesInput.last4 variant 1

anyOf variant 1: Last four characters of the card's current code..

- Value shape: string. Last four characters of the card's current code. 

### OrderGiftCardSelectionPreviousAttributesInput.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four characters of the card's current code. 

### OrderGiftCardSelectionPreviousAttributesInput.requires_authorization

### OrderGiftCardSelectionPreviousAttributesInput.requires_authorization variant 1

anyOf variant 1: Whether the card's current code must be applied again before the order can use it..

- Value shape: boolean. Whether the card's current code must be applied again before the order can use it. 

### OrderGiftCardSelectionPreviousAttributesInput.requires_authorization variant 2

anyOf variant 2.

- Value shape: null. Whether the card's current code must be applied again before the order can use it. 

