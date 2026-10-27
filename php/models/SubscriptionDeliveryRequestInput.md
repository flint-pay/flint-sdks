[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryRequestInput

The delivery preference to set on a subscription: delivery method, type, destination, and recipient.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | minLength: `1`. pattern: `^dmet_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `destination` | Required | [SubscriptionDeliveryDestinationRequestInput](../models/SubscriptionDeliveryDestinationRequestInput.md#subscriptiondeliverydestinationrequestinput) | Where to deliver a subscription: a saved customer address by ID, or a new address. |
| `recipient` | Optional | [DeliverySelectionRecipientRequestInput](../models/DeliverySelectionRecipientRequestInput.md#deliveryselectionrecipientrequestinput) | Recipient details you supply with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`. |
| `type` | Required | string | Values: `"shipment"`, `"local_delivery"`. |

