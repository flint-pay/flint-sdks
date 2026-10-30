[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItem

The policy result for one return line: status, eligible quantity, allowed resolution types, and handling requirements such as inspection.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Required | Array of string | Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `bundle_components` | Required | Array of ([CreateReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItemBundleComponentsItem](../models/CreateReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItemBundleComponentsItem.md#createreturnpreviewresponsedataeligibilityeligibilitypolicyevaluationlineitemsitembundlecomponentsitem) and [BundleComponent](../models/BundleComponent.md#bundlecomponent)) |  |
| `bundle_id` | Optional | string |  |
| `description` | Optional | string |  |
| `eligible_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `fulfillment_id` | Required | string |  |
| `image` | Optional | [CreateReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItemImage](../models/CreateReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItemImage.md#createreturnpreviewresponsedataeligibilityeligibilitypolicyevaluationlineitemsitemimage) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `ineligibility_reason` | Optional | string | The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. |
| `is_inspection_required` | Required | boolean |  |
| `is_merchandise_return_required` | Required | boolean |  |
| `modifiers` | Required | Array of ([CreateReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItemModifiersItem](../models/CreateReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItemModifiersItem.md#createreturnpreviewresponsedataeligibilityeligibilitypolicyevaluationlineitemsitemmodifiersitem) and [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier)) |  |
| `name` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `policy_adjustment_proposals` | Required | Array of ([CreateReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItemPolicyAdjustmentProposalsItem](../models/CreateReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItemPolicyAdjustmentProposalsItem.md#createreturnpreviewresponsedataeligibilityeligibilitypolicyevaluationlineitemsitempolicyadjustmentproposalsitem) and [ReturnPolicyAdjustmentProposal](../models/ReturnPolicyAdjustmentProposal.md#returnpolicyadjustmentproposal)) |  |
| `product_id` | Optional | string |  |
| `reason` | Required | string | Values: [9 declared values](#createreturnpreviewresponsedataeligibilityeligibilitypolicyevaluationlineitemsitem-reason-values). |
| `receiving_location_id` | Optional | string |  |
| `release_timing` | Required | string | Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. |
| `requested_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `selected_options` | Required | Array of ([CreateReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItemSelectedOptionsItem](../models/CreateReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItemSelectedOptionsItem.md#createreturnpreviewresponsedataeligibilityeligibilitypolicyevaluationlineitemsitemselectedoptionsitem) and [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption)) |  |
| `sku` | Optional | string |  |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |
| `suggested_return_reason_ids` | Required | Array of string | IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then reasons with no categories, each group sorted by handle. |
| `variant_id` | Optional | string |  |

#### CreateReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItem reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

