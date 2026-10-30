[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentAttemptGiftCardRedemption

A gift card redemption made as part of an order payment attempt, with the amount, tip, and gift card.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `gift_card_id` | Required | string |  |
| `gift_card_redemption_id` | Required | string |  |
| `last4` | Required | string | Last four characters of the card's current code. |
| `tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tip_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |

### PaymentAttemptGiftCardRedemption.amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PaymentAttemptGiftCardRedemption.tip_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

