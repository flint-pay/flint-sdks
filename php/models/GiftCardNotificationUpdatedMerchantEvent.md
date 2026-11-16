[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationUpdatedMerchantEvent

The `gift_card_notification.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [GiftCardNotificationUpdatedMerchantEventData](../models/GiftCardNotificationUpdatedMerchantEventData.md#giftcardnotificationupdatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/GiftCardNotificationUpdatedMerchantEvent.md#giftcardnotificationupdatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"gift_card_notification.updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [GiftCardNotificationUpdatedMerchantEventRequest](../models/GiftCardNotificationUpdatedMerchantEventRequest.md#giftcardnotificationupdatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### GiftCardNotificationUpdatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/GiftCardNotificationCreatedMerchantEvent.md#giftcardnotificationcreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/GiftCardNotificationUpdatedMerchantEvent.md#giftcardnotificationupdatedmerchanteventdata-fields-1previous_attributes). |

### GiftCardNotificationUpdatedMerchantEvent.data fields 1.object

Field definitions: [GiftCardNotificationCreatedMerchantEvent.data fields 1.object](../models/GiftCardNotificationCreatedMerchantEvent.md#giftcardnotificationcreatedmerchanteventdata-fields-1object).

### GiftCardNotificationUpdatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributes).

### GiftCardNotificationUpdatedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardNotificationUpdatedMerchantEvent.data fields 1.previous_attributes.gift_card_id

Declared alternatives: [GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.gift_card_id](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesgift_card_id).

### GiftCardNotificationUpdatedMerchantEvent.data fields 1.previous_attributes.gift_card_notification_id

Declared alternatives: [GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.gift_card_notification_id](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesgift_card_notification_id).

### GiftCardNotificationUpdatedMerchantEvent.data fields 1.previous_attributes.recipient

Declared alternatives: [GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.recipient](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesrecipient).

### GiftCardNotificationUpdatedMerchantEvent.data fields 1.previous_attributes.resend_of_notification_id

Declared alternatives: [GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.resend_of_notification_id](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesresend_of_notification_id).

### GiftCardNotificationUpdatedMerchantEvent.data fields 1.previous_attributes.sent_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardNotificationUpdatedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.status](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesstatus).

### GiftCardNotificationUpdatedMerchantEvent.data fields 1.previous_attributes.status_reason

Declared alternatives: [GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.status_reason](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesstatus_reason).

### GiftCardNotificationUpdatedMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.supported_actions](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributessupported_actions).

### GiftCardNotificationUpdatedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardNotificationUpdatedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.version](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion).

