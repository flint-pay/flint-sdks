[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundRecoveryDestinationInput

A gift card and load that received recovered value in a gift card purchase refund recovery, with the amount.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string | ID of the gift card that received the value. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `gift_card_load_id` | Required | string | ID of the load that holds the value. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. |
| `value_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The value restored to the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

