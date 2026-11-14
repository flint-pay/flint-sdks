[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionChargeEstimate







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_at` | Required | string or null | Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `deliveries_per_period` | Required | integer | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: `int32`. minimum: `1`. maximum: `24`. |
| `delivery_interval` | Required | string or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. |
| `delivery_interval_count` | Required | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Estimated discount total. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `discount_money`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaldiscount_money). |
| `discounts` | Required | Array of [SubscriptionRenewalEstimateDiscount](../models/SubscriptionRenewalEstimateDiscount.md#subscriptionrenewalestimatediscount) |  |
| `line_items` | Required | Array of [SubscriptionRenewalEstimateLineItem](../models/SubscriptionRenewalEstimateLineItem.md#subscriptionrenewalestimatelineitem) |  |
| `shipping_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | `shipping_money`: [declared alternatives](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1shipping_money), [declared alternatives](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewalshipping_money). |
| `subscription_cycle` | Required | integer | Format: `uint64`. minimum: `0`. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Estimated item subtotal before discounts, shipping, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `subtotal_money`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewalsubtotal_money). |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | `tax_money`: [declared alternatives](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1tax_money), [declared alternatives](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaltax_money). |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1total_money), [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaltotal_money). |

### SubscriptionChargeEstimate variant 1

anyOf variant 1: Declared schema SubscriptionChargeEstimate. Estimated subscription collection, including items, discounts, shipping, and tax. Total excludes tax that cannot yet be calculated..

- Constraints for `billing_at`: Expected collection time. Null when billing is not scheduled.
- Constraints for `discounts`: Promotions and credits applied to this estimated collection; [] when none apply.
- Constraints for `line_items`: Items and quantities included in this estimated collection.
- Constraints for `shipping_money`: Estimated shipping. Null when this collection has no delivery.
- Constraints for `subscription_cycle`: The paid collection cycle, continuing imported completed_cycles; 0 for a separate setup fee.
- Constraints for `tax_money`: Estimated tax; `null` when tax can't be calculated yet.
- Constraints for `total_money`: Estimated collection total, excluding unresolved tax when tax_money is null.

### SubscriptionChargeEstimate variant 2

anyOf variant 2: Declared schema SubscriptionRenewalEstimate. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax..

- Constraints for `billing_at`: Expected billing time. `null` when no renewal charge is scheduled, such as when the subscription is set to cancel at the end of its period, is in its final `end_after` cycle, is paused with no resume time, or is on an external billing schedule with no next billing date.
- Constraints for `discounts`: Promotions and credits applied to this estimated renewal; [] when none apply.
- Constraints for `line_items`: Items and quantities included in this estimated renewal.
- Constraints for `shipping_money`: Estimated shipping. `null` when the estimate prices no delivery: the subscription has none, such as a digital subscription, or the preview is of a change billed `prorated_now`.
- Constraints for `subscription_cycle`: The billing cycle this estimate would charge, continuing imported completed_cycles.
- Constraints for `tax_money`: Estimated tax. `null` when tax is enabled for the subscription but can't be calculated yet.
- Constraints for `total_money`: Estimated renewal total, excluding unresolved tax when tax_money is null.

### SubscriptionChargeEstimate.discount_money

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.discount_money](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaldiscount_money).

### SubscriptionChargeEstimate variant 1.shipping_money

Estimated shipping. Null when this collection has no delivery.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### SubscriptionChargeEstimate variant 1.shipping_money variant 1

anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### SubscriptionChargeEstimate variant 1.shipping_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Estimated shipping. Null when this collection has no delivery. 

### SubscriptionChargeEstimate.subtotal_money

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.subtotal_money](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewalsubtotal_money).

### SubscriptionChargeEstimate variant 1.tax_money

Estimated tax; `null` when tax can't be calculated yet.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### SubscriptionChargeEstimate variant 1.tax_money variant 1

anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### SubscriptionChargeEstimate variant 1.tax_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Estimated tax; `null` when tax can't be calculated yet. 

### SubscriptionChargeEstimate variant 1.total_money

Estimated collection total, excluding unresolved tax when tax_money is null. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### SubscriptionChargeEstimate variant 2.shipping_money

Declared alternatives: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.shipping_money](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewalshipping_money).

### SubscriptionChargeEstimate variant 2.tax_money

Declared alternatives: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.tax_money](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaltax_money).

### SubscriptionChargeEstimate variant 2.total_money

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.total_money](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaltotal_money).

