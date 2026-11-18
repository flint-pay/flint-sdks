[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPausedDeliveryHoldPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason` | Optional | string or null | Why the expired delivery hold paused the subscription. Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`, `"other"`. `reason`: [declared alternatives](../models/SubscriptionPausedDeliveryHoldPreviousAttributes.md#subscriptionpauseddeliveryholdpreviousattributesreason). |

### SubscriptionPausedDeliveryHoldPreviousAttributes.reason

### SubscriptionPausedDeliveryHoldPreviousAttributes.reason variant 1

anyOf variant 1: Why the expired delivery hold paused the subscription..

- Value shape: string. Why the expired delivery hold paused the subscription. Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`, `"other"`.

### SubscriptionPausedDeliveryHoldPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why the expired delivery hold paused the subscription. 

