[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationDeliveryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attempts` | Optional | Array of [GiftCardNotificationDeliveryAttemptPreviousAttributes](../models/GiftCardNotificationDeliveryAttemptPreviousAttributes.md#giftcardnotificationdeliveryattemptpreviousattributes) or null | Recent delivery attempts for the notification. `attempts`: [declared alternatives](../models/GiftCardNotificationDeliveryPreviousAttributes.md#giftcardnotificationdeliverypreviousattributesattempts). |
| `events` | Optional | Array of [GiftCardNotificationDeliveryEventPreviousAttributes](../models/GiftCardNotificationDeliveryEventPreviousAttributes.md#giftcardnotificationdeliveryeventpreviousattributes) or null | Recent delivery events for the notification. `events`: [declared alternatives](../models/GiftCardNotificationDeliveryPreviousAttributes.md#giftcardnotificationdeliverypreviousattributesevents). |
| `has_more_attempts` | Optional | boolean or null | Whether the notification has more attempts than `attempts` lists. `has_more_attempts`: [declared alternatives](../models/GiftCardNotificationDeliveryPreviousAttributes.md#giftcardnotificationdeliverypreviousattributeshas_more_attempts). |
| `has_more_events` | Optional | boolean or null | Whether the notification has more events than `events` lists. `has_more_events`: [declared alternatives](../models/GiftCardNotificationDeliveryPreviousAttributes.md#giftcardnotificationdeliverypreviousattributeshas_more_events). |

### GiftCardNotificationDeliveryPreviousAttributes.attempts

### GiftCardNotificationDeliveryPreviousAttributes.attempts variant 1

anyOf variant 1: Recent delivery attempts for the notification..

- Value shape: Array of [GiftCardNotificationDeliveryAttemptPreviousAttributes](../models/GiftCardNotificationDeliveryAttemptPreviousAttributes.md#giftcardnotificationdeliveryattemptpreviousattributes). Recent delivery attempts for the notification. Recent delivery attempts for the notification. maxItems: `20`. 

### GiftCardNotificationDeliveryPreviousAttributes.attempts variant 2

anyOf variant 2.

- Value shape: null. Recent delivery attempts for the notification. 

### GiftCardNotificationDeliveryPreviousAttributes.events

### GiftCardNotificationDeliveryPreviousAttributes.events variant 1

anyOf variant 1: Recent delivery events for the notification..

- Value shape: Array of [GiftCardNotificationDeliveryEventPreviousAttributes](../models/GiftCardNotificationDeliveryEventPreviousAttributes.md#giftcardnotificationdeliveryeventpreviousattributes). Recent delivery events for the notification. Recent delivery events for the notification. maxItems: `50`. 

### GiftCardNotificationDeliveryPreviousAttributes.events variant 2

anyOf variant 2.

- Value shape: null. Recent delivery events for the notification. 

### GiftCardNotificationDeliveryPreviousAttributes.has_more_attempts

### GiftCardNotificationDeliveryPreviousAttributes.has_more_attempts variant 1

anyOf variant 1: Whether the notification has more attempts than `attempts` lists..

- Value shape: boolean. Whether the notification has more attempts than `attempts` lists. 

### GiftCardNotificationDeliveryPreviousAttributes.has_more_attempts variant 2

anyOf variant 2.

- Value shape: null. Whether the notification has more attempts than `attempts` lists. 

### GiftCardNotificationDeliveryPreviousAttributes.has_more_events

### GiftCardNotificationDeliveryPreviousAttributes.has_more_events variant 1

anyOf variant 1: Whether the notification has more events than `events` lists..

- Value shape: boolean. Whether the notification has more events than `events` lists. 

### GiftCardNotificationDeliveryPreviousAttributes.has_more_events variant 2

anyOf variant 2.

- Value shape: null. Whether the notification has more events than `events` lists. 

