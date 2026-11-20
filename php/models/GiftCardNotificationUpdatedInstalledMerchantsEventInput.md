[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationUpdatedInstalledMerchantsEventInput

The `gift_card_notification.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/GiftCardNotificationUpdatedInstalledMerchantsEventInput.md#giftcardnotificationupdatedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"gift_card_notification.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/GiftCardNotificationCreatedInstalledMerchantsEventInput.md#giftcardnotificationcreatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/GiftCardNotificationUpdatedInstalledMerchantsEventInput.md#giftcardnotificationupdatedinstalledmerchantseventinputdataprevious_attributes). |

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.object

Field definitions: [GiftCardNotificationCreatedInstalledMerchantsEventInput.data.object](../models/GiftCardNotificationCreatedInstalledMerchantsEventInput.md#giftcardnotificationcreatedinstalledmerchantseventinputdataobject).

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `delivery` | Optional | [GiftCardNotificationDeliveryPreviousAttributesInput](../models/GiftCardNotificationDeliveryPreviousAttributesInput.md#giftcardnotificationdeliverypreviousattributesinput) or null | Included on notification retrieval. Contains the most recent sending attempts and delivery events, newest first. A failed attempt describes the send call; use notification.status to determine whether acceptance remains unconfirmed. |
| `gift_card_id` | Optional | string or null | ID of the gift card the notification is about. `gift_card_id`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEventInput.md#giftcardnotificationupdatedinstalledmerchantseventinputdataprevious_attributesgift_card_id). |
| `gift_card_notification_id` | Optional | string or null | Unique identifier for this gift card notification, prefixed `gcn_`. `gift_card_notification_id`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEventInput.md#giftcardnotificationupdatedinstalledmerchantseventinputdataprevious_attributesgift_card_notification_id). |
| `recipient` | Optional | [GiftCardNotificationRecipientPreviousAttributesInput](../models/GiftCardNotificationRecipientPreviousAttributesInput.md#giftcardnotificationrecipientpreviousattributesinput) or null | Who the notification is sent to. |
| `resend_of_notification_id` | Optional | string or null | ID of the earlier notification this one sends again. `resend_of_notification_id`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEventInput.md#giftcardnotificationupdatedinstalledmerchantseventinputdataprevious_attributesresend_of_notification_id). |
| `sent_at` | Optional | string or null | RFC3339 timestamp. `sent_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `status` | Optional | string or null | Where sending the notification stands. Read `delivery` for the attempts and email events behind it. Values: `"scheduled"`, `"pending"`, `"sent"`, `"failed"`, `"unconfirmed"`, `"canceled"`. `status`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEventInput.md#giftcardnotificationupdatedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `status_reason` | Optional | string or null | Why the notification has its current status. credential_rotated means code rotation canceled an unsent notification for the previous code. Null when no reason applies. Values: `"credential_rotated"`, `null`. `status_reason`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEventInput.md#giftcardnotificationupdatedinstalledmerchantseventinputdataprevious_attributesstatus_reason). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions accepted for this notification's stored state, independent of the caller's credentials. Empty when none are available. Items values: `"cancel"`. `supported_actions`: [declared alternatives](../models/GiftCardNotificationUpdatedInstalledMerchantsEventInput.md#giftcardnotificationupdatedinstalledmerchantseventinputdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributesInput.md#giftcardfundingdisputepreviousattributesinputversion). |

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_id

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_id variant 1

anyOf variant 1: ID of the gift card the notification is about..

- Value shape: string. ID of the gift card the notification is about. ID of the gift card the notification is about. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the notification is about. 

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_notification_id

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_notification_id variant 1

anyOf variant 1: Unique identifier for this gift card notification, prefixed `gcn_`..

- Value shape: string. Unique identifier for this gift card notification, prefixed `gcn_`. Unique identifier for this gift card notification, prefixed `gcn_`. Example: `"gcn_01KEZF7C0023FN0HF9GH34RZA1"`. 

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_notification_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this gift card notification, prefixed `gcn_`. 

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.resend_of_notification_id

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.resend_of_notification_id variant 1

anyOf variant 1: ID of the earlier notification this one sends again..

- Value shape: string. ID of the earlier notification this one sends again. ID of the earlier notification this one sends again. Example: `"ntf_01KEZF7C00X0DP9KT950FYXHQ1"`. 

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.resend_of_notification_id variant 2

anyOf variant 2.

- Value shape: null. ID of the earlier notification this one sends again. 

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.sent_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.status

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Where sending the notification stands. Read `delivery` for the attempts and email events behind it..

- Value shape: string. Where sending the notification stands. Read `delivery` for the attempts and email events behind it. Values: `"scheduled"`, `"pending"`, `"sent"`, `"failed"`, `"unconfirmed"`, `"canceled"`.

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where sending the notification stands. Read `delivery` for the attempts and email events behind it. 

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.status_reason

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.status_reason variant 1

anyOf variant 1: Why the notification has its current status. credential_rotated means code rotation canceled an unsent notification for the previous code. Null when no reason applies..

- Value shape: string. Why the notification has its current status. credential_rotated means code rotation canceled an unsent notification for the previous code. Null when no reason applies. Values: `"credential_rotated"`, `null`.

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.status_reason variant 2

anyOf variant 2.

- Value shape: null. Why the notification has its current status. credential_rotated means code rotation canceled an unsent notification for the previous code. Null when no reason applies. 

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions accepted for this notification's stored state, independent of the caller's credentials. Empty when none are available..

- Value shape: Array of string. Lifecycle actions accepted for this notification's stored state, independent of the caller's credentials. Empty when none are available. Items values: `"cancel"`.

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions accepted for this notification's stored state, independent of the caller's credentials. Empty when none are available. 

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [GiftCardFundingDisputePreviousAttributesInput.version](../models/GiftCardFundingDisputePreviousAttributesInput.md#giftcardfundingdisputepreviousattributesinputversion).

### GiftCardNotificationUpdatedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

