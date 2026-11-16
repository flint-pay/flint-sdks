[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentAttemptGiftCardRedemptionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The amount reserved on the gift card for this attempt, in USD, including `tip_money`. It is taken from the card only if the attempt succeeds. A failed or canceled attempt releases it. |
| `gift_card_id` | Optional | string or null | ID of the gift card redeemed. `gift_card_id`: [declared alternatives](../models/PaymentAttemptGiftCardRedemptionPreviousAttributesInput.md#paymentattemptgiftcardredemptionpreviousattributesinputgift_card_id). |
| `gift_card_redemption_id` | Optional | string or null | ID of the redemption that holds this amount on the gift card. `gift_card_redemption_id`: [declared alternatives](../models/PaymentAttemptGiftCardRedemptionPreviousAttributesInput.md#paymentattemptgiftcardredemptionpreviousattributesinputgift_card_redemption_id). |
| `last4` | Optional | string or null | Last four characters of the card's current code. `last4`: [declared alternatives](../models/OrderGiftCardSelectionPreviousAttributesInput.md#ordergiftcardselectionpreviousattributesinputlast4). |
| `tip_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The part of `amount_money` that is a tip. Zero when the redemption carries no tip. |

### PaymentAttemptGiftCardRedemptionPreviousAttributesInput.gift_card_id

### PaymentAttemptGiftCardRedemptionPreviousAttributesInput.gift_card_id variant 1

anyOf variant 1: ID of the gift card redeemed..

- Value shape: string. ID of the gift card redeemed. ID of the gift card redeemed. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### PaymentAttemptGiftCardRedemptionPreviousAttributesInput.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card redeemed. 

### PaymentAttemptGiftCardRedemptionPreviousAttributesInput.gift_card_redemption_id

### PaymentAttemptGiftCardRedemptionPreviousAttributesInput.gift_card_redemption_id variant 1

anyOf variant 1: ID of the redemption that holds this amount on the gift card..

- Value shape: string. ID of the redemption that holds this amount on the gift card. ID of the redemption that holds this amount on the gift card. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. 

### PaymentAttemptGiftCardRedemptionPreviousAttributesInput.gift_card_redemption_id variant 2

anyOf variant 2.

- Value shape: null. ID of the redemption that holds this amount on the gift card. 

### PaymentAttemptGiftCardRedemptionPreviousAttributesInput.last4

Declared alternatives: [OrderGiftCardSelectionPreviousAttributesInput.last4](../models/OrderGiftCardSelectionPreviousAttributesInput.md#ordergiftcardselectionpreviousattributesinputlast4).

