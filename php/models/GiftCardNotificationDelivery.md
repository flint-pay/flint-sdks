[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationDelivery

Delivery history of a gift card notification email: its send attempts and delivery events, and whether more of each exist.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attempts` | Required | Array of [GiftCardNotificationDeliveryAttempt](../models/GiftCardNotificationDeliveryAttempt.md#giftcardnotificationdeliveryattempt) | Recent delivery attempts for the notification. maxItems: `20`. `attempts[]`: [field definitions](../models/GiftCardNotificationDelivery.md#giftcardnotificationdeliveryattempts). |
| `events` | Required | Array of [GiftCardNotificationDeliveryEvent](../models/GiftCardNotificationDeliveryEvent.md#giftcardnotificationdeliveryevent) | Recent delivery events for the notification. maxItems: `50`. `events[]`: [field definitions](../models/GiftCardNotificationDelivery.md#giftcardnotificationdeliveryevents). |
| `has_more_attempts` | Required | boolean | Whether the notification has more attempts than `attempts` lists. |
| `has_more_events` | Required | boolean | Whether the notification has more events than `events` lists. |

### GiftCardNotificationDelivery.attempts[]

One attempt to send a gift card notification email, with its attempt number, status, and start and completion times.

Field definitions: [shared fields](GiftCardNotificationDeliveryAttemptInput.md#giftcardnotificationdeliveryattemptinput).

### GiftCardNotificationDelivery.events[]

A delivery event for a gift card notification email, such as accepted, delivered, bounced, or dropped, with when it occurred and was received.

Field definitions: [shared fields](GiftCardNotificationDeliveryEventInput.md#giftcardnotificationdeliveryeventinput).

