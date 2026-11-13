[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionServiceLocation

The address where a subscription's service is delivered, with the saved customer address it came from.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedataservice_locationaddress). |
| `customer_address_id` | Optional | string |  |
| `customer_id` | Required | string or null | Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection. |

### SubscriptionServiceLocation.address

Field definitions: [SubscriptionResponse.data.service_location.address](../models/SubscriptionResponse.md#subscriptionresponsedataservice_locationaddress).

