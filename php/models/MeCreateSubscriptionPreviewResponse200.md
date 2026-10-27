[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateSubscriptionPreviewResponse200

The response for: Preview subscription.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Alternative shapes (see declared variants) | `data`: [declared alternatives](../models/MeCreateSubscriptionPreviewResponse200.md#mecreatesubscriptionpreviewresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### MeCreateSubscriptionPreviewResponse200.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Conditional | [SubscriptionAddressVerification](../models/SubscriptionAddressVerification.md#subscriptionaddressverification) | The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`. |
| `currency` | Conditional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `delivery_methods` | Conditional | Array of [SubscriptionDeliveryOption](../models/SubscriptionDeliveryOption.md#subscriptiondeliveryoption) | Present in delivery_options mode ([] when no method applies); absent in create mode. |
| `destination_address` | Conditional | [Address](../models/Address.md#address) | A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. `destination_address`: [field definitions](../models/CustomersCreateResponse200.md#customerscreateresponse200databilling_address). |
| `mode` | Required | string |  |
| `subscription_id` | Conditional | string |  |
| `renewal` | Conditional | [SubscriptionRenewalEstimate](../models/SubscriptionRenewalEstimate.md#subscriptionrenewalestimate) | Estimated pricing and billing time for a subscription's next renewal, including items, discounts, shipping, and tax. `renewal`: [field definitions](../models/MeCreateSubscriptionPreviewResponse200.md#mecreatesubscriptionpreviewresponse200data-variant-2renewal). |

### MeCreateSubscriptionPreviewResponse200.data variant 1: `mode` = `"delivery_options"`

oneOf variant 1: Available subscription delivery methods shown to the buyer..

- Optional: `address_verification`, `currency`, `delivery_methods`, `destination_address`, `subscription_id`.
- Undeclared: `renewal`.
- Constraints for `mode`: Always delivery_options for buyer previews. Values: `"delivery_options"`.

### MeCreateSubscriptionPreviewResponse200.data variant 2: `mode` = `"next_renewal"`

oneOf variant 2: A preview of a subscription's next renewal and its estimated pricing..

- Required: `renewal`, `subscription_id`.
- Undeclared: `address_verification`, `currency`, `delivery_methods`, `destination_address`.
- Constraints for `mode`: Values: `"next_renewal"`.

### MeCreateSubscriptionPreviewResponse200.data variant 1.destination_address

Field definitions: [CustomersCreateResponse200.data.billing_address](../models/CustomersCreateResponse200.md#customerscreateresponse200databilling_address).

### MeCreateSubscriptionPreviewResponse200.data variant 2.renewal

Estimated pricing and billing time for a subscription's next renewal, including items, discounts, shipping, and tax.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_at` | Required | string or null | Expected billing time, or null when billing is not scheduled. Format: `date-time`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `discounts` | Required | Array of [SubscriptionRenewalEstimateDiscount](../models/SubscriptionRenewalEstimateDiscount.md#subscriptionrenewalestimatediscount) |  |
| `line_items` | Required | Array of [SubscriptionRenewalEstimateLineItem](../models/SubscriptionRenewalEstimateLineItem.md#subscriptionrenewalestimatelineitem) |  |
| `shipping_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Estimated shipping; null for a digital subscription. |
| `subscription_cycle` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Estimated tax; null when no tax address is available. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

