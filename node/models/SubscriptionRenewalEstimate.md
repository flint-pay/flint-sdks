[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalEstimate

Estimated pricing and billing time for a subscription's next renewal, including items, discounts, shipping, and tax.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_at` | Required | string or null | Expected billing time, or null when billing is not scheduled. Format: `date-time`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `discount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `discounts` | Required | Array of [SubscriptionRenewalEstimateDiscount](../models/SubscriptionRenewalEstimateDiscount.md#subscriptionrenewalestimatediscount) |  |
| `line_items` | Required | Array of [SubscriptionRenewalEstimateLineItem](../models/SubscriptionRenewalEstimateLineItem.md#subscriptionrenewalestimatelineitem) |  |
| `shipping_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Estimated shipping; null for a digital subscription. `shipping_money`: [declared alternatives](../models/SubscriptionRenewalEstimate.md#subscriptionrenewalestimateshipping_money). |
| `subscription_cycle` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `subtotal_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Estimated tax; null when no tax address is available. `tax_money`: [declared alternatives](../models/SubscriptionRenewalEstimate.md#subscriptionrenewalestimatetax_money). |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |

### SubscriptionRenewalEstimate.discount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### SubscriptionRenewalEstimate.shipping_money

Estimated shipping; null for a digital subscription.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### SubscriptionRenewalEstimate.shipping_money variant 1

anyOf variant 1: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### SubscriptionRenewalEstimate.shipping_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Estimated shipping; null for a digital subscription. 

### SubscriptionRenewalEstimate.subtotal_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### SubscriptionRenewalEstimate.tax_money

Estimated tax; null when no tax address is available.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### SubscriptionRenewalEstimate.tax_money variant 1

anyOf variant 1: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### SubscriptionRenewalEstimate.tax_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Estimated tax; null when no tax address is available. 

### SubscriptionRenewalEstimate.total_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

