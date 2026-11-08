[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPromotion

A recurring promotion applied to a subscription, including its recurrence and remaining discounted cycles.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `first_cycle` | Required | integer | First charged cycle eligible for this promotion. Format: `uint64`. minimum: `1`. |
| `name` | Required | string |  |
| `promotion_code_id` | Required | string or null | The attached promotion code ID; null when no promotion code was used. |
| `promotion_id` | Required | string |  |
| `recurrence` | Required | object and Alternative shapes (see declared variants) | How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever. `recurrence`: [declared alternatives](../models/SubscriptionResponse.md#subscriptionresponsedatapromotionsrecurrence). |
| `remaining_cycles` | Required | integer or null | Discounted paid cycles remaining; null for a promotion that lasts forever unless a replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up. Format: `int64`. |

### SubscriptionPromotion.recurrence

Declared alternatives: [SubscriptionResponse.data.promotions[].recurrence](../models/SubscriptionResponse.md#subscriptionresponsedatapromotionsrecurrence).

