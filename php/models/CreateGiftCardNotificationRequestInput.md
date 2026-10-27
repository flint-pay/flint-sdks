[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardNotificationRequestInput

The request body for: Send a gift card notification.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string | minLength: `1`. |
| `recipient` | Required | [GiftCardNotificationRecipientInput](../models/GiftCardNotificationRecipientInput.md#giftcardnotificationrecipientinput) | Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time. |
| `resend_of_notification_id` | Optional | string | minLength: `1`. |

