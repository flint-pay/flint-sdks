[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotification

A message sent to a gift card recipient.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `delivery` | Optional | [GiftCardNotificationDelivery](../models/GiftCardNotificationDelivery.md#giftcardnotificationdelivery) | Included on notification retrieval. Contains the most recent sending attempts and delivery events, newest first. A failed attempt describes the send call; use notification.status to determine whether acceptance remains unconfirmed. Delivery history of a gift card notification email: its send attempts and delivery events, and whether more of each exist. |
| `gift_card_id` | Required | string |  |
| `gift_card_notification_id` | Required | string |  |
| `recipient` | Required | [GiftCardPurchaseRecipient](../models/GiftCardPurchaseRecipient.md#giftcardpurchaserecipient) | Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time. `recipient`: [field definitions](../models/CreateGiftCardNotificationRequest.md#creategiftcardnotificationrequestrecipient). |
| `resend_of_notification_id` | Optional | string |  |
| `sent_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `status` | Required | string | Values: `"scheduled"`, `"queued"`, `"sending"`, `"sent"`, `"failed"`, `"unconfirmed"`, `"bounced"`, `"canceled"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Format: `int64`. |

### GiftCardNotification.recipient

Field definitions: [CreateGiftCardNotificationRequest.recipient](../models/CreateGiftCardNotificationRequest.md#creategiftcardnotificationrequestrecipient).

