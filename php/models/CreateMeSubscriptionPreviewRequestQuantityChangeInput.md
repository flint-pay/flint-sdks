[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateMeSubscriptionPreviewRequestQuantityChangeInput

The `quantity_change` variant of `CreateMeSubscriptionPreviewRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_starts` | Required | string | When the quantity change is billed. Previews price only prorated_now; period_end changes are billed at the next renewal. Values: `"prorated_now"`. |
| `expected_version` | Optional | integer | Reject the preview if the subscription version has changed. Send the same value to change-quantity. Format: `uint64`. minimum: `1`. |
| `line_items` | Required | Array of [SubscriptionQuantityChangeLineItemRequestInput](../models/SubscriptionQuantityChangeLineItemRequestInput.md#subscriptionquantitychangelineitemrequestinput) | The frozen adjustable subscription line and its quantity, within min_quantity and max_quantity. Omitted lines keep their quantities. minItems: `1`. maxItems: `50`. |
| `mode` | Required | string | The subscription change to preview. Values: `"quantity_change"`. |
| `subscription_id` | Required | string | The buyer's subscription to preview a quantity change for. minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |

