[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationDeliveryPreviousAttributes



Response model.

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

### GiftCardNotificationDeliveryPreviousAttributes.attempts variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attempt_number` | Optional | integer or null | Which attempt this is for the notification, starting at 1. `attempt_number`: [declared alternatives](../models/GiftCardNotificationDeliveryAttemptPreviousAttributes.md#giftcardnotificationdeliveryattemptpreviousattributesattempt_number). |
| `completed_at` | Optional | string or null | RFC3339 timestamp. `completed_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `delivery_attempt_id` | Optional | string or null | ID of this delivery attempt. `delivery_attempt_id`: [declared alternatives](../models/GiftCardNotificationDeliveryPreviousAttributes.md#giftcardnotificationdeliverypreviousattributesattempts-variant-1-fields-1delivery_attempt_id). |
| `started_at` | Optional | string or null | RFC3339 timestamp. `started_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `status` | Optional | string or null | Where this delivery attempt stands. Values: `"pending"`, `"sent"`, `"failed"`, `"unconfirmed"`. `status`: [declared alternatives](../models/GiftCardNotificationDeliveryAttemptPreviousAttributes.md#giftcardnotificationdeliveryattemptpreviousattributesstatus). |

### GiftCardNotificationDeliveryPreviousAttributes.attempts variant 1.[] fields 1.attempt_number

Declared alternatives: [GiftCardNotificationDeliveryAttemptPreviousAttributes.attempt_number](../models/GiftCardNotificationDeliveryAttemptPreviousAttributes.md#giftcardnotificationdeliveryattemptpreviousattributesattempt_number).

### GiftCardNotificationDeliveryPreviousAttributes.attempts variant 1.[] fields 1.completed_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### GiftCardNotificationDeliveryPreviousAttributes.attempts variant 1.[] fields 1.delivery_attempt_id

### GiftCardNotificationDeliveryPreviousAttributes.attempts variant 1.[] fields 1.delivery_attempt_id variant 1

anyOf variant 1: ID of this delivery attempt..

- Value shape: string. ID of this delivery attempt. ID of this delivery attempt. Example: `"edat_01KEZF7C00AX45366QP3FMY6VH"`. 

### GiftCardNotificationDeliveryPreviousAttributes.attempts variant 1.[] fields 1.delivery_attempt_id variant 2

anyOf variant 2.

- Value shape: null. ID of this delivery attempt. 

### GiftCardNotificationDeliveryPreviousAttributes.attempts variant 1.[] fields 1.started_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### GiftCardNotificationDeliveryPreviousAttributes.attempts variant 1.[] fields 1.status

Declared alternatives: [GiftCardNotificationDeliveryAttemptPreviousAttributes.status](../models/GiftCardNotificationDeliveryAttemptPreviousAttributes.md#giftcardnotificationdeliveryattemptpreviousattributesstatus).

### GiftCardNotificationDeliveryPreviousAttributes.events

### GiftCardNotificationDeliveryPreviousAttributes.events variant 1

anyOf variant 1: Recent delivery events for the notification..

- Value shape: Array of [GiftCardNotificationDeliveryEventPreviousAttributes](../models/GiftCardNotificationDeliveryEventPreviousAttributes.md#giftcardnotificationdeliveryeventpreviousattributes). Recent delivery events for the notification. Recent delivery events for the notification. maxItems: `50`. 

### GiftCardNotificationDeliveryPreviousAttributes.events variant 2

anyOf variant 2.

- Value shape: null. Recent delivery events for the notification. 

### GiftCardNotificationDeliveryPreviousAttributes.events variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_attempt_id` | Optional | string or null | ID of the delivery attempt the event belongs to. `delivery_attempt_id`: [declared alternatives](../models/GiftCardNotificationDeliveryPreviousAttributes.md#giftcardnotificationdeliverypreviousattributesevents-variant-1-fields-1delivery_attempt_id). |
| `occurred_at` | Optional | string or null | RFC3339 timestamp. `occurred_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `received_at` | Optional | string or null | RFC3339 timestamp. `received_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `type` | Optional | string or null | accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent. Values: `"accepted"`, `"delivered"`, `"bounced"`, `"dropped"`. `type`: [declared alternatives](../models/GiftCardNotificationDeliveryEventPreviousAttributes.md#giftcardnotificationdeliveryeventpreviousattributestype). |

### GiftCardNotificationDeliveryPreviousAttributes.events variant 1.[] fields 1.delivery_attempt_id

### GiftCardNotificationDeliveryPreviousAttributes.events variant 1.[] fields 1.delivery_attempt_id variant 1

anyOf variant 1: ID of the delivery attempt the event belongs to..

- Value shape: string. ID of the delivery attempt the event belongs to. ID of the delivery attempt the event belongs to. Example: `"edat_01KEZF7C00AX45366QP3FMY6VH"`. 

### GiftCardNotificationDeliveryPreviousAttributes.events variant 1.[] fields 1.delivery_attempt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery attempt the event belongs to. 

### GiftCardNotificationDeliveryPreviousAttributes.events variant 1.[] fields 1.occurred_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### GiftCardNotificationDeliveryPreviousAttributes.events variant 1.[] fields 1.received_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### GiftCardNotificationDeliveryPreviousAttributes.events variant 1.[] fields 1.type

Declared alternatives: [GiftCardNotificationDeliveryEventPreviousAttributes.type](../models/GiftCardNotificationDeliveryEventPreviousAttributes.md#giftcardnotificationdeliveryeventpreviousattributestype).

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

