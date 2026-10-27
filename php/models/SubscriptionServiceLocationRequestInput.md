[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionServiceLocationRequestInput

Where a subscription's service is delivered: a saved customer address by ID, or a new address.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Conditional | string | minLength: `1`. |
| `source` | Required | string |  |
| `address` | Conditional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. |

### SubscriptionServiceLocationRequestInput variant 1: `source` = `"customer_address"`

oneOf variant 1: The `customer_address` variant of `SubscriptionServiceLocationInput`..

- Required: `customer_address_id`.
- Undeclared: `address`.
- Constraints for `source`: Values: `"customer_address"`.

### SubscriptionServiceLocationRequestInput variant 2: `source` = `"address"`

oneOf variant 2: The `address` variant of `SubscriptionServiceLocationInput`..

- Required: `address`.
- Undeclared: `customer_address_id`.
- Constraints for `source`: Values: `"address"`.

