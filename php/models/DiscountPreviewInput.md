[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DiscountPreviewInput

Promotions evaluated for an order, grouped into those that were applied, those that are available, and those that were skipped.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applied` | Required | Array of [PromotionCandidateInput](../models/PromotionCandidateInput.md#promotioncandidateinput) |  |
| `available` | Required | Array of [PromotionCandidateInput](../models/PromotionCandidateInput.md#promotioncandidateinput) |  |
| `skipped` | Required | Array of [PromotionCandidateInput](../models/PromotionCandidateInput.md#promotioncandidateinput) |  |

