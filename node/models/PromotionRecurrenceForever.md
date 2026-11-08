[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRecurrenceForever







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `period_count` | Optional | integer | Number of charged payments for repeating recurrence. Omit for once and forever. minimum: `1`. |
| `type` | Required | string | Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to every charged subscription payment. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to every charged subscription payment. Values: `"forever"`. |

### PromotionRecurrenceForever variant 1: `type` = `"forever"`

anyOf PromotionRecurrenceForever: Declared schema PromotionRecurrenceForever. The `forever` variant of `PromotionRecurrence`..

- Condition: not (present(`period_count`)).

### PromotionRecurrenceForever variant 2: `type` = `"forever"`

anyOf PromotionRecurrenceForever: Declared schema PromotionRecurrenceForeverRequest. The `forever` variant of `PromotionRecurrence`..

- Condition: not (present(`period_count`)).

