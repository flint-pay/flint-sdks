[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardEstimate

An estimate of how an order total splits between gift cards and the payment processor, and whether gift cards can pay it.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `can_pay` | Required | boolean | Whether this allocation can be used for payment. False when a selected card needs authorization or the allocation cannot cover the balance while satisfying the processor minimum. |
| `gift_card_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Order balance allocated to the selected gift cards. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_cards` | Required | Array of [OrderGiftCardAllocation](../models/OrderGiftCardAllocation.md#ordergiftcardallocation) | The gift cards the estimate draws from, each with the amount it covers. `gift_cards[]`: [field definitions](../models/OrderGiftCardEstimate.md#ordergiftcardestimategift_cards). |
| `is_reserved` | Required | boolean | Whether this estimate reserves gift-card funds. Estimates currently return false. |
| `order_version` | Required | integer | Order version used to calculate this gift card allocation. Read the order again if its version changed. Format: `int64`. |
| `processor_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Order balance remaining for the payment processor. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### OrderGiftCardEstimate.gift_cards[]

The amount of an order that a gift card covers.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount this gift card covers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_id` | Required | string | ID of the gift card the amount is taken from. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |

