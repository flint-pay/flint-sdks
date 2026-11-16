[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundRecoveryDestinationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Optional | string or null | ID of the gift card that received the value. `gift_card_id`: [declared alternatives](../models/GiftCardPurchaseRefundRecoveryDestinationPreviousAttributesInput.md#giftcardpurchaserefundrecoverydestinationpreviousattributesinputgift_card_id). |
| `gift_card_load_id` | Optional | string or null | ID of the load that holds the value. `gift_card_load_id`: [declared alternatives](../models/GiftCardPurchaseRefundRecoveryDestinationPreviousAttributesInput.md#giftcardpurchaserefundrecoverydestinationpreviousattributesinputgift_card_load_id). |
| `value_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The value restored to the card. |

### GiftCardPurchaseRefundRecoveryDestinationPreviousAttributesInput.gift_card_id

### GiftCardPurchaseRefundRecoveryDestinationPreviousAttributesInput.gift_card_id variant 1

anyOf variant 1: ID of the gift card that received the value..

- Value shape: string. ID of the gift card that received the value. ID of the gift card that received the value. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### GiftCardPurchaseRefundRecoveryDestinationPreviousAttributesInput.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card that received the value. 

### GiftCardPurchaseRefundRecoveryDestinationPreviousAttributesInput.gift_card_load_id

### GiftCardPurchaseRefundRecoveryDestinationPreviousAttributesInput.gift_card_load_id variant 1

anyOf variant 1: ID of the load that holds the value..

- Value shape: string. ID of the load that holds the value. ID of the load that holds the value. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. 

### GiftCardPurchaseRefundRecoveryDestinationPreviousAttributesInput.gift_card_load_id variant 2

anyOf variant 2.

- Value shape: null. ID of the load that holds the value. 

