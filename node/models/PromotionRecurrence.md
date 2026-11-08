[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRecurrence







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `period_count` | Conditional | integer | Number of charged payments for repeating recurrence. Omit for once and forever. minimum: `1`. |
| `type` | Required | string | Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Values: `"once"`, `"repeating"`, `"forever"`. |

### PromotionRecurrence variant 1: `type` = `"once"`

anyOf variant 1: Declared schema PromotionRecurrence. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever.; oneOf with type: "once": The `once` variant of `PromotionRecurrence`..

- Condition: not (present(`period_count`)).
- Optional: `period_count`.
- Constraints for `type`: Apply the promotion to the first charged subscription payment. Values: `"once"`.

### PromotionRecurrence variant 2: `type` = `"repeating"`

anyOf variant 1: Declared schema PromotionRecurrence. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever.; oneOf with type: "repeating": The `repeating` variant of `PromotionRecurrence`..

- Required: `period_count`.
- Constraints for `type`: Apply the promotion to period_count charged subscription payments. Values: `"repeating"`.

### PromotionRecurrence variant 3: `type` = `"forever"`

anyOf variant 1: Declared schema PromotionRecurrence. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever.; oneOf with type: "forever": The `forever` variant of `PromotionRecurrence`..

- Condition: not (present(`period_count`)).
- Optional: `period_count`.
- Constraints for `type`: Apply the promotion to every charged subscription payment. Values: `"forever"`.

### PromotionRecurrence variant 4: `type` = `"once"`

anyOf variant 2: Declared schema PromotionRecurrenceRequest. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever.; oneOf with type: "once": The `once` variant of `PromotionRecurrence`..

- Condition: not (present(`period_count`)).
- Optional: `period_count`.
- Constraints for `type`: Apply the promotion to the first charged subscription payment. Values: `"once"`.

### PromotionRecurrence variant 5: `type` = `"repeating"`

anyOf variant 2: Declared schema PromotionRecurrenceRequest. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever.; oneOf with type: "repeating": The `repeating` variant of `PromotionRecurrence`..

- Required: `period_count`.
- Constraints for `type`: Apply the promotion to period_count charged subscription payments. Values: `"repeating"`.

### PromotionRecurrence variant 6: `type` = `"forever"`

anyOf variant 2: Declared schema PromotionRecurrenceRequest. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever.; oneOf with type: "forever": The `forever` variant of `PromotionRecurrence`..

- Condition: not (present(`period_count`)).
- Optional: `period_count`.
- Constraints for `type`: Apply the promotion to every charged subscription payment. Values: `"forever"`.

