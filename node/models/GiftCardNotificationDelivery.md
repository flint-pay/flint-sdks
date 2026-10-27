[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationDelivery

Delivery history of a gift card notification email: its send attempts and delivery events, and whether more of each exist.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attempts` | Required | Array of [GiftCardNotificationDeliveryAttempt](../models/GiftCardNotificationDeliveryAttempt.md#giftcardnotificationdeliveryattempt) | maxItems: `20`. |
| `events` | Required | Array of [GiftCardNotificationDeliveryEvent](../models/GiftCardNotificationDeliveryEvent.md#giftcardnotificationdeliveryevent) | maxItems: `50`. |
| `has_more_attempts` | Required | boolean |  |
| `has_more_events` | Required | boolean |  |

