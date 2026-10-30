[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundValueHold

Gift card value held back by a purchase refund, with the refund, the root gift card and load, and the amount held.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `purchase_refund_allocation_id` | Required | string |  |
| `refund_id` | Required | string |  |
| `root_gift_card_id` | Required | string |  |
| `root_gift_card_load_id` | Required | string |  |
| `value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `value_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |

### GiftCardPurchaseRefundValueHold.value_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

