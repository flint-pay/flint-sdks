[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPromotionInput

A recurring promotion applied to a subscription, including its recurrence and remaining discounted cycles.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Required | string |  |
| `promotion_code_id` | Required | string or null | The attached promotion code ID; null when no promotion code was used. |
| `promotion_id` | Required | string |  |
| `recurrence` | Required | [PromotionRecurrenceInput](../models/PromotionRecurrenceInput.md#promotionrecurrenceinput) | How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever. |
| `remaining_cycles` | Required | integer or null | Charged cycles remaining for a repeating promotion, including the next cycle; null for a promotion that lasts forever. Format: `int64`. |

