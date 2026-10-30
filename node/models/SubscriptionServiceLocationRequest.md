[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionServiceLocationRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Conditional | string |  |
| `type` | Required | string |  |
| `address` | Conditional | [AddressRequest](../models/AddressRequest.md#addressrequest) | A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |

### SubscriptionServiceLocationRequest variant 1: `type` = `"customer_address"`

anyOf variant 1: Declared schema SubscriptionDeliveryDestinationRequest. Where to deliver a subscription: a saved customer address by ID, or a new address.; oneOf with type: "customer_address": The `customer_address` variant of `SubscriptionDeliveryDestinationInput`..

- Required: `customer_address_id`.
- Undeclared: `address`.
- Constraints for `customer_address_id`: minLength: `1`. pattern: `^caddr_[0-9A-HJKMNP-TV-Z]{26}$`.
- Constraints for `type`: Values: `"customer_address"`.

### SubscriptionServiceLocationRequest variant 2: `type` = `"address"`

anyOf variant 1: Declared schema SubscriptionDeliveryDestinationRequest. Where to deliver a subscription: a saved customer address by ID, or a new address.; oneOf with type: "address": The `address` variant of `SubscriptionDeliveryDestinationInput`..

- Required: `address`.
- Undeclared: `customer_address_id`.
- Constraints for `type`: Values: `"address"`.

### SubscriptionServiceLocationRequest variant 3: `type` = `"customer_address"`

anyOf variant 2: Declared schema SubscriptionServiceLocationRequest. Where a subscription's service is delivered: a saved customer address by ID, or a new address.; oneOf with type: "customer_address": The `customer_address` variant of `SubscriptionServiceLocationInput`..

- Required: `customer_address_id`.
- Undeclared: `address`.
- Constraints for `customer_address_id`: minLength: `1`.
- Constraints for `type`: Values: `"customer_address"`.

### SubscriptionServiceLocationRequest variant 4: `type` = `"address"`

anyOf variant 2: Declared schema SubscriptionServiceLocationRequest. Where a subscription's service is delivered: a saved customer address by ID, or a new address.; oneOf with type: "address": The `address` variant of `SubscriptionServiceLocationInput`..

- Required: `address`.
- Undeclared: `customer_address_id`.
- Constraints for `type`: Values: `"address"`.

