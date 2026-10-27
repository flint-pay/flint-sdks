[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionPreviewRequestDeliveryOptionsInput

The `delivery_options` variant of `CreateSubscriptionPreviewRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Required | [SubscriptionDeliveryDestinationRequestInput](../models/SubscriptionDeliveryDestinationRequestInput.md#subscriptiondeliverydestinationrequestinput) | Where to deliver a subscription: a saved customer address by ID, or a new address. |
| `mode` | Required | string | Values: `"delivery_options"`. |
| `subscription_id` | Required | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. |

