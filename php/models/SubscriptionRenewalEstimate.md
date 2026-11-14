[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalEstimate

Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_at` | Required | string or null | Expected billing time, or null when billing is not scheduled. Format: `date-time`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `deliveries_per_period` | Required | integer | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: `int32`. minimum: `1`. maximum: `24`. |
| `delivery_interval` | Required | string or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. |
| `delivery_interval_count` | Required | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `discounts` | Required | Array of [SubscriptionRenewalEstimateDiscount](../models/SubscriptionRenewalEstimateDiscount.md#subscriptionrenewalestimatediscount) | `discounts[]`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaldiscounts). |
| `line_items` | Required | Array of [SubscriptionRenewalEstimateLineItem](../models/SubscriptionRenewalEstimateLineItem.md#subscriptionrenewalestimatelineitem) | `line_items[]`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewalline_items). |
| `shipping_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Estimated shipping; null for a digital subscription. |
| `subscription_cycle` | Required | integer | Format: `uint64`. minimum: `0`. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Estimated tax; null when tax can't be calculated yet. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### SubscriptionRenewalEstimate.discounts[]

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.discounts[]](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaldiscounts).

### SubscriptionRenewalEstimate.line_items[]

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.line_items[]](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewalline_items).

