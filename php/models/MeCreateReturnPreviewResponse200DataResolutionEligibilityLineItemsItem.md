[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItem

An order line item's Return eligibility, catalog details, and suggested return reasons shown to the buyer.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_components` | Required | Array of ([MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemBundleComponentsItem](../models/MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemBundleComponentsItem.md#mecreatereturnpreviewresponse200dataresolutioneligibilitylineitemsitembundlecomponentsitem) and [BundleComponent](../models/BundleComponent.md#bundlecomponent)) |  |
| `bundle_id` | Optional | string |  |
| `can_buyer_request` | Required | boolean | Whether the buyer can request this line themselves, through a customer session, right now. False when no policy covers the item, when it is not eligible, or when the store offers no reason for it. Read eligibility.reason and ineligibility_reason to say why. |
| `description` | Optional | string |  |
| `eligibility` | Required | [MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemEligibility](../models/MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemEligibility.md#mecreatereturnpreviewresponse200dataresolutioneligibilitylineitemsitemeligibility) | An item's Return eligibility, eligible quantity, allowed resolution types, and eligibility reasons shown to the buyer. `eligibility`: [field definitions](../models/MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItem.md#mecreatereturnpreviewresponse200dataresolutioneligibilitylineitemsitemeligibility-fields-1). |
| `fulfillment_id` | Required | string |  |
| `image` | Optional | [MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemImage](../models/MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemImage.md#mecreatereturnpreviewresponse200dataresolutioneligibilitylineitemsitemimage) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `modifiers` | Required | Array of ([MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemModifiersItem](../models/MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemModifiersItem.md#mecreatereturnpreviewresponse200dataresolutioneligibilitylineitemsitemmodifiersitem) and [BuyerReturnLineItemModifier](../models/BuyerReturnLineItemModifier.md#buyerreturnlineitemmodifier)) |  |
| `name` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `product_id` | Optional | string |  |
| `requested_quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `selected_options` | Required | Array of ([MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemSelectedOptionsItem](../models/MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemSelectedOptionsItem.md#mecreatereturnpreviewresponse200dataresolutioneligibilitylineitemsitemselectedoptionsitem) and [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption)) |  |
| `sku` | Optional | string |  |
| `suggested_return_reasons` | Required | Array of ([MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemSuggestedReturnReasonsItem](../models/MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItemSuggestedReturnReasonsItem.md#mecreatereturnpreviewresponse200dataresolutioneligibilitylineitemsitemsuggestedreturnreasonsitem) and object) | Active reasons that apply to this item, up to 20. Category-scoped reasons come first, then reasons that apply to every item. Each group sorts by handle ascending, with return_reason_id ascending as the tiebreak. maxItems: `20`. |
| `variant_id` | Optional | string |  |

### MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItem.eligibility fields 1

An item's Return eligibility, eligible quantity, allowed resolution types, and eligibility reasons shown to the buyer.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Required | Array of string | Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `decision_proposal` | Optional | [ReturnLineItemDecisionProposal](../models/ReturnLineItemDecisionProposal.md#returnlineitemdecisionproposal) | The pinned policy decision recomputed for based_on_quantity. A decide with only approved_quantity commits these values. Policy automatic resolution selects the policy automatic_resolution_type for policy_default or the line's requested_resolution_type for buyer_requested. When buyer_requested has no requested_resolution_type, the proposal still exists without automatic_resolution_type, so resolution is manual. Manual policy resolution also has no automatic_resolution_type. An unset release_timing is filled with after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. `decision_proposal`: [field definitions](../models/BuyerReturnLineItemEligibility.md#buyerreturnlineitemeligibilitydecision_proposal). |
| `eligible_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `evaluated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `ineligibility_reason` | Optional | string | The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. |
| `policy_adjustment_proposals` | Required | Array of [ReturnPolicyAdjustmentProposal](../models/ReturnPolicyAdjustmentProposal.md#returnpolicyadjustmentproposal) |  |
| `reason` | Required | string | Values: [9 declared values](#mecreatereturnpreviewresponse200dataresolutioneligibilitylineitemsitemeligibility-fields-1-reason-values). |
| `reason_message` | Required | string |  |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

#### MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItem.eligibility fields 1 reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### MeCreateReturnPreviewResponse200DataResolutionEligibilityLineItemsItem.eligibility fields 1.decision_proposal

Field definitions: [BuyerReturnLineItemEligibility.decision_proposal](../models/BuyerReturnLineItemEligibility.md#buyerreturnlineitemeligibilitydecision_proposal).

