[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionCreatePreview

Validation and estimates for the first and recurring collections of a proposed subscription.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `errors` | Required | Array of [SubscriptionPreviewError](../models/SubscriptionPreviewError.md#subscriptionpreviewerror) | Validation failures for the proposed subscription; [] when the inputs are valid and priceable. |
| `first_charge` | Required | [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate) or null | The first Flint collection, priced as billing collects it: trial end without a setup fee, now for a setup fee (or the scheduled start), or imported-period end. With `prorate_first_period` and no setup fee, it's the prorated first period. `null` when validation prevents pricing. `first_charge`: [declared alternatives](../models/SubscriptionCreatePreview.md#subscriptioncreatepreviewfirst_charge). |
| `first_period_charge` | Required | [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate) or null | The prorated first period, when billing collects it as its own order after a setup fee in `first_charge`. `null` when no proration was requested, when the prorated period is already included in `first_charge`, when the first paid start is on the anchor day so there is no prorated period, or when validation prevents pricing. `first_period_charge`: [declared alternatives](../models/SubscriptionCreatePreview.md#subscriptioncreatepreviewfirst_period_charge). |
| `is_valid` | Required | boolean | Whether the inputs are valid and priceable. This does not mean the subscription is ready to pay. |
| `mode` | Required | string | The kind of subscription preview. Values: `"create"`. |
| `recurring` | Required | [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate) or null | The first normal full-period collection, without setup fees. With `prorate_first_period`, it's cycle 2, billed at the end of the prorated period. `null` when validation prevents pricing. `recurring`: [declared alternatives](../models/SubscriptionCreatePreview.md#subscriptioncreatepreviewrecurring). |

### SubscriptionCreatePreview.first_charge

The first Flint collection, priced as billing collects it: trial end without a setup fee, now for a setup fee (or the scheduled start), or imported-period end. With `prorate_first_period` and no setup fee, it's the prorated first period. `null` when validation prevents pricing.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_at` | Conditional | string or null | Expected collection time. Null when billing is not scheduled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Conditional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `discount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Estimated discount total. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `discount_money`: [field definitions](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1discount_money). |
| `discounts` | Conditional | Array of [SubscriptionRenewalEstimateDiscount](../models/SubscriptionRenewalEstimateDiscount.md#subscriptionrenewalestimatediscount) | Promotions and credits applied to this estimated collection; [] when none apply. |
| `line_items` | Conditional | Array of [SubscriptionRenewalEstimateLineItem](../models/SubscriptionRenewalEstimateLineItem.md#subscriptionrenewalestimatelineitem) | Items and quantities included in this estimated collection. |
| `shipping_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Estimated shipping. Null when this collection has no delivery. `shipping_money`: [declared alternatives](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1shipping_money). |
| `subscription_cycle` | Conditional | integer | The paid collection cycle, continuing imported completed_cycles; 0 for a separate setup fee. Format: `uint64`. minimum: `0`. |
| `subtotal_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Estimated item subtotal before discounts, shipping, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `subtotal_money`: [field definitions](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1subtotal_money). |
| `tax_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Estimated tax; `null` when tax can't be calculated yet. `tax_money`: [declared alternatives](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1tax_money). |
| `total_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Estimated collection total, excluding unresolved tax when tax_money is null. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1total_money). |

### SubscriptionCreatePreview.first_charge variant 1

anyOf SubscriptionChargeEstimate: Estimated subscription collection, including items, discounts, shipping, and tax. Total excludes tax that cannot yet be calculated..

- Required: `billing_at`, `currency`, `discount_money`, `discounts`, `line_items`, `shipping_money`, `subscription_cycle`, `subtotal_money`, `tax_money`, `total_money`.

### SubscriptionCreatePreview.first_charge variant 2

anyOf variant 2.

- Undeclared: `billing_at`, `currency`, `discount_money`, `discounts`, `line_items`, `shipping_money`, `subscription_cycle`, `subtotal_money`, `tax_money`, `total_money`.
- Value shape: null. The first Flint collection, priced as billing collects it: trial end without a setup fee, now for a setup fee (or the scheduled start), or imported-period end. With `prorate_first_period` and no setup fee, it's the prorated first period. `null` when validation prevents pricing. 

### SubscriptionCreatePreview.first_charge variant 1.discount_money

Field definitions: [SubscriptionChargeEstimate variant 1.discount_money](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1discount_money).

### SubscriptionCreatePreview.first_charge variant 1.shipping_money

Declared alternatives: [SubscriptionChargeEstimate variant 1.shipping_money](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1shipping_money).

### SubscriptionCreatePreview.first_charge variant 1.subtotal_money

Field definitions: [SubscriptionChargeEstimate variant 1.subtotal_money](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1subtotal_money).

### SubscriptionCreatePreview.first_charge variant 1.tax_money

Declared alternatives: [SubscriptionChargeEstimate variant 1.tax_money](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1tax_money).

### SubscriptionCreatePreview.first_charge variant 1.total_money

Field definitions: [SubscriptionChargeEstimate variant 1.total_money](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1total_money).

### SubscriptionCreatePreview.first_period_charge

The prorated first period, when billing collects it as its own order after a setup fee in `first_charge`. `null` when no proration was requested, when the prorated period is already included in `first_charge`, when the first paid start is on the anchor day so there is no prorated period, or when validation prevents pricing.

Field definitions: [shared fields](#subscriptioncreatepreviewfirst_charge).

### SubscriptionCreatePreview.first_period_charge variant 1

anyOf SubscriptionChargeEstimate: Estimated subscription collection, including items, discounts, shipping, and tax. Total excludes tax that cannot yet be calculated..

- Required: `billing_at`, `currency`, `discount_money`, `discounts`, `line_items`, `shipping_money`, `subscription_cycle`, `subtotal_money`, `tax_money`, `total_money`.

### SubscriptionCreatePreview.first_period_charge variant 2

anyOf variant 2.

- Undeclared: `billing_at`, `currency`, `discount_money`, `discounts`, `line_items`, `shipping_money`, `subscription_cycle`, `subtotal_money`, `tax_money`, `total_money`.
- Value shape: null. The prorated first period, when billing collects it as its own order after a setup fee in `first_charge`. `null` when no proration was requested, when the prorated period is already included in `first_charge`, when the first paid start is on the anchor day so there is no prorated period, or when validation prevents pricing. 

### SubscriptionCreatePreview.first_period_charge variant 1.discount_money

Field definitions: [SubscriptionChargeEstimate variant 1.discount_money](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1discount_money).

### SubscriptionCreatePreview.first_period_charge variant 1.shipping_money

Declared alternatives: [SubscriptionChargeEstimate variant 1.shipping_money](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1shipping_money).

### SubscriptionCreatePreview.first_period_charge variant 1.subtotal_money

Field definitions: [SubscriptionChargeEstimate variant 1.subtotal_money](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1subtotal_money).

### SubscriptionCreatePreview.first_period_charge variant 1.tax_money

Declared alternatives: [SubscriptionChargeEstimate variant 1.tax_money](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1tax_money).

### SubscriptionCreatePreview.first_period_charge variant 1.total_money

Field definitions: [SubscriptionChargeEstimate variant 1.total_money](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1total_money).

### SubscriptionCreatePreview.recurring

The first normal full-period collection, without setup fees. With `prorate_first_period`, it's cycle 2, billed at the end of the prorated period. `null` when validation prevents pricing.

Field definitions: [shared fields](#subscriptioncreatepreviewfirst_charge).

### SubscriptionCreatePreview.recurring variant 1

anyOf SubscriptionChargeEstimate: Estimated subscription collection, including items, discounts, shipping, and tax. Total excludes tax that cannot yet be calculated..

- Required: `billing_at`, `currency`, `discount_money`, `discounts`, `line_items`, `shipping_money`, `subscription_cycle`, `subtotal_money`, `tax_money`, `total_money`.

### SubscriptionCreatePreview.recurring variant 2

anyOf variant 2.

- Undeclared: `billing_at`, `currency`, `discount_money`, `discounts`, `line_items`, `shipping_money`, `subscription_cycle`, `subtotal_money`, `tax_money`, `total_money`.
- Value shape: null. The first normal full-period collection, without setup fees. With `prorate_first_period`, it's cycle 2, billed at the end of the prorated period. `null` when validation prevents pricing. 

### SubscriptionCreatePreview.recurring variant 1.discount_money

Field definitions: [SubscriptionChargeEstimate variant 1.discount_money](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1discount_money).

### SubscriptionCreatePreview.recurring variant 1.shipping_money

Declared alternatives: [SubscriptionChargeEstimate variant 1.shipping_money](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1shipping_money).

### SubscriptionCreatePreview.recurring variant 1.subtotal_money

Field definitions: [SubscriptionChargeEstimate variant 1.subtotal_money](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1subtotal_money).

### SubscriptionCreatePreview.recurring variant 1.tax_money

Declared alternatives: [SubscriptionChargeEstimate variant 1.tax_money](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1tax_money).

### SubscriptionCreatePreview.recurring variant 1.total_money

Field definitions: [SubscriptionChargeEstimate variant 1.total_money](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate-variant-1total_money).

