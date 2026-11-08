[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardAllocationAcceptanceInput

Accept the exact gift_card_estimate returned on the current order, including all selected cards and both totals. Requires an Idempotency-Key. Gift card payments collect the full amount due and may use one processor payment intent for the processor_money remainder. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Order balance allocated to the selected gift cards. Currency must be USD. Amount must be nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_cards` | Required | Array of object | The gift cards the allocation draws from, each with the amount it covers. Copy them from the order's `gift_card_estimate`. minItems: `1`. maxItems: `20`. `gift_cards[]`: [field definitions](../models/OrderGiftCardAllocationAcceptanceInput.md#ordergiftcardallocationacceptanceinputgift_cards). |
| `order_version` | Required | integer | Order version used to calculate this gift card allocation. Read the order again if its version changed. Format: `int64`. minimum: `1`. |
| `processor_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Order balance remaining for the payment processor. Currency must be USD. Amount must be nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### OrderGiftCardAllocationAcceptanceInput.gift_cards[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Order balance allocated to this gift card. Currency must be USD. Amount must be nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_id` | Required | string | ID of the gift card the amount is taken from. minLength: `1`. maxLength: `64`. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |

