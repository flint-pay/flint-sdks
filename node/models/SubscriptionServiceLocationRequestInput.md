[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionServiceLocationRequestInput

Request input. Response: [SubscriptionServiceLocationRequest](../models/SubscriptionServiceLocationRequest.md#subscriptionservicelocationrequest).

Where a subscription's service is delivered: a saved customer address by ID, or a new address.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Conditional | string | minLength: `1`. |
| `type` | Required | string |  |
| `address` | Conditional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |

### SubscriptionServiceLocationRequestInput variant 1: `type` = `"customer_address"`

oneOf with type: "customer_address": The `customer_address` variant of `SubscriptionServiceLocationInput`..

- Required: `customer_address_id`.
- Undeclared: `address`.
- Constraints for `type`: Values: `"customer_address"`.

### SubscriptionServiceLocationRequestInput variant 2: `type` = `"address"`

oneOf with type: "address": The `address` variant of `SubscriptionServiceLocationInput`..

- Required: `address`.
- Undeclared: `customer_address_id`.
- Constraints for `type`: Values: `"address"`.

