[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPaymentRetryFailedMerchantEvent

The `subscription_payment_retry.failed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [SubscriptionPaymentRetryFailedMerchantEventData](../models/SubscriptionPaymentRetryFailedMerchantEventData.md#subscriptionpaymentretryfailedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/SubscriptionPaymentRetryFailedMerchantEvent.md#subscriptionpaymentretryfailedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"subscription_payment_retry.failed"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [SubscriptionPaymentRetryFailedMerchantEventRequest](../models/SubscriptionPaymentRetryFailedMerchantEventRequest.md#subscriptionpaymentretryfailedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### SubscriptionPaymentRetryFailedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/SubscriptionPaymentRetryCreatedMerchantEvent.md#subscriptionpaymentretrycreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/SubscriptionPaymentRetryFailedMerchantEvent.md#subscriptionpaymentretryfailedmerchanteventdata-fields-1previous_attributes). |

### SubscriptionPaymentRetryFailedMerchantEvent.data fields 1.object

Field definitions: [SubscriptionPaymentRetryCreatedMerchantEvent.data fields 1.object](../models/SubscriptionPaymentRetryCreatedMerchantEvent.md#subscriptionpaymentretrycreatedmerchanteventdata-fields-1object).

### SubscriptionPaymentRetryFailedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.md#subscriptionpaymentretryfailedmerchanteventdatapreviousattributes).

### SubscriptionPaymentRetryFailedMerchantEvent.data fields 1.previous_attributes.completed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionPaymentRetryFailedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionPaymentRetryFailedMerchantEvent.data fields 1.previous_attributes.idempotency_key

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.idempotency_key](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesidempotency_key).

### SubscriptionPaymentRetryFailedMerchantEvent.data fields 1.previous_attributes.last_payment_error

Declared alternatives: [SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.last_payment_error](../models/SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.md#subscriptionpaymentretryfailedmerchanteventdatapreviousattributeslast_payment_error).

### SubscriptionPaymentRetryFailedMerchantEvent.data fields 1.previous_attributes.order_id

Declared alternatives: [SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.order_id](../models/SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.md#subscriptionpaymentretryfailedmerchanteventdatapreviousattributesorder_id).

### SubscriptionPaymentRetryFailedMerchantEvent.data fields 1.previous_attributes.payment_intent_id

Declared alternatives: [SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.payment_intent_id](../models/SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.md#subscriptionpaymentretryfailedmerchanteventdatapreviousattributespayment_intent_id).

### SubscriptionPaymentRetryFailedMerchantEvent.data fields 1.previous_attributes.started_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionPaymentRetryFailedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.status](../models/SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.md#subscriptionpaymentretryfailedmerchanteventdatapreviousattributesstatus).

### SubscriptionPaymentRetryFailedMerchantEvent.data fields 1.previous_attributes.subscription_id

Declared alternatives: [SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.subscription_id](../models/SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.md#subscriptionpaymentretryfailedmerchanteventdatapreviousattributessubscription_id).

### SubscriptionPaymentRetryFailedMerchantEvent.data fields 1.previous_attributes.subscription_payment_retry_id

Declared alternatives: [SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.subscription_payment_retry_id](../models/SubscriptionPaymentRetryFailedMerchantEventDataPreviousAttributes.md#subscriptionpaymentretryfailedmerchanteventdatapreviousattributessubscription_payment_retry_id).

### SubscriptionPaymentRetryFailedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

