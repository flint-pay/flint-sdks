[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationDeliveryEventPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_attempt_id` | Optional | string or null | ID of the delivery attempt the event belongs to. `delivery_attempt_id`: [declared alternatives](../models/GiftCardNotificationDeliveryEventPreviousAttributes.md#giftcardnotificationdeliveryeventpreviousattributesdelivery_attempt_id). |
| `occurred_at` | Optional | string or null | RFC3339 timestamp. `occurred_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `received_at` | Optional | string or null | RFC3339 timestamp. `received_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `type` | Optional | string or null | accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent. Values: `"accepted"`, `"delivered"`, `"bounced"`, `"dropped"`. `type`: [declared alternatives](../models/GiftCardNotificationDeliveryEventPreviousAttributes.md#giftcardnotificationdeliveryeventpreviousattributestype). |

### GiftCardNotificationDeliveryEventPreviousAttributes.delivery_attempt_id

### GiftCardNotificationDeliveryEventPreviousAttributes.delivery_attempt_id variant 1

anyOf variant 1: ID of the delivery attempt the event belongs to..

- Value shape: string. ID of the delivery attempt the event belongs to. 

### GiftCardNotificationDeliveryEventPreviousAttributes.delivery_attempt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery attempt the event belongs to. 

### GiftCardNotificationDeliveryEventPreviousAttributes.occurred_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardNotificationDeliveryEventPreviousAttributes.received_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardNotificationDeliveryEventPreviousAttributes.type

### GiftCardNotificationDeliveryEventPreviousAttributes.type variant 1

anyOf variant 1: accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent..

- Value shape: string. accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent. Values: `"accepted"`, `"delivered"`, `"bounced"`, `"dropped"`.

### GiftCardNotificationDeliveryEventPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent. 

