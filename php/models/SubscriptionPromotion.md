[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPromotion

A recurring promotion applied to a subscription, including its recurrence and remaining discounted cycles.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Required | string |  |
| `promotion_code_id` | Required | string or null | The attached promotion code ID; null when no promotion code was used. |
| `promotion_id` | Required | string |  |
| `recurrence` | Required | object and Alternative shapes (see declared variants) | How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever. `recurrence`: [declared alternatives](../models/SubscriptionPromotion.md#subscriptionpromotionrecurrence). |
| `remaining_cycles` | Required | integer string or null | Charged cycles remaining for a repeating promotion, including the next cycle; null for a promotion that lasts forever. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

### SubscriptionPromotion.recurrence

How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever.

Field definitions: [shared fields](PromotionRecurrenceInput.md#promotionrecurrenceinput).

### SubscriptionPromotion.recurrence variant 1: `type` = `"once"`

oneOf variant 1: The `once` variant of `PromotionRecurrence`..

- Condition: not (present(`period_count`)).
- Optional: `period_count`.
- Constraints for `type`: Apply the promotion to the first charged subscription payment. Values: `"once"`.

### SubscriptionPromotion.recurrence variant 2: `type` = `"repeating"`

oneOf variant 2: The `repeating` variant of `PromotionRecurrence`..

- Required: `period_count`.
- Constraints for `type`: Apply the promotion to period_count charged subscription payments. Values: `"repeating"`.

### SubscriptionPromotion.recurrence variant 3: `type` = `"forever"`

oneOf variant 3: The `forever` variant of `PromotionRecurrence`..

- Condition: not (present(`period_count`)).
- Optional: `period_count`.
- Constraints for `type`: Apply the promotion to every charged subscription payment. Values: `"forever"`.

