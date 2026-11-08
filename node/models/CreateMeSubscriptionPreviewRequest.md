[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateMeSubscriptionPreviewRequest

The request body for: Preview subscription.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Conditional | [SubscriptionServiceLocationRequest](../models/SubscriptionServiceLocationRequest.md#subscriptionservicelocationrequest) | Where to deliver a subscription: a saved customer address by ID, or a new address. `destination`: [declared alternatives](../models/CreateMeSubscriptionPreviewRequest.md#createmesubscriptionpreviewrequest-variant-1destination). |
| `mode` | Required | string |  |
| `subscription_id` | Required | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `billing_interval` | Conditional | string | Send with billing_interval_count to choose a target plan option. Omit both to keep the current interval if the target offers that pair, otherwise use the target plan's default interval and count. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Required when billing_interval is sent; billing_interval is required when this field is sent. minimum: `1`. maximum: `365`. |
| `quantity` | Conditional | integer | Omit to keep the current subscription quantity. The target plan must offer the quantity. Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `100`. |
| `subscription_plan_id` | Conditional | string | The target subscription plan. minLength: `1`. pattern: `^plan_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `billing_starts` | Conditional | string | When the quantity change is billed. Previews price only prorated_now; period_end changes are billed at the next renewal. Values: `"prorated_now"`. |
| `expected_version` | Conditional | integer | Reject the preview if the subscription version has changed. Send the same value to change-quantity. Format: `uint64`. minimum: `1`. |
| `line_items` | Conditional | Array of [SubscriptionQuantityChangeLineItemRequest](../models/SubscriptionQuantityChangeLineItemRequest.md#subscriptionquantitychangelineitemrequest) | The frozen adjustable subscription line and its quantity, within min_quantity and max_quantity. Omitted lines keep their quantities. minItems: `1`. maxItems: `50`. |

### CreateMeSubscriptionPreviewRequest variant 1: `mode` = `"delivery_options"`

oneOf with mode: "delivery_options": The `delivery_options` variant of `CreateMeSubscriptionPreviewRequest`..

- Required: `destination`.
- Undeclared: `billing_interval`, `billing_interval_count`, `quantity`, `subscription_plan_id`, `billing_starts`, `expected_version`, `line_items`.
- Constraints for `mode`: Values: `"delivery_options"`.

### CreateMeSubscriptionPreviewRequest variant 2: `mode` = `"next_renewal"`

oneOf with mode: "next_renewal": The `next_renewal` variant of `CreateMeSubscriptionPreviewRequest`..

- Undeclared: `destination`, `billing_interval`, `billing_interval_count`, `quantity`, `subscription_plan_id`, `billing_starts`, `expected_version`, `line_items`.
- Constraints for `mode`: Values: `"next_renewal"`.

### CreateMeSubscriptionPreviewRequest variant 3: `mode` = `"plan_change"`

oneOf with mode: "plan_change": The `plan_change` variant of `CreateMeSubscriptionPreviewRequest`..

- Required: `subscription_plan_id`.
- Optional: `billing_interval`, `billing_interval_count`, `quantity`.
- Undeclared: `destination`, `billing_starts`, `expected_version`, `line_items`.
- Constraints for `mode`: The subscription change to preview. Values: `"plan_change"`.
- Constraints for `subscription_id`: The buyer's subscription to preview a plan change for.

### CreateMeSubscriptionPreviewRequest variant 4: `billing_starts` = `"prorated_now"`, `mode` = `"quantity_change"`

oneOf with mode: "quantity_change": The `quantity_change` variant of `CreateMeSubscriptionPreviewRequest`..

- Required: `billing_starts`, `line_items`.
- Optional: `expected_version`.
- Undeclared: `destination`, `billing_interval`, `billing_interval_count`, `quantity`, `subscription_plan_id`.
- Constraints for `mode`: The subscription change to preview. Values: `"quantity_change"`.
- Constraints for `subscription_id`: The buyer's subscription to preview a quantity change for.

### CreateMeSubscriptionPreviewRequest variant 1.destination

Where to deliver a subscription: a saved customer address by ID, or a new address.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Conditional | string | minLength: `1`. pattern: `^caddr_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"caddr_01KEZF7C00K2Q127FBJAXWB0FP"`. |
| `type` | Required | string |  |
| `address` | Conditional | [AddressRequest](../models/AddressRequest.md#addressrequest) | A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |

### CreateMeSubscriptionPreviewRequest variant 1.destination variant 1: `type` = `"customer_address"`

oneOf with type: "customer_address": The `customer_address` variant of `SubscriptionDeliveryDestinationInput`..

- Required: `customer_address_id`.
- Undeclared: `address`.
- Constraints for `type`: Values: `"customer_address"`.

### CreateMeSubscriptionPreviewRequest variant 1.destination variant 2: `type` = `"address"`

oneOf with type: "address": The `address` variant of `SubscriptionDeliveryDestinationInput`..

- Required: `address`.
- Undeclared: `customer_address_id`.
- Constraints for `type`: Values: `"address"`.

