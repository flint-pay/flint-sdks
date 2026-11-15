[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionServiceLocationRequestInput

Where a subscription's service is delivered: a saved customer address by ID, or a new address.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Conditional | string | ID of a saved address of the subscription's customer. Flint copies the address. minLength: `1`. Example: `"caddr_01KEZF7C00K2Q127FBJAXWB0FP"`. |
| `type` | Required | string | How the service location is given: a saved customer address or an inline address. |
| `address` | Conditional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | The address where the service is performed. Flint copies it. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |

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

