[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPausedDeliveryHold

The delivery hold that expired and paused this subscription. A manual pause during an active hold is not an expiry. This field does not imply a refund.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason` | Required | string | Why the expired delivery hold paused the subscription. Values: `"method_unavailable"`, `"destination_not_served"`, `"rate_unavailable"`, `"other"`. |

