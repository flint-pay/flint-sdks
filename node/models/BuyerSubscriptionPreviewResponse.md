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
| `address_verification` | Conditional | [SubscriptionAddressVerification](../models/SubscriptionAddressVerification.md#subscriptionaddressverification) | The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`. |
| `currency` | Conditional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `delivery_methods` | Conditional | Array of [SubscriptionDeliveryOption](../models/SubscriptionDeliveryOption.md#subscriptiondeliveryoption) | Delivery methods available for the proposed destination. |
| `destination_address` | Conditional | [Address](../models/Address.md#address) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `mode` | Required | string |  |
| `shipping_countries` | Conditional | Array of string | Sorted ISO 3166-1 alpha-2 countries potentially served by this subscription's shipping methods, based on their delivery configuration and shipping zones. Restrict a country selector with this list only when shipping_countries_complete is true. Empty when no shipping coverage is available. Other address, cart, customer and rate checks still apply. |
| `shipping_countries_complete` | Conditional | boolean | Whether shipping_countries is safe to use as a country restriction. False when a radius without an explicit country boundary may serve addresses across a border; clients must not restrict the country selector in that case. Other address, cart, customer and rate checks still apply when true. |
| `subscription_id` | Conditional | string | Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `renewal` | Conditional | [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate) | Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax. `renewal`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal), [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-4renewal). |
| `billing_interval` | Conditional | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Format: `int32`. |
| `billing_starts` | Conditional | string |  |
| `credit_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | `credit_money`: [declared alternatives](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-3credit_money), [declared alternatives](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-4credit_money). |
| `deliveries_per_period` | Conditional | integer | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: `int32`. minimum: `1`. maximum: `24`. |
| `delivery_interval` | Conditional | string or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. |
| `delivery_interval_count` | Conditional | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. |
| `effective_at` | Conditional | string or null | Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `quantity` | Conditional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `recurring_subtotal_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `recurring_subtotal_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options), [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-4recurring_subtotal_money). |
| `subscription_plan_id` | Conditional | string | Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `interval` | Conditional | string | The subscription billing interval after the quantity change. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `interval_count` | Conditional | integer | The number of interval units in each billing period. Format: `int32`. |

### BuyerSubscriptionPreviewResponse.data variant 1: `mode` = `"delivery_options"`

oneOf with mode: "delivery_options": Available subscription delivery methods shown to the buyer..

- Required: `delivery_methods`, `shipping_countries`, `shipping_countries_complete`.
- Optional: `address_verification`, `currency`, `destination_address`, `subscription_id`.
- Undeclared: `renewal`, `billing_interval`, `billing_interval_count`, `billing_starts`, `credit_money`, `deliveries_per_period`, `delivery_interval`, `delivery_interval_count`, `effective_at`, `quantity`, `recurring_subtotal_money`, `subscription_plan_id`, `interval`, `interval_count`.
- Constraints for `mode`: Always delivery_options for buyer previews. Values: `"delivery_options"`.

### BuyerSubscriptionPreviewResponse.data variant 2: `mode` = `"next_renewal"`

oneOf with mode: "next_renewal": A preview of a subscription's next renewal and its estimated pricing..

- Required: `renewal`, `subscription_id`.
- Undeclared: `address_verification`, `currency`, `delivery_methods`, `destination_address`, `shipping_countries`, `shipping_countries_complete`, `billing_interval`, `billing_interval_count`, `billing_starts`, `credit_money`, `deliveries_per_period`, `delivery_interval`, `delivery_interval_count`, `effective_at`, `quantity`, `recurring_subtotal_money`, `subscription_plan_id`, `interval`, `interval_count`.
- Constraints for `mode`: Values: `"next_renewal"`.

### BuyerSubscriptionPreviewResponse.data variant 3: `mode` = `"plan_change"`

oneOf with mode: "plan_change": Estimated pricing for a subscription plan change, including the recurring item subtotal and renewal amounts..

- Required: `billing_interval`, `billing_interval_count`, `billing_starts`, `credit_money`, `deliveries_per_period`, `delivery_interval`, `delivery_interval_count`, `effective_at`, `quantity`, `recurring_subtotal_money`, `renewal`, `subscription_id`, `subscription_plan_id`.
- Undeclared: `address_verification`, `currency`, `delivery_methods`, `destination_address`, `shipping_countries`, `shipping_countries_complete`, `interval`, `interval_count`.
- Constraints for `billing_starts`: Values: `"now"`, `"next_renewal"`, `"period_end"`, `"prorated_now"`.
- Constraints for `credit_money`: Unused paid item time credited when billing_starts is now or prorated_now; null for next_renewal and period_end.
- Constraints for `effective_at`: When the plan is expected to take effect. Null when no billing time is scheduled.
- Constraints for `mode`: Values: `"plan_change"`.

### BuyerSubscriptionPreviewResponse.data variant 4: `billing_starts` = `"prorated_now"`, `mode` = `"quantity_change"`

oneOf with mode: "quantity_change": Estimated pricing for a quantity change that keeps the billing period and anchor..

- Required: `billing_starts`, `credit_money`, `deliveries_per_period`, `delivery_interval`, `delivery_interval_count`, `effective_at`, `interval`, `interval_count`, `quantity`, `recurring_subtotal_money`, `renewal`, `subscription_id`.
- Undeclared: `address_verification`, `currency`, `delivery_methods`, `destination_address`, `shipping_countries`, `shipping_countries_complete`, `billing_interval`, `billing_interval_count`, `subscription_plan_id`.
- Constraints for `billing_starts`: When this quantity change is billed. Values: `"prorated_now"`.
- Constraints for `credit_money`: Credit for unused paid subscription time. Null when there is no paid period to credit.
- Constraints for `effective_at`: When the quantities are expected to take effect. Null when no billing time is available.
- Constraints for `mode`: The kind of subscription pricing estimate. Values: `"quantity_change"`.
- Constraints for `recurring_subtotal_money`: The full-period recurring item subtotal after the quantity change, before discounts, tax, or shipping.
- Constraints for `renewal`: Estimated charge for this quantity change, including proration, unused-time credit, discounts, and tax.
- Constraints for `subscription_id`: The subscription whose quantities were estimated.

### BuyerSubscriptionPreviewResponse.data variant 2.renewal

Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_at` | Required | string or null | Expected billing time, or null when billing is not scheduled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `deliveries_per_period` | Required | integer | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: `int32`. minimum: `1`. maximum: `24`. |
| `delivery_interval` | Required | string or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. |
| `delivery_interval_count` | Required | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `discount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `discounts` | Required | Array of [SubscriptionRenewalEstimateDiscount](../models/SubscriptionRenewalEstimateDiscount.md#subscriptionrenewalestimatediscount) |  |
| `line_items` | Required | Array of [SubscriptionRenewalEstimateLineItem](../models/SubscriptionRenewalEstimateLineItem.md#subscriptionrenewalestimatelineitem) |  |
| `shipping_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Estimated shipping; null for a digital subscription. `shipping_money`: [declared alternatives](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewalshipping_money). |
| `subscription_cycle` | Required | integer | Format: `uint64`. minimum: `0`. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `subtotal_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Estimated tax; null when tax can't be calculated yet. `tax_money`: [declared alternatives](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaltax_money). |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |

### BuyerSubscriptionPreviewResponse.data variant 2.renewal.discount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### BuyerSubscriptionPreviewResponse.data variant 2.renewal.shipping_money

Estimated shipping; null for a digital subscription.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### BuyerSubscriptionPreviewResponse.data variant 2.renewal.shipping_money variant 1

anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### BuyerSubscriptionPreviewResponse.data variant 2.renewal.shipping_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Estimated shipping; null for a digital subscription. 

### BuyerSubscriptionPreviewResponse.data variant 2.renewal.subtotal_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### BuyerSubscriptionPreviewResponse.data variant 2.renewal.tax_money

Estimated tax; null when tax can't be calculated yet.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### BuyerSubscriptionPreviewResponse.data variant 2.renewal.tax_money variant 1

anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### BuyerSubscriptionPreviewResponse.data variant 2.renewal.tax_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Estimated tax; null when tax can't be calculated yet. 

### BuyerSubscriptionPreviewResponse.data variant 2.renewal.total_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### BuyerSubscriptionPreviewResponse.data variant 3.credit_money

Unused paid item time credited when billing_starts is now or prorated_now; null for next_renewal and period_end.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### BuyerSubscriptionPreviewResponse.data variant 3.credit_money variant 1

anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### BuyerSubscriptionPreviewResponse.data variant 3.credit_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Unused paid item time credited when billing_starts is now or prorated_now; null for next_renewal and period_end. 

### BuyerSubscriptionPreviewResponse.data variant 3.recurring_subtotal_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### BuyerSubscriptionPreviewResponse.data variant 3.renewal

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal).

### BuyerSubscriptionPreviewResponse.data variant 4.credit_money

Credit for unused paid subscription time. Null when there is no paid period to credit.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### BuyerSubscriptionPreviewResponse.data variant 4.credit_money variant 1

anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### BuyerSubscriptionPreviewResponse.data variant 4.credit_money variant 2

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

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### BuyerSubscriptionPreviewResponse.data variant 4.renewal.shipping_money

Declared alternatives: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.shipping_money](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewalshipping_money).

### BuyerSubscriptionPreviewResponse.data variant 4.renewal.subtotal_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### BuyerSubscriptionPreviewResponse.data variant 4.renewal.tax_money

Declared alternatives: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.tax_money](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaltax_money).

### BuyerSubscriptionPreviewResponse.data variant 4.renewal.total_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

