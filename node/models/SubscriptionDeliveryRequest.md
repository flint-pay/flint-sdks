[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryRequest

The delivery preference to set on a subscription: delivery method, type, destination, and recipient.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | ID of the delivery method to use. The subscription's plan must offer it. minLength: `1`. pattern: `^dmet_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `destination` | Required | [SubscriptionServiceLocationRequest](../models/SubscriptionServiceLocationRequest.md#subscriptionservicelocationrequest) | Where to deliver future shipments. Where to deliver a subscription: a saved customer address by ID, or a new address. `destination`: [declared alternatives](../models/SubscriptionDeliveryRequest.md#subscriptiondeliveryrequestdestination). |
| `recipient` | Optional | [DeliverySelectionRecipientRequest](../models/DeliverySelectionRecipientRequest.md#deliveryselectionrecipientrequest) | Who receives the deliveries. Recipient details you supply with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`. |
| `type` | Required | string | How the method delivers the items. Must match the method's type. Values: `"shipment"`, `"local_delivery"`. |

### SubscriptionDeliveryRequest.destination

Where to deliver future shipments. Where to deliver a subscription: a saved customer address by ID, or a new address.

Field definitions: [shared fields](CreateMeSubscriptionPreviewRequest.md#createmesubscriptionpreviewrequest-variant-1destination).

### SubscriptionDeliveryRequest.destination variant 1: `type` = `"customer_address"`

oneOf with type: "customer_address": The `customer_address` variant of `SubscriptionDeliveryDestinationInput`..

- Required: `customer_address_id`.
- Undeclared: `address`.
- Constraints for `type`: Selects one of the customer's saved addresses as the destination. Values: `"customer_address"`.

### SubscriptionDeliveryRequest.destination variant 2: `type` = `"address"`

oneOf with type: "address": The `address` variant of `SubscriptionDeliveryDestinationInput`..

- Required: `address`.
- Undeclared: `customer_address_id`.
- Constraints for `type`: Selects a new address as the destination. Values: `"address"`.

