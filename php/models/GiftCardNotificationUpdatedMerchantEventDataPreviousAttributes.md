[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `delivery` | Optional | [GiftCardNotificationDeliveryPreviousAttributes](../models/GiftCardNotificationDeliveryPreviousAttributes.md#giftcardnotificationdeliverypreviousattributes) or null | Included on notification retrieval. Contains the most recent sending attempts and delivery events, newest first. A failed attempt describes the send call; use notification.status to determine whether acceptance remains unconfirmed. |
| `gift_card_id` | Optional | string or null | ID of the gift card the notification is about. `gift_card_id`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesgift_card_id). |
| `gift_card_notification_id` | Optional | string or null | Unique identifier for this gift card notification, prefixed `gcn_`. `gift_card_notification_id`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesgift_card_notification_id). |
| `recipient` | Optional | [GiftCardNotificationRecipientPreviousAttributes](../models/GiftCardNotificationRecipientPreviousAttributes.md#giftcardnotificationrecipientpreviousattributes) or null | Who the notification is sent to. `recipient`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesrecipient). |
| `resend_of_notification_id` | Optional | string or null | ID of the earlier notification this one sends again. `resend_of_notification_id`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesresend_of_notification_id). |
| `sent_at` | Optional | string or null | RFC3339 timestamp. `sent_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `status` | Optional | string or null | Where sending the notification stands. Read `delivery` for the attempts and email events behind it. Values: `"scheduled"`, `"pending"`, `"sent"`, `"failed"`, `"unconfirmed"`, `"canceled"`. `status`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesstatus). |
| `status_reason` | Optional | string or null | Why the notification has its current status. credential_rotated means code rotation canceled an unsent notification for the previous code. Null when no reason applies. Values: `"credential_rotated"`, `null`. `status_reason`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesstatus_reason). |
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

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.recipient

Who the notification is sent to.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Conditional | string or null | Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes). `email`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesrecipient-variant-1email). |
| `message` | Conditional | string or null | Message included in the notification. `message`: [declared alternatives](../models/GiftCardNotificationRecipientPreviousAttributes.md#giftcardnotificationrecipientpreviousattributesmessage). |
| `name` | Conditional | string or null | Name of the person the notification is addressed to. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. `name`: [declared alternatives](../models/GiftCardNotificationRecipientPreviousAttributes.md#giftcardnotificationrecipientpreviousattributesname). |
| `send_at` | Conditional | string or null | Optional whole-second send time between now and 90 days from now. `send_at`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesrecipient-variant-1send_at). |

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.recipient variant 1

anyOf GiftCardNotificationRecipientPreviousAttributes.

- Optional: `email`, `message`, `name`, `send_at`.

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.recipient variant 2

anyOf variant 2.

- Undeclared: `email`, `message`, `name`, `send_at`.
- Value shape: null. Who the notification is sent to. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.recipient variant 1.email

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.recipient variant 1.email variant 1

anyOf variant 1: Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes)..

- Value shape: string. Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes). Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes). Format: `email`. minLength: `1`. maxLength: `254`. Example: `"buyer@example.com"`. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.recipient variant 1.email variant 2

anyOf variant 2.

- Value shape: null. Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes). 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.recipient variant 1.message

Declared alternatives: [GiftCardNotificationRecipientPreviousAttributes.message](../models/GiftCardNotificationRecipientPreviousAttributes.md#giftcardnotificationrecipientpreviousattributesmessage).

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.recipient variant 1.name

Declared alternatives: [GiftCardNotificationRecipientPreviousAttributes.name](../models/GiftCardNotificationRecipientPreviousAttributes.md#giftcardnotificationrecipientpreviousattributesname).

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.recipient variant 1.send_at

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.recipient variant 1.send_at variant 1

anyOf variant 1: Optional whole-second send time between now and 90 days from now..

- Value shape: string. Optional whole-second send time between now and 90 days from now. Optional whole-second send time between now and 90 days from now. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.recipient variant 1.send_at variant 2

anyOf variant 2.

- Value shape: null. Optional whole-second send time between now and 90 days from now. 

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

- Value shape: string. Why the notification has its current status. credential_rotated means code rotation canceled an unsent notification for the previous code. Null when no reason applies. Values: `"credential_rotated"`, `null`.

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

