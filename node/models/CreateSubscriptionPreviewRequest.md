[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionPreviewRequest

The request body for: Preview subscription.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Conditional | [SubscriptionDeliveryDestinationRequest](../models/SubscriptionDeliveryDestinationRequest.md#subscriptiondeliverydestinationrequest) | Where to deliver a subscription: a saved customer address by ID, or a new address. |
| `mode` | Required | string |  |
| `subscription_id` | Conditional | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `subscription` | Conditional | [CreateSubscriptionRequest](../models/CreateSubscriptionRequest.md#createsubscriptionrequest) | The request body for: Create subscription. |
| `delivery_method` | Conditional | [UpdateDeliveryMethodRequest](../models/UpdateDeliveryMethodRequest.md#updatedeliverymethodrequest) | The request body for: Update delivery method. |
| `delivery_method_id` | Conditional | string | minLength: `1`. pattern: `^dmet_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `billing_interval` | Conditional | string | Send with billing_interval_count to choose a target plan option. Omit both to keep the current interval. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Required when billing_interval is sent; billing_interval is required when this field is sent. minimum: `1`. maximum: `365`. |
| `billing_starts` | Conditional | string | now bills a new period with credit for unused paid item time. next_renewal changes the plan immediately and keeps the current paid period and next billing date. Values: `"now"`, `"next_renewal"`. |
| `quantity` | Conditional | integer | Omit to keep the current subscription quantity. The target plan must offer the quantity. Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `100`. |
| `subscription_plan_id` | Conditional | string | minLength: `1`. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CreateSubscriptionPreviewRequest variant 1: `mode` = `"delivery_options"`

oneOf variant 1: The `delivery_options` variant of `CreateSubscriptionPreviewRequest`..

- Required: `destination`, `subscription_id`.
- Undeclared: `subscription`, `delivery_method`, `delivery_method_id`, `billing_interval`, `billing_interval_count`, `billing_starts`, `quantity`, `subscription_plan_id`.
- Constraints for `mode`: Values: `"delivery_options"`.

### CreateSubscriptionPreviewRequest variant 2: `mode` = `"create"`

oneOf variant 2: The `create` variant of `CreateSubscriptionPreviewRequest`..

- Required: `subscription`.
- Undeclared: `destination`, `subscription_id`, `delivery_method`, `delivery_method_id`, `billing_interval`, `billing_interval_count`, `billing_starts`, `quantity`, `subscription_plan_id`.
- Constraints for `mode`: Values: `"create"`.

### CreateSubscriptionPreviewRequest variant 3: `mode` = `"delivery_method_update"`

oneOf variant 3: The `delivery_method_update` variant of `CreateSubscriptionPreviewRequest`..

- Required: `delivery_method`, `delivery_method_id`.
- Undeclared: `destination`, `subscription_id`, `subscription`, `billing_interval`, `billing_interval_count`, `billing_starts`, `quantity`, `subscription_plan_id`.
- Constraints for `mode`: Values: `"delivery_method_update"`.

### CreateSubscriptionPreviewRequest variant 4: `mode` = `"next_renewal"`

oneOf variant 4: The `next_renewal` variant of `CreateSubscriptionPreviewRequest`..

- Required: `subscription_id`.
- Undeclared: `destination`, `subscription`, `delivery_method`, `delivery_method_id`, `billing_interval`, `billing_interval_count`, `billing_starts`, `quantity`, `subscription_plan_id`.
- Constraints for `mode`: Values: `"next_renewal"`.

### CreateSubscriptionPreviewRequest variant 5: `mode` = `"plan_change"`

oneOf variant 5: The `plan_change` variant of `CreateSubscriptionPreviewRequest`..

- Required: `billing_starts`, `subscription_id`, `subscription_plan_id`.
- Optional: `billing_interval`, `billing_interval_count`, `quantity`.
- Undeclared: `destination`, `subscription`, `delivery_method`, `delivery_method_id`.
- Constraints for `mode`: Values: `"plan_change"`.

