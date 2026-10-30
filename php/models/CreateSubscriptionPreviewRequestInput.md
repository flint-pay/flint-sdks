[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionPreviewRequestInput

The request body for: Preview subscription.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Conditional | [SubscriptionDeliveryDestinationRequestInput](../models/SubscriptionDeliveryDestinationRequestInput.md#subscriptiondeliverydestinationrequestinput) | Where to deliver a subscription: a saved customer address by ID, or a new address. |
| `mode` | Required | string |  |
| `subscription_id` | Conditional | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `subscription` | Conditional | [CreateSubscriptionRequestInput](../models/CreateSubscriptionRequestInput.md#createsubscriptionrequestinput) | The request body for: Create subscription. |
| `delivery_method` | Conditional | [UpdateDeliveryMethodRequestInput](../models/UpdateDeliveryMethodRequestInput.md#updatedeliverymethodrequestinput) | The request body for: Update delivery method. |
| `delivery_method_id` | Conditional | string | minLength: `1`. pattern: `^dmet_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `billing_interval` | Conditional | string | Send with billing_interval_count to choose a target plan option. Omit both to keep the current interval. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Required when billing_interval is sent; billing_interval is required when this field is sent. minimum: `1`. maximum: `365`. |
| `billing_starts` | Conditional | string | now bills a new period with credit for unused paid item time. next_renewal changes the plan immediately and keeps the current paid period and next billing date. Values: `"now"`, `"next_renewal"`. |
| `line_items` | Conditional | Array of [SubscriptionPlanChangeLineItemRequestInput](../models/SubscriptionPlanChangeLineItemRequestInput.md#subscriptionplanchangelineitemrequestinput) | Optional quantities for target plan lines, with no duplicate IDs. Omitted lines carry their paired current line's quantity, or use the target line's quantity when unpaired. If an adjusted current quantity cannot be paired, send a quantity for every target line. |
| `quantity` | Conditional | integer | Omit to keep the current subscription quantity. The target plan must offer the quantity. Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `100`. |
| `subscription_plan_id` | Conditional | string | minLength: `1`. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CreateSubscriptionPreviewRequestInput variant 1: `mode` = `"delivery_options"`

oneOf with mode: "delivery_options": The `delivery_options` variant of `CreateSubscriptionPreviewRequest`..

- Required: `destination`, `subscription_id`.
- Undeclared: `subscription`, `delivery_method`, `delivery_method_id`, `billing_interval`, `billing_interval_count`, `billing_starts`, `line_items`, `quantity`, `subscription_plan_id`.
- Constraints for `mode`: Values: `"delivery_options"`.

### CreateSubscriptionPreviewRequestInput variant 2: `mode` = `"create"`

oneOf with mode: "create": The `create` variant of `CreateSubscriptionPreviewRequest`..

- Required: `subscription`.
- Undeclared: `destination`, `subscription_id`, `delivery_method`, `delivery_method_id`, `billing_interval`, `billing_interval_count`, `billing_starts`, `line_items`, `quantity`, `subscription_plan_id`.
- Constraints for `mode`: Values: `"create"`.

### CreateSubscriptionPreviewRequestInput variant 3: `mode` = `"delivery_method_update"`

oneOf with mode: "delivery_method_update": The `delivery_method_update` variant of `CreateSubscriptionPreviewRequest`..

- Required: `delivery_method`, `delivery_method_id`.
- Undeclared: `destination`, `subscription_id`, `subscription`, `billing_interval`, `billing_interval_count`, `billing_starts`, `line_items`, `quantity`, `subscription_plan_id`.
- Constraints for `mode`: Values: `"delivery_method_update"`.

### CreateSubscriptionPreviewRequestInput variant 4: `mode` = `"next_renewal"`

oneOf with mode: "next_renewal": The `next_renewal` variant of `CreateSubscriptionPreviewRequest`..

- Required: `subscription_id`.
- Undeclared: `destination`, `subscription`, `delivery_method`, `delivery_method_id`, `billing_interval`, `billing_interval_count`, `billing_starts`, `line_items`, `quantity`, `subscription_plan_id`.
- Constraints for `mode`: Values: `"next_renewal"`.

### CreateSubscriptionPreviewRequestInput variant 5: `mode` = `"plan_change"`

oneOf with mode: "plan_change": The `plan_change` variant of `CreateSubscriptionPreviewRequest`..

- Required: `billing_starts`, `subscription_id`, `subscription_plan_id`.
- Optional: `billing_interval`, `billing_interval_count`, `line_items`, `quantity`.
- Undeclared: `destination`, `subscription`, `delivery_method`, `delivery_method_id`.
- Constraints for `mode`: Values: `"plan_change"`.

