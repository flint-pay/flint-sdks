[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderDiscountManual

The `Manual` variant of `CreateOrderDiscount`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `manual` | Required | [ManualDiscountRequest](../models/ManualDiscountRequest.md#manualdiscountrequest) | A discount you apply by hand to an order, with a name, an amount, and the order, line items, or charges it applies to. |
| `promotion` | Optional | [PromotionRefRequest](../models/PromotionRefRequest.md#promotionrefrequest) | Identifies the promotion to apply, by promotion code or by promotion ID. |

