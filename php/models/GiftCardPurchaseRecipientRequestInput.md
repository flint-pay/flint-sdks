[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRecipientRequestInput

Recipient of a gift card purchase that you supply: `email`, optional `name` and `message`, and an optional `send_at` time.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string | Format: `email`. minLength: `1`. maxLength: `254`. |
| `message` | Optional | string | minLength: `1`. maxLength: `200`. |
| `name` | Optional | string | minLength: `1`. maxLength: `255`. |
| `send_at` | Optional | string | Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Format: `date-time`. minLength: `1`. |

