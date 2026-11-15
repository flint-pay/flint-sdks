[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalEstimateLineItem

A subscription item's quantity, subtotal, and discount in an estimated renewal.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Discount allocated to this item. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `discount_money`: [field definitions](../models/SubscriptionRenewalEstimateLineItem.md#subscriptionrenewalestimatelineitemdiscount_money). |
| `name` | Required | string | Name of the item. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `subscription_id` | Required | string or null | Subscription that owns subscription_line_item_id. Null when subscription_line_item_id is null for new or replacement lines. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription_line_item_id` | Required | string or null | The saved subscription line ID. `null` when the line isn't a saved subscription line yet, as in a plan change or create preview. Example: `"sli_01KEZF7C00PPWVJ2N321V84ASA"`. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Item subtotal including modifiers, before discounts, shipping, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `subtotal_money`: [field definitions](../models/SubscriptionRenewalEstimateLineItem.md#subscriptionrenewalestimatelineitemsubtotal_money). |

### SubscriptionRenewalEstimateLineItem.discount_money

Discount allocated to this item. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### SubscriptionRenewalEstimateLineItem.subtotal_money

Item subtotal including modifiers, before discounts, shipping, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

