[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionPreviewResponseDataPlanChange

Resource, collection, or operation result returned by this request.

Estimated pricing for a subscription plan change, including the recurring item subtotal and renewal amounts.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Unit of the billing period the subscription would have after the change. Read with `billing_interval_count`. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of `billing_interval` units between charges after the change. Format: `int32`. |
| `billing_starts` | Required | string | When the change takes effect and bills, as the request set it. Each value says what happens to the current period and to the charge. Values: `"now"`, `"next_renewal"`, `"period_end"`, `"prorated_now"`. |
| `credit_adjustment_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Unused paid item time credited against the new charge when billing_starts is now or prorated_now. Null when billing_starts is next_renewal or period_end. |
| `deliveries_per_period` | Required | integer | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: `int32`. minimum: `1`. maximum: `24`. |
| `delivery_interval` | Required | string or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. |
| `delivery_interval_count` | Required | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. |
| `effective_at` | Required | string or null | When the plan is expected to take effect. Null when no billing time is scheduled. Format: `date-time`. |
| `mode` | Required | string | The preview kind. Every plan change preview has the same value. Values: `"plan_change"`. |
| `recurring_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The recurring charge for one billing period's items on the new plan, including modifiers and quantities, before discounts, shipping, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `renewal` | Required | [SubscriptionRenewalEstimate](../models/SubscriptionRenewalEstimate.md#subscriptionrenewalestimate) | Estimate of the charge the change produces: item subtotal, discounts (including any credit for unused time), shipping, tax, and total. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax. `renewal`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-3renewal). |
| `subscription_id` | Required | string | ID of the subscription the change was previewed for. |
| `subscription_plan_id` | Required | string | ID of the plan the subscription would move to. |

### BuyerSubscriptionPreviewResponseDataPlanChange.renewal

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 3.renewal](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-3renewal).

