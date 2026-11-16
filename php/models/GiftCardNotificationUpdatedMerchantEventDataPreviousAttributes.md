[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `delivery` | Optional | [GiftCardNotificationDelivery](../models/GiftCardNotificationDelivery.md#giftcardnotificationdelivery) or null | Included on notification retrieval. Contains the most recent sending attempts and delivery events, newest first. A failed attempt describes the send call; use notification.status to determine whether acceptance remains unconfirmed. |
| `gift_card_id` | Optional | string or null | ID of the gift card the notification is about. `gift_card_id`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesgift_card_id). |
| `gift_card_notification_id` | Optional | string or null | Unique identifier for this gift card notification, prefixed `gcn_`. `gift_card_notification_id`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesgift_card_notification_id). |
| `recipient` | Optional | [GiftCardNotificationRecipient](../models/GiftCardNotificationRecipient.md#giftcardnotificationrecipient) or null | Who the notification is sent to. |
| `resend_of_notification_id` | Optional | string or null | ID of the earlier notification this one sends again. `resend_of_notification_id`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesresend_of_notification_id). |
| `sent_at` | Optional | string or null | RFC3339 timestamp. `sent_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `status` | Optional | string or null | Where sending the notification stands. Read `delivery` for the attempts and email events behind it. Values: `"scheduled"`, `"pending"`, `"sent"`, `"failed"`, `"unconfirmed"`, `"canceled"`. `status`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesstatus). |
| `status_reason` | Optional | string or null or null | Why the notification has its current status. credential_rotated means code rotation canceled an unsent notification for the previous code. Null when no reason applies. Values: `"credential_rotated"`, `null`. `status_reason`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesstatus_reason). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions accepted for this notification's stored state, independent of the caller's credentials. Empty when none are available. Items values: `"cancel"`. `supported_actions`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion). |

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.gift_card_id

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.gift_card_id variant 1

anyOf variant 1: ID of the gift card the notification is about..

- Value shape: string. ID of the gift card the notification is about. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the notification is about. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.gift_card_notification_id

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.gift_card_notification_id variant 1

anyOf variant 1: Unique identifier for this gift card notification, prefixed `gcn_`..

- Value shape: string. Unique identifier for this gift card notification, prefixed `gcn_`. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.gift_card_notification_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this gift card notification, prefixed `gcn_`. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.resend_of_notification_id

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.resend_of_notification_id variant 1

anyOf variant 1: ID of the earlier notification this one sends again..

- Value shape: string. ID of the earlier notification this one sends again. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.resend_of_notification_id variant 2

anyOf variant 2.

- Value shape: null. ID of the earlier notification this one sends again. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.sent_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.status

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Where sending the notification stands. Read `delivery` for the attempts and email events behind it..

- Value shape: string. Where sending the notification stands. Read `delivery` for the attempts and email events behind it. Values: `"scheduled"`, `"pending"`, `"sent"`, `"failed"`, `"unconfirmed"`, `"canceled"`.

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where sending the notification stands. Read `delivery` for the attempts and email events behind it. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.status_reason

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.status_reason variant 1

anyOf variant 1: Why the notification has its current status. credential_rotated means code rotation canceled an unsent notification for the previous code. Null when no reason applies..

- Value shape: (string or null). Why the notification has its current status. credential_rotated means code rotation canceled an unsent notification for the previous code. Null when no reason applies. Values: `"credential_rotated"`, `null`.

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.status_reason variant 2

anyOf variant 2.

- Value shape: null. Why the notification has its current status. credential_rotated means code rotation canceled an unsent notification for the previous code. Null when no reason applies. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.supported_actions

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions accepted for this notification's stored state, independent of the caller's credentials. Empty when none are available..

- Value shape: Array of string. Lifecycle actions accepted for this notification's stored state, independent of the caller's credentials. Empty when none are available. Items values: `"cancel"`.

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions accepted for this notification's stored state, independent of the caller's credentials. Empty when none are available. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.version

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.version](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion).

