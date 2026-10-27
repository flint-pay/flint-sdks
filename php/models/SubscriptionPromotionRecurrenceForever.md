[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPromotionRecurrenceForever

How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever.

The `forever` variant of `PromotionRecurrence`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `period_count` | Optional | integer | Number of charged payments for repeating recurrence. Omit for once and forever. minimum: `1`. |
| `type` | Required | string | Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to every charged subscription payment. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to every charged subscription payment. Values: `"forever"`. |

