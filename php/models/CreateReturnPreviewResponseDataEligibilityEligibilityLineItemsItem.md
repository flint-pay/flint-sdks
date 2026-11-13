[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItem

Return eligibility for one order line item, with the line's details, suggested return reasons, and whether self-service returns are enabled.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_components` | Required | Array of ([CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemBundleComponentsItem](../models/CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemBundleComponentsItem.md#createreturnpreviewresponsedataeligibilityeligibilitylineitemsitembundlecomponentsitem) and [BundleComponent](../models/BundleComponent.md#bundlecomponent)) | Components of the bundle the line was sold from. |
| `bundle_id` | Optional | string | ID of the bundle the line was sold from. |
| `can_buyer_request` | Required | boolean | Whether the buyer can request this line themselves, through a customer session, right now. False when no policy covers the item, when it is not eligible, or when the store offers no reason for it. Read eligibility.reason and ineligibility_reason to say why. |
| `description` | Optional | string | Description of the item as sold. |
| `eligibility` | Required | [CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibility](../models/CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibility.md#createreturnpreviewresponsedataeligibilityeligibilitylineitemsitemeligibility) | How the policy judged this line. Whether a return line is eligible under policy, with the eligible quantity, allowed resolution types, and any policy adjustments. `eligibility`: [field definitions](../models/CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItem.md#createreturnpreviewresponsedataeligibilityeligibilitylineitemsitemeligibility-fields-1). |
| `fulfillment_id` | Required | string | ID of the fulfillment the units were delivered in. |
| `image` | Optional | [CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemImage](../models/CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemImage.md#createreturnpreviewresponsedataeligibilityeligibilitylineitemsitemimage) | Image of the item as sold. An image with its URL, size, and alt text. |
| `modifiers` | Required | Array of ([CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemModifiersItem](../models/CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemModifiersItem.md#createreturnpreviewresponsedataeligibilityeligibilitylineitemsitemmodifiersitem) and [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier)) | Modifiers selected on the order line, with their prices. |
| `name` | Required | string | Name of the item as sold. |
| `order_line_item_id` | Required | string | ID of the order line item the units come from. |
| `product_id` | Optional | string | ID of the catalog product the item was sold from. |
| `requested_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `selected_options` | Required | Array of ([CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemSelectedOptionsItem](../models/CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemSelectedOptionsItem.md#createreturnpreviewresponsedataeligibilityeligibilitylineitemsitemselectedoptionsitem) and [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption)) | Variant options selected for the item, such as size and color. |
| `sku` | Optional | string | SKU of the item as sold. |
| `suggested_return_reasons` | Required | Array of ([CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemSuggestedReturnReasonsItem](../models/CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemSuggestedReturnReasonsItem.md#createreturnpreviewresponsedataeligibilityeligibilitylineitemsitemsuggestedreturnreasonsitem) and object) | Active reasons that apply to this item, up to 20. Category-scoped reasons come first, then reasons that apply to every item. Each group sorts by handle ascending, with return_reason_id ascending as the tiebreak. maxItems: `20`. |
| `variant_id` | Optional | string | ID of the catalog variant the item was sold from. |

### CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItem.eligibility fields 1

How the policy judged this line. Whether a return line is eligible under policy, with the eligible quantity, allowed resolution types, and any policy adjustments.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Required | Array of string | Resolution types the policy allows for this line. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `decision_proposal` | Optional | [ReturnLineItemDecisionProposal](../models/ReturnLineItemDecisionProposal.md#returnlineitemdecisionproposal) | Terms the policy proposes if the line is approved. Absent when the policy can't propose any. The pinned policy decision recomputed for based_on_quantity. A decide with only approved_quantity commits these values. Policy automatic resolution selects the policy automatic_resolution_type for policy_default or the line's requested_resolution_type for buyer_requested. When buyer_requested has no requested_resolution_type, the proposal still exists without automatic_resolution_type, so resolution is manual. Manual policy resolution also has no automatic_resolution_type. An unset release_timing is filled with after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. `decision_proposal`: [field definitions](../models/BuyerReturnResponse.md#buyerreturnresponsedataline_itemseligibilitydecision_proposal). |
| `eligible_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `evaluated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `ineligibility_reason` | Optional | string | The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. |
| `policy_adjustment_proposals` | Required | Array of [ReturnPolicyAdjustmentProposal](../models/ReturnPolicyAdjustmentProposal.md#returnpolicyadjustmentproposal) | Fees or credits the policy proposes for this line, to add to a resolution as adjustments. |
| `reason` | Required | string | Why the line got this result. Values: [9 declared values](#createreturnpreviewresponsedataeligibilityeligibilitylineitemsitemeligibility-fields-1-reason-values). |
| `reason_message` | Required | string | Explanation of `reason`. |
| `return_policy_id` | Optional | string | ID of the policy that judged the line. Absent when none matched. Example: `"rpol_01KEZF7C00H8C042BEK6HBRANX"`. |
| `return_policy_revision_id` | Optional | string | ID of the policy revision that judged the line. Absent when none matched. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. |
| `return_shipping_payer` | Required | string or null | Who pays return shipping under the policy. Null when the line is not eligible, requires no merchandise return, or the policy does not specify a payer. This field does not promise a prepaid label. Values: `"merchant"`, `"buyer"`, `null`. |
| `status` | Required | string | Whether the policy lets the buyer return this. `review_required` means the merchant decides. Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

#### CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItem.eligibility fields 1 reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItem.eligibility fields 1.decision_proposal

Field definitions: [BuyerReturnResponse.data.line_items[].eligibility.decision_proposal](../models/BuyerReturnResponse.md#buyerreturnresponsedataline_itemseligibilitydecision_proposal).

