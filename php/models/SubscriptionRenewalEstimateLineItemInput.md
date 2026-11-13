[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalEstimateLineItemInput

A subscription item's quantity, subtotal, and discount in an estimated renewal.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Required | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `subscription_id` | Required | string or null | Subscription that owns subscription_line_item_id. Null when subscription_line_item_id is null for new or replacement lines. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription_line_item_id` | Required | string or null | The saved subscription line ID; null when previewing new or replacement lines. Example: `"sli_01KEZF7C00PPWVJ2N321V84ASA"`. |
| `subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

