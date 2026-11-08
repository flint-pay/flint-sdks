[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnEligibilityPreview

The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `line_items` | Required | Array of [BuyerReturnEligibilityPreviewLineItem](../models/BuyerReturnEligibilityPreviewLineItem.md#buyerreturneligibilitypreviewlineitem) | Eligibility of each line asked about. |
| `order_id` | Required | string | ID of the Order the units come from. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `policy_evaluation` | Required | [BuyerReturnPolicyEvaluation](../models/BuyerReturnPolicyEvaluation.md#buyerreturnpolicyevaluation) | How the active return policies judged the lines. Return policy evaluation results shown to the buyer, including eligibility and results for individual order lines. |
| `selection` | Required | [ReturnEligibilitySelection](../models/ReturnEligibilitySelection.md#returneligibilityselection) | The selection the preview was run for. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. `selection`: [declared alternatives](../models/BuyerReturnEligibilityPreview.md#buyerreturneligibilitypreviewselection). |
| `status` | Required | string | Overall result for the selection. `review_required` when the lines differ. Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

### BuyerReturnEligibilityPreview.selection

The selection the preview was run for. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_items` | Conditional | Array of [ReturnEligibilityLineItemRequest](../models/ReturnEligibilityLineItemRequest.md#returneligibilitylineitemrequest) | The lines to check or return, each naming an order line item. `line_items[]`: [field definitions](../models/BuyerReturnEligibilityPreview.md#buyerreturneligibilitypreviewselection-variant-1line_items). |
| `selection_type` | Required | string | How the selection picks units. Values: `"all_remaining_fulfilled"`, `"line_items"`. |

### BuyerReturnEligibilityPreview.selection variant 1: `selection_type` = `"all_remaining_fulfilled"`

oneOf with selection_type: "all_remaining_fulfilled": The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`..

- Condition: not (present(`line_items`)).
- Optional: `line_items`.
- Constraints for `selection_type`: Values: `"all_remaining_fulfilled"`.

### BuyerReturnEligibilityPreview.selection variant 2: `selection_type` = `"line_items"`

oneOf with selection_type: "line_items": The `line_items` variant of `ReturnEligibilitySelection`..

- Required: `line_items`.
- Constraints for `line_items`: minItems: `1`.
- Constraints for `selection_type`: Values: `"line_items"`.

### BuyerReturnEligibilityPreview.selection variant 1.line_items[]

An order line and quantity to check. return_reason_id is optional here; when you send it, Flint checks that the reason is active and applies to the line.

Field definitions: [shared fields](ReturnEligibilityLineItemRequest.md#returneligibilitylineitemrequest).

