[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRecipientInput

The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string | Email address the gift card is delivered to. The local part before @ must be at most 64 octets (UTF-8 bytes). Format: `email`. minLength: `1`. maxLength: `254`. Example: `"buyer@example.com"`. |
| `message` | Optional | string | Personal message included with the gift card. maxLength: `200`. |
| `name` | Optional | string | Name of the person receiving the gift card. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. maxLength: `255`. |
| `send_at` | Optional | string | Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `sender_name` | Optional | string | Name to show as the sender in the gift card email, when provided. maxLength: `255`. |

