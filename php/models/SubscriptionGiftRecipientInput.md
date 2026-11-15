[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionGiftRecipientInput

Who receives a gift subscription. The customer stays the purchaser, who pays, gets receipts and reminders, and manages the subscription. delivery.recipient stays the ship-to address.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string | The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. Format: `email`. Example: `"buyer@example.com"`. |
| `message` | Required | string or null | A note from the purchaser, shown in the recipient's gift notice. Up to 200 characters. Null when there is no note. |
| `name` | Required | string or null | The recipient's name, shown in their gift emails. Null when no name was given. |

