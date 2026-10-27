[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPolicyEvaluationLineItemInput

An order line's eligibility, allowed resolutions, return requirements, and catalog details from the buyer's Return policy evaluation.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Required | Array of string | Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `bundle_components` | Required | Array of [BundleComponentInput](../models/BundleComponentInput.md#bundlecomponentinput) |  |
| `bundle_id` | Optional | string |  |
| `description` | Optional | string |  |
| `eligible_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `fulfillment_id` | Required | string |  |
| `image` | Optional | [ImageInput](../models/ImageInput.md#imageinput) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `ineligibility_reason` | Optional | string | The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. |
| `is_inspection_required` | Required | boolean |  |
| `is_merchandise_return_required` | Required | boolean |  |
| `modifiers` | Required | Array of [BuyerReturnLineItemModifierInput](../models/BuyerReturnLineItemModifierInput.md#buyerreturnlineitemmodifierinput) |  |
| `name` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `policy_adjustment_proposals` | Required | Array of [ReturnPolicyAdjustmentProposalInput](../models/ReturnPolicyAdjustmentProposalInput.md#returnpolicyadjustmentproposalinput) |  |
| `product_id` | Optional | string |  |
| `reason` | Required | string | Values: [9 declared values](#buyerreturnpolicyevaluationlineiteminput-reason-values). |
| `receiving_location_id` | Optional | string |  |
| `release_timing` | Required | string | Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. |
| `requested_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `selected_options` | Required | Array of [SelectedProductOptionInput](../models/SelectedProductOptionInput.md#selectedproductoptioninput) |  |
| `sku` | Optional | string |  |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |
| `suggested_return_reason_ids` | Required | Array of string |  |
| `variant_id` | Optional | string |  |

#### BuyerReturnPolicyEvaluationLineItemInput reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

