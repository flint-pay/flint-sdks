[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPromotion

A recurring promotion applied to a subscription, including its recurrence and remaining discounted cycles.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Required | string |  |
| `promotion_code_id` | Required | string or null | The attached promotion code ID; null when no promotion code was used. |
| `promotion_id` | Required | string |  |
| `recurrence` | Required | [PromotionRecurrence](../models/PromotionRecurrence.md#promotionrecurrence) | How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever. |
| `remaining_cycles` | Required | integer string or null | Charged cycles remaining for a repeating promotion, including the next cycle; null for a promotion that lasts forever. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

