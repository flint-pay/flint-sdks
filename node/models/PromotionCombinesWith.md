[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionCombinesWith

Which kinds of discounts a promotion can combine with: line item, order, and service charge discounts.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_item` | Required | boolean | Allow line item promotions, subject to the evaluation order on Promotion. |
| `order` | Required | boolean | Allow order promotions, subject to the evaluation order on Promotion. |
| `service_charge` | Required | boolean | Allow service charge promotions, subject to the evaluation order on Promotion. |

