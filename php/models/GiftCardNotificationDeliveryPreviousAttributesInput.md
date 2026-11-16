[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationDeliveryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attempts` | Optional | Array of [GiftCardNotificationDeliveryAttemptPreviousAttributesInput](../models/GiftCardNotificationDeliveryAttemptPreviousAttributesInput.md#giftcardnotificationdeliveryattemptpreviousattributesinput) or null | Recent delivery attempts for the notification. `attempts`: [declared alternatives](../models/GiftCardNotificationDeliveryPreviousAttributesInput.md#giftcardnotificationdeliverypreviousattributesinputattempts). |
| `events` | Optional | Array of [GiftCardNotificationDeliveryEventPreviousAttributesInput](../models/GiftCardNotificationDeliveryEventPreviousAttributesInput.md#giftcardnotificationdeliveryeventpreviousattributesinput) or null | Recent delivery events for the notification. `events`: [declared alternatives](../models/GiftCardNotificationDeliveryPreviousAttributesInput.md#giftcardnotificationdeliverypreviousattributesinputevents). |
| `has_more_attempts` | Optional | boolean or null | Whether the notification has more attempts than `attempts` lists. `has_more_attempts`: [declared alternatives](../models/GiftCardNotificationDeliveryPreviousAttributesInput.md#giftcardnotificationdeliverypreviousattributesinputhas_more_attempts). |
| `has_more_events` | Optional | boolean or null | Whether the notification has more events than `events` lists. `has_more_events`: [declared alternatives](../models/GiftCardNotificationDeliveryPreviousAttributesInput.md#giftcardnotificationdeliverypreviousattributesinputhas_more_events). |

### GiftCardNotificationDeliveryPreviousAttributesInput.attempts

### GiftCardNotificationDeliveryPreviousAttributesInput.attempts variant 1

anyOf variant 1: Recent delivery attempts for the notification..

- Value shape: Array of [GiftCardNotificationDeliveryAttemptPreviousAttributesInput](../models/GiftCardNotificationDeliveryAttemptPreviousAttributesInput.md#giftcardnotificationdeliveryattemptpreviousattributesinput). Recent delivery attempts for the notification. Recent delivery attempts for the notification. maxItems: `20`. 

### GiftCardNotificationDeliveryPreviousAttributesInput.attempts variant 2

anyOf variant 2.

- Value shape: null. Recent delivery attempts for the notification. 

### GiftCardNotificationDeliveryPreviousAttributesInput.events

### GiftCardNotificationDeliveryPreviousAttributesInput.events variant 1

anyOf variant 1: Recent delivery events for the notification..

- Value shape: Array of [GiftCardNotificationDeliveryEventPreviousAttributesInput](../models/GiftCardNotificationDeliveryEventPreviousAttributesInput.md#giftcardnotificationdeliveryeventpreviousattributesinput). Recent delivery events for the notification. Recent delivery events for the notification. maxItems: `50`. 

### GiftCardNotificationDeliveryPreviousAttributesInput.events variant 2

anyOf variant 2.

- Value shape: null. Recent delivery events for the notification. 

### GiftCardNotificationDeliveryPreviousAttributesInput.has_more_attempts

### GiftCardNotificationDeliveryPreviousAttributesInput.has_more_attempts variant 1

anyOf variant 1: Whether the notification has more attempts than `attempts` lists..

- Value shape: boolean. Whether the notification has more attempts than `attempts` lists. 

### GiftCardNotificationDeliveryPreviousAttributesInput.has_more_attempts variant 2

anyOf variant 2.

- Value shape: null. Whether the notification has more attempts than `attempts` lists. 

### GiftCardNotificationDeliveryPreviousAttributesInput.has_more_events

### GiftCardNotificationDeliveryPreviousAttributesInput.has_more_events variant 1

anyOf variant 1: Whether the notification has more events than `events` lists..

- Value shape: boolean. Whether the notification has more events than `events` lists. 

### GiftCardNotificationDeliveryPreviousAttributesInput.has_more_events variant 2

anyOf variant 2.

- Value shape: null. Whether the notification has more events than `events` lists. 

