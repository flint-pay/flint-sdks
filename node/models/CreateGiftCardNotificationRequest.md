[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardNotificationRequest

The request body for: Send a gift card notification.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string | minLength: `1`. |
| `recipient` | Required | [GiftCardPurchaseRecipient](../models/GiftCardPurchaseRecipient.md#giftcardpurchaserecipient) | Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time. `recipient`: [field definitions](../models/CreateGiftCardNotificationRequest.md#creategiftcardnotificationrequestrecipient). |
| `resend_of_notification_id` | Optional | string | minLength: `1`. |

### CreateGiftCardNotificationRequest.recipient

Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time.

Field definitions: [shared fields](GiftCardNotificationRecipientInput.md#giftcardnotificationrecipientinput).

