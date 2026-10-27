[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentRecipientInput

The recipient of a fulfillment, with name, email, phone, address, and handling instructions.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressInput](../models/AddressInput.md#addressinput) | Postal address where the recipient receives the items. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. |
| `email` | Optional | string | Recipient's contact email address. |
| `instructions` | Optional | string | Instructions for handling the recipient's order. For a pickup that checkout creates, this is the note the buyer left for the store, such as the car to look for. |
| `name` | Optional | string | Recipient's name for delivery or pickup. |
| `phone` | Optional | string | Recipient's contact phone number. |

