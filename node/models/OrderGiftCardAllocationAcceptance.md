[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardAllocationAcceptance

Accept the exact gift_card_estimate returned on the current order, including all selected cards and both totals. Requires an Idempotency-Key. Gift card payments collect the full amount due and may use one processor payment intent for the processor_money remainder. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Order balance allocated to the selected gift cards. Currency must be USD. Amount must be nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `gift_card_money`: [field definitions](../models/OrderGiftCardAllocationAcceptance.md#ordergiftcardallocationacceptancegift_card_money). |
| `gift_cards` | Required | Array of object | The gift cards the allocation draws from, each with the amount it covers. Copy them from the order's `gift_card_estimate`. minItems: `1`. maxItems: `20`. `gift_cards[]`: [field definitions](../models/OrderGiftCardAllocationAcceptance.md#ordergiftcardallocationacceptancegift_cards). |
| `order_version` | Required | integer | Order version used to calculate this gift card allocation. Read the order again if its version changed. Format: `int64`. minimum: `1`. |
| `processor_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Order balance remaining for the payment processor. Currency must be USD. Amount must be nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `processor_money`: [field definitions](../models/OrderGiftCardAllocationAcceptance.md#ordergiftcardallocationacceptanceprocessor_money). |

### OrderGiftCardAllocationAcceptance.gift_card_money

Order balance allocated to the selected gift cards. Currency must be USD. Amount must be nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderGiftCardAllocationAcceptance.gift_cards[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Order balance allocated to this gift card. Currency must be USD. Amount must be nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/OrderGiftCardAllocationAcceptance.md#ordergiftcardallocationacceptancegift_cardsamount_money). |
| `gift_card_id` | Required | string | ID of the gift card the amount is taken from. minLength: `1`. maxLength: `64`. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |

### OrderGiftCardAllocationAcceptance.gift_cards[].amount_money

Order balance allocated to this gift card. Currency must be USD. Amount must be nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderGiftCardAllocationAcceptance.processor_money

Order balance remaining for the payment processor. Currency must be USD. Amount must be nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

