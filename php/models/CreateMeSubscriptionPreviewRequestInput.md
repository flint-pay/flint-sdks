[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateMeSubscriptionPreviewRequestInput

The request body for: Preview subscription.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Conditional | [SubscriptionDeliveryDestinationRequestInput](../models/SubscriptionDeliveryDestinationRequestInput.md#subscriptiondeliverydestinationrequestinput) | Where to deliver a subscription: a saved customer address by ID, or a new address. |
| `mode` | Required | string |  |
| `subscription_id` | Required | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `billing_interval` | Conditional | string | Send with billing_interval_count to choose a target plan option. Omit both to keep the current interval if the target offers that pair, otherwise use the target plan's default interval and count. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Required when billing_interval is sent; billing_interval is required when this field is sent. minimum: `1`. maximum: `365`. |
| `quantity` | Conditional | integer | Omit to keep the current subscription quantity. The target plan must offer the quantity. Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `100`. |
| `subscription_plan_id` | Conditional | string | The target subscription plan. minLength: `1`. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `billing_starts` | Conditional | string | When the quantity change is billed. Previews price only prorated_now; period_end changes are billed at the next renewal. Values: `"prorated_now"`. |
| `expected_version` | Conditional | integer | Reject the preview if the subscription version has changed. Send the same value to change-quantity. Format: `uint64`. minimum: `1`. |
| `line_items` | Conditional | Array of [SubscriptionQuantityChangeLineItemRequestInput](../models/SubscriptionQuantityChangeLineItemRequestInput.md#subscriptionquantitychangelineitemrequestinput) | The frozen adjustable subscription line and its quantity, within min_quantity and max_quantity. Omitted lines keep their quantities. minItems: `1`. maxItems: `50`. |

### CreateMeSubscriptionPreviewRequestInput variant 1: `mode` = `"delivery_options"`

oneOf with mode: "delivery_options": The `delivery_options` variant of `CreateMeSubscriptionPreviewRequest`..

- Required: `destination`.
- Undeclared: `billing_interval`, `billing_interval_count`, `quantity`, `subscription_plan_id`, `billing_starts`, `expected_version`, `line_items`.
- Constraints for `mode`: Values: `"delivery_options"`.

### CreateMeSubscriptionPreviewRequestInput variant 2: `mode` = `"next_renewal"`

oneOf with mode: "next_renewal": The `next_renewal` variant of `CreateMeSubscriptionPreviewRequest`..

- Undeclared: `destination`, `billing_interval`, `billing_interval_count`, `quantity`, `subscription_plan_id`, `billing_starts`, `expected_version`, `line_items`.
- Constraints for `mode`: Values: `"next_renewal"`.

### CreateMeSubscriptionPreviewRequestInput variant 3: `mode` = `"plan_change"`

oneOf with mode: "plan_change": The `plan_change` variant of `CreateMeSubscriptionPreviewRequest`..

- Required: `subscription_plan_id`.
- Optional: `billing_interval`, `billing_interval_count`, `quantity`.
- Undeclared: `destination`, `billing_starts`, `expected_version`, `line_items`.
- Constraints for `mode`: The subscription change to preview. Values: `"plan_change"`.
- Constraints for `subscription_id`: The buyer's subscription to preview a plan change for.

### CreateMeSubscriptionPreviewRequestInput variant 4: `billing_starts` = `"prorated_now"`, `mode` = `"quantity_change"`

oneOf with mode: "quantity_change": The `quantity_change` variant of `CreateMeSubscriptionPreviewRequest`..

- Required: `billing_starts`, `line_items`.
- Optional: `expected_version`.
- Undeclared: `destination`, `billing_interval`, `billing_interval_count`, `quantity`, `subscription_plan_id`.
- Constraints for `mode`: The subscription change to preview. Values: `"quantity_change"`.
- Constraints for `subscription_id`: The buyer's subscription to preview a quantity change for.

