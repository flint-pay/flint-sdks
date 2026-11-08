[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DiscountPreview

Promotions evaluated for an order, grouped into those that were applied, those that are available, and those that were skipped.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applied` | Required | Array of [PromotionCandidate](../models/PromotionCandidate.md#promotioncandidate) | Promotions that apply to the order now. |
| `available` | Required | Array of [PromotionCandidate](../models/PromotionCandidate.md#promotioncandidate) | Promotions the order is eligible for that aren't applied. |
| `skipped` | Required | Array of [PromotionCandidate](../models/PromotionCandidate.md#promotioncandidate) | Promotions Flint evaluated and didn't apply. |

