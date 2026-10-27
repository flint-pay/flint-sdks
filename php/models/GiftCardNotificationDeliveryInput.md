[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationDeliveryInput

Delivery history of a gift card notification email: its send attempts and delivery events, and whether more of each exist.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attempts` | Required | Array of [GiftCardNotificationDeliveryAttemptInput](../models/GiftCardNotificationDeliveryAttemptInput.md#giftcardnotificationdeliveryattemptinput) | maxItems: `20`. |
| `events` | Required | Array of [GiftCardNotificationDeliveryEventInput](../models/GiftCardNotificationDeliveryEventInput.md#giftcardnotificationdeliveryeventinput) | maxItems: `50`. |
| `has_more_attempts` | Required | boolean |  |
| `has_more_events` | Required | boolean |  |

