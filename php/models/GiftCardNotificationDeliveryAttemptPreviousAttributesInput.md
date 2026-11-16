[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationDeliveryAttemptPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attempt_number` | Optional | integer or null | Which attempt this is for the notification, starting at 1. `attempt_number`: [declared alternatives](../models/GiftCardNotificationDeliveryAttemptPreviousAttributesInput.md#giftcardnotificationdeliveryattemptpreviousattributesinputattempt_number). |
| `completed_at` | Optional | string or null | RFC3339 timestamp. `completed_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `delivery_attempt_id` | Optional | string or null | ID of this delivery attempt. `delivery_attempt_id`: [declared alternatives](../models/GiftCardNotificationDeliveryAttemptPreviousAttributesInput.md#giftcardnotificationdeliveryattemptpreviousattributesinputdelivery_attempt_id). |
| `started_at` | Optional | string or null | RFC3339 timestamp. `started_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `status` | Optional | string or null | Where this delivery attempt stands. Values: `"pending"`, `"sent"`, `"failed"`, `"unconfirmed"`. `status`: [declared alternatives](../models/GiftCardNotificationDeliveryAttemptPreviousAttributesInput.md#giftcardnotificationdeliveryattemptpreviousattributesinputstatus). |

### GiftCardNotificationDeliveryAttemptPreviousAttributesInput.attempt_number

### GiftCardNotificationDeliveryAttemptPreviousAttributesInput.attempt_number variant 1

anyOf variant 1: Which attempt this is for the notification, starting at 1..

- Value shape: integer. Which attempt this is for the notification, starting at 1. Which attempt this is for the notification, starting at 1. Format: `int64`. 

### GiftCardNotificationDeliveryAttemptPreviousAttributesInput.attempt_number variant 2

anyOf variant 2.

- Value shape: null. Which attempt this is for the notification, starting at 1. 

### GiftCardNotificationDeliveryAttemptPreviousAttributesInput.completed_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### GiftCardNotificationDeliveryAttemptPreviousAttributesInput.delivery_attempt_id

### GiftCardNotificationDeliveryAttemptPreviousAttributesInput.delivery_attempt_id variant 1

anyOf variant 1: ID of this delivery attempt..

- Value shape: string. ID of this delivery attempt. ID of this delivery attempt. Example: `"edat_01KEZF7C00AX45366QP3FMY6VH"`. 

### GiftCardNotificationDeliveryAttemptPreviousAttributesInput.delivery_attempt_id variant 2

anyOf variant 2.

- Value shape: null. ID of this delivery attempt. 

### GiftCardNotificationDeliveryAttemptPreviousAttributesInput.started_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### GiftCardNotificationDeliveryAttemptPreviousAttributesInput.status

### GiftCardNotificationDeliveryAttemptPreviousAttributesInput.status variant 1

anyOf variant 1: Where this delivery attempt stands..

- Value shape: string. Where this delivery attempt stands. Values: `"pending"`, `"sent"`, `"failed"`, `"unconfirmed"`.

### GiftCardNotificationDeliveryAttemptPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Where this delivery attempt stands. 

