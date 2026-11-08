[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundGiftCardDestinationInput

A gift card that received part of a refund, with the amount credited.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount credited to this gift card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_id` | Required | string | ID of the gift card that received the value. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |

