[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPausedDeliveryHoldPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason` | Optional | string or null | Why the expired delivery hold paused the subscription. Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`, `"other"`. `reason`: [declared alternatives](../models/SubscriptionPausedDeliveryHoldPreviousAttributesInput.md#subscriptionpauseddeliveryholdpreviousattributesinputreason). |

### SubscriptionPausedDeliveryHoldPreviousAttributesInput.reason

### SubscriptionPausedDeliveryHoldPreviousAttributesInput.reason variant 1

anyOf variant 1: Why the expired delivery hold paused the subscription..

- Value shape: string. Why the expired delivery hold paused the subscription. Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`, `"other"`.

### SubscriptionPausedDeliveryHoldPreviousAttributesInput.reason variant 2

anyOf variant 2.

- Value shape: null. Why the expired delivery hold paused the subscription. 

