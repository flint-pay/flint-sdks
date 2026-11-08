[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPreviewInput

Delivery methods available for a proposed subscription destination.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Optional | [SubscriptionAddressVerificationInput](../models/SubscriptionAddressVerificationInput.md#subscriptionaddressverificationinput) | The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `delivery_methods` | Required | Array of [SubscriptionDeliveryOptionInput](../models/SubscriptionDeliveryOptionInput.md#subscriptiondeliveryoptioninput) | Delivery methods available for the proposed destination. |
| `destination_address` | Optional | [AddressInput](../models/AddressInput.md#addressinput) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `mode` | Required | string | Values: `"delivery_options"`. |
| `subscription_id` | Optional | string | Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |

