[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDelivery

A subscription's saved delivery preference: method, destination, recipient, shipping cost, and who last changed it.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Optional | [SubscriptionAddressVerification](../models/SubscriptionAddressVerification.md#subscriptionaddressverification) | The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`. |
| `delivery_method` | Optional | [SubscriptionDeliveryMethodSummary](../models/SubscriptionDeliveryMethodSummary.md#subscriptiondeliverymethodsummary) | A short summary of a subscription's delivery method: name, description, type, and whether its price is fixed or quoted. |
| `delivery_method_id` | Required | string |  |
| `delivery_version` | Required | integer | Version of the subscription's saved delivery preference. Format: `uint64`. minimum: `0`. |
| `destination` | Required | [SubscriptionDeliveryDestination](../models/SubscriptionDeliveryDestination.md#subscriptiondeliverydestination) | The delivery address for a subscription's future shipments, with the saved customer address it came from. `destination`: [field definitions](../models/SubscriptionDelivery.md#subscriptiondeliverydestination-fields-1). |
| `recipient` | Optional | [DeliveryRecipientResource](../models/DeliveryRecipientResource.md#deliveryrecipientresource) | The person receiving a delivery selection, with optional `name`, `email`, and `phone`. |
| `shipping_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | Values: `"shipment"`, `"local_delivery"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `updated_by` | Optional | string | Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. Values: `"buyer"`, `"merchant"`, `"migration"`. |

### SubscriptionDelivery.destination fields 1

The delivery address for a subscription's future shipments, with the saved customer address it came from.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [Address](../models/Address.md#address) or null | Resolved delivery address used by future shipments. `address`: [declared alternatives](../models/SubscriptionDelivery.md#subscriptiondeliverydestination-fields-1address). |
| `customer_address_id` | Optional | string | Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. |

### SubscriptionDelivery.destination fields 1.address

Resolved delivery address used by future shipments.

Field definitions: [shared fields](CreditNoteResponse.md#creditnoteresponsedatabuyer_tax_identity-variant-1registered_address).

### SubscriptionDelivery.destination fields 1.address variant 1

anyOf Address: A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country..

- Required: `country`.
- Optional: `city`, `line1`, `line2`, `postal_code`, `state`.

### SubscriptionDelivery.destination fields 1.address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Resolved delivery address used by future shipments. 

