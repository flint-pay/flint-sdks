[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationDeliveryEventPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_attempt_id` | Optional | string or null | ID of the delivery attempt the event belongs to. `delivery_attempt_id`: [declared alternatives](../models/GiftCardNotificationDeliveryEventPreviousAttributesInput.md#giftcardnotificationdeliveryeventpreviousattributesinputdelivery_attempt_id). |
| `occurred_at` | Optional | string or null | RFC3339 timestamp. `occurred_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `received_at` | Optional | string or null | RFC3339 timestamp. `received_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `type` | Optional | string or null | accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent. Values: `"accepted"`, `"delivered"`, `"bounced"`, `"dropped"`. `type`: [declared alternatives](../models/GiftCardNotificationDeliveryEventPreviousAttributesInput.md#giftcardnotificationdeliveryeventpreviousattributesinputtype). |

### GiftCardNotificationDeliveryEventPreviousAttributesInput.delivery_attempt_id

### GiftCardNotificationDeliveryEventPreviousAttributesInput.delivery_attempt_id variant 1

anyOf variant 1: ID of the delivery attempt the event belongs to..

- Value shape: string. ID of the delivery attempt the event belongs to. ID of the delivery attempt the event belongs to. Example: `"edat_01KEZF7C00AX45366QP3FMY6VH"`. 

### GiftCardNotificationDeliveryEventPreviousAttributesInput.delivery_attempt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery attempt the event belongs to. 

### GiftCardNotificationDeliveryEventPreviousAttributesInput.occurred_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### GiftCardNotificationDeliveryEventPreviousAttributesInput.received_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### GiftCardNotificationDeliveryEventPreviousAttributesInput.type

### GiftCardNotificationDeliveryEventPreviousAttributesInput.type variant 1

anyOf variant 1: accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent..

- Value shape: string. accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent. Values: `"accepted"`, `"delivered"`, `"bounced"`, `"dropped"`.

### GiftCardNotificationDeliveryEventPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent. 

