[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodActivatedMerchantEvent

The `payment_method.activated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PaymentMethodActivatedMerchantEventData](../models/PaymentMethodActivatedMerchantEventData.md#paymentmethodactivatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PaymentMethodActivatedMerchantEvent.md#paymentmethodactivatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payment_method.activated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PaymentMethodActivatedMerchantEventRequest](../models/PaymentMethodActivatedMerchantEventRequest.md#paymentmethodactivatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PaymentMethodActivatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PaymentMethodActivatedMerchantEvent.md#paymentmethodactivatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PaymentMethodActivatedMerchantEvent.md#paymentmethodactivatedmerchanteventdata-fields-1previous_attributes). |

### PaymentMethodActivatedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PaymentMethodActivatedMerchantEventDataObject.md#paymentmethodactivatedmerchanteventdataobject).

### PaymentMethodActivatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributes).

### PaymentMethodActivatedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentMethodActivatedMerchantEvent.data fields 1.previous_attributes.customer_id

Declared alternatives: [PaymentMethodActivatedMerchantEventDataPreviousAttributes.customer_id](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributescustomer_id).

### PaymentMethodActivatedMerchantEvent.data fields 1.previous_attributes.fingerprint

Declared alternatives: [PaymentMethodActivatedMerchantEventDataPreviousAttributes.fingerprint](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributesfingerprint).

### PaymentMethodActivatedMerchantEvent.data fields 1.previous_attributes.is_default

Declared alternatives: [PaymentMethodActivatedMerchantEventDataPreviousAttributes.is_default](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributesis_default).

### PaymentMethodActivatedMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### PaymentMethodActivatedMerchantEvent.data fields 1.previous_attributes.payment_method_id

Declared alternatives: [PaymentMethodActivatedMerchantEventDataPreviousAttributes.payment_method_id](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributespayment_method_id).

### PaymentMethodActivatedMerchantEvent.data fields 1.previous_attributes.saved_with

Declared alternatives: [PaymentMethodActivatedMerchantEventDataPreviousAttributes.saved_with](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributessaved_with).

### PaymentMethodActivatedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [PaymentMethodActivatedMerchantEventDataPreviousAttributes.status](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributesstatus).

### PaymentMethodActivatedMerchantEvent.data fields 1.previous_attributes.type

Declared alternatives: [PaymentMethodActivatedMerchantEventDataPreviousAttributes.type](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributestype).

### PaymentMethodActivatedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentMethodActivatedMerchantEvent.data fields 1.previous_attributes.usage

Declared alternatives: [PaymentMethodActivatedMerchantEventDataPreviousAttributes.usage](../models/PaymentMethodActivatedMerchantEventDataPreviousAttributes.md#paymentmethodactivatedmerchanteventdatapreviousattributesusage).

