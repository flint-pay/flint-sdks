[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `delivery` | Optional | Alternative shapes (see declared variants) | Included on notification retrieval. Contains the most recent sending attempts and delivery events, newest first. A failed attempt describes the send call; use notification.status to determine whether acceptance remains unconfirmed. `delivery`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesdelivery). |
| `gift_card_id` | Optional | string or null | ID of the gift card the notification is about. `gift_card_id`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesgift_card_id). |
| `gift_card_notification_id` | Optional | string or null | Unique identifier for this gift card notification, prefixed `gcn_`. `gift_card_notification_id`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesgift_card_notification_id). |
| `recipient` | Optional | Alternative shapes (see declared variants) | Who the notification is sent to. `recipient`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesrecipient). |
| `resend_of_notification_id` | Optional | string or null | ID of the earlier notification this one sends again. `resend_of_notification_id`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesresend_of_notification_id). |
| `sent_at` | Optional | string or null | RFC3339 timestamp. `sent_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `status` | Optional | string or null | Where sending the notification stands. Read `delivery` for the attempts and email events behind it. Values: `"scheduled"`, `"pending"`, `"sent"`, `"failed"`, `"unconfirmed"`, `"canceled"`. `status`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesstatus). |
| `status_reason` | Optional | string or null or null | Why the notification has its current status. credential_rotated means code rotation canceled an unsent notification for the previous code. Null when no reason applies. Values: `"credential_rotated"`, `null`. `status_reason`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesstatus_reason). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions accepted for this notification's stored state, independent of the caller's credentials. Empty when none are available. Items values: `"cancel"`. `supported_actions`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion). |

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery

Included on notification retrieval. Contains the most recent sending attempts and delivery events, newest first. A failed attempt describes the send call; use notification.status to determine whether acceptance remains unconfirmed.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attempts` | Conditional | Array of object or null | Recent delivery attempts for the notification. `attempts`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesdelivery-variant-1attempts). |
| `events` | Conditional | Array of object or null | Recent delivery events for the notification. `events`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesdelivery-variant-1events). |
| `has_more_attempts` | Conditional | boolean or null | Whether the notification has more attempts than `attempts` lists. `has_more_attempts`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesdelivery-variant-1has_more_attempts). |
| `has_more_events` | Conditional | boolean or null | Whether the notification has more events than `events` lists. `has_more_events`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesdelivery-variant-1has_more_events). |

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1

anyOf GiftCardNotificationDeliveryPreviousAttributes.

- Optional: `attempts`, `events`, `has_more_attempts`, `has_more_events`.

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 2

anyOf variant 2.

- Undeclared: `attempts`, `events`, `has_more_attempts`, `has_more_events`.
- Value shape: null. Included on notification retrieval. Contains the most recent sending attempts and delivery events, newest first. A failed attempt describes the send call; use notification.status to determine whether acceptance remains unconfirmed. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.attempts

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.attempts variant 1

anyOf variant 1: Recent delivery attempts for the notification..

- Value shape: Array of object. Recent delivery attempts for the notification. Recent delivery attempts for the notification. maxItems: `20`. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.attempts variant 2

anyOf variant 2.

