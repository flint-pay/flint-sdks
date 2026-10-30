[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnEligibilityPreviewLineItem

An order line item's Return eligibility, catalog details, and suggested return reasons shown to the buyer.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_components` | Required | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) |  |
| `bundle_id` | Optional | string |  |
| `can_buyer_request` | Required | boolean | Whether the buyer can request this line themselves, through a customer session, right now. False when no policy covers the item, when it is not eligible, or when the store offers no reason for it. Read eligibility.reason and ineligibility_reason to say why. |
| `description` | Optional | string |  |
| `eligibility` | Required | [BuyerReturnLineItemEligibility](../models/BuyerReturnLineItemEligibility.md#buyerreturnlineitemeligibility) | An item's Return eligibility, eligible quantity, allowed resolution types, and eligibility reasons shown to the buyer. |
| `fulfillment_id` | Required | string |  |
| `image` | Optional | [Image](../models/Image.md#image) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `modifiers` | Required | Array of [BuyerReturnLineItemModifier](../models/BuyerReturnLineItemModifier.md#buyerreturnlineitemmodifier) |  |
| `name` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `product_id` | Optional | string |  |
| `requested_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) |  |
| `sku` | Optional | string |  |
| `suggested_return_reasons` | Required | Array of [ReturnReasonSummary](../models/ReturnReasonSummary.md#returnreasonsummary) | Active reasons that apply to this item, up to 20. Category-scoped reasons come first, then reasons that apply to every item. Each group sorts by handle ascending, with return_reason_id ascending as the tiebreak. maxItems: `20`. |
| `variant_id` | Optional | string |  |

