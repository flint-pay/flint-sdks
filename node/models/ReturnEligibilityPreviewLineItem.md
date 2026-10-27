[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnEligibilityPreviewLineItem

Return eligibility for one order line item, with the line's details, suggested return reasons, and whether self-service returns are enabled.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_components` | Required | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) |  |
| `bundle_id` | Optional | string |  |
| `can_buyer_request` | Required | boolean | Whether the buyer can request this line themselves, through a customer session, right now. False when no policy covers the item, when it is not eligible, or when the store offers no reason for it. Read eligibility.reason and ineligibility_reason to say why. |
| `description` | Optional | string |  |
| `eligibility` | Required | [ReturnLineItemEligibility](../models/ReturnLineItemEligibility.md#returnlineitemeligibility) | Whether a return line is eligible under policy, with the eligible quantity, allowed resolution types, and any policy adjustments. |
| `fulfillment_id` | Required | string |  |
| `image` | Optional | [Image](../models/Image.md#image) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `modifiers` | Required | Array of [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier) |  |
| `name` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `product_id` | Optional | string |  |
| `requested_quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) |  |
| `sku` | Optional | string |  |
| `suggested_return_reasons` | Required | Array of [ReturnReasonSummary](../models/ReturnReasonSummary.md#returnreasonsummary) | Active reasons that apply to this item, up to 20. Category-scoped reasons come first, then reasons that apply to every item. Each group sorts by handle ascending, with return_reason_id ascending as the tiebreak. maxItems: `20`. |
| `variant_id` | Optional | string |  |

