[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `count` | Optional | integer or null | Number of subscriptions that failed for this reason. `count`: [declared alternatives](../models/SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributesInput.md#subscriptiondeliverymigrationfailurereasoncountpreviousattributesinputcount). |
| `reason` | Optional | string or null | Why these subscriptions could not be moved. Values: `"method_not_offered"`, `"destination_not_served"`, `"rate_unavailable"`, `"method_unavailable"`, `"no_longer_applicable"`, `"not_movable"`. `reason`: [declared alternatives](../models/SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributesInput.md#subscriptiondeliverymigrationfailurereasoncountpreviousattributesinputreason). |

### SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributesInput.count

### SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributesInput.count variant 1

anyOf variant 1: Number of subscriptions that failed for this reason..

- Value shape: integer. Number of subscriptions that failed for this reason. Number of subscriptions that failed for this reason. Format: `int64`. 

### SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributesInput.count variant 2

anyOf variant 2.

- Value shape: null. Number of subscriptions that failed for this reason. 

### SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributesInput.reason

### SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributesInput.reason variant 1

anyOf variant 1: Why these subscriptions could not be moved..

- Value shape: string. Why these subscriptions could not be moved. Values: `"method_not_offered"`, `"destination_not_served"`, `"rate_unavailable"`, `"method_unavailable"`, `"no_longer_applicable"`, `"not_movable"`.

### SubscriptionDeliveryMigrationFailureReasonCountPreviousAttributesInput.reason variant 2

anyOf variant 2.

- Value shape: null. Why these subscriptions could not be moved. 

