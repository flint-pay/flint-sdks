[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibility

Whether a return line is eligible under policy, with the eligible quantity, allowed resolution types, and any policy adjustments.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Required | Array of string | Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `decision_proposal` | Optional | [CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibilityDecisionProposal](../models/CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibilityDecisionProposal.md#createreturnpreviewresponsedataeligibilityeligibilitylineitemsitemeligibilitydecisionproposal) | The pinned policy decision recomputed for based_on_quantity. A decide with only approved_quantity commits these values. Policy automatic resolution selects the policy automatic_resolution_type for policy_default or the line's requested_resolution_type for buyer_requested. When buyer_requested has no requested_resolution_type, the proposal still exists without automatic_resolution_type, so resolution is manual. Manual policy resolution also has no automatic_resolution_type. An unset release_timing is filled with after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. `decision_proposal`: [field definitions](../models/CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibility.md#createreturnpreviewresponsedataeligibilityeligibilitylineitemsitemeligibilitydecision_proposal). |
| `eligible_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `evaluated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `ineligibility_reason` | Optional | string | The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. |
| `policy_adjustment_proposals` | Required | Array of ([CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItem](../models/CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItem.md#createreturnpreviewresponsedataeligibilityeligibilitylineitemsitemeligibilitypolicyadjustmentproposalsitem) and [ReturnPolicyAdjustmentProposal](../models/ReturnPolicyAdjustmentProposal.md#returnpolicyadjustmentproposal)) |  |
| `reason` | Required | string | Values: [9 declared values](#createreturnpreviewresponsedataeligibilityeligibilitylineitemsitemeligibility-reason-values). |
| `reason_message` | Required | string |  |
| `return_policy_id` | Optional | string |  |
| `return_policy_revision_id` | Optional | string |  |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

#### CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibility reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibility.decision_proposal

The pinned policy decision recomputed for based_on_quantity. A decide with only approved_quantity commits these values. Policy automatic resolution selects the policy automatic_resolution_type for policy_default or the line's requested_resolution_type for buyer_requested. When buyer_requested has no requested_resolution_type, the proposal still exists without automatic_resolution_type, so resolution is manual. Manual policy resolution also has no automatic_resolution_type. An unset release_timing is filled with after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required.

Field definitions: [shared fields](ReturnLineItemDecisionProposalInput.md#returnlineitemdecisionproposalinput).

