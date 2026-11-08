[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionPreviewRequestInput

The request body for: Preview subscription.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Conditional | [SubscriptionDeliveryDestinationRequestInput](../models/SubscriptionDeliveryDestinationRequestInput.md#subscriptiondeliverydestinationrequestinput) | Where to deliver a subscription: a saved customer address by ID, or a new address. |
| `mode` | Required | string |  |
| `subscription_id` | Conditional | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription` | Conditional | [CreateSubscriptionRequestInput](../models/CreateSubscriptionRequestInput.md#createsubscriptionrequestinput) | The request body for: Create subscription. |
| `delivery_method` | Conditional | [UpdateDeliveryMethodRequestInput](../models/UpdateDeliveryMethodRequestInput.md#updatedeliverymethodrequestinput) | The request body for: Update delivery method. |
| `delivery_method_id` | Conditional | string | minLength: `1`. pattern: `^dmet_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `billing_interval` | Conditional | string | Send with billing_interval_count to choose a target plan option. Omit both to keep the current interval if the target offers that pair, otherwise use the target plan's default interval and count. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Required when billing_interval is sent; billing_interval is required when this field is sent. minimum: `1`. maximum: `365`. |
| `billing_starts` | Conditional | string |  |
| `line_items` | Conditional | Varies by condition |  |
| `quantity` | Conditional | integer | minimum: `1`. maximum: `100`. |
| `subscription_plan_id` | Conditional | string | The target subscription plan. minLength: `1`. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `expected_version` | Conditional | integer | Reject the request if the subscription version has changed. Format: `uint64`. minimum: `1`. |
| `first_cycle` | Conditional | integer | First charged cycle eligible for this promotion. Defaults to the next cycle without a renewal order, which is also the minimum: completed_cycles + 1, or completed_cycles + 2 while past_due. The maximum is completed_cycles + 120. The unpaid past_due order keeps its price. Format: `uint64`. minimum: `1`. |
| `promotion` | Conditional | [PromotionRefRequestInput](../models/PromotionRefRequestInput.md#promotionrefrequestinput) | Promotion to attach. Reattaching a removed promotion freezes its current terms and keeps its consumed cycles. Identifies the promotion to apply, by promotion code or by promotion ID. |
| `replace_promotion_id` | Conditional | string | Active or scheduled promotion to replace. It stops applying from first_cycle and continues to apply to earlier cycles. Must differ from the new promotion. An offer's own promotion cannot be replaced. minLength: `1`. pattern: `^promo_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. |

### CreateSubscriptionPreviewRequestInput variant 1: `mode` = `"delivery_options"`

oneOf with mode: "delivery_options": The `delivery_options` variant of `CreateSubscriptionPreviewRequest`..

- Required: `destination`, `subscription_id`.
- Undeclared: `subscription`, `delivery_method`, `delivery_method_id`, `billing_interval`, `billing_interval_count`, `billing_starts`, `line_items`, `quantity`, `subscription_plan_id`, `expected_version`, `first_cycle`, `promotion`, `replace_promotion_id`.
- Constraints for `mode`: Values: `"delivery_options"`.

### CreateSubscriptionPreviewRequestInput variant 2: `mode` = `"create"`

oneOf with mode: "create": The `create` variant of `CreateSubscriptionPreviewRequest`..

- Required: `subscription`.
- Undeclared: `destination`, `subscription_id`, `delivery_method`, `delivery_method_id`, `billing_interval`, `billing_interval_count`, `billing_starts`, `line_items`, `quantity`, `subscription_plan_id`, `expected_version`, `first_cycle`, `promotion`, `replace_promotion_id`.
- Constraints for `mode`: Values: `"create"`.

### CreateSubscriptionPreviewRequestInput variant 3: `mode` = `"delivery_method_update"`

oneOf with mode: "delivery_method_update": The `delivery_method_update` variant of `CreateSubscriptionPreviewRequest`..

- Required: `delivery_method`, `delivery_method_id`.
- Undeclared: `destination`, `subscription_id`, `subscription`, `billing_interval`, `billing_interval_count`, `billing_starts`, `line_items`, `quantity`, `subscription_plan_id`, `expected_version`, `first_cycle`, `promotion`, `replace_promotion_id`.
- Constraints for `mode`: Values: `"delivery_method_update"`.

### CreateSubscriptionPreviewRequestInput variant 4: `mode` = `"next_renewal"`

oneOf with mode: "next_renewal": The `next_renewal` variant of `CreateSubscriptionPreviewRequest`..

- Required: `subscription_id`.
- Undeclared: `destination`, `subscription`, `delivery_method`, `delivery_method_id`, `billing_interval`, `billing_interval_count`, `billing_starts`, `line_items`, `quantity`, `subscription_plan_id`, `expected_version`, `first_cycle`, `promotion`, `replace_promotion_id`.
- Constraints for `mode`: Values: `"next_renewal"`.

### CreateSubscriptionPreviewRequestInput variant 5: `mode` = `"plan_change"`

oneOf with mode: "plan_change": The `plan_change` variant of `CreateSubscriptionPreviewRequest`..

- Required: `billing_starts`, `subscription_id`, `subscription_plan_id`.
- Optional: `billing_interval`, `billing_interval_count`, `line_items`, `quantity`.
- Undeclared: `destination`, `subscription`, `delivery_method`, `delivery_method_id`, `expected_version`, `first_cycle`, `promotion`, `replace_promotion_id`.
- Constraints for `billing_starts`: now bills a new period with credit for unused paid item time. next_renewal changes the plan immediately and keeps the current paid period and next billing date. period_end keeps the current plan until the next charged renewal, then applies and bills the scheduled terms. prorated_now charges the new terms for the rest of the current period, less unused paid item credit, and keeps the billing period and anchor. Values: `"now"`, `"next_renewal"`, `"period_end"`, `"prorated_now"`.
- Constraints for `line_items`: Array of [SubscriptionPlanChangeLineItemRequestInput](../models/SubscriptionPlanChangeLineItemRequestInput.md#subscriptionplanchangelineitemrequestinput). Optional quantities for target plan lines, with no duplicate IDs. Omitted lines carry their paired current line's quantity, or use the target line's quantity when unpaired. If an adjusted current quantity cannot be paired, send a quantity for every target line.
- Constraints for `mode`: Values: `"plan_change"`.
- Constraints for `quantity`: Omit to keep the current subscription quantity. The target plan must offer the quantity. Whole-number quantity; fractional quantities are not supported.

### CreateSubscriptionPreviewRequestInput variant 6: `billing_starts` = `"prorated_now"`, `mode` = `"quantity_change"`

oneOf with mode: "quantity_change": The `quantity_change` variant of `CreateSubscriptionPreviewRequest`.; anyOf variant 1.

- Required: `billing_starts`, `quantity`, `subscription_id`.
- Optional: `expected_version`, `line_items`.
- Undeclared: `destination`, `subscription`, `delivery_method`, `delivery_method_id`, `billing_interval`, `billing_interval_count`, `subscription_plan_id`, `first_cycle`, `promotion`, `replace_promotion_id`.
- Constraints for `billing_starts`: Charge the prorated difference now while keeping the period and anchor. Values: `"prorated_now"`.
- Constraints for `line_items`: Array of [SubscriptionQuantityChangeLineItemRequestInput](../models/SubscriptionQuantityChangeLineItemRequestInput.md#subscriptionquantitychangelineitemrequestinput). Quantities for existing subscription lines, with distinct IDs. Omitted lines keep their quantities. Send quantity or line_items. minItems: `1`. maxItems: `50`.
- Constraints for `mode`: The kind of subscription pricing estimate to create. Values: `"quantity_change"`.
- Constraints for `quantity`: The whole-number subscription multiplier; fractional quantities are not supported. Validated as on subscription PATCH. Omit to keep its current value. Send quantity or line_items.
- Constraints for `subscription_id`: The subscription whose quantities will change.

### CreateSubscriptionPreviewRequestInput variant 7: `billing_starts` = `"prorated_now"`, `mode` = `"quantity_change"`

oneOf with mode: "quantity_change": The `quantity_change` variant of `CreateSubscriptionPreviewRequest`.; anyOf variant 2.

- Required: `billing_starts`, `line_items`, `subscription_id`.
- Optional: `expected_version`, `quantity`.
- Undeclared: `destination`, `subscription`, `delivery_method`, `delivery_method_id`, `billing_interval`, `billing_interval_count`, `subscription_plan_id`, `first_cycle`, `promotion`, `replace_promotion_id`.
- Constraints for `billing_starts`: Charge the prorated difference now while keeping the period and anchor. Values: `"prorated_now"`.
- Constraints for `line_items`: Array of [SubscriptionQuantityChangeLineItemRequestInput](../models/SubscriptionQuantityChangeLineItemRequestInput.md#subscriptionquantitychangelineitemrequestinput). Quantities for existing subscription lines, with distinct IDs. Omitted lines keep their quantities. Send quantity or line_items. minItems: `1`. maxItems: `50`.
- Constraints for `mode`: The kind of subscription pricing estimate to create. Values: `"quantity_change"`.
- Constraints for `quantity`: The whole-number subscription multiplier; fractional quantities are not supported. Validated as on subscription PATCH. Omit to keep its current value. Send quantity or line_items.
- Constraints for `subscription_id`: The subscription whose quantities will change.

### CreateSubscriptionPreviewRequestInput variant 8: `mode` = `"promotion_apply"`

oneOf with mode: "promotion_apply": The `promotion_apply` variant of `CreateSubscriptionPreviewRequest`..

- Required: `promotion`, `subscription_id`.
- Optional: `first_cycle`, `replace_promotion_id`.
- Undeclared: `destination`, `subscription`, `delivery_method`, `delivery_method_id`, `billing_interval`, `billing_interval_count`, `billing_starts`, `line_items`, `quantity`, `subscription_plan_id`, `expected_version`.
- Constraints for `mode`: Preview applying a promotion to an existing subscription without saving changes. Values: `"promotion_apply"`.
- Constraints for `subscription_id`: ID of the subscription to preview.

