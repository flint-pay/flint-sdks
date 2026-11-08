[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardNotificationRequestInput

The request body for: Send a gift card notification.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string | ID of the gift card the notification is about. minLength: `1`. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `recipient` | Required | [GiftCardNotificationRecipientInput](../models/GiftCardNotificationRecipientInput.md#giftcardnotificationrecipientinput) | Who the notification is sent to. Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time. |
| `resend_of_notification_id` | Optional | string | ID of the earlier notification this one sends again. minLength: `1`. Example: `"ntf_01KEZF7C00X0DP9KT950FYXHQ1"`. |

