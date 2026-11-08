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
| `destination_address` | Conditional | [Address](../models/Address.md#address) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `destination_address`: [field definitions](../models/OrderResponse.md#orderresponsedatadelivery_destinationaddress). |
| `mode` | Required | string |  |
| `subscription_id` | Conditional | string |  |
| `renewal` | Conditional | [SubscriptionRenewalEstimate](../models/SubscriptionRenewalEstimate.md#subscriptionrenewalestimate) | Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax. `renewal`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal), [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-4renewal). |
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

### BuyerSubscriptionPreviewResponse.data variant 1: `mode` = `"delivery_options"`

oneOf with mode: "delivery_options": Available subscription delivery methods shown to the buyer..

- Required: `delivery_methods`.
- Optional: `address_verification`, `currency`, `destination_address`, `subscription_id`.
- Undeclared: `renewal`, `billing_interval`, `billing_interval_count`, `billing_starts`, `credit_money`, `effective_at`, `quantity`, `recurring_subtotal_money`, `subscription_plan_id`, `interval`, `interval_count`.
- Constraints for `mode`: Always delivery_options for buyer previews. Values: `"delivery_options"`.

### BuyerSubscriptionPreviewResponse.data variant 2: `mode` = `"next_renewal"`

oneOf with mode: "next_renewal": A preview of a subscription's next renewal and its estimated pricing..

- Required: `renewal`, `subscription_id`.
- Undeclared: `address_verification`, `currency`, `delivery_methods`, `destination_address`, `billing_interval`, `billing_interval_count`, `billing_starts`, `credit_money`, `effective_at`, `quantity`, `recurring_subtotal_money`, `subscription_plan_id`, `interval`, `interval_count`.
- Constraints for `mode`: Values: `"next_renewal"`.

### BuyerSubscriptionPreviewResponse.data variant 3: `mode` = `"plan_change"`

oneOf with mode: "plan_change": Estimated pricing for a subscription plan change, including the recurring item subtotal and renewal amounts..

- Required: `billing_interval`, `billing_interval_count`, `billing_starts`, `credit_money`, `effective_at`, `quantity`, `recurring_subtotal_money`, `renewal`, `subscription_id`, `subscription_plan_id`.
- Undeclared: `address_verification`, `currency`, `delivery_methods`, `destination_address`, `interval`, `interval_count`.
- Constraints for `billing_starts`: Values: `"now"`, `"next_renewal"`, `"period_end"`, `"prorated_now"`.
- Constraints for `credit_money`: Unused paid item time credited when billing_starts is now or prorated_now; null for next_renewal and period_end.
- Constraints for `effective_at`: When the plan is expected to take effect. Null when no billing time is scheduled.
- Constraints for `mode`: Values: `"plan_change"`.

### BuyerSubscriptionPreviewResponse.data variant 4: `billing_starts` = `"prorated_now"`, `mode` = `"quantity_change"`

oneOf with mode: "quantity_change": Estimated pricing for a quantity change that keeps the billing period and anchor..

- Required: `billing_starts`, `credit_money`, `effective_at`, `interval`, `interval_count`, `quantity`, `recurring_subtotal_money`, `renewal`, `subscription_id`.
- Undeclared: `address_verification`, `currency`, `delivery_methods`, `destination_address`, `billing_interval`, `billing_interval_count`, `subscription_plan_id`.
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
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `availability` | Required | string | Values: `"available"`, `"unavailable"`, `"cannot_calculate"`. |
| `current` | Required | boolean | True when this is the subscription's saved preferred delivery method, including when unavailable. |
| `delivery_method_id` | Required | string | Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `description` | Optional | string |  |
| `failure_category` | Optional | string | Reason the method cannot serve this subscription destination. Values can expand as delivery capabilities change. Values: [16 declared values](DeliveryCandidateOutcomeResourceInput.md#deliverycandidateoutcomeresourceinput-failure_category-values). |
| `name` | Required | string |  |
| `price_type` | Required | string | Values: `"fixed"`, `"quoted"`. |
| `selectable` | Required | boolean | True when this method is offered, renewable, and currently serves the destination. |
| `type` | Required | string | Values: `"shipment"`, `"local_delivery"`. |
| `unavailable_reason` | Optional | string | Reason the method cannot serve this subscription destination. Values can expand as delivery capabilities change. Values: [8 declared values](#buyersubscriptionpreviewresponsedata-variant-1delivery_methods-unavailable_reason-values). |

#### BuyerSubscriptionPreviewResponse.data variant 1.delivery_methods[] unavailable_reason values

- `"dependency_revoked"`
- `"destination_not_served"`
- `"pickup_unavailable"`
- `"no_window_available"`
- `"eligibility_no_match"`
- `"method_type_not_allowed"`
- `"pricing_unavailable"`
- `"inventory_unavailable"`

### BuyerSubscriptionPreviewResponse.data variant 1.destination_address

Field definitions: [OrderResponse.data.delivery_destination.address](../models/OrderResponse.md#orderresponsedatadelivery_destinationaddress).

### BuyerSubscriptionPreviewResponse.data variant 2.renewal

Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_at` | Required | string or null | Expected billing time, or null when billing is not scheduled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
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

