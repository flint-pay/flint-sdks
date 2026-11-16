[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationDeliveryAttemptPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attempt_number` | Optional | integer or null | Which attempt this is for the notification, starting at 1. `attempt_number`: [declared alternatives](../models/GiftCardNotificationDeliveryAttemptPreviousAttributes.md#giftcardnotificationdeliveryattemptpreviousattributesattempt_number). |
| `completed_at` | Optional | string or null | RFC3339 timestamp. `completed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `delivery_attempt_id` | Optional | string or null | ID of this delivery attempt. `delivery_attempt_id`: [declared alternatives](../models/GiftCardNotificationDeliveryAttemptPreviousAttributes.md#giftcardnotificationdeliveryattemptpreviousattributesdelivery_attempt_id). |
| `started_at` | Optional | string or null | RFC3339 timestamp. `started_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `status` | Optional | string or null | Where this delivery attempt stands. Values: `"pending"`, `"sent"`, `"failed"`, `"unconfirmed"`. `status`: [declared alternatives](../models/GiftCardNotificationDeliveryAttemptPreviousAttributes.md#giftcardnotificationdeliveryattemptpreviousattributesstatus). |

### GiftCardNotificationDeliveryAttemptPreviousAttributes.attempt_number

### GiftCardNotificationDeliveryAttemptPreviousAttributes.attempt_number variant 1

anyOf variant 1: Which attempt this is for the notification, starting at 1..

- Value shape: integer. Which attempt this is for the notification, starting at 1. Which attempt this is for the notification, starting at 1. Format: `int64`. 

### GiftCardNotificationDeliveryAttemptPreviousAttributes.attempt_number variant 2

anyOf variant 2.

- Value shape: null. Which attempt this is for the notification, starting at 1. 

### GiftCardNotificationDeliveryAttemptPreviousAttributes.completed_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### GiftCardNotificationDeliveryAttemptPreviousAttributes.delivery_attempt_id

### GiftCardNotificationDeliveryAttemptPreviousAttributes.delivery_attempt_id variant 1

anyOf variant 1: ID of this delivery attempt..

- Value shape: string. ID of this delivery attempt. ID of this delivery attempt. Example: `"edat_01KEZF7C00AX45366QP3FMY6VH"`. 

### GiftCardNotificationDeliveryAttemptPreviousAttributes.delivery_attempt_id variant 2

anyOf variant 2.

- Value shape: null. ID of this delivery attempt. 

### GiftCardNotificationDeliveryAttemptPreviousAttributes.started_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### GiftCardNotificationDeliveryAttemptPreviousAttributes.status

### GiftCardNotificationDeliveryAttemptPreviousAttributes.status variant 1

anyOf variant 1: Where this delivery attempt stands..

- Value shape: string. Where this delivery attempt stands. Values: `"pending"`, `"sent"`, `"failed"`, `"unconfirmed"`.

### GiftCardNotificationDeliveryAttemptPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where this delivery attempt stands. 

