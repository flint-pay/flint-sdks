[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPromotion

A recurring promotion applied to a subscription, including its recurrence and remaining discounted cycles.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `first_cycle` | Required | integer | First charged cycle eligible for this promotion. Format: `uint64`. minimum: `1`. |
| `name` | Required | string | Name the promotion shows buyers: its display name, or its name when it has no display name. Frozen when the promotion was attached. |
| `promotion_code_id` | Required | string or null | ID of the promotion code used to attach the promotion. Null when no promotion code was used. |
| `promotion_id` | Required | string | ID of the promotion attached to the subscription. |
| `recurrence` | Required | object and Alternative shapes (see declared variants) | How often the promotion's discount repeats, frozen when the promotion was attached. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever. `recurrence`: [declared alternatives](../models/SubscriptionResponse.md#subscriptionresponsedatapromotionsrecurrence). |
| `remaining_cycles` | Required | integer or null | Discounted paid cycles remaining, capped by any replacement handoff. Null when the promotion lasts forever and no replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up. Format: `int64`. |

### SubscriptionPromotion.recurrence

Declared alternatives: [SubscriptionResponse.data.promotions[].recurrence](../models/SubscriptionResponse.md#subscriptionresponsedatapromotionsrecurrence).

