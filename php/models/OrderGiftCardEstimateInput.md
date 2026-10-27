[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardEstimateInput

An estimate of how an order total splits between gift cards and the payment processor, and whether gift cards can pay it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `can_pay` | Required | boolean |  |
| `gift_card_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_cards` | Required | Array of [OrderGiftCardAllocationInput](../models/OrderGiftCardAllocationInput.md#ordergiftcardallocationinput) |  |
| `is_reserved` | Required | boolean |  |
| `order_version` | Required | integer string | Order version used to calculate this gift card allocation. Read the order again if its version changed. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `processor_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

