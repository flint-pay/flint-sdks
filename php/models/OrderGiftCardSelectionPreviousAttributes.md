[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardSelectionPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The card's available balance. |
| `gift_card_id` | Optional | string or null | ID of the gift card selected for the order. `gift_card_id`: [declared alternatives](../models/OrderGiftCardSelectionPreviousAttributes.md#ordergiftcardselectionpreviousattributesgift_card_id). |
| `last4` | Optional | string or null | Last four characters of the card's current code. `last4`: [declared alternatives](../models/PaymentAttemptGiftCardRedemptionPreviousAttributes.md#paymentattemptgiftcardredemptionpreviousattributeslast4). |
| `requires_authorization` | Optional | boolean or null | Whether the card's current code must be applied again before the order can use it. `requires_authorization`: [declared alternatives](../models/OrderGiftCardSelectionPreviousAttributes.md#ordergiftcardselectionpreviousattributesrequires_authorization). |

### OrderGiftCardSelectionPreviousAttributes.gift_card_id

### OrderGiftCardSelectionPreviousAttributes.gift_card_id variant 1

anyOf variant 1: ID of the gift card selected for the order..

- Value shape: string. ID of the gift card selected for the order. 

### OrderGiftCardSelectionPreviousAttributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card selected for the order. 

### OrderGiftCardSelectionPreviousAttributes.last4

Declared alternatives: [PaymentAttemptGiftCardRedemptionPreviousAttributes.last4](../models/PaymentAttemptGiftCardRedemptionPreviousAttributes.md#paymentattemptgiftcardredemptionpreviousattributeslast4).

### OrderGiftCardSelectionPreviousAttributes.requires_authorization

### OrderGiftCardSelectionPreviousAttributes.requires_authorization variant 1

anyOf variant 1: Whether the card's current code must be applied again before the order can use it..

- Value shape: boolean. Whether the card's current code must be applied again before the order can use it. 

### OrderGiftCardSelectionPreviousAttributes.requires_authorization variant 2

anyOf variant 2.

- Value shape: null. Whether the card's current code must be applied again before the order can use it. 

