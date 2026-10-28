[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200

A response containing `BuyerReturnPreview` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | object and Alternative shapes (see declared variants) | A Return eligibility or resolution preview shown to the buyer, selected by mode. `data`: [declared alternatives](../models/MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### MeCreateReturnPreviewResponse200.data

A Return eligibility or resolution preview shown to the buyer, selected by mode.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Conditional | object | The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results. `eligibility`: [field definitions](../models/MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataeligibility-fields-1). |
| `mode` | Required | string | Values: `"eligibility"`, `"resolution"`. |
| `resolution` | Conditional | object | The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect. `resolution`: [field definitions](../models/MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataresolution-fields-1). |

### MeCreateReturnPreviewResponse200.data variant 1: `mode` = `"eligibility"`

oneOf variant 1: The `eligibility` variant of `BuyerReturnPreview`..

- Condition: not (present(`resolution`)).
- Required: `eligibility`.
- Optional: `resolution`.
- Constraints for `mode`: Values: `"eligibility"`.

### MeCreateReturnPreviewResponse200.data variant 2: `mode` = `"resolution"`

oneOf variant 2: The `resolution` variant of `BuyerReturnPreview`..

- Condition: not (present(`eligibility`)).
- Required: `resolution`.
- Optional: `eligibility`.
- Constraints for `mode`: Values: `"resolution"`.

### MeCreateReturnPreviewResponse200.data.eligibility fields 1

The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of object | `line_items[]`: [field definitions](../models/MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataeligibility-fields-1line_items). |
| `order_id` | Required | string |  |
| `policy_evaluation` | Required | object | Return policy evaluation results shown to the buyer, including eligibility and results for individual order lines. `policy_evaluation`: [field definitions](../models/MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataeligibility-fields-1policy_evaluation). |
| `selection` | Required | object and Alternative shapes (see declared variants) | Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. `selection`: [declared alternatives](../models/MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataeligibility-fields-1selection). |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

### MeCreateReturnPreviewResponse200.data.eligibility fields 1.line_items[]

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
| `modifiers` | Required | Array of [BuyerReturnLineItemModifier](../models/BuyerReturnLineItemModifier.md#buyerreturnlineitemmodifier) | `modifiers[]`: [field definitions](../models/MeCancelReturnResponse200.md#mecancelreturnresponse200dataline_itemsmodifiers). |
| `name` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `product_id` | Optional | string |  |
| `requested_quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) |  |
| `sku` | Optional | string |  |
| `suggested_return_reasons` | Required | Array of object | Active reasons that apply to this item, up to 20. Category-scoped reasons come first, then reasons that apply to every item. Each group sorts by handle ascending, with return_reason_id ascending as the tiebreak. maxItems: `20`. `suggested_return_reasons[]`: [field definitions](../models/MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataeligibility-fields-1line_itemssuggested_return_reasons). |
| `variant_id` | Optional | string |  |

### MeCreateReturnPreviewResponse200.data.eligibility fields 1.line_items[].modifiers[]

Field definitions: [MeCancelReturnResponse200.data.line_items[].modifiers[]](../models/MeCancelReturnResponse200.md#mecancelreturnresponse200dataline_itemsmodifiers).

### MeCreateReturnPreviewResponse200.data.eligibility fields 1.line_items[].suggested_return_reasons[]

A return reason a buyer can pick for a line, with its `handle` and whether a note is required.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `handle` | Required | string |  |
| `is_note_required` | Required | boolean |  |
| `name` | Required | string |  |
| `return_reason_id` | Required | string |  |

### MeCreateReturnPreviewResponse200.data.eligibility fields 1.policy_evaluation

Return policy evaluation results shown to the buyer, including eligibility and results for individual order lines.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `line_items` | Required | Array of object | `line_items[]`: [field definitions](../models/MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataeligibility-fields-1policy_evaluationline_items). |
| `reason` | Required | string | Values: [9 declared values](#mecreatereturnpreviewresponse200dataeligibility-fields-1policy_evaluation-reason-values). |
| `reason_message` | Required | string |  |
| `return_policy_id` | Optional | string |  |
| `return_policy_revision_id` | Optional | string |  |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

#### MeCreateReturnPreviewResponse200.data.eligibility fields 1.policy_evaluation reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### MeCreateReturnPreviewResponse200.data.eligibility fields 1.policy_evaluation.line_items[]

An order line's eligibility, allowed resolutions, return requirements, and catalog details from the buyer's Return policy evaluation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Required | Array of string | Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `bundle_components` | Required | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) |  |
| `bundle_id` | Optional | string |  |
| `description` | Optional | string |  |
| `eligible_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `fulfillment_id` | Required | string |  |
| `image` | Optional | [Image](../models/Image.md#image) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `ineligibility_reason` | Optional | string | The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. |
| `is_inspection_required` | Required | boolean |  |
| `is_merchandise_return_required` | Required | boolean |  |
| `modifiers` | Required | Array of [BuyerReturnLineItemModifier](../models/BuyerReturnLineItemModifier.md#buyerreturnlineitemmodifier) | `modifiers[]`: [field definitions](../models/MeCancelReturnResponse200.md#mecancelreturnresponse200dataline_itemsmodifiers). |
| `name` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `policy_adjustment_proposals` | Required | Array of [ReturnPolicyAdjustmentProposal](../models/ReturnPolicyAdjustmentProposal.md#returnpolicyadjustmentproposal) |  |
| `product_id` | Optional | string |  |
| `reason` | Required | string | Values: [9 declared values](#mecreatereturnpreviewresponse200dataeligibility-fields-1policy_evaluationline_items-reason-values). |
| `receiving_location_id` | Optional | string |  |
| `release_timing` | Required | string | Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. |
| `requested_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) |  |
| `sku` | Optional | string |  |
| `status` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |
| `suggested_return_reason_ids` | Required | Array of string |  |
| `variant_id` | Optional | string |  |

#### MeCreateReturnPreviewResponse200.data.eligibility fields 1.policy_evaluation.line_items[] reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### MeCreateReturnPreviewResponse200.data.eligibility fields 1.policy_evaluation.line_items[].modifiers[]

Field definitions: [MeCancelReturnResponse200.data.line_items[].modifiers[]](../models/MeCancelReturnResponse200.md#mecancelreturnresponse200dataline_itemsmodifiers).

### MeCreateReturnPreviewResponse200.data.eligibility fields 1.selection

Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Conditional | Array of object | `line_items[]`: [field definitions](../models/MeCreateReturnPreviewResponse200.md#mecreatereturnpreviewresponse200dataeligibility-fields-1selection-variant-1line_items). |
| `selection_type` | Required | string | Values: `"all_remaining_fulfilled"`, `"line_items"`. |

### MeCreateReturnPreviewResponse200.data.eligibility fields 1.selection variant 1: `selection_type` = `"all_remaining_fulfilled"`

oneOf variant 1: The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`..

- Condition: not (present(`line_items`)).
- Optional: `line_items`.
- Constraints for `selection_type`: Values: `"all_remaining_fulfilled"`.

### MeCreateReturnPreviewResponse200.data.eligibility fields 1.selection variant 2: `selection_type` = `"line_items"`

oneOf variant 2: The `line_items` variant of `ReturnEligibilitySelection`..

- Required: `line_items`.
- Constraints for `line_items`: minItems: `1`.
- Constraints for `selection_type`: Values: `"line_items"`.

### MeCreateReturnPreviewResponse200.data.eligibility fields 1.selection variant 1.line_items[]

An order line and quantity to check. return_reason_id is optional here; when you send it, Flint checks that the reason is active and applies to the line.

Field definitions: [shared fields](MeCreateReturnPreviewResponse200DataEligibilityEligibilitySelectionAllRemainingFulfilledLineItemsItem.md#mecreatereturnpreviewresponse200dataeligibilityeligibilityselectionallremainingfulfilledlineitemsitem).

### MeCreateReturnPreviewResponse200.data.resolution fields 1

The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of [BuyerReturnResolutionAdjustment](../models/BuyerReturnResolutionAdjustment.md#buyerreturnresolutionadjustment) |  |
| `based_on_return_version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `buyer_payment_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `line_items` | Required | Array of [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem) |  |
| `replacement_line_items` | Required | Array of [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem) |  |
| `replacement_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string |  |
| `returned_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

