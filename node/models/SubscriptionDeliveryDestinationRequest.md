[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryDestinationRequest

Where to deliver a subscription: a saved customer address by ID, or a new address.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Conditional | string | minLength: `1`. pattern: `^caddr_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `type` | Required | string |  |
| `address` | Conditional | [OrderDeliveryDestinationAddressRequest](../models/OrderDeliveryDestinationAddressRequest.md#orderdeliverydestinationaddressrequest) | The delivery address you supply on an order. Postal code and state are required for US addresses. |

### SubscriptionDeliveryDestinationRequest variant 1: `type` = `"customer_address"`

oneOf variant 1: The `customer_address` variant of `SubscriptionDeliveryDestinationInput`..

- Required: `customer_address_id`.
- Undeclared: `address`.
- Constraints for `type`: Values: `"customer_address"`.

### SubscriptionDeliveryDestinationRequest variant 2: `type` = `"address"`

oneOf variant 2: The `address` variant of `SubscriptionDeliveryDestinationInput`..

- Required: `address`.
- Undeclared: `customer_address_id`.
- Constraints for `type`: Values: `"address"`.

