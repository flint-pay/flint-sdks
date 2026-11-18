[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionGiftRecipientRequestInput

Who receives a gift subscription. Sending it replaces the whole recipient.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string | The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. The local part before @ must be at most 64 octets (UTF-8 bytes). Format: `email`. minLength: `1`. maxLength: `254`. Example: `"buyer@example.com"`. |
| `message` | Optional | string or null | A note from the purchaser, shown in the recipient's gift notice. Up to 200 characters. Omit it or send null for none. minLength: `1`. maxLength: `200`. |
| `name` | Optional | string or null | The recipient's name, shown in their gift emails. Omit it or send null for none. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `255`. |

