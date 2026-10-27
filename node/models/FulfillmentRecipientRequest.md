[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentRecipientRequest

Recipient details you supply when creating or updating a fulfillment: name, email, phone, address, and handling instructions.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressRequest](../models/AddressRequest.md#addressrequest) | Postal address where the recipient receives the items. A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. |
| `email` | Optional | string | Recipient's contact email address. minLength: `1`. |
| `instructions` | Optional | string | Instructions for handling the recipient's order. For a pickup that checkout creates, this is the note the buyer left for the store, such as the car to look for. minLength: `1`. |
| `name` | Optional | string | Recipient's name for delivery or pickup. minLength: `1`. |
| `phone` | Optional | string | Recipient's contact phone number. minLength: `1`. |

