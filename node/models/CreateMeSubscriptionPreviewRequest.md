[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateMeSubscriptionPreviewRequest

The request body for: Preview subscription.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Conditional | [SubscriptionServiceLocationRequest](../models/SubscriptionServiceLocationRequest.md#subscriptionservicelocationrequest) | Where to deliver a subscription: a saved customer address by ID, or a new address. `destination`: [declared alternatives](../models/CreateMeSubscriptionPreviewRequest.md#createmesubscriptionpreviewrequest-variant-1destination). |
| `mode` | Required | string |  |
| `subscription_id` | Required | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CreateMeSubscriptionPreviewRequest variant 1: `mode` = `"delivery_options"`

oneOf variant 1: The `delivery_options` variant of `CreateMeSubscriptionPreviewRequest`..

- Required: `destination`.
- Constraints for `mode`: Values: `"delivery_options"`.

### CreateMeSubscriptionPreviewRequest variant 2: `mode` = `"next_renewal"`

oneOf variant 2: The `next_renewal` variant of `CreateMeSubscriptionPreviewRequest`..

- Undeclared: `destination`.
- Constraints for `mode`: Values: `"next_renewal"`.

### CreateMeSubscriptionPreviewRequest variant 1.destination

Where to deliver a subscription: a saved customer address by ID, or a new address.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Conditional | string | minLength: `1`. pattern: `^caddr_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `type` | Required | string |  |
| `address` | Conditional | [AddressRequest](../models/AddressRequest.md#addressrequest) | A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |

### CreateMeSubscriptionPreviewRequest variant 1.destination variant 1: `type` = `"customer_address"`

oneOf variant 1: The `customer_address` variant of `SubscriptionDeliveryDestinationInput`..

- Required: `customer_address_id`.
- Undeclared: `address`.
- Constraints for `type`: Values: `"customer_address"`.

### CreateMeSubscriptionPreviewRequest variant 1.destination variant 2: `type` = `"address"`

oneOf variant 2: The `address` variant of `SubscriptionDeliveryDestinationInput`..

- Required: `address`.
- Undeclared: `customer_address_id`.
- Constraints for `type`: Values: `"address"`.

