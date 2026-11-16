[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardAllocationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The amount this gift card covers. |
| `gift_card_id` | Optional | string or null | ID of the gift card the amount is taken from. `gift_card_id`: [declared alternatives](../models/OrderGiftCardAllocationPreviousAttributesInput.md#ordergiftcardallocationpreviousattributesinputgift_card_id). |

### OrderGiftCardAllocationPreviousAttributesInput.gift_card_id

### OrderGiftCardAllocationPreviousAttributesInput.gift_card_id variant 1

anyOf variant 1: ID of the gift card the amount is taken from..

- Value shape: string. ID of the gift card the amount is taken from. ID of the gift card the amount is taken from. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### OrderGiftCardAllocationPreviousAttributesInput.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the amount is taken from. 

