[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryDestination

The delivery address for a subscription's future shipments, with the saved customer address it came from.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [Address](../models/Address.md#address) or null | Resolved delivery address used by future shipments. `address`: [declared alternatives](../models/SubscriptionDeliveryDestination.md#subscriptiondeliverydestinationaddress). |
| `customer_address_id` | Optional | string | Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. |

### SubscriptionDeliveryDestination.address

Resolved delivery address used by future shipments.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Conditional | string | City or locality of the address. |
| `country` | Conditional | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `line1` | Conditional | string | Street address, including the building number. |
| `line2` | Conditional | string | Apartment, suite, floor, or other address details. |
| `postal_code` | Conditional | string | Postal or ZIP code of the address. |
| `state` | Conditional | string | State, province, or region of the address. |

### SubscriptionDeliveryDestination.address variant 1

anyOf variant 1: A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients..

- Required: `city`, `country`, `line1`, `postal_code`, `state`.
- Optional: `line2`.

### SubscriptionDeliveryDestination.address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Resolved delivery address used by future shipments. 

