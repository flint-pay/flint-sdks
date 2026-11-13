[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryInput

A subscription's saved delivery preference: method, destination, recipient, shipping cost, and who last changed it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Optional | [SubscriptionAddressVerificationInput](../models/SubscriptionAddressVerificationInput.md#subscriptionaddressverificationinput) | Address verification result stored for the destination. Omitted when none is stored. The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`. |
| `delivery_method` | Optional | [SubscriptionDeliveryMethodSummaryInput](../models/SubscriptionDeliveryMethodSummaryInput.md#subscriptiondeliverymethodsummaryinput) | Summary of the saved delivery method. A short summary of a subscription's delivery method: name, description, type, and whether its price is fixed or quoted. |
| `delivery_method_id` | Required | string | ID of the delivery method for future deliveries. Flint prices it again for each renewal. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_version` | Required | integer | Version of the subscription's saved delivery preference. Format: `uint64`. minimum: `0`. |
| `destination` | Required | [SubscriptionDeliveryDestinationInput](../models/SubscriptionDeliveryDestinationInput.md#subscriptiondeliverydestinationinput) | Where future deliveries go. The delivery address for a subscription's future shipments, with the saved customer address it came from. |
| `recipient` | Optional | [DeliveryRecipientResourceInput](../models/DeliveryRecipientResourceInput.md#deliveryrecipientresourceinput) | Who receives the deliveries. Omitted when no recipient was saved. The person receiving a delivery selection, with optional `name`, `email`, and `phone`. |
| `shipping_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Delivery price for one delivery with the saved method and destination. Omitted when Flint can't price the method now. For a quoted method, the most recently paid shipping amount replaces it once one exists. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | How the method delivers the items. Values: `"shipment"`, `"local_delivery"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `updated_by` | Optional | string | Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. Values: `"buyer"`, `"merchant"`, `"migration"`. |

