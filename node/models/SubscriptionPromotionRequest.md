[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPromotionRequest

A promotion to attach when creating or importing a subscription.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consumed_cycles` | Optional | integer | Cycles already discounted on the previous system. Accepted only when billing_start.type is imported, even when 0; omit it otherwise. Defaults to 0. Must be less than period_count for repeating promotions and 0 for once and forever. Flint applies the remaining discounted cycles. Format: `uint64`. minimum: `0`. |
| `first_cycle` | Optional | integer | First charged cycle eligible for this promotion. Defaults to 1; for billing_start.type imported, defaults to billing_start.completed_cycles + 1 and cannot be earlier. Format: `uint64`. minimum: `1`. |
| `promotion` | Required | [PromotionRefRequest](../models/PromotionRefRequest.md#promotionrefrequest) | Promotion to attach, identified by exactly one of promotion_id or promotion_code. Its current terms are frozen when attached. Identifies the promotion to apply, by promotion code or by promotion ID. |

