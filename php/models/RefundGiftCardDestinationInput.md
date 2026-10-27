[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundGiftCardDestinationInput

A gift card that received part of a refund, with the amount credited.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_id` | Required | string |  |

