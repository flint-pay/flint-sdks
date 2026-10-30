[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardSettlement

A gift card redemption applied to an order payment, with the amount, tip, and gift card.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `gift_card_id` | Required | string |  |
| `gift_card_redemption_id` | Required | string |  |
| `last4` | Required | string | Last four characters of the code that paid. It stays the same if the gift card's code is later replaced. |
| `tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tip_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |

### OrderGiftCardSettlement.amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### OrderGiftCardSettlement.tip_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

