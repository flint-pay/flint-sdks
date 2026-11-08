[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardAllocation







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/OrderGiftCardAllocation.md#ordergiftcardallocation-variant-1amount_money), [field definitions](../models/OrderGiftCardAllocation.md#ordergiftcardallocation-variant-2amount_money). |
| `gift_card_id` | Required | string | Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |

### OrderGiftCardAllocation variant 1

anyOf variant 1: Declared schema OrderGiftCardAllocation. The amount of an order that a gift card covers..

- Constraints for `amount_money`: The amount this gift card covers.
- Constraints for `gift_card_id`: ID of the gift card the amount is taken from.

### OrderGiftCardAllocation variant 2

anyOf variant 2: Declared schema RefundGiftCardDestination. A gift card that received part of a refund, with the amount credited..

- Constraints for `amount_money`: Amount credited to this gift card.
- Constraints for `gift_card_id`: ID of the gift card that received the value.

### OrderGiftCardAllocation variant 1.amount_money

The amount this gift card covers. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderGiftCardAllocation variant 2.amount_money

Amount credited to this gift card. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

