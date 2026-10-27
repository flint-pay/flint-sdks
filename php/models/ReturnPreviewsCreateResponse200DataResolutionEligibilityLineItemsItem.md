[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItem

Return eligibility for one order line item, with the line's details, suggested return reasons, and whether self-service returns are enabled.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_components` | Required | Array of ([ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemBundleComponentsItem](../models/ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemBundleComponentsItem.md#returnpreviewscreateresponse200dataresolutioneligibilitylineitemsitembundlecomponentsitem) and [BundleComponent](../models/BundleComponent.md#bundlecomponent)) |  |
| `bundle_id` | Optional | string |  |
| `can_buyer_request` | Required | boolean | Whether the buyer can request this line themselves, through a customer session, right now. False when no policy covers the item, when it is not eligible, or when the store offers no reason for it. Read eligibility.reason and ineligibility_reason to say why. |
| `description` | Optional | string |  |
| `eligibility` | Required | [ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemEligibility](../models/ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemEligibility.md#returnpreviewscreateresponse200dataresolutioneligibilitylineitemsitemeligibility) | Whether a return line is eligible under policy, with the eligible quantity, allowed resolution types, and any policy adjustments. `eligibility`: [field definitions](../models/ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItem.md#returnpreviewscreateresponse200dataresolutioneligibilitylineitemsitemeligibility-fields-1). |
| `fulfillment_id` | Required | string |  |
| `image` | Optional | [ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemImage](../models/ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemImage.md#returnpreviewscreateresponse200dataresolutioneligibilitylineitemsitemimage) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `modifiers` | Required | Array of ([ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemModifiersItem](../models/ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemModifiersItem.md#returnpreviewscreateresponse200dataresolutioneligibilitylineitemsitemmodifiersitem) and [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier)) |  |
| `name` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `product_id` | Optional | string |  |
| `requested_quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `selected_options` | Required | Array of ([ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemSelectedOptionsItem](../models/ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemSelectedOptionsItem.md#returnpreviewscreateresponse200dataresolutioneligibilitylineitemsitemselectedoptionsitem) and [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption)) |  |
| `sku` | Optional | string |  |
| `suggested_return_reasons` | Required | Array of ([ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemSuggestedReturnReasonsItem](../models/ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItemSuggestedReturnReasonsItem.md#returnpreviewscreateresponse200dataresolutioneligibilitylineitemsitemsuggestedreturnreasonsitem) and [ReturnReasonSummary](../models/ReturnReasonSummary.md#returnreasonsummary)) | Active reasons that apply to this item, up to 20. Category-scoped reasons come first, then reasons that apply to every item. Each group sorts by handle ascending, with return_reason_id ascending as the tiebreak. maxItems: `20`. |
| `variant_id` | Optional | string |  |

### ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItem.eligibility fields 1

Whether a return line is eligible under policy, with the eligible quantity, allowed resolution types, and any policy adjustments.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Required | Array of string | Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `decision_proposal` | Optional | [ReturnLineItemDecisionProposal](../models/ReturnLineItemDecisionProposal.md#returnlineitemdecisionproposal) | The pinned policy decision recomputed for based_on_quantity. A decide with only approved_quantity commits these values. Policy automatic resolution selects the policy automatic_resolution_type for policy_default or the line's requested_resolution_type for buyer_requested. When buyer_requested has no requested_resolution_type, the proposal still exists without automatic_resolution_type, so resolution is manual. Manual policy resolution also has no automatic_resolution_type. An unset release_timing is filled with after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. `decision_proposal`: [field definitions](../models/BuyerReturnLineItemEligibility.md#buyerreturnlineitemeligibilitydecision_proposal). |
| `eligible_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `evaluated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `ineligibility_reason` | Optional | string | The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. |
| `policy_adjustment_proposals` | Required | Array of [ReturnPolicyAdjustmentProposal](../models/ReturnPolicyAdjustmentProposal.md#returnpolicyadjustmentproposal) |  |
| `reason` | Required | string | Values: [9 declared values](#returnpreviewscreateresponse200dataresolutioneligibilitylineitemsitemeligibility-fields-1-reason-values). |
| `reason_message` | Required | string |  |
| `return_policy_id` | Optional | string |  |
| `return_policy_revision_id` | Optional | string |  |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

#### ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItem.eligibility fields 1 reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### ReturnPreviewsCreateResponse200DataResolutionEligibilityLineItemsItem.eligibility fields 1.decision_proposal

Field definitions: [BuyerReturnLineItemEligibility.decision_proposal](../models/BuyerReturnLineItemEligibility.md#buyerreturnlineitemeligibilitydecision_proposal).

