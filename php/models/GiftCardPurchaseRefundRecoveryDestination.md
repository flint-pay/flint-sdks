[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundRecoveryDestination

A gift card and load that received recovered value in a gift card purchase refund recovery, with the amount.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string | ID of the gift card that received the value. |
| `gift_card_load_id` | Required | string | ID of the load that holds the value. |
| `value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value restored to the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

