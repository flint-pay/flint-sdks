[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanChangePreview

Estimated pricing for a subscription plan change, including the recurring item subtotal and renewal amounts.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Format: `int32`. |
| `billing_starts` | Required | string | Values: `"now"`, `"next_renewal"`. |
| `credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Unused paid item time credited when billing_starts is now; null for next_renewal. `credit_money`: [declared alternatives](../models/SubscriptionPlanChangePreview.md#subscriptionplanchangepreviewcredit_money). |
| `mode` | Required | string | Values: `"plan_change"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `recurring_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `recurring_subtotal_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `renewal` | Required | [SubscriptionRenewalEstimate](../models/SubscriptionRenewalEstimate.md#subscriptionrenewalestimate) | Estimated pricing and billing time for a subscription's next renewal, including items, discounts, shipping, and tax. |
| `subscription_id` | Required | string |  |
| `subscription_plan_id` | Required | string |  |

### SubscriptionPlanChangePreview.credit_money

Unused paid item time credited when billing_starts is now; null for next_renewal.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### SubscriptionPlanChangePreview.credit_money variant 1

anyOf variant 1: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### SubscriptionPlanChangePreview.credit_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Unused paid item time credited when billing_starts is now; null for next_renewal. 

### SubscriptionPlanChangePreview.recurring_subtotal_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

