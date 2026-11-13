[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponse

A response containing `BuyerReturnPreview` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | object and Alternative shapes (see declared variants) | Resource, collection, or operation result returned by this request. A Return eligibility or resolution preview shown to the buyer, selected by mode. `data`: [declared alternatives](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerReturnPreviewResponse.data

Resource, collection, or operation result returned by this request. A Return eligibility or resolution preview shown to the buyer, selected by mode.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Conditional | object | The eligibility check. Present when `mode` is `eligibility`. The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results. `eligibility`: [field definitions](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1). |
| `mode` | Required | string | Which preview to run. Values: `"eligibility"`, `"resolution"`. |
| `resolution` | Conditional | object | The priced resolution. Present when `mode` is `resolution`. The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect. `resolution`: [field definitions](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataresolution-fields-1). |

### BuyerReturnPreviewResponse.data variant 1: `mode` = `"eligibility"`

oneOf with mode: "eligibility": The `eligibility` variant of `BuyerReturnPreview`..

- Condition: not (present(`resolution`)).
- Required: `eligibility`.
- Optional: `resolution`.
- Constraints for `mode`: Values: `"eligibility"`.

### BuyerReturnPreviewResponse.data variant 2: `mode` = `"resolution"`

oneOf with mode: "resolution": The `resolution` variant of `BuyerReturnPreview`..

- Condition: not (present(`eligibility`)).
- Required: `resolution`.
- Optional: `eligibility`.
- Constraints for `mode`: Values: `"resolution"`.

### BuyerReturnPreviewResponse.data.eligibility fields 1

The eligibility check. Present when `mode` is `eligibility`. The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `line_items` | Required | Array of object | Eligibility of each line asked about. `line_items[]`: [field definitions](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1line_items). |
| `order_id` | Required | string | ID of the Order the units come from. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `policy_evaluation` | Required | object | How the active return policies judged the lines. Return policy evaluation results shown to the buyer, including eligibility and results for individual order lines. `policy_evaluation`: [field definitions](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1policy_evaluation). |
| `refund_estimate` | Required | [ReturnRefundEstimate](../models/ReturnRefundEstimate.md#returnrefundestimate) or null | Estimate for selected eligible quantities requested as refund, or with no requested resolution when refund is allowed. Null when no selected line is eligible for a refund. The store's inspection and its final decision can change the refund. Nothing is reserved. |
| `selection` | Required | object and Alternative shapes (see declared variants) | The selection the preview was run for. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. `selection`: [declared alternatives](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1selection). |
| `status` | Required | string | Overall result for the selection. `review_required` when the lines differ. Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

### BuyerReturnPreviewResponse.data.eligibility fields 1.line_items[]

An order line item's Return eligibility, catalog details, and suggested return reasons shown to the buyer.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_components` | Required | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) | Components of the bundle the line was sold from. `bundle_components[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components). |
| `bundle_id` | Optional | string | ID of the bundle the line was sold from. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `can_buyer_request` | Required | boolean | Whether the buyer can request this line themselves, through a customer session, right now. False when no policy covers the item, when it is not eligible, or when the store offers no reason for it. Read eligibility.reason and ineligibility_reason to say why. |
| `description` | Optional | string | Description of the item as sold. |
| `eligibility` | Required | [BuyerReturnLineItemEligibility](../models/BuyerReturnLineItemEligibility.md#buyerreturnlineitemeligibility) | How the policy judged this line. An item's Return eligibility, eligible quantity, allowed resolution types, and eligibility reasons shown to the buyer. `eligibility`: [field definitions](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1line_itemseligibility). |
| `fulfillment_id` | Required | string | ID of the fulfillment the units were delivered in. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `image` | Optional | [Image](../models/Image.md#image) | Image of the item as sold. An image with its URL, size, and alt text. |
| `modifiers` | Required | Array of [BuyerReturnLineItemModifier](../models/BuyerReturnLineItemModifier.md#buyerreturnlineitemmodifier) | Modifiers selected on the order line, with their prices. `modifiers[]`: [field definitions](../models/BuyerReturnResponse.md#buyerreturnresponsedataline_itemsmodifiers). |
| `name` | Required | string | Name of the item as sold. |
| `order_line_item_id` | Required | string | ID of the order line item the units come from. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `product_id` | Optional | string | ID of the catalog product the item was sold from. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `requested_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | Variant options selected for the item, such as size and color. `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `sku` | Optional | string | SKU of the item as sold. |
| `suggested_return_reasons` | Required | Array of object | Active reasons that apply to this item, up to 20. Category-scoped reasons come first, then reasons that apply to every item. Each group sorts by handle ascending, with return_reason_id ascending as the tiebreak. maxItems: `20`. `suggested_return_reasons[]`: [field definitions](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1line_itemssuggested_return_reasons). |
| `variant_id` | Optional | string | ID of the catalog variant the item was sold from. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### BuyerReturnPreviewResponse.data.eligibility fields 1.line_items[].bundle_components[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components).

### BuyerReturnPreviewResponse.data.eligibility fields 1.line_items[].eligibility

How the policy judged this line. An item's Return eligibility, eligible quantity, allowed resolution types, and eligibility reasons shown to the buyer.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Required | Array of string | Resolution types the policy allows for this line. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `decision_proposal` | Optional | [ReturnLineItemDecisionProposal](../models/ReturnLineItemDecisionProposal.md#returnlineitemdecisionproposal) | Terms the policy proposes if the line is approved. Absent when the policy can't propose any. The pinned policy decision recomputed for based_on_quantity. A decide with only approved_quantity commits these values. Policy automatic resolution selects the policy automatic_resolution_type for policy_default or the line's requested_resolution_type for buyer_requested. When buyer_requested has no requested_resolution_type, the proposal still exists without automatic_resolution_type, so resolution is manual. Manual policy resolution also has no automatic_resolution_type. An unset release_timing is filled with after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. `decision_proposal`: [field definitions](../models/BuyerReturnResponse.md#buyerreturnresponsedataline_itemseligibilitydecision_proposal). |
| `eligible_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `evaluated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `ineligibility_reason` | Optional | string | The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. |
| `policy_adjustment_proposals` | Required | Array of [ReturnPolicyAdjustmentProposal](../models/ReturnPolicyAdjustmentProposal.md#returnpolicyadjustmentproposal) | Fees or credits the policy proposes for this line, to add to a resolution as adjustments. |
| `reason` | Required | string | Why the line got this result. Values: [9 declared values](#buyerreturnpreviewresponsedataeligibility-fields-1line_itemseligibility-reason-values). |
| `reason_message` | Required | string | Explanation of `reason`. |
| `return_shipping_payer` | Required | string or null | Who pays return shipping under the policy. Null when the line is not eligible, requires no merchandise return, or the policy does not specify a payer. This field does not promise a prepaid label. Values: `"merchant"`, `"buyer"`, `null`. |
| `status` | Required | string | Whether the policy lets the buyer return this. `review_required` means the merchant decides. Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

#### BuyerReturnPreviewResponse.data.eligibility fields 1.line_items[].eligibility reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### BuyerReturnPreviewResponse.data.eligibility fields 1.line_items[].eligibility.decision_proposal

Field definitions: [BuyerReturnResponse.data.line_items[].eligibility.decision_proposal](../models/BuyerReturnResponse.md#buyerreturnresponsedataline_itemseligibilitydecision_proposal).

### BuyerReturnPreviewResponse.data.eligibility fields 1.line_items[].modifiers[]

Field definitions: [BuyerReturnResponse.data.line_items[].modifiers[]](../models/BuyerReturnResponse.md#buyerreturnresponsedataline_itemsmodifiers).

### BuyerReturnPreviewResponse.data.eligibility fields 1.line_items[].selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

### BuyerReturnPreviewResponse.data.eligibility fields 1.line_items[].suggested_return_reasons[]

A return reason a buyer can pick for a line, with its `handle` and whether a note is required.

Field definitions: [shared fields](ReturnReasonSummaryInput.md#returnreasonsummaryinput).

### BuyerReturnPreviewResponse.data.eligibility fields 1.policy_evaluation

How the active return policies judged the lines. Return policy evaluation results shown to the buyer, including eligibility and results for individual order lines.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `line_items` | Required | Array of object | Eligibility of each line asked about. `line_items[]`: [field definitions](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1policy_evaluationline_items). |
| `reason` | Required | string | Why the selection got this result. Values: [9 declared values](#buyerreturnpreviewresponsedataeligibility-fields-1policy_evaluation-reason-values). |
| `reason_message` | Required | string | Explanation of `reason`. |
| `return_policy_id` | Optional | string | ID of the policy that judged the lines. Absent when none matched. Example: `"rpol_01KEZF7C00H8C042BEK6HBRANX"`. |
| `return_policy_revision_id` | Optional | string | ID of the policy revision that judged the lines. Absent when none matched. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. |
| `status` | Required | string | Overall result for the selection. `review_required` when the lines differ. Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

#### BuyerReturnPreviewResponse.data.eligibility fields 1.policy_evaluation reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### BuyerReturnPreviewResponse.data.eligibility fields 1.policy_evaluation.line_items[]

An order line's eligibility, allowed resolutions, return requirements, and catalog details from the buyer's Return policy evaluation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Required | Array of string | Resolution types the policy allows for this line. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `bundle_components` | Required | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) | Components of the bundle the line was sold from. `bundle_components[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components). |
| `bundle_id` | Optional | string | ID of the bundle the line was sold from. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `description` | Optional | string | Description of the item as sold. |
| `eligible_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `fulfillment_id` | Required | string | ID of the fulfillment the units were delivered in. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `image` | Optional | [Image](../models/Image.md#image) | Image of the item as sold. An image with its URL, size, and alt text. |
| `ineligibility_reason` | Optional | string | The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. |
| `is_inspection_required` | Required | boolean | Whether the policy requires inspection of the returned units. |
| `is_merchandise_return_required` | Required | boolean | Whether the policy requires the buyer to send the merchandise back. |
| `modifiers` | Required | Array of [BuyerReturnLineItemModifier](../models/BuyerReturnLineItemModifier.md#buyerreturnlineitemmodifier) | Modifiers selected on the order line, with their prices. `modifiers[]`: [field definitions](../models/BuyerReturnResponse.md#buyerreturnresponsedataline_itemsmodifiers). |
| `name` | Required | string | Name of the item as sold. |
| `order_line_item_id` | Required | string | ID of the order line item the units come from. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `policy_adjustment_proposals` | Required | Array of [ReturnPolicyAdjustmentProposal](../models/ReturnPolicyAdjustmentProposal.md#returnpolicyadjustmentproposal) | Fees or credits the policy proposes for this line, to add to a resolution as adjustments. |
| `product_id` | Optional | string | ID of the catalog product the item was sold from. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `reason` | Required | string | Why the line got this result. Values: [9 declared values](#buyerreturnpreviewresponsedataeligibility-fields-1policy_evaluationline_items-reason-values). |
| `receiving_location_id` | Optional | string | ID of the Location the policy sends returned merchandise to. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `release_timing` | Required | string | Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. |
| `requested_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | Variant options selected for the item, such as size and color. `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `sku` | Optional | string | SKU of the item as sold. |
| `status` | Required | string | Whether the policy lets the buyer return this. `review_required` means the merchant decides. Values: `"eligible"`, `"ineligible"`, `"review_required"`. |
| `suggested_return_reason_ids` | Required | Array of string | IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then reasons with no categories, each group sorted by handle. Items: Example: `"rrsn_01KEZF7C00SEE2T4EYP1NXAH3E"`. |
| `variant_id` | Optional | string | ID of the catalog variant the item was sold from. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

#### BuyerReturnPreviewResponse.data.eligibility fields 1.policy_evaluation.line_items[] reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### BuyerReturnPreviewResponse.data.eligibility fields 1.policy_evaluation.line_items[].bundle_components[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components).

### BuyerReturnPreviewResponse.data.eligibility fields 1.policy_evaluation.line_items[].modifiers[]

Field definitions: [BuyerReturnResponse.data.line_items[].modifiers[]](../models/BuyerReturnResponse.md#buyerreturnresponsedataline_itemsmodifiers).

### BuyerReturnPreviewResponse.data.eligibility fields 1.policy_evaluation.line_items[].selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

### BuyerReturnPreviewResponse.data.eligibility fields 1.selection

The selection the preview was run for. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Conditional | Array of object | The lines to check or return, each naming an order line item. `line_items[]`: [field definitions](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataeligibility-fields-1selection-variant-1line_items). |
| `selection_type` | Required | string | How the selection picks units. Values: `"all_remaining_fulfilled"`, `"line_items"`. |

### BuyerReturnPreviewResponse.data.eligibility fields 1.selection variant 1: `selection_type` = `"all_remaining_fulfilled"`

oneOf with selection_type: "all_remaining_fulfilled": The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`..

- Condition: not (present(`line_items`)).
- Optional: `line_items`.
- Constraints for `selection_type`: Values: `"all_remaining_fulfilled"`.

### BuyerReturnPreviewResponse.data.eligibility fields 1.selection variant 2: `selection_type` = `"line_items"`

oneOf with selection_type: "line_items": The `line_items` variant of `ReturnEligibilitySelection`..

- Required: `line_items`.
- Constraints for `line_items`: minItems: `1`.
- Constraints for `selection_type`: Values: `"line_items"`.

### BuyerReturnPreviewResponse.data.eligibility fields 1.selection variant 1.line_items[]

An order line and quantity to check. return_reason_id is optional here; when you send it, Flint checks that the reason is active and applies to the line.

Field definitions: [shared fields](ReturnEligibilityLineItemRequestInput.md#returneligibilitylineitemrequestinput).

### BuyerReturnPreviewResponse.data.resolution fields 1

The priced resolution. Present when `mode` is `resolution`. The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of [BuyerReturnResolutionAdjustment](../models/BuyerReturnResolutionAdjustment.md#buyerreturnresolutionadjustment) | Fees and credits to apply to the resolution, at most 50. `adjustments[]`: [field definitions](../models/BuyerReturnPreviewResponse.md#buyerreturnpreviewresponsedataresolution-fields-1adjustments). |
| `based_on_return_version` | Required | integer | Version of the Return the preview was priced against. Format: `int64`. minimum: `0`. |
| `buyer_payment_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `credit_adjustment_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credits the proposed resolution's adjustments would add to the value returned to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `line_items` | Required | Array of [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem) | Return lines and quantities to cover, up to 100. Not allowed on a correction. `line_items[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsline_items). |
| `replacement_line_items` | Required | Array of [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem) | Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. `replacement_line_items[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsreplacement_line_items). |
| `replacement_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string | ID of the Return the resolution is for. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `returned_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### BuyerReturnPreviewResponse.data.resolution fields 1.adjustments[]

An adjustment to a Return resolution shown to the buyer, with its assessed amount, applied amount, status, and reason.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | What the fee or credit is for. Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`. |
| `applied_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is zero when the adjustment is waived. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `assessed_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount the fee or credit comes to before any waiver. Same currency as `applied_amount_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reason` | Required | string | Why the adjustment was made. Values: `"return_policy"`, `"inspection_result"`, `"return_shipping_cost"`, `"customer_service"`, `"manual_correction"`, `"other"`. |
| `reason_message` | Optional | string | Optional detail about `reason`, kept with the record. |
| `return_line_item_id` | Optional | string | ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. |
| `return_resolution_adjustment_id` | Required | string | Unique identifier for this return resolution adjustment, prefixed `retadj_`. Example: `"retadj_01KEZF7C00EX1XSCX7WSCDKSZZ"`. |
| `status` | Required | string | Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero. Values: `"applied"`, `"waived"`. |
| `value_effect` | Required | string | Whether the adjustment reduces or increases what the buyer receives. Values: `"deduction"`, `"credit"`. |

### BuyerReturnPreviewResponse.data.resolution fields 1.line_items[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsline_items).

### BuyerReturnPreviewResponse.data.resolution fields 1.replacement_line_items[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].replacement_line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsreplacement_line_items).

### BuyerReturnPreviewResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

