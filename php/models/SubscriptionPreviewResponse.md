[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPreviewResponse

The response for: Preview subscription.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Alternative shapes (see declared variants) | Resource, collection, or operation result returned by this request. `data`: [declared alternatives](../models/SubscriptionPreviewResponse.md#subscriptionpreviewresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SubscriptionPreviewResponse.data

Resource, collection, or operation result returned by this request.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `errors` | Conditional | Array of [SubscriptionPreviewError](../models/SubscriptionPreviewError.md#subscriptionpreviewerror) | Validation failures for the proposed subscription; [] when the inputs are valid and priceable. |
| `first_charge` | Conditional | [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate) or null | The first Flint collection, priced as billing collects it: trial end without a setup fee, now for a setup fee (or the scheduled start), or imported-period end. With `prorate_first_period` and no setup fee, it's the prorated first period. `null` when validation prevents pricing. |
| `first_period_charge` | Conditional | [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate) or null | The prorated first period, when billing collects it as its own order after a setup fee in `first_charge`. `null` when no proration was requested, when the prorated period is already included in `first_charge`, when the first paid start is on the anchor day so there is no prorated period, or when validation prevents pricing. |
| `is_valid` | Conditional | boolean | Whether the inputs are valid and priceable. This does not mean the subscription is ready to pay. |
| `mode` | Required | string |  |
| `recurring` | Conditional | [SubscriptionChargeEstimate](../models/SubscriptionChargeEstimate.md#subscriptionchargeestimate) or null | The first normal full-period collection, without setup fees. With `prorate_first_period`, it's cycle 2, billed at the end of the prorated period. `null` when validation prevents pricing. |
| `address_verification` | Conditional | [SubscriptionAddressVerification](../models/SubscriptionAddressVerification.md#subscriptionaddressverification) | The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`. |
| `currency` | Conditional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `delivery_methods` | Conditional | Array of [SubscriptionDeliveryOption](../models/SubscriptionDeliveryOption.md#subscriptiondeliveryoption) | Delivery methods available for the proposed destination. `delivery_methods[]`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-1delivery_methods). |
| `destination_address` | Conditional | [Address](../models/Address.md#address) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `destination_address`: [field definitions](../models/OrderResponse.md#orderresponsedatadelivery_destinationaddress). |
| `subscription_id` | Conditional | string |  |
| `delivery_method_id` | Conditional | string |  |
| `no_longer_eligible_counts` | Conditional | [SubscriptionCounts](../models/SubscriptionCounts.md#subscriptioncounts) | Counts of subscriptions by status: active, past due, and paused. |
| `subscription_counts` | Conditional | [SubscriptionCounts](../models/SubscriptionCounts.md#subscriptioncounts) | Counts of subscriptions by status: active, past due, and paused. |
| `renewal` | Conditional | [SubscriptionRenewalEstimate](../models/SubscriptionRenewalEstimate.md#subscriptionrenewalestimate) | Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax. `renewal`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal), [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-4renewal), [field definitions](../models/SubscriptionPreviewResponse.md#subscriptionpreviewresponsedata-variant-7renewal). |
| `billing_interval` | Conditional | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Format: `int32`. |
| `billing_starts` | Conditional | string |  |
| `credit_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null |  |
| `effective_at` | Conditional | string or null | Format: `date-time`. |
| `quantity` | Conditional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `recurring_subtotal_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `subscription_plan_id` | Conditional | string |  |
| `interval` | Conditional | string | The subscription billing interval after the quantity change. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `interval_count` | Conditional | integer | The number of interval units in each billing period. Format: `int32`. |
| `promotion` | Conditional | [SubscriptionPromotion](../models/SubscriptionPromotion.md#subscriptionpromotion) | The promotion as it would attach to this subscription. A recurring promotion applied to a subscription, including its recurrence and remaining discounted cycles. `promotion`: [field definitions](../models/SubscriptionPreviewResponse.md#subscriptionpreviewresponsedata-variant-7promotion). |

### SubscriptionPreviewResponse.data variant 1: `mode` = `"create"`

oneOf with mode: "create": Validation and estimates for the first and recurring collections of a proposed subscription..

- Required: `errors`, `first_charge`, `first_period_charge`, `is_valid`, `recurring`.
- Undeclared: `address_verification`, `currency`, `delivery_methods`, `destination_address`, `subscription_id`, `delivery_method_id`, `no_longer_eligible_counts`, `subscription_counts`, `renewal`, `billing_interval`, `billing_interval_count`, `billing_starts`, `credit_money`, `effective_at`, `quantity`, `recurring_subtotal_money`, `subscription_plan_id`, `interval`, `interval_count`, `promotion`.
- Constraints for `mode`: The kind of subscription preview. Values: `"create"`.

### SubscriptionPreviewResponse.data variant 2: `mode` = `"delivery_options"`

oneOf with mode: "delivery_options": Delivery methods available for a proposed subscription destination..

- Required: `delivery_methods`.
- Optional: `address_verification`, `currency`, `destination_address`, `subscription_id`.
- Undeclared: `errors`, `first_charge`, `first_period_charge`, `is_valid`, `recurring`, `delivery_method_id`, `no_longer_eligible_counts`, `subscription_counts`, `renewal`, `billing_interval`, `billing_interval_count`, `billing_starts`, `credit_money`, `effective_at`, `quantity`, `recurring_subtotal_money`, `subscription_plan_id`, `interval`, `interval_count`, `promotion`.
- Constraints for `mode`: Values: `"delivery_options"`.

### SubscriptionPreviewResponse.data variant 3: `mode` = `"delivery_method_update"`

oneOf with mode: "delivery_method_update": How a delivery method change affects subscriptions: current counts and how many would no longer be eligible..

- Required: `delivery_method_id`, `no_longer_eligible_counts`, `subscription_counts`.
- Undeclared: `errors`, `first_charge`, `first_period_charge`, `is_valid`, `recurring`, `address_verification`, `currency`, `delivery_methods`, `destination_address`, `subscription_id`, `renewal`, `billing_interval`, `billing_interval_count`, `billing_starts`, `credit_money`, `effective_at`, `quantity`, `recurring_subtotal_money`, `subscription_plan_id`, `interval`, `interval_count`, `promotion`.
- Constraints for `mode`: Values: `"delivery_method_update"`.

### SubscriptionPreviewResponse.data variant 4: `mode` = `"next_renewal"`

oneOf with mode: "next_renewal": A preview of a subscription's next renewal and its estimated pricing..

- Required: `renewal`, `subscription_id`.
- Undeclared: `errors`, `first_charge`, `first_period_charge`, `is_valid`, `recurring`, `address_verification`, `currency`, `delivery_methods`, `destination_address`, `delivery_method_id`, `no_longer_eligible_counts`, `subscription_counts`, `billing_interval`, `billing_interval_count`, `billing_starts`, `credit_money`, `effective_at`, `quantity`, `recurring_subtotal_money`, `subscription_plan_id`, `interval`, `interval_count`, `promotion`.
- Constraints for `mode`: Values: `"next_renewal"`.

### SubscriptionPreviewResponse.data variant 5: `mode` = `"plan_change"`

oneOf with mode: "plan_change": Estimated pricing for a subscription plan change, including the recurring item subtotal and renewal amounts..

- Required: `billing_interval`, `billing_interval_count`, `billing_starts`, `credit_money`, `effective_at`, `quantity`, `recurring_subtotal_money`, `renewal`, `subscription_id`, `subscription_plan_id`.
- Undeclared: `errors`, `first_charge`, `first_period_charge`, `is_valid`, `recurring`, `address_verification`, `currency`, `delivery_methods`, `destination_address`, `delivery_method_id`, `no_longer_eligible_counts`, `subscription_counts`, `interval`, `interval_count`, `promotion`.
- Constraints for `billing_starts`: Values: `"now"`, `"next_renewal"`, `"period_end"`, `"prorated_now"`.
- Constraints for `credit_money`: Unused paid item time credited when billing_starts is now or prorated_now; null for next_renewal and period_end.
- Constraints for `effective_at`: When the plan is expected to take effect. Null when no billing time is scheduled.
- Constraints for `mode`: Values: `"plan_change"`.

### SubscriptionPreviewResponse.data variant 6: `billing_starts` = `"prorated_now"`, `mode` = `"quantity_change"`

oneOf with mode: "quantity_change": Estimated pricing for a quantity change that keeps the billing period and anchor..

- Required: `billing_starts`, `credit_money`, `effective_at`, `interval`, `interval_count`, `quantity`, `recurring_subtotal_money`, `renewal`, `subscription_id`.
- Undeclared: `errors`, `first_charge`, `first_period_charge`, `is_valid`, `recurring`, `address_verification`, `currency`, `delivery_methods`, `destination_address`, `delivery_method_id`, `no_longer_eligible_counts`, `subscription_counts`, `billing_interval`, `billing_interval_count`, `subscription_plan_id`, `promotion`.
- Constraints for `billing_starts`: When this quantity change is billed. Values: `"prorated_now"`.
- Constraints for `credit_money`: Credit for unused paid subscription time. Null when there is no paid period to credit.
- Constraints for `effective_at`: When the quantities are expected to take effect. Null when no billing time is available.
- Constraints for `mode`: The kind of subscription pricing estimate. Values: `"quantity_change"`.
- Constraints for `recurring_subtotal_money`: The full-period recurring item subtotal after the quantity change, before discounts, tax, or shipping.
- Constraints for `renewal`: Estimated charge for this quantity change, including proration, unused-time credit, discounts, and tax.
- Constraints for `subscription_id`: The subscription whose quantities were estimated.

### SubscriptionPreviewResponse.data variant 7: `mode` = `"promotion_apply"`

oneOf with mode: "promotion_apply": A proposed subscription promotion attachment and estimated renewal for its first eligible charged cycle..

- Required: `promotion`, `renewal`, `subscription_id`.
- Undeclared: `errors`, `first_charge`, `first_period_charge`, `is_valid`, `recurring`, `address_verification`, `currency`, `delivery_methods`, `destination_address`, `delivery_method_id`, `no_longer_eligible_counts`, `subscription_counts`, `billing_interval`, `billing_interval_count`, `billing_starts`, `credit_money`, `effective_at`, `quantity`, `recurring_subtotal_money`, `subscription_plan_id`, `interval`, `interval_count`.
- Constraints for `mode`: The kind of subscription pricing estimate. Values: `"promotion_apply"`.
- Constraints for `renewal`: Estimated renewal for the promotion's first_cycle.
- Constraints for `subscription_id`: ID of the subscription being previewed. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`.

### SubscriptionPreviewResponse.data variant 2.delivery_methods[]

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 1.delivery_methods[]](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-1delivery_methods).

### SubscriptionPreviewResponse.data variant 2.destination_address

Field definitions: [OrderResponse.data.delivery_destination.address](../models/OrderResponse.md#orderresponsedatadelivery_destinationaddress).

### SubscriptionPreviewResponse.data variant 4.renewal

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal).

### SubscriptionPreviewResponse.data variant 5.renewal

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal).

### SubscriptionPreviewResponse.data variant 6.renewal

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 4.renewal](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-4renewal).

### SubscriptionPreviewResponse.data variant 7.promotion

The promotion as it would attach to this subscription. A recurring promotion applied to a subscription, including its recurrence and remaining discounted cycles.

Field definitions: [shared fields](SubscriptionResponse.md#subscriptionresponsedatapromotions).

### SubscriptionPreviewResponse.data variant 7.promotion.recurrence

Declared alternatives: [SubscriptionResponse.data.promotions[].recurrence](../models/SubscriptionResponse.md#subscriptionresponsedatapromotionsrecurrence).

### SubscriptionPreviewResponse.data variant 7.renewal

Estimated renewal for the promotion's first_cycle. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax.

Field definitions: [shared fields](BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal).

### SubscriptionPreviewResponse.data variant 7.renewal.discounts[]

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.discounts[]](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaldiscounts).

### SubscriptionPreviewResponse.data variant 7.renewal.line_items[]

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.line_items[]](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewalline_items).

### SubscriptionPreviewResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

