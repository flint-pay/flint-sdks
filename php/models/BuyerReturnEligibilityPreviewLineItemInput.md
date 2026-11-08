[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnEligibilityPreviewLineItemInput

An order line item's Return eligibility, catalog details, and suggested return reasons shown to the buyer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_components` | Required | Array of [BundleComponentInput](../models/BundleComponentInput.md#bundlecomponentinput) | Components of the bundle the line was sold from. |
| `bundle_id` | Optional | string | ID of the bundle the line was sold from. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `can_buyer_request` | Required | boolean | Whether the buyer can request this line themselves, through a customer session, right now. False when no policy covers the item, when it is not eligible, or when the store offers no reason for it. Read eligibility.reason and ineligibility_reason to say why. |
| `description` | Optional | string | Description of the item as sold. |
| `eligibility` | Required | [BuyerReturnLineItemEligibilityInput](../models/BuyerReturnLineItemEligibilityInput.md#buyerreturnlineitemeligibilityinput) | How the policy judged this line. An item's Return eligibility, eligible quantity, allowed resolution types, and eligibility reasons shown to the buyer. |
| `fulfillment_id` | Required | string | ID of the fulfillment the units were delivered in. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `image` | Optional | [ImageInput](../models/ImageInput.md#imageinput) | Image of the item as sold. An image with its URL, size, and alt text. |
| `modifiers` | Required | Array of [BuyerReturnLineItemModifierInput](../models/BuyerReturnLineItemModifierInput.md#buyerreturnlineitemmodifierinput) | Modifiers selected on the order line, with their prices. |
| `name` | Required | string | Name of the item as sold. |
| `order_line_item_id` | Required | string | ID of the order line item the units come from. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `product_id` | Optional | string | ID of the catalog product the item was sold from. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `requested_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `selected_options` | Required | Array of [SelectedProductOptionInput](../models/SelectedProductOptionInput.md#selectedproductoptioninput) | Variant options selected for the item, such as size and color. |
| `sku` | Optional | string | SKU of the item as sold. |
| `suggested_return_reasons` | Required | Array of [ReturnReasonSummaryInput](../models/ReturnReasonSummaryInput.md#returnreasonsummaryinput) | Active reasons that apply to this item, up to 20. Category-scoped reasons come first, then reasons that apply to every item. Each group sorts by handle ascending, with return_reason_id ascending as the tiebreak. maxItems: `20`. |
| `variant_id` | Optional | string | ID of the catalog variant the item was sold from. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

