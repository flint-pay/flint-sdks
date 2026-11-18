[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationUpdatedInstalledMerchantsEvent

The `gift_card_notification.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"gift_card_notification.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/GiftCardNotificationCreatedInstalledMerchantsEvent.md#giftcardnotificationcreatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdataprevious_attributes). |

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.object

Field definitions: [GiftCardNotificationCreatedInstalledMerchantsEvent.data.object](../models/GiftCardNotificationCreatedInstalledMerchantsEvent.md#giftcardnotificationcreatedinstalledmerchantseventdataobject).

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `delivery` | Optional | [GiftCardNotificationDeliveryPreviousAttributes](../models/GiftCardNotificationDeliveryPreviousAttributes.md#giftcardnotificationdeliverypreviousattributes) or null | Included on notification retrieval. Contains the most recent sending attempts and delivery events, newest first. A failed attempt describes the send call; use notification.status to determine whether acceptance remains unconfirmed. |
| `gift_card_id` | Optional | string or null | ID of the gift card the notification is about. `gift_card_id`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdataprevious_attributesgift_card_id). |
| `gift_card_notification_id` | Optional | string or null | Unique identifier for this gift card notification, prefixed `gcn_`. `gift_card_notification_id`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdataprevious_attributesgift_card_notification_id). |
| `recipient` | Optional | [GiftCardPurchaseRecipientPreviousAttributes](../models/GiftCardPurchaseRecipientPreviousAttributes.md#giftcardpurchaserecipientpreviousattributes) or null | Who the notification is sent to. `recipient`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdataprevious_attributesrecipient). |
| `resend_of_notification_id` | Optional | string or null | ID of the earlier notification this one sends again. `resend_of_notification_id`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdataprevious_attributesresend_of_notification_id). |
| `sent_at` | Optional | string or null | RFC3339 timestamp. `sent_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `status` | Optional | string or null | Where sending the notification stands. Read `delivery` for the attempts and email events behind it. Values: `"scheduled"`, `"pending"`, `"sent"`, `"failed"`, `"unconfirmed"`, `"canceled"`. `status`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdataprevious_attributesstatus). |
| `status_reason` | Optional | string or null | Why the notification has its current status. credential_rotated means code rotation canceled an unsent notification for the previous code. Null when no reason applies. Values: `"credential_rotated"`, `null`. `status_reason`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdataprevious_attributesstatus_reason). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions accepted for this notification's stored state, independent of the caller's credentials. Empty when none are available. Items values: `"cancel"`. `supported_actions`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesversion). |

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_id

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_id variant 1

anyOf variant 1: ID of the gift card the notification is about..

- Value shape: string. ID of the gift card the notification is about. ID of the gift card the notification is about. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the notification is about. 

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_notification_id

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_notification_id variant 1

anyOf variant 1: Unique identifier for this gift card notification, prefixed `gcn_`..

- Value shape: string. Unique identifier for this gift card notification, prefixed `gcn_`. Unique identifier for this gift card notification, prefixed `gcn_`. Example: `"gcn_01KEZF7C0023FN0HF9GH34RZA1"`. 

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_notification_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this gift card notification, prefixed `gcn_`. 

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.recipient

Who the notification is sent to.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Conditional | string or null | Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes). `email`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdataprevious_attributesrecipient-variant-1email). |
| `message` | Conditional | string or null | Message included in the notification. `message`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdataprevious_attributesrecipient-variant-1message). |
| `name` | Conditional | string or null | Name of the person the notification is addressed to. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. `name`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdataprevious_attributesrecipient-variant-1name). |
| `send_at` | Conditional | string or null | Optional whole-second send time between now and 90 days from now. `send_at`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEvent.md#giftcardnotificationupdatedinstalledmerchantseventdataprevious_attributesrecipient-variant-1send_at). |

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.recipient variant 1

anyOf GiftCardNotificationRecipientPreviousAttributes.

- Optional: `email`, `message`, `name`, `send_at`.

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.recipient variant 2

anyOf variant 2.

- Undeclared: `email`, `message`, `name`, `send_at`.
- Value shape: null. Who the notification is sent to. 

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.recipient variant 1.email

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.recipient variant 1.email variant 1

anyOf variant 1: Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes)..

- Value shape: string. Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes). Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes). Format: `email`. minLength: `1`. maxLength: `254`. Example: `"buyer@example.com"`. 

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.recipient variant 1.email variant 2

anyOf variant 2.

- Value shape: null. Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes). 

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.recipient variant 1.message

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.recipient variant 1.message variant 1

anyOf variant 1: Message included in the notification..

- Value shape: string. Message included in the notification. Message included in the notification. minLength: `1`. maxLength: `200`. 

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.recipient variant 1.message variant 2

anyOf variant 2.

- Value shape: null. Message included in the notification. 

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.recipient variant 1.name

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.recipient variant 1.name variant 1

anyOf variant 1: Name of the person the notification is addressed to. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported..

- Value shape: string. Name of the person the notification is addressed to. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. Name of the person the notification is addressed to. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `255`. 

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.recipient variant 1.name variant 2

anyOf variant 2.

- Value shape: null. Name of the person the notification is addressed to. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. 

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.recipient variant 1.send_at

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.recipient variant 1.send_at variant 1

anyOf variant 1: Optional whole-second send time between now and 90 days from now..

- Value shape: string. Optional whole-second send time between now and 90 days from now. Optional whole-second send time between now and 90 days from now. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. 

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.recipient variant 1.send_at variant 2

anyOf variant 2.

- Value shape: null. Optional whole-second send time between now and 90 days from now. 

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.resend_of_notification_id

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.resend_of_notification_id variant 1

anyOf variant 1: ID of the earlier notification this one sends again..

- Value shape: string. ID of the earlier notification this one sends again. ID of the earlier notification this one sends again. Example: `"ntf_01KEZF7C00X0DP9KT950FYXHQ1"`. 

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.resend_of_notification_id variant 2

anyOf variant 2.

- Value shape: null. ID of the earlier notification this one sends again. 

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.sent_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.status

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Where sending the notification stands. Read `delivery` for the attempts and email events behind it..

- Value shape: string. Where sending the notification stands. Read `delivery` for the attempts and email events behind it. Values: `"scheduled"`, `"pending"`, `"sent"`, `"failed"`, `"unconfirmed"`, `"canceled"`.

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where sending the notification stands. Read `delivery` for the attempts and email events behind it. 

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.status_reason

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.status_reason variant 1

anyOf variant 1: Why the notification has its current status. credential_rotated means code rotation canceled an unsent notification for the previous code. Null when no reason applies..

- Value shape: string. Why the notification has its current status. credential_rotated means code rotation canceled an unsent notification for the previous code. Null when no reason applies. Values: `"credential_rotated"`, `null`.

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.status_reason variant 2

anyOf variant 2.

- Value shape: null. Why the notification has its current status. credential_rotated means code rotation canceled an unsent notification for the previous code. Null when no reason applies. 

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.supported_actions

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions accepted for this notification's stored state, independent of the caller's credentials. Empty when none are available..

- Value shape: Array of string. Lifecycle actions accepted for this notification's stored state, independent of the caller's credentials. Empty when none are available. Items values: `"cancel"`.

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions accepted for this notification's stored state, independent of the caller's credentials. Empty when none are available. 

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### GiftCardNotificationUpdatedInstalledMerchantsEvent.data.previous_attributes.version

Declared alternatives: [GiftCardFundingDisputePreviousAttributes.version](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesversion).

### GiftCardNotificationUpdatedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

