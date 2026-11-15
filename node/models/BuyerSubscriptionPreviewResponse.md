[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionPreviewResponse

The response for: Preview subscription.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [SubscriptionPreview](../models/SubscriptionPreview.md#subscriptionpreview) or [SubscriptionRenewalPreview](../models/SubscriptionRenewalPreview.md#subscriptionrenewalpreview) or [SubscriptionPlanChangePreview](../models/SubscriptionPlanChangePreview.md#subscriptionplanchangepreview) or [SubscriptionQuantityChangePreview](../models/SubscriptionQuantityChangePreview.md#subscriptionquantitychangepreview) | Resource, collection, or operation result returned by this request. `data`: [declared alternatives](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

### BuyerSubscriptionPreviewResponse.data

Resource, collection, or operation result returned by this request.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Conditional | [SubscriptionAddressVerification](../models/SubscriptionAddressVerification.md#subscriptionaddressverification) | How far verification of the destination address got. Omitted when no verification state applies. The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`. |
| `currency` | Conditional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `delivery_methods` | Conditional | Array of [SubscriptionDeliveryOption](../models/SubscriptionDeliveryOption.md#subscriptiondeliveryoption) | Delivery methods available for the proposed destination. |
| `destination_address` | Conditional | [Address](../models/Address.md#address) | The destination address the delivery methods were evaluated for: the address you sent, or the saved customer address you chose. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `mode` | Required | string |  |
| `shipping_countries` | Conditional | Array of string | Sorted ISO 3166-1 alpha-2 countries potentially served by this subscription's shipping methods, based on their delivery configuration and shipping zones. Restrict a country selector with this list only when shipping_countries_complete is true. Empty when no shipping coverage is available. Other address, cart, customer and rate checks still apply. |
| `shipping_countries_complete` | Conditional | boolean | Whether shipping_countries is safe to use as a country restriction. False when a radius without an explicit country boundary may serve addresses across a border; clients must not restrict the country selector in that case. Other address, cart, customer and rate checks still apply when true. |
| `subscription_id` | Conditional | string | Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `renewal` | Conditional | [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate) | Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax. `renewal`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal), [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-3renewal), [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-4renewal). |
| `billing_interval` | Conditional | string | Unit of the billing period the subscription would have after the change. Read with `billing_interval_count`. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Number of `billing_interval` units between charges after the change. Format: `int32`. |
| `billing_starts` | Conditional | string |  |
| `credit_adjustment_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | `credit_adjustment_money`: [declared alternatives](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-3credit_adjustment_money), [declared alternatives](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-4credit_adjustment_money). |
| `deliveries_per_period` | Conditional | integer | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: `int32`. minimum: `1`. maximum: `24`. |
| `delivery_interval` | Conditional | string or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. |
| `delivery_interval_count` | Conditional | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. |
| `effective_at` | Conditional | string or null | Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `recurring_subtotal_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `recurring_subtotal_money`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-3recurring_subtotal_money), [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-4recurring_subtotal_money). |
| `subscription_plan_id` | Conditional | string | ID of the plan the subscription would move to. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `interval` | Conditional | string | The subscription billing interval after the quantity change. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `interval_count` | Conditional | integer | The number of interval units in each billing period. Format: `int32`. |

### BuyerSubscriptionPreviewResponse.data variant 1: `mode` = `"delivery_options"`

oneOf with mode: "delivery_options": Available subscription delivery methods shown to the buyer..

- Required: `delivery_methods`, `shipping_countries`, `shipping_countries_complete`.
- Optional: `address_verification`, `currency`, `destination_address`, `subscription_id`.
- Undeclared: `renewal`, `billing_interval`, `billing_interval_count`, `billing_starts`, `credit_adjustment_money`, `deliveries_per_period`, `delivery_interval`, `delivery_interval_count`, `effective_at`, `recurring_subtotal_money`, `subscription_plan_id`, `interval`, `interval_count`.
- Constraints for `mode`: Always delivery_options for buyer previews. Values: `"delivery_options"`.
- Constraints for `subscription_id`: ID of the subscription the delivery methods were listed for.

### BuyerSubscriptionPreviewResponse.data variant 2: `mode` = `"next_renewal"`

oneOf with mode: "next_renewal": A preview of a subscription's next renewal and its estimated pricing..

- Required: `renewal`, `subscription_id`.
- Undeclared: `address_verification`, `currency`, `delivery_methods`, `destination_address`, `shipping_countries`, `shipping_countries_complete`, `billing_interval`, `billing_interval_count`, `billing_starts`, `credit_adjustment_money`, `deliveries_per_period`, `delivery_interval`, `delivery_interval_count`, `effective_at`, `recurring_subtotal_money`, `subscription_plan_id`, `interval`, `interval_count`.
- Constraints for `mode`: The kind of subscription preview. Values: `"next_renewal"`.
- Constraints for `renewal`: Estimated charge for the subscription's next renewal.
- Constraints for `subscription_id`: ID of the subscription the next renewal was estimated for.

### BuyerSubscriptionPreviewResponse.data variant 3: `mode` = `"plan_change"`

oneOf with mode: "plan_change": Estimated pricing for a subscription plan change, including the recurring item subtotal and renewal amounts..

- Required: `billing_interval`, `billing_interval_count`, `billing_starts`, `credit_adjustment_money`, `deliveries_per_period`, `delivery_interval`, `delivery_interval_count`, `effective_at`, `recurring_subtotal_money`, `renewal`, `subscription_id`, `subscription_plan_id`.
- Undeclared: `address_verification`, `currency`, `delivery_methods`, `destination_address`, `shipping_countries`, `shipping_countries_complete`, `interval`, `interval_count`.
- Constraints for `billing_starts`: When the change takes effect and bills, as the request set it. Each value says what happens to the current period and to the charge. Values: `"now"`, `"next_renewal"`, `"period_end"`, `"prorated_now"`.
- Constraints for `credit_adjustment_money`: Unused paid item time credited against the new charge when billing_starts is now or prorated_now. Null when billing_starts is next_renewal or period_end.
- Constraints for `effective_at`: When the plan is expected to take effect. Null when no billing time is scheduled.
- Constraints for `mode`: The preview kind. Every plan change preview has the same value. Values: `"plan_change"`.
- Constraints for `recurring_subtotal_money`: The recurring charge for one billing period's items on the new plan, including modifiers and quantities, before discounts, shipping, and tax.
- Constraints for `renewal`: Estimate of the charge the change produces: item subtotal, discounts (including any credit for unused time), shipping, tax, and total.
- Constraints for `subscription_id`: ID of the subscription the change was previewed for.

### BuyerSubscriptionPreviewResponse.data variant 4: `billing_starts` = `"prorated_now"`, `mode` = `"quantity_change"`

oneOf with mode: "quantity_change": Estimated pricing for a quantity change that keeps the billing period and anchor..

- Required: `billing_starts`, `credit_adjustment_money`, `deliveries_per_period`, `delivery_interval`, `delivery_interval_count`, `effective_at`, `interval`, `interval_count`, `recurring_subtotal_money`, `renewal`, `subscription_id`.
- Undeclared: `address_verification`, `currency`, `delivery_methods`, `destination_address`, `shipping_countries`, `shipping_countries_complete`, `billing_interval`, `billing_interval_count`, `subscription_plan_id`.
- Constraints for `billing_starts`: When this quantity change is billed. Values: `"prorated_now"`.
- Constraints for `credit_adjustment_money`: Credit for unused paid subscription time. Null when there is no paid period to credit.
- Constraints for `effective_at`: When the quantities are expected to take effect. Null when no billing time is available.
- Constraints for `mode`: The kind of subscription pricing estimate. Values: `"quantity_change"`.
- Constraints for `recurring_subtotal_money`: The full-period recurring item subtotal after the quantity change, before discounts, tax, or shipping.
- Constraints for `renewal`: Estimated charge for this quantity change, including proration, unused-time credit, discounts, and tax.
- Constraints for `subscription_id`: The subscription whose quantities were estimated.

### BuyerSubscriptionPreviewResponse.data variant 2.renewal

Estimated charge for the subscription's next renewal. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_at` | Required | string or null | Expected billing time. `null` when no renewal charge is scheduled, such as when the subscription is set to cancel at the end of its period, is in its final `end_after` cycle, is paused with no resume time, or is on an external billing schedule with no next billing date. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `deliveries_per_period` | Required | integer | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: `int32`. minimum: `1`. maximum: `24`. |
| `delivery_interval` | Required | string or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. |
| `delivery_interval_count` | Required | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Estimated discount total. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `discount_money`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaldiscount_money). |
| `discounts` | Required | Array of [SubscriptionRenewalEstimateDiscount](../models/SubscriptionRenewalEstimateDiscount.md#subscriptionrenewalestimatediscount) | Promotions and credits applied to this estimated renewal; [] when none apply. |
| `line_items` | Required | Array of [SubscriptionRenewalEstimateLineItem](../models/SubscriptionRenewalEstimateLineItem.md#subscriptionrenewalestimatelineitem) | Items and quantities included in this estimated renewal. |
| `shipping_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Estimated shipping. `null` when the estimate prices no delivery: the subscription has none, such as a digital subscription, or the preview is of a change billed `prorated_now`. `shipping_money`: [declared alternatives](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewalshipping_money). |
| `subscription_cycle` | Required | integer | The billing cycle this estimate would charge, continuing imported completed_cycles. Format: `uint64`. minimum: `0`. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Estimated item subtotal before discounts, shipping, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `subtotal_money`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewalsubtotal_money). |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Estimated tax. `null` when tax is enabled for the subscription but can't be calculated yet. `tax_money`: [declared alternatives](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaltax_money). |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Estimated renewal total, excluding unresolved tax when tax_money is null. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaltotal_money). |

### BuyerSubscriptionPreviewResponse.data variant 2.renewal.discount_money

Estimated discount total. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerSubscriptionPreviewResponse.data variant 2.renewal.shipping_money

Estimated shipping. `null` when the estimate prices no delivery: the subscription has none, such as a digital subscription, or the preview is of a change billed `prorated_now`.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### BuyerSubscriptionPreviewResponse.data variant 2.renewal.shipping_money variant 1

anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### BuyerSubscriptionPreviewResponse.data variant 2.renewal.shipping_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Estimated shipping. `null` when the estimate prices no delivery: the subscription has none, such as a digital subscription, or the preview is of a change billed `prorated_now`. 

### BuyerSubscriptionPreviewResponse.data variant 2.renewal.subtotal_money

Estimated item subtotal before discounts, shipping, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerSubscriptionPreviewResponse.data variant 2.renewal.tax_money

Estimated tax. `null` when tax is enabled for the subscription but can't be calculated yet.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### BuyerSubscriptionPreviewResponse.data variant 2.renewal.tax_money variant 1

anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### BuyerSubscriptionPreviewResponse.data variant 2.renewal.tax_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Estimated tax. `null` when tax is enabled for the subscription but can't be calculated yet. 

### BuyerSubscriptionPreviewResponse.data variant 2.renewal.total_money

Estimated renewal total, excluding unresolved tax when tax_money is null. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerSubscriptionPreviewResponse.data variant 3.credit_adjustment_money

Unused paid item time credited against the new charge when billing_starts is now or prorated_now. Null when billing_starts is next_renewal or period_end.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### BuyerSubscriptionPreviewResponse.data variant 3.credit_adjustment_money variant 1

anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### BuyerSubscriptionPreviewResponse.data variant 3.credit_adjustment_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Unused paid item time credited against the new charge when billing_starts is now or prorated_now. Null when billing_starts is next_renewal or period_end. 

### BuyerSubscriptionPreviewResponse.data variant 3.recurring_subtotal_money

The recurring charge for one billing period's items on the new plan, including modifiers and quantities, before discounts, shipping, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerSubscriptionPreviewResponse.data variant 3.renewal

Estimate of the charge the change produces: item subtotal, discounts (including any credit for unused time), shipping, tax, and total. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax.

Field definitions: [shared fields](#buyersubscriptionpreviewresponsedata-variant-2renewal).

### BuyerSubscriptionPreviewResponse.data variant 3.renewal.discount_money

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.discount_money](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaldiscount_money).

### BuyerSubscriptionPreviewResponse.data variant 3.renewal.shipping_money

Declared alternatives: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.shipping_money](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewalshipping_money).

### BuyerSubscriptionPreviewResponse.data variant 3.renewal.subtotal_money

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.subtotal_money](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewalsubtotal_money).

### BuyerSubscriptionPreviewResponse.data variant 3.renewal.tax_money

Declared alternatives: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.tax_money](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaltax_money).

### BuyerSubscriptionPreviewResponse.data variant 3.renewal.total_money

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.total_money](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaltotal_money).

### BuyerSubscriptionPreviewResponse.data variant 4.credit_adjustment_money

Credit for unused paid subscription time. Null when there is no paid period to credit.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### BuyerSubscriptionPreviewResponse.data variant 4.credit_adjustment_money variant 1

anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### BuyerSubscriptionPreviewResponse.data variant 4.credit_adjustment_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Credit for unused paid subscription time. Null when there is no paid period to credit. 

### BuyerSubscriptionPreviewResponse.data variant 4.recurring_subtotal_money

The full-period recurring item subtotal after the quantity change, before discounts, tax, or shipping. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerSubscriptionPreviewResponse.data variant 4.renewal

Estimated charge for this quantity change, including proration, unused-time credit, discounts, and tax. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax.

Field definitions: [shared fields](#buyersubscriptionpreviewresponsedata-variant-2renewal).

### BuyerSubscriptionPreviewResponse.data variant 4.renewal.discount_money

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.discount_money](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaldiscount_money).

### BuyerSubscriptionPreviewResponse.data variant 4.renewal.shipping_money

Declared alternatives: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.shipping_money](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewalshipping_money).

### BuyerSubscriptionPreviewResponse.data variant 4.renewal.subtotal_money

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.subtotal_money](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewalsubtotal_money).

### BuyerSubscriptionPreviewResponse.data variant 4.renewal.tax_money

Declared alternatives: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.tax_money](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaltax_money).

### BuyerSubscriptionPreviewResponse.data variant 4.renewal.total_money

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.total_money](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaltotal_money).

