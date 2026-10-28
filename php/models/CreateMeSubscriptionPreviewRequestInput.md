[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateMeSubscriptionPreviewRequestInput

The request body for: Preview subscription.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Conditional | [SubscriptionDeliveryDestinationRequestInput](../models/SubscriptionDeliveryDestinationRequestInput.md#subscriptiondeliverydestinationrequestinput) | Where to deliver a subscription: a saved customer address by ID, or a new address. |
| `mode` | Required | string |  |
| `subscription_id` | Required | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CreateMeSubscriptionPreviewRequestInput variant 1: `mode` = `"delivery_options"`

oneOf variant 1: The `delivery_options` variant of `CreateMeSubscriptionPreviewRequest`..

- Required: `destination`.
- Constraints for `mode`: Values: `"delivery_options"`.

### CreateMeSubscriptionPreviewRequestInput variant 2: `mode` = `"next_renewal"`

oneOf variant 2: The `next_renewal` variant of `CreateMeSubscriptionPreviewRequest`..

- Undeclared: `destination`.
- Constraints for `mode`: Values: `"next_renewal"`.

