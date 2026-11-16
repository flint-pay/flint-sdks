[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentAttemptGiftCardRedemptionPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount reserved on the gift card for this attempt, in USD, including `tip_money`. It is taken from the card only if the attempt succeeds. A failed or canceled attempt releases it. |
| `gift_card_id` | Optional | string or null | ID of the gift card redeemed. `gift_card_id`: [declared alternatives](../models/PaymentAttemptGiftCardRedemptionPreviousAttributes.md#paymentattemptgiftcardredemptionpreviousattributesgift_card_id). |
| `gift_card_redemption_id` | Optional | string or null | ID of the redemption that holds this amount on the gift card. `gift_card_redemption_id`: [declared alternatives](../models/PaymentAttemptGiftCardRedemptionPreviousAttributes.md#paymentattemptgiftcardredemptionpreviousattributesgift_card_redemption_id). |
| `last4` | Optional | string or null | Last four characters of the card's current code. `last4`: [declared alternatives](../models/PaymentAttemptGiftCardRedemptionPreviousAttributes.md#paymentattemptgiftcardredemptionpreviousattributeslast4). |
| `tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of `amount_money` that is a tip. Zero when the redemption carries no tip. |

### PaymentAttemptGiftCardRedemptionPreviousAttributes.gift_card_id

### PaymentAttemptGiftCardRedemptionPreviousAttributes.gift_card_id variant 1

anyOf variant 1: ID of the gift card redeemed..

- Value shape: string. ID of the gift card redeemed. 

### PaymentAttemptGiftCardRedemptionPreviousAttributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card redeemed. 

### PaymentAttemptGiftCardRedemptionPreviousAttributes.gift_card_redemption_id

### PaymentAttemptGiftCardRedemptionPreviousAttributes.gift_card_redemption_id variant 1

anyOf variant 1: ID of the redemption that holds this amount on the gift card..

- Value shape: string. ID of the redemption that holds this amount on the gift card. 

### PaymentAttemptGiftCardRedemptionPreviousAttributes.gift_card_redemption_id variant 2

anyOf variant 2.

- Value shape: null. ID of the redemption that holds this amount on the gift card. 

### PaymentAttemptGiftCardRedemptionPreviousAttributes.last4

### PaymentAttemptGiftCardRedemptionPreviousAttributes.last4 variant 1

anyOf variant 1: Last four characters of the card's current code..

- Value shape: string. Last four characters of the card's current code. 

### PaymentAttemptGiftCardRedemptionPreviousAttributes.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four characters of the card's current code. 

