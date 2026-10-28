[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderDiscountPromotion

The `Promotion` variant of `CreateOrderDiscount`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `manual` | Optional | [ManualDiscountRequest](../models/ManualDiscountRequest.md#manualdiscountrequest) | A discount you apply by hand to an order, with a name, an amount, and the order, line items, or charges it applies to. |
| `promotion` | Required | [PromotionRefRequest](../models/PromotionRefRequest.md#promotionrefrequest) | Identifies the promotion to apply, by promotion code or by promotion ID. |

