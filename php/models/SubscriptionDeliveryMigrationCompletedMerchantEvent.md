[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMigrationCompletedMerchantEvent

The `subscription_delivery_migration.completed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [SubscriptionDeliveryMigrationCompletedMerchantEventData](../models/SubscriptionDeliveryMigrationCompletedMerchantEventData.md#subscriptiondeliverymigrationcompletedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/SubscriptionDeliveryMigrationCompletedMerchantEvent.md#subscriptiondeliverymigrationcompletedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"subscription_delivery_migration.completed"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [SubscriptionDeliveryMigrationCompletedMerchantEventRequest](../models/SubscriptionDeliveryMigrationCompletedMerchantEventRequest.md#subscriptiondeliverymigrationcompletedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### SubscriptionDeliveryMigrationCompletedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/SubscriptionDeliveryMigrationCompletedMerchantEvent.md#subscriptiondeliverymigrationcompletedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/SubscriptionDeliveryMigrationCompletedMerchantEvent.md#subscriptiondeliverymigrationcompletedmerchanteventdata-fields-1previous_attributes). |

### SubscriptionDeliveryMigrationCompletedMerchantEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### SubscriptionDeliveryMigrationCompletedMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](SubscriptionDeliveryMigrationCompletedMerchantEventDataObject.md#subscriptiondeliverymigrationcompletedmerchanteventdataobject).

### SubscriptionDeliveryMigrationCompletedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributes).

### SubscriptionDeliveryMigrationCompletedMerchantEvent.data fields 1.previous_attributes.completed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionDeliveryMigrationCompletedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionDeliveryMigrationCompletedMerchantEvent.data fields 1.previous_attributes.failed_count

Declared alternatives: [SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.failed_count](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributesfailed_count).

### SubscriptionDeliveryMigrationCompletedMerchantEvent.data fields 1.previous_attributes.failure_reason_counts

Declared alternatives: [SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.failure_reason_counts](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributesfailure_reason_counts).

### SubscriptionDeliveryMigrationCompletedMerchantEvent.data fields 1.previous_attributes.from_delivery_method_id

Declared alternatives: [SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.from_delivery_method_id](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributesfrom_delivery_method_id).

### SubscriptionDeliveryMigrationCompletedMerchantEvent.data fields 1.previous_attributes.moved_count

Declared alternatives: [SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.moved_count](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributesmoved_count).

### SubscriptionDeliveryMigrationCompletedMerchantEvent.data fields 1.previous_attributes.pending_count

Declared alternatives: [SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.pending_count](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributespending_count).

### SubscriptionDeliveryMigrationCompletedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.status](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributesstatus).

### SubscriptionDeliveryMigrationCompletedMerchantEvent.data fields 1.previous_attributes.subscription_delivery_migration_id

Declared alternatives: [SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.subscription_delivery_migration_id](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributessubscription_delivery_migration_id).

### SubscriptionDeliveryMigrationCompletedMerchantEvent.data fields 1.previous_attributes.subscription_plan_id

Declared alternatives: [SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.subscription_plan_id](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributessubscription_plan_id).

### SubscriptionDeliveryMigrationCompletedMerchantEvent.data fields 1.previous_attributes.to_delivery_method_id

Declared alternatives: [SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.to_delivery_method_id](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributesto_delivery_method_id).

### SubscriptionDeliveryMigrationCompletedMerchantEvent.data fields 1.previous_attributes.total_count

Declared alternatives: [SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.total_count](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributestotal_count).

### SubscriptionDeliveryMigrationCompletedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

