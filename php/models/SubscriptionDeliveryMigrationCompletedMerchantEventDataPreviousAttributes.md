[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string or null | RFC3339 timestamp. `completed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `failed_count` | Optional | integer or null | Subscriptions that could not be moved. See `failure_reason_counts`, or list the failures for each subscription. `failed_count`: [declared alternatives](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributesfailed_count). |
| `failure_reason_counts` | Optional | Array of [SubscriptionDeliveryMigrationFailureReasonCount](../models/SubscriptionDeliveryMigrationFailureReasonCount.md#subscriptiondeliverymigrationfailurereasoncount) or null | Failed subscriptions grouped by reason. Empty when none failed. `failure_reason_counts`: [declared alternatives](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributesfailure_reason_counts). |
| `from_delivery_method_id` | Optional | string or null | ID of the delivery method the subscriptions moved away from. `from_delivery_method_id`: [declared alternatives](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributesfrom_delivery_method_id). |
| `moved_count` | Optional | integer or null | Subscriptions now using the new method. `moved_count`: [declared alternatives](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributesmoved_count). |
| `pending_count` | Optional | integer or null | Subscriptions not yet moved or failed, including ones Flint is retrying. `pending_count`: [declared alternatives](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributespending_count). |
| `status` | Optional | string or null | Progress of the delivery method migration across its subscriptions. Values: `"pending"`, `"processing"`, `"completed"`. `status`: [declared alternatives](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributesstatus). |
| `subscription_delivery_migration_id` | Optional | string or null | Unique identifier for this subscription delivery migration, prefixed `sdmig_`. `subscription_delivery_migration_id`: [declared alternatives](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributessubscription_delivery_migration_id). |
| `subscription_plan_id` | Optional | string or null | Plan the migration was limited to. Omitted when it covered every plan. `subscription_plan_id`: [declared alternatives](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributessubscription_plan_id). |
| `to_delivery_method_id` | Optional | string or null | ID of the delivery method the subscriptions move to. `to_delivery_method_id`: [declared alternatives](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributesto_delivery_method_id). |
| `total_count` | Optional | integer or null | Number of active, paused, and past due subscriptions on the original method when the migration started. `total_count`: [declared alternatives](../models/SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.md#subscriptiondeliverymigrationcompletedmerchanteventdatapreviousattributestotal_count). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.completed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.failed_count

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.failed_count variant 1

anyOf variant 1: Subscriptions that could not be moved. See `failure_reason_counts`, or list the failures for each subscription..

- Value shape: integer. Subscriptions that could not be moved. See `failure_reason_counts`, or list the failures for each subscription. Subscriptions that could not be moved. See `failure_reason_counts`, or list the failures for each subscription. Format: `int64`. 

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.failed_count variant 2

anyOf variant 2.

- Value shape: null. Subscriptions that could not be moved. See `failure_reason_counts`, or list the failures for each subscription. 

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.failure_reason_counts

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.failure_reason_counts variant 1

anyOf variant 1: Failed subscriptions grouped by reason. Empty when none failed..

- Value shape: Array of [SubscriptionDeliveryMigrationFailureReasonCount](../models/SubscriptionDeliveryMigrationFailureReasonCount.md#subscriptiondeliverymigrationfailurereasoncount). Failed subscriptions grouped by reason. Empty when none failed. 

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.failure_reason_counts variant 2

anyOf variant 2.

- Value shape: null. Failed subscriptions grouped by reason. Empty when none failed. 

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.from_delivery_method_id

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.from_delivery_method_id variant 1

anyOf variant 1: ID of the delivery method the subscriptions moved away from..

- Value shape: string. ID of the delivery method the subscriptions moved away from. 

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.from_delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery method the subscriptions moved away from. 

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.moved_count

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.moved_count variant 1

anyOf variant 1: Subscriptions now using the new method..

- Value shape: integer. Subscriptions now using the new method. Subscriptions now using the new method. Format: `int64`. 

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.moved_count variant 2

anyOf variant 2.

- Value shape: null. Subscriptions now using the new method. 

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.pending_count

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.pending_count variant 1

anyOf variant 1: Subscriptions not yet moved or failed, including ones Flint is retrying..

- Value shape: integer. Subscriptions not yet moved or failed, including ones Flint is retrying. Subscriptions not yet moved or failed, including ones Flint is retrying. Format: `int64`. 

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.pending_count variant 2

anyOf variant 2.

- Value shape: null. Subscriptions not yet moved or failed, including ones Flint is retrying. 

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.status

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Progress of the delivery method migration across its subscriptions..

- Value shape: string. Progress of the delivery method migration across its subscriptions. Values: `"pending"`, `"processing"`, `"completed"`.

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Progress of the delivery method migration across its subscriptions. 

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.subscription_delivery_migration_id

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.subscription_delivery_migration_id variant 1

anyOf variant 1: Unique identifier for this subscription delivery migration, prefixed `sdmig_`..

- Value shape: string. Unique identifier for this subscription delivery migration, prefixed `sdmig_`. 

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.subscription_delivery_migration_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription delivery migration, prefixed `sdmig_`. 

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.subscription_plan_id

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.subscription_plan_id variant 1

anyOf variant 1: Plan the migration was limited to. Omitted when it covered every plan..

- Value shape: string. Plan the migration was limited to. Omitted when it covered every plan. 

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. Plan the migration was limited to. Omitted when it covered every plan. 

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.to_delivery_method_id

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.to_delivery_method_id variant 1

anyOf variant 1: ID of the delivery method the subscriptions move to..

- Value shape: string. ID of the delivery method the subscriptions move to. 

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.to_delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery method the subscriptions move to. 

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.total_count

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.total_count variant 1

anyOf variant 1: Number of active, paused, and past due subscriptions on the original method when the migration started..

- Value shape: integer. Number of active, paused, and past due subscriptions on the original method when the migration started. Number of active, paused, and past due subscriptions on the original method when the migration started. Format: `int64`. 

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.total_count variant 2

anyOf variant 2.

- Value shape: null. Number of active, paused, and past due subscriptions on the original method when the migration started. 

### SubscriptionDeliveryMigrationCompletedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

