[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionPreviewRequestDeliveryOptions

The `delivery_options` variant of `CreateSubscriptionPreviewRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Required | [SubscriptionDeliveryDestinationRequest](../models/SubscriptionDeliveryDestinationRequest.md#subscriptiondeliverydestinationrequest) | Where to deliver a subscription: a saved customer address by ID, or a new address. |
| `mode` | Required | string | Values: `"delivery_options"`. |
| `subscription_id` | Required | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. |

