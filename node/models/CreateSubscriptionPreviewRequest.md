[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionPreviewRequest

The request body for: Preview subscription.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Conditional | [SubscriptionServiceLocationRequest](../models/SubscriptionServiceLocationRequest.md#subscriptionservicelocationrequest) | Address to evaluate each method against: one of the customer's saved addresses or a new address. Where to deliver a subscription: a saved customer address by ID, or a new address. `destination`: [declared alternatives](../models/CreateMeSubscriptionPreviewRequest.md#createmesubscriptionpreviewrequest-variant-1destination). |
| `mode` | Required | string |  |
| `subscription_id` | Conditional | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription` | Conditional | [CreateSubscriptionRequest](../models/CreateSubscriptionRequest.md#createsubscriptionrequest) | The request body for: Create subscription. |
| `delivery_method` | Conditional | [UpdateDeliveryMethodRequest](../models/UpdateDeliveryMethodRequest.md#updatedeliverymethodrequest) | The edit to preview, in the same shape as an update to the delivery method. Flint saves nothing. The request body for: Update delivery method. minProperties: `1`. |
| `delivery_method_id` | Conditional | string | ID of the delivery method whose edit to preview. minLength: `1`. pattern: `^dmet_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery` | Conditional | [SubscriptionDeliveryRequest](../models/SubscriptionDeliveryRequest.md#subscriptiondeliveryrequest) | Proposed complete delivery preference, as accepted by subscription PATCH. Prices the next paid renewal as if this delivery were saved. A held delivery with remaining_prepaid_deliveries greater than zero is already paid: fixing it charges nothing, while this preview still prices the next paid cycle. Nothing is saved, no stock is reserved, and no rate is guaranteed. Refusals match PATCH. The delivery preference to set on a subscription: delivery method, type, destination, and recipient. |
| `billing_interval` | Conditional | string | Send with billing_interval_count to choose a target plan option. Omit both to keep the current interval if the target offers that pair, otherwise use the target plan's default interval and count. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Required when billing_interval is sent; billing_interval is required when this field is sent. minimum: `1`. maximum: `365`. |
| `billing_starts` | Conditional | string |  |
| `line_items` | Conditional | Varies by condition |  |
| `quantity` | Conditional | integer | minimum: `1`. maximum: `100`. |
| `subscription_plan_id` | Conditional | string | The target subscription plan. minLength: `1`. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `expected_version` | Conditional | integer | Reject the request if the subscription version has changed. Format: `uint64`. minimum: `1`. |
| `first_cycle` | Conditional | integer | First charged cycle eligible for this promotion. Defaults to the next cycle without a renewal order, which is also the minimum: completed_cycles + 1, or completed_cycles + 2 while past_due. The maximum is completed_cycles + 120. The unpaid past_due order keeps its price. Format: `uint64`. minimum: `1`. |
| `promotion` | Conditional | [PromotionRefRequest](../models/PromotionRefRequest.md#promotionrefrequest) | Promotion to attach. Reattaching a removed promotion freezes its current terms and keeps its consumed cycles. Identifies the promotion to apply, by promotion code or by promotion ID. |
| `replace_promotion_id` | Conditional | string | Active or scheduled promotion to replace. It stops applying from first_cycle and continues to apply to earlier cycles. Must differ from the new promotion. An offer's own promotion cannot be replaced. minLength: `1`. pattern: `^promo_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. |

### CreateSubscriptionPreviewRequest variant 1: `mode` = `"delivery_options"`

oneOf with mode: "delivery_options": The `delivery_options` variant of `CreateSubscriptionPreviewRequest`..

- Required: `destination`, `subscription_id`.
- Undeclared: `subscription`, `delivery_method`, `delivery_method_id`, `delivery`, `billing_interval`, `billing_interval_count`, `billing_starts`, `line_items`, `quantity`, `subscription_plan_id`, `expected_version`, `first_cycle`, `promotion`, `replace_promotion_id`.
- Constraints for `mode`: Selects the delivery options preview. Values: `"delivery_options"`.
- Constraints for `subscription_id`: ID of the subscription to list delivery methods for.

### CreateSubscriptionPreviewRequest variant 2: `mode` = `"create"`

oneOf with mode: "create": The `create` variant of `CreateSubscriptionPreviewRequest`..

- Required: `subscription`.
- Undeclared: `destination`, `subscription_id`, `delivery_method`, `delivery_method_id`, `delivery`, `billing_interval`, `billing_interval_count`, `billing_starts`, `line_items`, `quantity`, `subscription_plan_id`, `expected_version`, `first_cycle`, `promotion`, `replace_promotion_id`.
- Constraints for `mode`: Values: `"create"`.

### CreateSubscriptionPreviewRequest variant 3: `mode` = `"delivery_method_update"`

oneOf with mode: "delivery_method_update": The `delivery_method_update` variant of `CreateSubscriptionPreviewRequest`..

- Required: `delivery_method`, `delivery_method_id`.
- Undeclared: `destination`, `subscription_id`, `subscription`, `delivery`, `billing_interval`, `billing_interval_count`, `billing_starts`, `line_items`, `quantity`, `subscription_plan_id`, `expected_version`, `first_cycle`, `promotion`, `replace_promotion_id`.
- Constraints for `mode`: Selects the delivery method update preview. Values: `"delivery_method_update"`.

### CreateSubscriptionPreviewRequest variant 4: `mode` = `"next_renewal"`

oneOf with mode: "next_renewal": The `next_renewal` variant of `CreateSubscriptionPreviewRequest`..

- Required: `subscription_id`.
- Optional: `delivery`.
- Undeclared: `destination`, `subscription`, `delivery_method`, `delivery_method_id`, `billing_interval`, `billing_interval_count`, `billing_starts`, `line_items`, `quantity`, `subscription_plan_id`, `expected_version`, `first_cycle`, `promotion`, `replace_promotion_id`.
- Constraints for `mode`: Values: `"next_renewal"`.

### CreateSubscriptionPreviewRequest variant 5: `mode` = `"plan_change"`

oneOf with mode: "plan_change": The `plan_change` variant of `CreateSubscriptionPreviewRequest`..

- Required: `billing_starts`, `subscription_id`, `subscription_plan_id`.
- Optional: `billing_interval`, `billing_interval_count`, `line_items`, `quantity`.
- Undeclared: `destination`, `subscription`, `delivery_method`, `delivery_method_id`, `delivery`, `expected_version`, `first_cycle`, `promotion`, `replace_promotion_id`.
- Constraints for `billing_starts`: now bills a new period with credit for unused paid item time. next_renewal changes the plan immediately and keeps the current paid period and next billing date. period_end keeps the current plan until the next charged renewal, then applies and bills the scheduled terms. prorated_now charges the new terms for the rest of the current period, less unused paid item credit, and keeps the billing period and anchor. Values: `"now"`, `"next_renewal"`, `"period_end"`, `"prorated_now"`.
- Constraints for `line_items`: Array of [SubscriptionPlanChangeLineItemRequest](../models/SubscriptionPlanChangeLineItemRequest.md#subscriptionplanchangelineitemrequest). Optional quantities for target plan lines, with no duplicate IDs. Omitted lines carry their paired current line's quantity, or use the target line's quantity when unpaired. If an adjusted current quantity cannot be paired, send a quantity for every target line.
- Constraints for `mode`: Values: `"plan_change"`.
- Constraints for `quantity`: Omit to keep the current subscription quantity. The target plan must offer the quantity. Whole-number quantity; fractional quantities are not supported.

### CreateSubscriptionPreviewRequest variant 6: `billing_starts` = `"prorated_now"`, `mode` = `"quantity_change"`

oneOf with mode: "quantity_change": The `quantity_change` variant of `CreateSubscriptionPreviewRequest`.; anyOf variant 1.

- Required: `billing_starts`, `quantity`, `subscription_id`.
- Optional: `expected_version`, `line_items`.
- Undeclared: `destination`, `subscription`, `delivery_method`, `delivery_method_id`, `delivery`, `billing_interval`, `billing_interval_count`, `subscription_plan_id`, `first_cycle`, `promotion`, `replace_promotion_id`.
- Constraints for `billing_starts`: Charge the prorated difference now while keeping the period and anchor. Values: `"prorated_now"`.
- Constraints for `line_items`: Array of [SubscriptionQuantityChangeLineItemRequest](../models/SubscriptionQuantityChangeLineItemRequest.md#subscriptionquantitychangelineitemrequest). Quantities for existing subscription lines, with distinct IDs. Omitted lines keep their quantities. Send quantity or line_items. minItems: `1`. maxItems: `50`.
- Constraints for `mode`: The kind of subscription pricing estimate to create. Values: `"quantity_change"`.
- Constraints for `quantity`: The whole-number subscription multiplier; fractional quantities are not supported. Validated as on subscription PATCH. Omit to keep its current value. Send quantity or line_items.
- Constraints for `subscription_id`: The subscription whose quantities will change.

### CreateSubscriptionPreviewRequest variant 7: `billing_starts` = `"prorated_now"`, `mode` = `"quantity_change"`

oneOf with mode: "quantity_change": The `quantity_change` variant of `CreateSubscriptionPreviewRequest`.; anyOf variant 2.

- Required: `billing_starts`, `line_items`, `subscription_id`.
- Optional: `expected_version`, `quantity`.
- Undeclared: `destination`, `subscription`, `delivery_method`, `delivery_method_id`, `delivery`, `billing_interval`, `billing_interval_count`, `subscription_plan_id`, `first_cycle`, `promotion`, `replace_promotion_id`.
- Constraints for `billing_starts`: Charge the prorated difference now while keeping the period and anchor. Values: `"prorated_now"`.
- Constraints for `line_items`: Array of [SubscriptionQuantityChangeLineItemRequest](../models/SubscriptionQuantityChangeLineItemRequest.md#subscriptionquantitychangelineitemrequest). Quantities for existing subscription lines, with distinct IDs. Omitted lines keep their quantities. Send quantity or line_items. minItems: `1`. maxItems: `50`.
- Constraints for `mode`: The kind of subscription pricing estimate to create. Values: `"quantity_change"`.
- Constraints for `quantity`: The whole-number subscription multiplier; fractional quantities are not supported. Validated as on subscription PATCH. Omit to keep its current value. Send quantity or line_items.
- Constraints for `subscription_id`: The subscription whose quantities will change.

### CreateSubscriptionPreviewRequest variant 8: `mode` = `"promotion_apply"`

oneOf with mode: "promotion_apply": The `promotion_apply` variant of `CreateSubscriptionPreviewRequest`..

- Required: `promotion`, `subscription_id`.
- Optional: `first_cycle`, `replace_promotion_id`.
- Undeclared: `destination`, `subscription`, `delivery_method`, `delivery_method_id`, `delivery`, `billing_interval`, `billing_interval_count`, `billing_starts`, `line_items`, `quantity`, `subscription_plan_id`, `expected_version`.
- Constraints for `mode`: Preview applying a promotion to an existing subscription without saving changes. Values: `"promotion_apply"`.
- Constraints for `subscription_id`: ID of the subscription to preview.

### CreateSubscriptionPreviewRequest variant 1.destination

Declared alternatives: [CreateMeSubscriptionPreviewRequest variant 1.destination](../models/CreateMeSubscriptionPreviewRequest.md#createmesubscriptionpreviewrequest-variant-1destination).

