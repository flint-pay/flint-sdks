[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRecurrenceRequestInput

Request input. Response: [PromotionRecurrence](../models/PromotionRecurrence.md#promotionrecurrence).

How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever.





Field definitions: [shared fields](PromotionRecurrence.md#promotionrecurrence).

### PromotionRecurrenceRequestInput variant 1: `type` = `"once"`

oneOf with type: "once": The `once` variant of `PromotionRecurrence`..

- Condition: not (present(`period_count`)).
- Optional: `period_count`.
- Constraints for `type`: Apply the promotion to the first charged subscription payment. Values: `"once"`.

### PromotionRecurrenceRequestInput variant 2: `type` = `"repeating"`

oneOf with type: "repeating": The `repeating` variant of `PromotionRecurrence`..

- Required: `period_count`.
- Constraints for `type`: Apply the promotion to period_count charged subscription payments. Values: `"repeating"`.

### PromotionRecurrenceRequestInput variant 3: `type` = `"forever"`

oneOf with type: "forever": The `forever` variant of `PromotionRecurrence`..

- Condition: not (present(`period_count`)).
- Optional: `period_count`.
- Constraints for `type`: Apply the promotion to every charged subscription payment. Values: `"forever"`.

