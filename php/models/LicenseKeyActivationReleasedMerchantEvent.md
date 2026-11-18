[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyActivationReleasedMerchantEvent

The `license_key_activation.released` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [LicenseKeyActivationReleasedMerchantEventData](../models/LicenseKeyActivationReleasedMerchantEventData.md#licensekeyactivationreleasedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/LicenseKeyActivationReleasedMerchantEvent.md#licensekeyactivationreleasedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"license_key_activation.released"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [LicenseKeyActivationReleasedMerchantEventRequest](../models/LicenseKeyActivationReleasedMerchantEventRequest.md#licensekeyactivationreleasedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### LicenseKeyActivationReleasedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/LicenseKeyActivationCreatedMerchantEvent.md#licensekeyactivationcreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/LicenseKeyActivationReleasedMerchantEvent.md#licensekeyactivationreleasedmerchanteventdata-fields-1previous_attributes). |

### LicenseKeyActivationReleasedMerchantEvent.data fields 1.object

Field definitions: [LicenseKeyActivationCreatedMerchantEvent.data fields 1.object](../models/LicenseKeyActivationCreatedMerchantEvent.md#licensekeyactivationcreatedmerchanteventdata-fields-1object).

### LicenseKeyActivationReleasedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributes).

### LicenseKeyActivationReleasedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.created_at](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributescreated_at).

### LicenseKeyActivationReleasedMerchantEvent.data fields 1.previous_attributes.fingerprint

Declared alternatives: [LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.fingerprint](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributesfingerprint).

### LicenseKeyActivationReleasedMerchantEvent.data fields 1.previous_attributes.last_validated_at

Declared alternatives: [LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.last_validated_at](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributeslast_validated_at).

### LicenseKeyActivationReleasedMerchantEvent.data fields 1.previous_attributes.license_key_activation_id

Declared alternatives: [LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.license_key_activation_id](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributeslicense_key_activation_id).

### LicenseKeyActivationReleasedMerchantEvent.data fields 1.previous_attributes.license_key_id

Declared alternatives: [LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.license_key_id](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributeslicense_key_id).

### LicenseKeyActivationReleasedMerchantEvent.data fields 1.previous_attributes.name

Declared alternatives: [LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.name](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributesname).

### LicenseKeyActivationReleasedMerchantEvent.data fields 1.previous_attributes.product_id

Declared alternatives: [LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.product_id](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributesproduct_id).

### LicenseKeyActivationReleasedMerchantEvent.data fields 1.previous_attributes.released_at

Declared alternatives: [LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.released_at](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributesreleased_at).

### LicenseKeyActivationReleasedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.status](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributesstatus).

### LicenseKeyActivationReleasedMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.supported_actions](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributessupported_actions).

### LicenseKeyActivationReleasedMerchantEvent.data fields 1.previous_attributes.variant_id

Declared alternatives: [LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.variant_id](../models/LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes.md#licensekeyactivationreleasedmerchanteventdatapreviousattributesvariant_id).

