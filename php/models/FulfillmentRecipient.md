[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentRecipient

The recipient of a fulfillment, with name, email, phone, address, and handling instructions.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | Postal address where the recipient receives the items. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. `address`: [field definitions](../models/FulfillmentRecipient.md#fulfillmentrecipientaddress). |
| `email` | Optional | string | Recipient's contact email address. |
| `instructions` | Optional | string | Instructions for handling the recipient's order. For a pickup that checkout creates, this is the note the buyer left for the store, such as the car to look for. |
| `name` | Optional | string | Recipient's name for delivery or pickup. |
| `phone` | Optional | string | Recipient's contact phone number. |

### FulfillmentRecipient.address

Postal address where the recipient receives the items. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.

Field definitions: [shared fields](AddressInput.md#addressinput).

