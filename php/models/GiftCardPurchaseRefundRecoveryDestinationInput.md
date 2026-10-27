[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundRecoveryDestinationInput

A gift card and load that received recovered value in a gift card purchase refund recovery, with the amount.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string |  |
| `gift_card_load_id` | Required | string |  |
| `value_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

