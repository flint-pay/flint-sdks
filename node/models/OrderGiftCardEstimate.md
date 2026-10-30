[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardEstimate

An estimate of how an order total splits between gift cards and the payment processor, and whether gift cards can pay it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `can_pay` | Required | boolean | Whether this allocation can be used for payment. False when a selected card needs authorization or the allocation cannot cover the balance while satisfying the processor minimum. |
| `gift_card_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Order balance allocated to the selected gift cards. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `gift_card_money`: [field definitions](../models/OrderGiftCardEstimate.md#ordergiftcardestimategift_card_money). |
| `gift_cards` | Required | Array of [OrderGiftCardAllocation](../models/OrderGiftCardAllocation.md#ordergiftcardallocation) |  |
| `is_reserved` | Required | boolean | Whether this estimate reserves gift-card funds. Estimates currently return false. |
| `order_version` | Required | integer | Order version used to calculate this gift card allocation. Read the order again if its version changed. Format: `int64`. |
| `processor_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Order balance remaining for the payment processor. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `processor_money`: [field definitions](../models/OrderGiftCardEstimate.md#ordergiftcardestimateprocessor_money). |

### OrderGiftCardEstimate.gift_card_money

Order balance allocated to the selected gift cards. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderGiftCardEstimate.processor_money

Order balance remaining for the payment processor. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

