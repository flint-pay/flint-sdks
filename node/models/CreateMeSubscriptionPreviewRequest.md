[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateMeSubscriptionPreviewRequest

The request body for: Preview subscription.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Conditional | [SubscriptionServiceLocationRequest](../models/SubscriptionServiceLocationRequest.md#subscriptionservicelocationrequest) | Address to evaluate each method against: one of the customer's saved addresses or a new address. Where to deliver a subscription: a saved customer address by ID, or a new address. `destination`: [declared alternatives](../models/CreateMeSubscriptionPreviewRequest.md#createmesubscriptionpreviewrequest-variant-1destination). |
| `mode` | Required | string |  |
| `subscription_id` | Required | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `delivery` | Conditional | [SubscriptionDeliveryRequest](../models/SubscriptionDeliveryRequest.md#subscriptiondeliveryrequest) | Proposed complete delivery preference, as accepted by subscription PATCH. Prices the next paid renewal as if this delivery were saved. A held delivery with remaining_prepaid_deliveries greater than zero is already paid: fixing it charges nothing, while this preview still prices the next paid cycle. Nothing is saved, no stock is reserved, and no rate is guaranteed. Refusals match PATCH. The delivery preference to set on a subscription: delivery method, type, destination, and recipient. |
| `swap` | Conditional | [SubscriptionSwapPreviewRequest](../models/SubscriptionSwapPreviewRequest.md#subscriptionswappreviewrequest) |  |
| `billing_interval` | Conditional | string | Send with billing_interval_count to choose a target plan option. Omit both to keep the current interval if the target offers that pair, otherwise use the target plan's default interval and count. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Required when billing_interval is sent; billing_interval is required when this field is sent. minimum: `1`. maximum: `365`. |
| `quantity` | Conditional | integer | Legacy subscription multiplier. Only 1 is accepted; omission keeps the current quantity. Use line_items for multiple units. Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `1`. |
| `subscription_plan_id` | Conditional | string | The target subscription plan. minLength: `1`. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `billing_starts` | Conditional | string | When the quantity change is billed. Previews price only prorated_now; period_end changes are billed at the next renewal. Values: `"prorated_now"`. |
| `expected_version` | Conditional | integer | Reject the preview if the subscription version has changed. Send the same value to change-quantity. Format: `uint64`. minimum: `1`. |
| `line_items` | Conditional | Array of [SubscriptionQuantityChangeLineItemRequest](../models/SubscriptionQuantityChangeLineItemRequest.md#subscriptionquantitychangelineitemrequest) | The frozen adjustable subscription line and its quantity, within min_quantity and max_quantity. Omitted lines keep their quantities. minItems: `1`. maxItems: `50`. |

### CreateMeSubscriptionPreviewRequest variant 1: `mode` = `"delivery_options"`

oneOf with mode: "delivery_options": The `delivery_options` variant of `CreateMeSubscriptionPreviewRequest`..

- Optional: `destination`.
- Undeclared: `delivery`, `swap`, `billing_interval`, `billing_interval_count`, `quantity`, `subscription_plan_id`, `billing_starts`, `expected_version`, `line_items`.
- Constraints for `mode`: Selects the delivery options preview. Values: `"delivery_options"`.
- Constraints for `subscription_id`: ID of the subscription to list delivery methods for.

### CreateMeSubscriptionPreviewRequest variant 2: `mode` = `"next_renewal"`

oneOf with mode: "next_renewal": The `next_renewal` variant of `CreateMeSubscriptionPreviewRequest`..

- Condition: not (present(`swap`, `delivery`)).
- Optional: `delivery`, `swap`.
- Undeclared: `destination`, `billing_interval`, `billing_interval_count`, `quantity`, `subscription_plan_id`, `billing_starts`, `expected_version`, `line_items`.
- Constraints for `mode`: Values: `"next_renewal"`.

### CreateMeSubscriptionPreviewRequest variant 3: `mode` = `"plan_change"`

oneOf with mode: "plan_change": The `plan_change` variant of `CreateMeSubscriptionPreviewRequest`..

- Required: `subscription_plan_id`.
- Optional: `billing_interval`, `billing_interval_count`, `quantity`.
- Undeclared: `destination`, `delivery`, `swap`, `billing_starts`, `expected_version`, `line_items`.
- Constraints for `mode`: The subscription change to preview. Values: `"plan_change"`.
- Constraints for `subscription_id`: The buyer's subscription to preview a plan change for.

### CreateMeSubscriptionPreviewRequest variant 4: `billing_starts` = `"prorated_now"`, `mode` = `"quantity_change"`

oneOf with mode: "quantity_change": The `quantity_change` variant of `CreateMeSubscriptionPreviewRequest`..

- Required: `billing_starts`, `line_items`.
- Optional: `expected_version`.
- Undeclared: `destination`, `delivery`, `swap`, `billing_interval`, `billing_interval_count`, `quantity`, `subscription_plan_id`.
- Constraints for `mode`: The subscription change to preview. Values: `"quantity_change"`.
- Constraints for `subscription_id`: The buyer's subscription to preview a quantity change for.

### CreateMeSubscriptionPreviewRequest variant 1.destination

Address to evaluate each method against: one of the customer's saved addresses or a new address. Where to deliver a subscription: a saved customer address by ID, or a new address.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Conditional | string | ID of the customer's saved address. Flint copies it, so later edits to the saved address don't change the subscription. minLength: `1`. pattern: `^caddr_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"caddr_01KEZF7C00K2Q127FBJAXWB0FP"`. |
| `type` | Required | string |  |
| `address` | Conditional | [AddressRequest](../models/AddressRequest.md#addressrequest) | Delivery address. Flint saves a copy with the subscription. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |

### CreateMeSubscriptionPreviewRequest variant 1.destination variant 1: `type` = `"customer_address"`

oneOf with type: "customer_address": The `customer_address` variant of `SubscriptionDeliveryDestinationInput`..

- Required: `customer_address_id`.
- Undeclared: `address`.
- Constraints for `type`: Selects one of the customer's saved addresses as the destination. Values: `"customer_address"`.

### CreateMeSubscriptionPreviewRequest variant 1.destination variant 2: `type` = `"address"`

oneOf with type: "address": The `address` variant of `SubscriptionDeliveryDestinationInput`..

- Required: `address`.
- Undeclared: `customer_address_id`.
- Constraints for `type`: Selects a new address as the destination. Values: `"address"`.

