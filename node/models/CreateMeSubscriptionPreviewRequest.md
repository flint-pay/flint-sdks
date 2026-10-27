[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateMeSubscriptionPreviewRequest

The request body for: Preview subscription.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Conditional | [SubscriptionDeliveryDestinationRequest](../models/SubscriptionDeliveryDestinationRequest.md#subscriptiondeliverydestinationrequest) | Where to deliver a subscription: a saved customer address by ID, or a new address. |
| `mode` | Required | string |  |
| `subscription_id` | Required | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CreateMeSubscriptionPreviewRequest variant 1: `mode` = `"delivery_options"`

oneOf variant 1.

- Required: `destination`.
- Constraints for `mode`: Values: `"delivery_options"`.

### CreateMeSubscriptionPreviewRequest variant 2: `mode` = `"next_renewal"`

oneOf variant 2.

- Undeclared: `destination`.
- Constraints for `mode`: Values: `"next_renewal"`.

