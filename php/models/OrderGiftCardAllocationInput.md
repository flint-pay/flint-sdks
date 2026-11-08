[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardAllocationInput

The amount of an order that a gift card covers.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The amount this gift card covers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_id` | Required | string | ID of the gift card the amount is taken from. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |

