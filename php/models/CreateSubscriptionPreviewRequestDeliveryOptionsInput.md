[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionPreviewRequestDeliveryOptionsInput

The `delivery_options` variant of `CreateSubscriptionPreviewRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Required | [SubscriptionDeliveryDestinationRequestInput](../models/SubscriptionDeliveryDestinationRequestInput.md#subscriptiondeliverydestinationrequestinput) | Address to evaluate each method against: one of the customer's saved addresses or a new address. Where to deliver a subscription: a saved customer address by ID, or a new address. |
| `mode` | Required | string | Selects the delivery options preview. Values: `"delivery_options"`. |
| `subscription_id` | Required | string | ID of the subscription to list delivery methods for. minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |

