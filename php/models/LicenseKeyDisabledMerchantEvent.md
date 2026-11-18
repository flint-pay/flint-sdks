[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyDisabledMerchantEvent

The `license_key.disabled` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [LicenseKeyDisabledMerchantEventData](../models/LicenseKeyDisabledMerchantEventData.md#licensekeydisabledmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/LicenseKeyDisabledMerchantEvent.md#licensekeydisabledmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"license_key.disabled"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [LicenseKeyDisabledMerchantEventRequest](../models/LicenseKeyDisabledMerchantEventRequest.md#licensekeydisabledmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### LicenseKeyDisabledMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/LicenseKeyCreatedMerchantEvent.md#licensekeycreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/LicenseKeyDisabledMerchantEvent.md#licensekeydisabledmerchanteventdata-fields-1previous_attributes). |

### LicenseKeyDisabledMerchantEvent.data fields 1.object

Field definitions: [LicenseKeyCreatedMerchantEvent.data fields 1.object](../models/LicenseKeyCreatedMerchantEvent.md#licensekeycreatedmerchanteventdata-fields-1object).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributes).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.activation_limit

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.activation_limit](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesactivation_limit).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.active_activation_count

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.active_activation_count](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesactive_activation_count).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.created_at](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributescreated_at).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.customer

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.customer](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributescustomer).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.customer_id

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.customer_id](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributescustomer_id).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.expires_at

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.expires_at](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesexpires_at).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.key_last4

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.key_last4](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributeskey_last4).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.license_key_id

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.license_key_id](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributeslicense_key_id).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.license_key_pool_id

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.license_key_pool_id](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributeslicense_key_pool_id).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.metadata](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesmetadata).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.order

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.order](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesorder).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.order_id

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.order_id](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesorder_id).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.order_line_item_id

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.order_line_item_id](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesorder_line_item_id).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.product_id

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.product_id](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesproduct_id).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.restrictions

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.restrictions](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesrestrictions).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.source

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.source](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributessource).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.status](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesstatus).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.subscription_id

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.subscription_id](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributessubscription_id).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.subscription_line_item_id

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.subscription_line_item_id](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributessubscription_line_item_id).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.supported_actions](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributessupported_actions).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.unit_ordinal

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.unit_ordinal](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesunit_ordinal).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.updated_at](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesupdated_at).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.variant_id

Declared alternatives: [LicenseKeyDisabledMerchantEventDataPreviousAttributes.variant_id](../models/LicenseKeyDisabledMerchantEventDataPreviousAttributes.md#licensekeydisabledmerchanteventdatapreviousattributesvariant_id).

### LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

