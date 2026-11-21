[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRecipient







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string | Format: `email`. minLength: `1`. maxLength: `254`. Example: `"buyer@example.com"`. |
| `message` | Optional | string | Personal message included with the gift card. |
| `name` | Optional | string |  |
| `send_at` | Optional | string | Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `sender_name` | Optional | string | Name to show as the sender in the gift card email, when provided. |

### GiftCardPurchaseRecipient variant 1

anyOf variant 1: Declared schema GiftCardPurchaseRecipient. The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time..

- Constraints for `email`: Email address the gift card is delivered to.
- Constraints for `message`: maxLength: `200`.
- Constraints for `name`: Name of the person receiving the gift card. maxLength: `255`.
- Constraints for `sender_name`: maxLength: `255`.

### GiftCardPurchaseRecipient variant 2

anyOf variant 2: Declared schema GiftCardPurchaseRecipientRequest. Recipient of a gift card purchase that you supply: `email`, optional `name` and `message`, and an optional `send_at` time..

- Constraints for `email`: Email address the gift card is delivered to. The local part before @ must be at most 64 octets (UTF-8 bytes).
- Constraints for `message`: minLength: `1`. maxLength: `200`.
- Constraints for `name`: Name of the person receiving the gift card. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `255`.
- Constraints for `send_at`: minLength: `1`.
- Constraints for `sender_name`: minLength: `1`. maxLength: `255`.

