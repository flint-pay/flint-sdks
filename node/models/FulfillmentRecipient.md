[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentRecipient

The recipient of a fulfillment, with name, email, phone, address, and handling instructions.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | Postal address where the recipient receives the items. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `email` | Optional | string | Recipient's contact email address. |
| `instructions` | Optional | string | Instructions for handling the recipient's order. For a pickup that checkout creates, this is the note the buyer left for the store, such as the car to look for. |
| `name` | Optional | string | Recipient's name for delivery or pickup. |
| `phone` | Optional | string | Recipient's contact phone number. |

