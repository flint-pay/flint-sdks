[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPromotion

A recurring promotion applied to a subscription, including its recurrence and remaining discounted cycles.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `first_cycle` | Required | integer | First charged cycle eligible for this promotion. Format: `uint64`. minimum: `1`. |
| `name` | Required | string |  |
| `promotion_code_id` | Required | string or null | The attached promotion code ID; null when no promotion code was used. Example: `"pcode_01KEZF7C00JCC7QXWC262EF05T"`. |
| `promotion_id` | Required | string | Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. |
| `recurrence` | Required | [PromotionRecurrence](../models/PromotionRecurrence.md#promotionrecurrence) | How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever. `recurrence`: [declared alternatives](../models/SubscriptionPromotion.md#subscriptionpromotionrecurrence). |
| `remaining_cycles` | Required | integer or null | Discounted paid cycles remaining; null for a promotion that lasts forever unless a replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up. Format: `int64`. |

### SubscriptionPromotion.recurrence

How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever.

Field definitions: [shared fields](PromotionRecurrence.md#promotionrecurrence).

### SubscriptionPromotion.recurrence variant 1: `type` = `"once"`

oneOf with type: "once": The `once` variant of `PromotionRecurrence`..

- Condition: not (present(`period_count`)).
- Optional: `period_count`.
- Constraints for `type`: Apply the promotion to the first charged subscription payment. Values: `"once"`.

### SubscriptionPromotion.recurrence variant 2: `type` = `"repeating"`

oneOf with type: "repeating": The `repeating` variant of `PromotionRecurrence`..

- Required: `period_count`.
- Constraints for `type`: Apply the promotion to period_count charged subscription payments. Values: `"repeating"`.

### SubscriptionPromotion.recurrence variant 3: `type` = `"forever"`

oneOf with type: "forever": The `forever` variant of `PromotionRecurrence`..

- Condition: not (present(`period_count`)).
- Optional: `period_count`.
- Constraints for `type`: Apply the promotion to every charged subscription payment. Values: `"forever"`.

