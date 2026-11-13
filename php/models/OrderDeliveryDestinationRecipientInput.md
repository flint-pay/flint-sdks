[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDeliveryDestinationRecipientInput

The name and phone number of the person receiving an order delivery.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Optional | string | Name of the person receiving the order. maxLength: `255`. |
| `phone` | Optional | string | Phone number for contacting the recipient about the delivery. maxLength: `30`. |

