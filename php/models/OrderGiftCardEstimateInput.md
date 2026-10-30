[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardEstimateInput

An estimate of how an order total splits between gift cards and the payment processor, and whether gift cards can pay it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `can_pay` | Required | boolean | Whether this allocation can be used for payment. False when a selected card needs authorization or the allocation cannot cover the balance while satisfying the processor minimum. |
| `gift_card_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Order balance allocated to the selected gift cards. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_cards` | Required | Array of [OrderGiftCardAllocationInput](../models/OrderGiftCardAllocationInput.md#ordergiftcardallocationinput) |  |
| `is_reserved` | Required | boolean | Whether this estimate reserves gift-card funds. Estimates currently return false. |
| `order_version` | Required | integer | Order version used to calculate this gift card allocation. Read the order again if its version changed. Format: `int64`. |
| `processor_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Order balance remaining for the payment processor. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

