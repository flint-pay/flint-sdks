[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DiscountPreview

Promotions evaluated for an order, grouped into those that were applied, those that are available, and those that were skipped.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applied` | Required | Array of [PromotionCandidate](../models/PromotionCandidate.md#promotioncandidate) |  |
| `available` | Required | Array of [PromotionCandidate](../models/PromotionCandidate.md#promotioncandidate) |  |
| `skipped` | Required | Array of [PromotionCandidate](../models/PromotionCandidate.md#promotioncandidate) |  |

