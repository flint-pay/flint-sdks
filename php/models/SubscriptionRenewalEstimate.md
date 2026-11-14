[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalEstimate

Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_at` | Required | string or null | Expected billing time. `null` when no renewal charge is scheduled, such as when the subscription is set to cancel at the end of its period, is in its final `end_after` cycle, is paused with no resume time, or is on an external billing schedule with no next billing date. Format: `date-time`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `deliveries_per_period` | Required | integer | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: `int32`. minimum: `1`. maximum: `24`. |
| `delivery_interval` | Required | string or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. |
| `delivery_interval_count` | Required | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Estimated discount total. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `discounts` | Required | Array of [SubscriptionRenewalEstimateDiscount](../models/SubscriptionRenewalEstimateDiscount.md#subscriptionrenewalestimatediscount) | Promotions and credits applied to this estimated renewal; [] when none apply. `discounts[]`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaldiscounts). |
| `line_items` | Required | Array of [SubscriptionRenewalEstimateLineItem](../models/SubscriptionRenewalEstimateLineItem.md#subscriptionrenewalestimatelineitem) | Items and quantities included in this estimated renewal. `line_items[]`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewalline_items). |
| `shipping_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Estimated shipping. `null` when the estimate prices no delivery: the subscription has none, such as a digital subscription, or the preview is of a change billed `prorated_now`. |
| `subscription_cycle` | Required | integer | The billing cycle this estimate would charge, continuing imported completed_cycles. Format: `uint64`. minimum: `0`. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Estimated item subtotal before discounts, shipping, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Estimated tax. `null` when tax is enabled for the subscription but can't be calculated yet. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Estimated renewal total, excluding unresolved tax when tax_money is null. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### SubscriptionRenewalEstimate.discounts[]

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.discounts[]](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaldiscounts).

### SubscriptionRenewalEstimate.line_items[]

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.line_items[]](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewalline_items).

