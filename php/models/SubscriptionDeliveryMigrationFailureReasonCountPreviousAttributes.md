[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `count` | Optional | integer or null | Number of subscriptions that failed for this reason. `count`: [declared alternatives](../models/SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributes.md#subscriptiondeliverymigrationfailurereasoncountpreviousattributescount). |
| `reason` | Optional | string or null | Why these subscriptions could not be moved. Values: `"method_not_offered"`, `"destination_not_served"`, `"rate_unavailable"`, `"method_unavailable"`, `"no_longer_applicable"`, `"not_movable"`. `reason`: [declared alternatives](../models/SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributes.md#subscriptiondeliverymigrationfailurereasoncountpreviousattributesreason). |

### SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributes.count

### SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributes.count variant 1

anyOf variant 1: Number of subscriptions that failed for this reason..

- Value shape: integer. Number of subscriptions that failed for this reason. Number of subscriptions that failed for this reason. Format: `int64`. 

### SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributes.count variant 2

anyOf variant 2.

- Value shape: null. Number of subscriptions that failed for this reason. 

### SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributes.reason

### SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributes.reason variant 1

anyOf variant 1: Why these subscriptions could not be moved..

- Value shape: string. Why these subscriptions could not be moved. Values: `"method_not_offered"`, `"destination_not_served"`, `"rate_unavailable"`, `"method_unavailable"`, `"no_longer_applicable"`, `"not_movable"`.

### SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why these subscriptions could not be moved. 

