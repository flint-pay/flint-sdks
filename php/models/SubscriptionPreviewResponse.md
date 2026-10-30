[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPreviewResponse

The response for: Preview subscription.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Alternative shapes (see declared variants) | `data`: [declared alternatives](../models/SubscriptionPreviewResponse.md#subscriptionpreviewresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SubscriptionPreviewResponse.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Conditional | [SubscriptionAddressVerification](../models/SubscriptionAddressVerification.md#subscriptionaddressverification) | The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`. |
| `currency` | Conditional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `delivery_methods` | Conditional | Array of [SubscriptionDeliveryOption](../models/SubscriptionDeliveryOption.md#subscriptiondeliveryoption) | Present in delivery_options mode ([] when no method applies); absent in create mode. |
| `destination_address` | Conditional | [Address](../models/Address.md#address) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `destination_address`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_locationaddress). |
| `errors` | Conditional | Array of [SubscriptionPreviewError](../models/SubscriptionPreviewError.md#subscriptionpreviewerror) | Present in create mode ([] when the subscription is valid); absent in delivery_options mode. |
| `is_valid` | Conditional | boolean | Present in create mode; absent in delivery_options mode. |
| `mode` | Required | string |  |
| `subscription_id` | Conditional | string |  |
| `delivery_method_id` | Conditional | string |  |
| `no_longer_eligible_counts` | Conditional | [SubscriptionCounts](../models/SubscriptionCounts.md#subscriptioncounts) | Counts of subscriptions by status: active, past due, and paused. |
| `subscription_counts` | Conditional | [SubscriptionCounts](../models/SubscriptionCounts.md#subscriptioncounts) | Counts of subscriptions by status: active, past due, and paused. |
| `renewal` | Conditional | [SubscriptionRenewalEstimate](../models/SubscriptionRenewalEstimate.md#subscriptionrenewalestimate) | Estimated pricing and billing time for a subscription's next renewal, including items, discounts, shipping, and tax. `renewal`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal). |
| `billing_interval` | Conditional | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Format: `int32`. |
| `billing_starts` | Conditional | string | Values: `"now"`, `"next_renewal"`. |
| `credit_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Unused paid item time credited when billing_starts is now; null for next_renewal. |
| `quantity` | Conditional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `recurring_subtotal_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `subscription_plan_id` | Conditional | string |  |

### SubscriptionPreviewResponse.data variant 1

oneOf with mode: "create" | "delivery_options": A preview of a subscription. In `create` mode it reports validity and errors; in `delivery_options` mode it lists delivery methods..

- Optional: `address_verification`, `currency`, `delivery_methods`, `destination_address`, `errors`, `is_valid`, `subscription_id`.
- Undeclared: `delivery_method_id`, `no_longer_eligible_counts`, `subscription_counts`, `renewal`, `billing_interval`, `billing_interval_count`, `billing_starts`, `credit_money`, `quantity`, `recurring_subtotal_money`, `subscription_plan_id`.
- Constraints for `mode`: Values: `"create"`, `"delivery_options"`.

### SubscriptionPreviewResponse.data variant 2: `mode` = `"delivery_method_update"`

oneOf with mode: "delivery_method_update": How a delivery method change affects subscriptions: current counts and how many would no longer be eligible..

- Required: `delivery_method_id`, `no_longer_eligible_counts`, `subscription_counts`.
- Undeclared: `address_verification`, `currency`, `delivery_methods`, `destination_address`, `errors`, `is_valid`, `subscription_id`, `renewal`, `billing_interval`, `billing_interval_count`, `billing_starts`, `credit_money`, `quantity`, `recurring_subtotal_money`, `subscription_plan_id`.
- Constraints for `mode`: Values: `"delivery_method_update"`.

### SubscriptionPreviewResponse.data variant 3: `mode` = `"next_renewal"`

oneOf with mode: "next_renewal": A preview of a subscription's next renewal and its estimated pricing..

- Required: `renewal`, `subscription_id`.
- Undeclared: `address_verification`, `currency`, `delivery_methods`, `destination_address`, `errors`, `is_valid`, `delivery_method_id`, `no_longer_eligible_counts`, `subscription_counts`, `billing_interval`, `billing_interval_count`, `billing_starts`, `credit_money`, `quantity`, `recurring_subtotal_money`, `subscription_plan_id`.
- Constraints for `mode`: Values: `"next_renewal"`.

### SubscriptionPreviewResponse.data variant 4: `mode` = `"plan_change"`

oneOf with mode: "plan_change": Estimated pricing for a subscription plan change, including the recurring item subtotal and renewal amounts..

- Required: `billing_interval`, `billing_interval_count`, `billing_starts`, `credit_money`, `quantity`, `recurring_subtotal_money`, `renewal`, `subscription_id`, `subscription_plan_id`.
- Undeclared: `address_verification`, `currency`, `delivery_methods`, `destination_address`, `errors`, `is_valid`, `delivery_method_id`, `no_longer_eligible_counts`, `subscription_counts`.
- Constraints for `mode`: Values: `"plan_change"`.

### SubscriptionPreviewResponse.data variant 1.destination_address

Field definitions: [DeliveryPreviewResponse.data variant 1.buyer_location.address](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_locationaddress).

### SubscriptionPreviewResponse.data variant 3.renewal

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal).

### SubscriptionPreviewResponse.data variant 4.renewal

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 2.renewal](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-2renewal).

