[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardLoadUpdatedMerchantEvent

The `gift_card_load.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [GiftCardLoadUpdatedMerchantEventData](../models/GiftCardLoadUpdatedMerchantEventData.md#giftcardloadupdatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/GiftCardLoadUpdatedMerchantEvent.md#giftcardloadupdatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"gift_card_load.updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [GiftCardLoadUpdatedMerchantEventRequest](../models/GiftCardLoadUpdatedMerchantEventRequest.md#giftcardloadupdatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### GiftCardLoadUpdatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/GiftCardLoadCreatedMerchantEvent.md#giftcardloadcreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/GiftCardLoadUpdatedMerchantEvent.md#giftcardloadupdatedmerchanteventdata-fields-1previous_attributes). |

### GiftCardLoadUpdatedMerchantEvent.data fields 1.object

Field definitions: [GiftCardLoadCreatedMerchantEvent.data fields 1.object](../models/GiftCardLoadCreatedMerchantEvent.md#giftcardloadcreatedmerchanteventdata-fields-1object).

### GiftCardLoadUpdatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributes).

### GiftCardLoadUpdatedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardLoadUpdatedMerchantEvent.data fields 1.previous_attributes.funding_disputes

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.funding_disputes](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesfunding_disputes).

### GiftCardLoadUpdatedMerchantEvent.data fields 1.previous_attributes.gift_card_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.gift_card_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesgift_card_id).

### GiftCardLoadUpdatedMerchantEvent.data fields 1.previous_attributes.gift_card_load_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.gift_card_load_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesgift_card_load_id).

### GiftCardLoadUpdatedMerchantEvent.data fields 1.previous_attributes.idempotency_key

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.idempotency_key](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesidempotency_key).

### GiftCardLoadUpdatedMerchantEvent.data fields 1.previous_attributes.purchase_refund_value_holds

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_refund_value_holds).

### GiftCardLoadUpdatedMerchantEvent.data fields 1.previous_attributes.purchase_refunds

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_refunds).

### GiftCardLoadUpdatedMerchantEvent.data fields 1.previous_attributes.purchase_restoration

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_restoration).

### GiftCardLoadUpdatedMerchantEvent.data fields 1.previous_attributes.refund_provenance

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance).

### GiftCardLoadUpdatedMerchantEvent.data fields 1.previous_attributes.source

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributessource).

### GiftCardLoadUpdatedMerchantEvent.data fields 1.previous_attributes.source_created_at

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source_created_at](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributessource_created_at).

### GiftCardLoadUpdatedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.version](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion).

