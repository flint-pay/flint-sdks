[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRecipientPatchRequest

Changes to the recipient of a gift card purchase when updating a line item. Send null for `name` or `message` to clear it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string | Email address the gift card is delivered to. The local part before @ must be at most 64 octets (UTF-8 bytes). Format: `email`. minLength: `1`. maxLength: `254`. Example: `"buyer@example.com"`. |
| `message` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `200`. |
| `name` | Optional | string or null | Send null to clear it. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `255`. |
| `send_at` | Optional | string | Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `sender_name` | Optional | string | Name to show as the sender in the gift card email, when provided. minLength: `1`. maxLength: `255`. |

