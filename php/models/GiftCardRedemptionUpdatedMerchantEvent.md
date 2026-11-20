[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRedemptionUpdatedMerchantEvent

The `gift_card_redemption.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [GiftCardRedemptionUpdatedMerchantEventData](../models/GiftCardRedemptionUpdatedMerchantEventData.md#giftcardredemptionupdatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/GiftCardRedemptionUpdatedMerchantEvent.md#giftcardredemptionupdatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"gift_card_redemption.updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [GiftCardRedemptionUpdatedMerchantEventRequest](../models/GiftCardRedemptionUpdatedMerchantEventRequest.md#giftcardredemptionupdatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### GiftCardRedemptionUpdatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/GiftCardRedemptionCreatedMerchantEvent.md#giftcardredemptioncreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/GiftCardRedemptionUpdatedMerchantEvent.md#giftcardredemptionupdatedmerchanteventdata-fields-1previous_attributes). |

### GiftCardRedemptionUpdatedMerchantEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### GiftCardRedemptionUpdatedMerchantEvent.data fields 1.object

Field definitions: [GiftCardRedemptionCreatedMerchantEvent.data fields 1.object](../models/GiftCardRedemptionCreatedMerchantEvent.md#giftcardredemptioncreatedmerchanteventdata-fields-1object).

### GiftCardRedemptionUpdatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributes).

### GiftCardRedemptionUpdatedMerchantEvent.data fields 1.previous_attributes.capture_mode

Declared alternatives: [GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.capture_mode](../models/GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributescapture_mode).

### GiftCardRedemptionUpdatedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardRedemptionUpdatedMerchantEvent.data fields 1.previous_attributes.expires_at

Declared alternatives: [GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.expires_at](../models/GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributesexpires_at).

### GiftCardRedemptionUpdatedMerchantEvent.data fields 1.previous_attributes.gift_card_id

Declared alternatives: [GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.gift_card_id](../models/GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributesgift_card_id).

### GiftCardRedemptionUpdatedMerchantEvent.data fields 1.previous_attributes.gift_card_redemption_id

Declared alternatives: [GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.gift_card_redemption_id](../models/GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributesgift_card_redemption_id).

### GiftCardRedemptionUpdatedMerchantEvent.data fields 1.previous_attributes.idempotency_key

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.idempotency_key](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesidempotency_key).

### GiftCardRedemptionUpdatedMerchantEvent.data fields 1.previous_attributes.order_id

Declared alternatives: [GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.order_id](../models/GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributesorder_id).

### GiftCardRedemptionUpdatedMerchantEvent.data fields 1.previous_attributes.order_payment_attempt_id

Declared alternatives: [GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.order_payment_attempt_id](../models/GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributesorder_payment_attempt_id).

### GiftCardRedemptionUpdatedMerchantEvent.data fields 1.previous_attributes.sale_reference

Declared alternatives: [GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.sale_reference](../models/GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributessale_reference).

### GiftCardRedemptionUpdatedMerchantEvent.data fields 1.previous_attributes.source_type

Declared alternatives: [GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.source_type](../models/GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributessource_type).

### GiftCardRedemptionUpdatedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.status](../models/GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributesstatus).

### GiftCardRedemptionUpdatedMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.supported_actions](../models/GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributessupported_actions).

### GiftCardRedemptionUpdatedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardRedemptionUpdatedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.version](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion).

