[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentAttemptGiftCardRedemption

A gift card redemption made as part of an order payment attempt, with the amount, tip, and gift card.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount reserved on the gift card for this attempt, in USD, including `tip_money`. It is taken from the card only if the attempt succeeds. A failed or canceled attempt releases it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/PaymentAttemptGiftCardRedemption.md#paymentattemptgiftcardredemptionamount_money). |
| `gift_card_id` | Required | string | ID of the gift card redeemed. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `gift_card_redemption_id` | Required | string | ID of the redemption that holds this amount on the gift card. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. |
| `last4` | Required | string | Last four characters of the card's current code. |
| `tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of `amount_money` that is a tip. Zero when the redemption carries no tip. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tip_money`: [field definitions](../models/PaymentAttemptGiftCardRedemption.md#paymentattemptgiftcardredemptiontip_money). |

### PaymentAttemptGiftCardRedemption.amount_money

The amount reserved on the gift card for this attempt, in USD, including `tip_money`. It is taken from the card only if the attempt succeeds. A failed or canceled attempt releases it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### PaymentAttemptGiftCardRedemption.tip_money

The part of `amount_money` that is a tip. Zero when the redemption carries no tip. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

