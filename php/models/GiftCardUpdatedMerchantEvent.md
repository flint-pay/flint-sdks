[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardUpdatedMerchantEvent

The `gift_card.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [GiftCardUpdatedMerchantEventData](../models/GiftCardUpdatedMerchantEventData.md#giftcardupdatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/GiftCardUpdatedMerchantEvent.md#giftcardupdatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"gift_card.updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [GiftCardUpdatedMerchantEventRequest](../models/GiftCardUpdatedMerchantEventRequest.md#giftcardupdatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### GiftCardUpdatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/GiftCardCreatedMerchantEvent.md#giftcardcreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/GiftCardUpdatedMerchantEvent.md#giftcardupdatedmerchanteventdata-fields-1previous_attributes). |

### GiftCardUpdatedMerchantEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### GiftCardUpdatedMerchantEvent.data fields 1.object

Field definitions: [GiftCardCreatedMerchantEvent.data fields 1.object](../models/GiftCardCreatedMerchantEvent.md#giftcardcreatedmerchanteventdata-fields-1object).

### GiftCardUpdatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributes).

### GiftCardUpdatedMerchantEvent.data fields 1.previous_attributes.code_source

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.code_source](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributescode_source).

### GiftCardUpdatedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardUpdatedMerchantEvent.data fields 1.previous_attributes.currency

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.currency](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributescurrency).

### GiftCardUpdatedMerchantEvent.data fields 1.previous_attributes.customer_id

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.customer_id](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributescustomer_id).

### GiftCardUpdatedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.external_reference_id](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesexternal_reference_id).

### GiftCardUpdatedMerchantEvent.data fields 1.previous_attributes.gift_card_id

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.gift_card_id](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesgift_card_id).

### GiftCardUpdatedMerchantEvent.data fields 1.previous_attributes.idempotency_key

Declared alternatives: [CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.idempotency_key](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributesidempotency_key).

### GiftCardUpdatedMerchantEvent.data fields 1.previous_attributes.last_loaded_at

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.last_loaded_at](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributeslast_loaded_at).

### GiftCardUpdatedMerchantEvent.data fields 1.previous_attributes.last_redeemed_at

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.last_redeemed_at](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributeslast_redeemed_at).

### GiftCardUpdatedMerchantEvent.data fields 1.previous_attributes.last4

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.last4](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributeslast4).

### GiftCardUpdatedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### GiftCardUpdatedMerchantEvent.data fields 1.previous_attributes.restrictions

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.restrictions](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesrestrictions).

### GiftCardUpdatedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.status](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesstatus).

### GiftCardUpdatedMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.supported_actions](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributessupported_actions).

### GiftCardUpdatedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardUpdatedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.version](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion).

