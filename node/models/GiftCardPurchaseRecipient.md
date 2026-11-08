[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRecipient







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string | Format: `email`. minLength: `1`. maxLength: `254`. Example: `"buyer@example.com"`. |
| `message` | Optional | string |  |
| `name` | Optional | string |  |
| `send_at` | Optional | string | Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### GiftCardPurchaseRecipient variant 1

anyOf variant 1: Declared schema GiftCardNotificationRecipient. Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time..

- Constraints for `email`: Email address the notification is sent to.
- Constraints for `message`: Message included in the notification. minLength: `1`. maxLength: `200`.
- Constraints for `name`: Name of the person the notification is addressed to. minLength: `1`. maxLength: `255`.
- Constraints for `send_at`: Optional whole-second send time between now and 90 days from now. minLength: `1`.

### GiftCardPurchaseRecipient variant 2

anyOf variant 2: Declared schema GiftCardPurchaseRecipient. The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time..

- Constraints for `email`: Email address the gift card is delivered to.
- Constraints for `message`: Personal message included with the gift card. maxLength: `200`.
- Constraints for `name`: Name of the person receiving the gift card. maxLength: `255`.
- Constraints for `send_at`: Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding.

### GiftCardPurchaseRecipient variant 3

anyOf variant 3: Declared schema GiftCardPurchaseRecipientRequest. Recipient of a gift card purchase that you supply: `email`, optional `name` and `message`, and an optional `send_at` time..

- Constraints for `email`: Email address the gift card is delivered to.
- Constraints for `message`: Personal message included with the gift card. minLength: `1`. maxLength: `200`.
- Constraints for `name`: Name of the person receiving the gift card. minLength: `1`. maxLength: `255`.
- Constraints for `send_at`: Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. minLength: `1`.

