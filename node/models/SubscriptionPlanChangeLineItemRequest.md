[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanChangeLineItemRequest

Quantity override for a line in the target subscription plan.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer | Quantity of this target line. Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `9999`. |
| `subscription_plan_line_item_id` | Required | string | A line in the target subscription plan. minLength: `1`. pattern: `^spli_[0-9A-HJKMNP-TV-Z]{26}$`. |

