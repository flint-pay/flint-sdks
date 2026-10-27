[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryRequest

The delivery preference to set on a subscription: delivery method, type, destination, and recipient.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | minLength: `1`. pattern: `^dmet_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `destination` | Required | [SubscriptionDeliveryDestinationRequest](../models/SubscriptionDeliveryDestinationRequest.md#subscriptiondeliverydestinationrequest) | Where to deliver a subscription: a saved customer address by ID, or a new address. |
| `recipient` | Optional | [DeliverySelectionRecipientRequest](../models/DeliverySelectionRecipientRequest.md#deliveryselectionrecipientrequest) | Recipient details you supply with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`. |
| `type` | Required | string | Values: `"shipment"`, `"local_delivery"`. |

