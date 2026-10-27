[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalEstimateDiscount

An estimated renewal discount from a promotion or credit for a subscription plan change.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `discount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `name` | Required | string |  |
| `promotion_id` | Required | string or null | Promotion ID for a promotion discount; null for unused-time credit. |
| `source` | Required | string | Values: `"promotion"`, `"plan_change_credit"`. |

### SubscriptionRenewalEstimateDiscount.discount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

