[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionPreviewResponse

The response for: Preview subscription.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Alternative shapes (see declared variants) | Resource, collection, or operation result returned by this request. `data`: [declared alternatives](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerSubscriptionPreviewResponse.data

Resource, collection, or operation result returned by this request.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Conditional | [SubscriptionAddressVerification](../models/SubscriptionAddressVerification.md#subscriptionaddressverification) | The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`. |
| `currency` | Conditional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `delivery_methods` | Conditional | Array of [SubscriptionDeliveryOption](../models/SubscriptionDeliveryOption.md#subscriptiondeliveryoption) | Delivery methods available for the proposed destination. `delivery_methods[]`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-1delivery_methods). |
| `destination_address` | Conditional | [Address](../models/Address.md#address) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `destination_address`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedataservice_locationaddress). |
| `mode` | Required | string |  |
| `shipping_countries` | Conditional | Array of string | Sorted ISO 3166-1 alpha-2 countries potentially served by this subscription's shipping methods, based on their delivery configuration and shipping zones. Restrict a country selector with this list only when shipping_countries_complete is true. Empty when no shipping coverage is available. Other address, cart, customer and rate checks still apply. |
| `shipping_countries_complete` | Conditional | boolean | Whether shipping_countries is safe to use as a country restriction. False when a radius without an explicit country boundary may serve addresses across a border; clients must not restrict the country selector in that case. Other address, cart, customer and rate checks still apply when true. |
| `subscription_id` | Conditional | string |  |
| `renewal` | Conditional | [SubscriptionRenewalEstimate](../models/SubscriptionRenewalEstimate.md#subscriptionrenewalestimate) | Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax. `renewal`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal), [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-4renewal). |
| `billing_interval` | Conditional | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Format: `int32`. |
| `billing_starts` | Conditional | string |  |
| `credit_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null |  |
| `deliveries_per_period` | Conditional | integer | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: `int32`. minimum: `1`. maximum: `24`. |
| `delivery_interval` | Conditional | string or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. |
| `delivery_interval_count` | Conditional | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. |
| `effective_at` | Conditional | string or null | Format: `date-time`. |
| `quantity` | Conditional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `recurring_subtotal_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `subscription_plan_id` | Conditional | string |  |
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

### BuyerSubscriptionPreviewResponse.data variant 1.delivery_methods[]

A delivery method offered for a subscription, with its availability, price, and the reason it is unavailable if it is.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of one delivery with this method. Omitted unless `availability` is `available`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `availability` | Required | string | Whether the method can serve the destination now. Values: `"available"`, `"unavailable"`, `"cannot_calculate"`. |
| `current` | Required | boolean | True when this is the subscription's saved preferred delivery method, including when unavailable. |
| `delivery_method_id` | Required | string | ID of the delivery method. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `description` | Optional | string | Buyer-facing description of the delivery method. Omitted when the method has none. |
| `failure_category` | Optional | string | Why Flint could not price or evaluate the method. Omitted when evaluation did not fail. Values can expand as delivery capabilities change. Values: [16 declared values](DeliveryCandidateOutcomeResourceInput.md#deliverycandidateoutcomeresourceinput-failure_category-values). |
| `name` | Required | string | Buyer-facing name of the delivery method. |
| `price_type` | Required | string | Whether the method charges a flat price or Flint works the price out for each delivery. Values: `"fixed"`, `"quoted"`. |
| `selectable` | Required | boolean | True when this method is offered, renewable, and currently serves the destination. |
| `type` | Required | string | How the method delivers the items. Values: `"shipment"`, `"local_delivery"`. |
| `unavailable_reason` | Optional | string | Reason the method cannot serve this subscription destination. Values can expand as delivery capabilities change. Values: [7 declared values](#buyersubscriptionpreviewresponsedata-variant-1delivery_methods-unavailable_reason-values). |

#### BuyerSubscriptionPreviewResponse.data variant 1.delivery_methods[] unavailable_reason values

- `"dependency_revoked"`
- `"destination_not_served"`
- `"no_window_available"`
- `"eligibility_no_match"`
- `"method_type_not_allowed"`
- `"pricing_unavailable"`
- `"inventory_unavailable"`

### BuyerSubscriptionPreviewResponse.data variant 1.destination_address

Field definitions: [SubscriptionResponse.data.service_location.address](../models/SubscriptionResponse.md#subscriptionresponsedataservice_locationaddress).

### BuyerSubscriptionPreviewResponse.data variant 2.renewal

Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_at` | Required | string or null | Expected billing time, or null when billing is not scheduled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
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

### BuyerSubscriptionPreviewResponse.data variant 2.renewal.discounts[]

An estimated renewal discount from a promotion or credit for a subscription plan change.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Required | string |  |
| `promotion_id` | Required | string or null | Promotion ID for a promotion discount; null for unused-time credit or proration. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. |
| `source` | Required | string | Values: `"promotion"`, `"plan_change_credit"`, `"proration"`. |

### BuyerSubscriptionPreviewResponse.data variant 2.renewal.line_items[]

A subscription item's quantity, subtotal, and discount in an estimated renewal.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Required | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `subscription_id` | Required | string or null | Subscription that owns subscription_line_item_id. Null when subscription_line_item_id is null for new or replacement lines. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription_line_item_id` | Required | string or null | The saved subscription line ID; null when previewing new or replacement lines. Example: `"sli_01KEZF7C00PPWVJ2N321V84ASA"`. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### BuyerSubscriptionPreviewResponse.data variant 3.renewal

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal).

### BuyerSubscriptionPreviewResponse.data variant 4.renewal

Estimated charge for this quantity change, including proration, unused-time credit, discounts, and tax. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax.

Field definitions: [shared fields](#buyersubscriptionpreviewresponsedata-variant-2renewal).

### BuyerSubscriptionPreviewResponse.data variant 4.renewal.discounts[]

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.discounts[]](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewaldiscounts).

### BuyerSubscriptionPreviewResponse.data variant 4.renewal.line_items[]

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal.line_items[]](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewalline_items).

### BuyerSubscriptionPreviewResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

