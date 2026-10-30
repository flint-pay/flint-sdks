[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardAllocationAcceptanceInput

Accept the exact gift_card_estimate returned on the current order, including all selected cards and both totals. Requires an Idempotency-Key. Gift card payments collect the full amount due and may use one processor payment intent for the processor_money remainder. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_money` | Required | object | `gift_card_money`: [field definitions](../models/OrderGiftCardAllocationAcceptanceInput.md#ordergiftcardallocationacceptanceinputgift_card_money). |
| `gift_cards` | Required | Array of object | minItems: `1`. maxItems: `20`. `gift_cards[]`: [field definitions](../models/OrderGiftCardAllocationAcceptanceInput.md#ordergiftcardallocationacceptanceinputgift_cards). |
| `order_version` | Required | integer | Order version used to calculate this gift card allocation. Read the order again if its version changed. Format: `int64`. minimum: `1`. |
| `processor_money` | Required | object | `processor_money`: [field definitions](../models/OrderGiftCardAllocationAcceptanceInput.md#ordergiftcardallocationacceptanceinputgift_card_money). |

### OrderGiftCardAllocationAcceptanceInput.gift_card_money

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `currency` | Required | string | Values: `"USD"`. |

### OrderGiftCardAllocationAcceptanceInput.gift_cards[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | object | `amount_money`: [field definitions](../models/OrderGiftCardAllocationAcceptanceInput.md#ordergiftcardallocationacceptanceinputgift_card_money). |
| `gift_card_id` | Required | string | minLength: `1`. maxLength: `64`. |

### OrderGiftCardAllocationAcceptanceInput.gift_cards[].amount_money

Field definitions: [OrderGiftCardAllocationAcceptanceInput.gift_card_money](../models/OrderGiftCardAllocationAcceptanceInput.md#ordergiftcardallocationacceptanceinputgift_card_money).

### OrderGiftCardAllocationAcceptanceInput.processor_money

Field definitions: [OrderGiftCardAllocationAcceptanceInput.gift_card_money](../models/OrderGiftCardAllocationAcceptanceInput.md#ordergiftcardallocationacceptanceinputgift_card_money).