- Value shape: null. Recent delivery attempts for the notification. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.attempts variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attempt_number` | Optional | integer or null | Which attempt this is for the notification, starting at 1. `attempt_number`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesdelivery-variant-1attempts-variant-1-fields-1attempt_number). |
| `completed_at` | Optional | string or null | RFC3339 timestamp. `completed_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `delivery_attempt_id` | Optional | string or null | ID of this delivery attempt. `delivery_attempt_id`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesdelivery-variant-1attempts-variant-1-fields-1delivery_attempt_id). |
| `started_at` | Optional | string or null | RFC3339 timestamp. `started_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `status` | Optional | string or null | Where this delivery attempt stands. Values: `"pending"`, `"sent"`, `"failed"`, `"unconfirmed"`. `status`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesdelivery-variant-1attempts-variant-1-fields-1status). |

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.attempts variant 1.[] fields 1.attempt_number

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.attempts variant 1.[] fields 1.attempt_number variant 1

anyOf variant 1: Which attempt this is for the notification, starting at 1..

- Value shape: integer. Which attempt this is for the notification, starting at 1. Which attempt this is for the notification, starting at 1. Format: `int64`. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.attempts variant 1.[] fields 1.attempt_number variant 2

anyOf variant 2.

- Value shape: null. Which attempt this is for the notification, starting at 1. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.attempts variant 1.[] fields 1.completed_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.attempts variant 1.[] fields 1.delivery_attempt_id

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.attempts variant 1.[] fields 1.delivery_attempt_id variant 1

anyOf variant 1: ID of this delivery attempt..

- Value shape: string. ID of this delivery attempt. ID of this delivery attempt. Example: `"edat_01KEZF7C00AX45366QP3FMY6VH"`. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.attempts variant 1.[] fields 1.delivery_attempt_id variant 2

anyOf variant 2.

- Value shape: null. ID of this delivery attempt. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.attempts variant 1.[] fields 1.started_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.attempts variant 1.[] fields 1.status

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.attempts variant 1.[] fields 1.status variant 1

anyOf variant 1: Where this delivery attempt stands..

- Value shape: string. Where this delivery attempt stands. Values: `"pending"`, `"sent"`, `"failed"`, `"unconfirmed"`.

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.attempts variant 1.[] fields 1.status variant 2

anyOf variant 2.

- Value shape: null. Where this delivery attempt stands. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.events

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.events variant 1

anyOf variant 1: Recent delivery events for the notification..

- Value shape: Array of object. Recent delivery events for the notification. Recent delivery events for the notification. maxItems: `50`. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.events variant 2

anyOf variant 2.

- Value shape: null. Recent delivery events for the notification. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.events variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_attempt_id` | Optional | string or null | ID of the delivery attempt the event belongs to. `delivery_attempt_id`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesdelivery-variant-1events-variant-1-fields-1delivery_attempt_id). |
| `occurred_at` | Optional | string or null | RFC3339 timestamp. `occurred_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `received_at` | Optional | string or null | RFC3339 timestamp. `received_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `type` | Optional | string or null | accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent. Values: `"accepted"`, `"delivered"`, `"bounced"`, `"dropped"`. `type`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesdelivery-variant-1events-variant-1-fields-1type). |

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.events variant 1.[] fields 1.delivery_attempt_id

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.events variant 1.[] fields 1.delivery_attempt_id variant 1

anyOf variant 1: ID of the delivery attempt the event belongs to..

- Value shape: string. ID of the delivery attempt the event belongs to. ID of the delivery attempt the event belongs to. Example: `"edat_01KEZF7C00AX45366QP3FMY6VH"`. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.events variant 1.[] fields 1.delivery_attempt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery attempt the event belongs to. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.events variant 1.[] fields 1.occurred_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.events variant 1.[] fields 1.received_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.events variant 1.[] fields 1.type

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.events variant 1.[] fields 1.type variant 1

anyOf variant 1: accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent..

- Value shape: string. accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent. Values: `"accepted"`, `"delivered"`, `"bounced"`, `"dropped"`.

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.events variant 1.[] fields 1.type variant 2

anyOf variant 2.

- Value shape: null. accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.has_more_attempts

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.has_more_attempts variant 1

anyOf variant 1: Whether the notification has more attempts than `attempts` lists..

- Value shape: boolean. Whether the notification has more attempts than `attempts` lists. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.has_more_attempts variant 2

anyOf variant 2.

- Value shape: null. Whether the notification has more attempts than `attempts` lists. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.has_more_events

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.has_more_events variant 1

anyOf variant 1: Whether the notification has more events than `events` lists..

- Value shape: boolean. Whether the notification has more events than `events` lists. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.delivery variant 1.has_more_events variant 2

anyOf variant 2.

- Value shape: null. Whether the notification has more events than `events` lists. 

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
| `email` | Conditional | string or null | Email address the notification is sent to. `email`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesrecipient-variant-1email). |
| `message` | Conditional | string or null | Message included in the notification. `message`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesrecipient-variant-1message). |
| `name` | Conditional | string or null | Name of the person the notification is addressed to. `name`: [declared alternatives](../models/GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.md#giftcardnotificationupdatedmerchanteventdatapreviousattributesrecipient-variant-1name). |
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

anyOf variant 1: Email address the notification is sent to..

- Value shape: string. Email address the notification is sent to. Email address the notification is sent to. Format: `email`. minLength: `1`. maxLength: `254`. Example: `"buyer@example.com"`. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.recipient variant 1.email variant 2

anyOf variant 2.

- Value shape: null. Email address the notification is sent to. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.recipient variant 1.message

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.recipient variant 1.message variant 1

anyOf variant 1: Message included in the notification..

- Value shape: string. Message included in the notification. Message included in the notification. minLength: `1`. maxLength: `200`. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.recipient variant 1.message variant 2

anyOf variant 2.

- Value shape: null. Message included in the notification. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.recipient variant 1.name

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.recipient variant 1.name variant 1

anyOf variant 1: Name of the person the notification is addressed to..

- Value shape: string. Name of the person the notification is addressed to. Name of the person the notification is addressed to. minLength: `1`. maxLength: `255`. 

### GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes.recipient variant 1.name variant 2

anyOf variant 2.

- Value shape: null. Name of the person the notification is addressed to. 

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

