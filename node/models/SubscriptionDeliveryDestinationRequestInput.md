[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryDestinationRequestInput

Request input. Response: [SubscriptionServiceLocationRequest](../models/SubscriptionServiceLocationRequest.md#subscriptionservicelocationrequest).

Where to deliver a subscription: a saved customer address by ID, or a new address.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Conditional | string | ID of the customer's saved address. Flint copies it, so later edits to the saved address don't change the subscription. minLength: `1`. pattern: `^caddr_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"caddr_01KEZF7C00K2Q127FBJAXWB0FP"`. |
| `type` | Required | string |  |
| `address` | Conditional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | Delivery address. Flint saves a copy with the subscription. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |

### SubscriptionDeliveryDestinationRequestInput variant 1: `type` = `"customer_address"`

oneOf with type: "customer_address": The `customer_address` variant of `SubscriptionDeliveryDestinationInput`..

- Required: `customer_address_id`.
- Undeclared: `address`.
- Constraints for `type`: Selects one of the customer's saved addresses as the destination. Values: `"customer_address"`.

### SubscriptionDeliveryDestinationRequestInput variant 2: `type` = `"address"`

oneOf with type: "address": The `address` variant of `SubscriptionDeliveryDestinationInput`..

- Required: `address`.
- Undeclared: `customer_address_id`.
- Constraints for `type`: Selects a new address as the destination. Values: `"address"`.

