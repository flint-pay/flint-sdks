[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRecurrenceOnce







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `period_count` | Optional | integer | Number of charged payments for repeating recurrence. Omit for once and forever. minimum: `1`. |
| `type` | Required | string | Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to the first charged subscription payment. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to the first charged subscription payment. Values: `"once"`. |

### PromotionRecurrenceOnce variant 1: `type` = `"once"`

anyOf PromotionRecurrenceOnce: Declared schema PromotionRecurrenceOnce. The `once` variant of `PromotionRecurrence`..

- Condition: not (present(`period_count`)).

### PromotionRecurrenceOnce variant 2: `type` = `"once"`

anyOf PromotionRecurrenceOnce: Declared schema PromotionRecurrenceOnceRequest. The `once` variant of `PromotionRecurrence`..

- Condition: not (present(`period_count`)).

