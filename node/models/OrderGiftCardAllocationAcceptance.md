[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardAllocationAcceptance

Accept the exact gift_card_estimate returned on the current order, including all selected cards and both totals. Requires an Idempotency-Key. Gift card payments collect the full amount due and may use one processor payment intent for the processor_money remainder.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_money` | Required | object | `gift_card_money`: [field definitions](../models/OrderGiftCardAllocationAcceptance.md#ordergiftcardallocationacceptancegift_card_money). |
| `gift_cards` | Required | Array of object | minItems: `1`. maxItems: `20`. `gift_cards[]`: [field definitions](../models/OrderGiftCardAllocationAcceptance.md#ordergiftcardallocationacceptancegift_cards). |
| `order_version` | Required | integer string | Order version used to calculate this gift card allocation. Read the order again if its version changed. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `processor_money` | Required | object | `processor_money`: [field definitions](../models/OrderGiftCardAllocationAcceptance.md#ordergiftcardallocationacceptancegift_card_money). |

### OrderGiftCardAllocationAcceptance.gift_card_money

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `currency` | Required | string | Values: `"USD"`. |

### OrderGiftCardAllocationAcceptance.gift_cards[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | object | `amount_money`: [field definitions](../models/OrderGiftCardAllocationAcceptance.md#ordergiftcardallocationacceptancegift_card_money). |
| `gift_card_id` | Required | string | minLength: `1`. maxLength: `64`. |

### OrderGiftCardAllocationAcceptance.gift_cards[].amount_money

Field definitions: [OrderGiftCardAllocationAcceptance.gift_card_money](../models/OrderGiftCardAllocationAcceptance.md#ordergiftcardallocationacceptancegift_card_money).

### OrderGiftCardAllocationAcceptance.processor_money

Field definitions: [OrderGiftCardAllocationAcceptance.gift_card_money](../models/OrderGiftCardAllocationAcceptance.md#ordergiftcardallocationacceptancegift_card_money).

