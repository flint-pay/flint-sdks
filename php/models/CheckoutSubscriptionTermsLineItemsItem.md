[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSubscriptionTermsLineItemsItem



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Required | boolean | Whether the buyer may adjust this line quantity. |
| `max_quantity` | Required | integer | Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. |
| `min_quantity` | Required | integer | Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. |
| `name` | Required | string | The captured line name. |
| `quantity` | Required | integer | The line quantity, before the subscription quantity multiplier. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. |
| `subscription_plan_line_item_id` | Optional | string | The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. pattern: `^spli_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The captured unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

