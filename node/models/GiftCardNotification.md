[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotification

A message sent to a gift card recipient.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery` | Optional | [GiftCardNotificationDelivery](../models/GiftCardNotificationDelivery.md#giftcardnotificationdelivery) | Included on notification retrieval. Contains the most recent sending attempts and delivery events, newest first. A failed attempt describes the send call; use notification.status to determine whether acceptance remains unconfirmed. Delivery history of a gift card notification email: its send attempts and delivery events, and whether more of each exist. |
| `gift_card_id` | Required | string | ID of the gift card the notification is about. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `gift_card_notification_id` | Required | string | Unique identifier for this gift card notification, prefixed `gcn_`. Example: `"gcn_01KEZF7C0023FN0HF9GH34RZA1"`. |
| `recipient` | Required | [GiftCardPurchaseRecipient](../models/GiftCardPurchaseRecipient.md#giftcardpurchaserecipient) | Who the notification is sent to. Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time. `recipient`: [field definitions](../models/CreateGiftCardNotificationRequest.md#creategiftcardnotificationrequestrecipient). |
| `resend_of_notification_id` | Optional | string | ID of the earlier notification this one sends again. Example: `"ntf_01KEZF7C00X0DP9KT950FYXHQ1"`. |
| `sent_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Where sending the notification stands. Read `delivery` for the attempts and email events behind it. Values: `"scheduled"`, `"pending"`, `"sent"`, `"failed"`, `"unconfirmed"`, `"canceled"`. |
| `status_reason` | Required | string or null | Why the notification has its current status. credential_rotated means code rotation canceled an unsent notification for the previous code. Null when no reason applies. Values: `"credential_rotated"`, `null`. |
| `supported_actions` | Required | Array of string | Lifecycle actions accepted for this notification's stored state, independent of the caller's credentials. Empty when none are available. Items values: `"cancel"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. |

### GiftCardNotification.recipient

Field definitions: [CreateGiftCardNotificationRequest.recipient](../models/CreateGiftCardNotificationRequest.md#creategiftcardnotificationrequestrecipient).

