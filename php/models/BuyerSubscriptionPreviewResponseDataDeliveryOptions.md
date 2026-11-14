[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionPreviewResponseDataDeliveryOptions

Resource, collection, or operation result returned by this request.

Available subscription delivery methods shown to the buyer.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Optional | [SubscriptionAddressVerification](../models/SubscriptionAddressVerification.md#subscriptionaddressverification) | The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `delivery_methods` | Required | Array of [SubscriptionDeliveryOption](../models/SubscriptionDeliveryOption.md#subscriptiondeliveryoption) | Delivery methods available for the proposed destination. `delivery_methods[]`: [field definitions](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-1delivery_methods). |
| `destination_address` | Optional | [Address](../models/Address.md#address) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `destination_address`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedataservice_locationaddress). |
| `mode` | Required | string | Always delivery_options for buyer previews. Values: `"delivery_options"`. |
| `shipping_countries` | Required | Array of string | Sorted ISO 3166-1 alpha-2 countries potentially served by this subscription's shipping methods, based on their delivery configuration and shipping zones. Restrict a country selector with this list only when shipping_countries_complete is true. Empty when no shipping coverage is available. Other address, cart, customer and rate checks still apply. |
| `shipping_countries_complete` | Required | boolean | Whether shipping_countries is safe to use as a country restriction. False when a radius without an explicit country boundary may serve addresses across a border; clients must not restrict the country selector in that case. Other address, cart, customer and rate checks still apply when true. |
| `subscription_id` | Optional | string |  |

### BuyerSubscriptionPreviewResponseDataDeliveryOptions.delivery_methods[]

Field definitions: [BuyerSubscriptionPreviewResponse.data variant 1.delivery_methods[]](../models/BuyerSubscriptionPreviewResponse.md#buyersubscriptionpreviewresponsedata-variant-1delivery_methods).

### BuyerSubscriptionPreviewResponseDataDeliveryOptions.destination_address

Field definitions: [SubscriptionResponse.data.service_location.address](../models/SubscriptionResponse.md#subscriptionresponsedataservice_locationaddress).

