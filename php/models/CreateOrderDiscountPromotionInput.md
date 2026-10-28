[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderDiscountPromotionInput

The `Promotion` variant of `CreateOrderDiscount`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `manual` | Optional | [ManualDiscountRequestInput](../models/ManualDiscountRequestInput.md#manualdiscountrequestinput) | A discount you apply by hand to an order, with a name, an amount, and the order, line items, or charges it applies to. |
| `promotion` | Required | [PromotionRefRequestInput](../models/PromotionRefRequestInput.md#promotionrefrequestinput) | Identifies the promotion to apply, by promotion code or by promotion ID. |

