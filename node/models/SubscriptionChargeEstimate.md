[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionChargeEstimate







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_at` | Required | string or null | Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `discount_money`: [field definitions](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1discount_money), [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `discounts` | Required | Array of [SubscriptionRenewalEstimateDiscount](../models/SubscriptionRenewalEstimateDiscount.md#subscriptionrenewalestimatediscount) |  |
| `line_items` | Required | Array of [SubscriptionRenewalEstimateLineItem](../models/SubscriptionRenewalEstimateLineItem.md#subscriptionrenewalestimatelineitem) |  |
| `shipping_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | `shipping_money`: [declared alternatives](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1shipping_money), [declared alternatives](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewalshipping_money). |
| `subscription_cycle` | Required | integer | Format: `uint64`. minimum: `0`. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `subtotal_money`: [field definitions](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1subtotal_money), [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | `tax_money`: [declared alternatives](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1tax_money), [declared alternatives](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaltax_money). |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1total_money), [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |

### SubscriptionChargeEstimate variant 1

anyOf variant 1: Declared schema SubscriptionChargeEstimate. Estimated subscription collection, including items, discounts, shipping, and tax. Total excludes tax that cannot yet be calculated..

- Constraints for `billing_at`: Expected collection time. Null when billing is not scheduled.
- Constraints for `discount_money`: Estimated discount total.
- Constraints for `discounts`: Promotions and credits applied to this estimated collection; [] when none apply.
- Constraints for `line_items`: Items and quantities included in this estimated collection.
- Constraints for `shipping_money`: Estimated shipping. Null when this collection has no delivery.
- Constraints for `subscription_cycle`: The paid collection cycle, continuing imported completed_cycles; 0 for a separate setup fee.
- Constraints for `subtotal_money`: Estimated item subtotal before discounts, shipping, and tax.
- Constraints for `tax_money`: Estimated tax; `null` when tax can't be calculated yet.
- Constraints for `total_money`: Estimated collection total, excluding unresolved tax when tax_money is null.

### SubscriptionChargeEstimate variant 2

anyOf variant 2: Declared schema SubscriptionRenewalEstimate. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax..

- Constraints for `billing_at`: Expected billing time, or null when billing is not scheduled.
- Constraints for `shipping_money`: Estimated shipping; null for a digital subscription.
- Constraints for `tax_money`: Estimated tax; null when tax can't be calculated yet.

### SubscriptionChargeEstimate variant 1.discount_money

Estimated discount total. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

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

### SubscriptionChargeEstimate variant 1.subtotal_money

Estimated item subtotal before discounts, shipping, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

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

### SubscriptionChargeEstimate variant 2.discount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### SubscriptionChargeEstimate variant 2.shipping_money

Declared alternatives: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.shipping_money](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewalshipping_money).

### SubscriptionChargeEstimate variant 2.subtotal_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### SubscriptionChargeEstimate variant 2.tax_money

Declared alternatives: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.tax_money](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaltax_money).

### SubscriptionChargeEstimate variant 2.total_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

