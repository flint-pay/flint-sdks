[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionServiceLocationInput

The address where a subscription's service is delivered, with the saved customer address it came from.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressInput](../models/AddressInput.md#addressinput) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `customer_address_id` | Optional | string | Example: `"caddr_01KEZF7C00K2Q127FBJAXWB0FP"`. |
| `customer_id` | Required | string or null | Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |

