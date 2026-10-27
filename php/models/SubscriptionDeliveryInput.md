[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryInput

A subscription's saved delivery preference: method, destination, recipient, shipping cost, and who last changed it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Optional | [SubscriptionAddressVerificationInput](../models/SubscriptionAddressVerificationInput.md#subscriptionaddressverificationinput) | The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`. |
| `delivery_method` | Optional | [SubscriptionDeliveryMethodSummaryInput](../models/SubscriptionDeliveryMethodSummaryInput.md#subscriptiondeliverymethodsummaryinput) | A short summary of a subscription's delivery method: name, description, type, and whether its price is fixed or quoted. |
| `delivery_method_id` | Required | string |  |
| `delivery_version` | Required | integer string | Version of the subscription's saved delivery preference. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `destination` | Required | [SubscriptionDeliveryDestinationInput](../models/SubscriptionDeliveryDestinationInput.md#subscriptiondeliverydestinationinput) | The delivery address for a subscription's future shipments, with the saved customer address it came from. |
| `recipient` | Optional | [DeliveryRecipientResourceInput](../models/DeliveryRecipientResourceInput.md#deliveryrecipientresourceinput) | The person receiving a delivery selection, with optional `name`, `email`, and `phone`. |
| `shipping_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | Values: `"shipment"`, `"local_delivery"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `updated_by` | Optional | string | Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. Values: `"buyer"`, `"merchant"`, `"migration"`. |

