[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackActivatedMerchantEvent

The `delivery_rate_callback.activated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [DeliveryRateCallbackActivatedMerchantEventData](../models/DeliveryRateCallbackActivatedMerchantEventData.md#deliveryratecallbackactivatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/DeliveryRateCallbackActivatedMerchantEvent.md#deliveryratecallbackactivatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"delivery_rate_callback.activated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DeliveryRateCallbackActivatedMerchantEventRequest](../models/DeliveryRateCallbackActivatedMerchantEventRequest.md#deliveryratecallbackactivatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### DeliveryRateCallbackActivatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/DeliveryRateCallbackActivatedMerchantEvent.md#deliveryratecallbackactivatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/DeliveryRateCallbackActivatedMerchantEvent.md#deliveryratecallbackactivatedmerchanteventdata-fields-1previous_attributes). |

### DeliveryRateCallbackActivatedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](DeliveryRateCallbackActivatedMerchantEventDataObject.md#deliveryratecallbackactivatedmerchanteventdataobject).

### DeliveryRateCallbackActivatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributes).

### DeliveryRateCallbackActivatedMerchantEvent.data fields 1.previous_attributes.circuit_failure_count

Declared alternatives: [DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.circuit_failure_count](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributescircuit_failure_count).

### DeliveryRateCallbackActivatedMerchantEvent.data fields 1.previous_attributes.circuit_state

Declared alternatives: [DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.circuit_state](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributescircuit_state).

### DeliveryRateCallbackActivatedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### DeliveryRateCallbackActivatedMerchantEvent.data fields 1.previous_attributes.current_delivery_rate_callback_revision_id

Declared alternatives: [DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.current_delivery_rate_callback_revision_id](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributescurrent_delivery_rate_callback_revision_id).

### DeliveryRateCallbackActivatedMerchantEvent.data fields 1.previous_attributes.delivery_rate_callback_id

Declared alternatives: [DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.delivery_rate_callback_id](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributesdelivery_rate_callback_id).

### DeliveryRateCallbackActivatedMerchantEvent.data fields 1.previous_attributes.delivery_revocation_id

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.delivery_revocation_id](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesdelivery_revocation_id).

### DeliveryRateCallbackActivatedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### DeliveryRateCallbackActivatedMerchantEvent.data fields 1.previous_attributes.name

Declared alternatives: [DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.name](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributesname).

### DeliveryRateCallbackActivatedMerchantEvent.data fields 1.previous_attributes.signing_methods

Declared alternatives: [DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.signing_methods](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributessigning_methods).

### DeliveryRateCallbackActivatedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.status](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributesstatus).

### DeliveryRateCallbackActivatedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### DeliveryRateCallbackActivatedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.version](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion).

