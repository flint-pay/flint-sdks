[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRecurrenceRepeating

The `repeating` variant of `PromotionRecurrence`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `period_count` | Required | integer | Number of charged payments for repeating recurrence. Omit for once and forever. minimum: `1`. |
| `type` | Required | string | Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to period_count charged subscription payments. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to period_count charged subscription payments. Values: `"repeating"`. |

