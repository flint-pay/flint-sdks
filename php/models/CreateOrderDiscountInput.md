[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderDiscountInput

A discount to apply when creating an order: either a manual discount or a reference to a promotion.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `manual` | Conditional | [ManualDiscountRequestInput](../models/ManualDiscountRequestInput.md#manualdiscountrequestinput) | A discount you apply by hand to an order, with a name, an amount, and the order, line items, or charges it applies to. |
| `promotion` | Conditional | [PromotionRefRequestInput](../models/PromotionRefRequestInput.md#promotionrefrequestinput) | Identifies the promotion to apply, by promotion code or by promotion ID. |

### CreateOrderDiscountInput variant 1

oneOf variant 1: The `Promotion` variant of `CreateOrderDiscount`..

- Condition: not (at least one(present(`manual`))).
- Required: `promotion`.
- Optional: `manual`.

### CreateOrderDiscountInput variant 2

oneOf variant 2: The `Manual` variant of `CreateOrderDiscount`..

- Condition: not (at least one(present(`promotion`))).
- Required: `manual`.
- Optional: `promotion`.

