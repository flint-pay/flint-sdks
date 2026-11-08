[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnEligibilityPreview

The result of checking whether an order's items can be returned: overall status, per-line eligibility, and the policy evaluation.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `line_items` | Required | Array of [ReturnEligibilityPreviewLineItem](../models/ReturnEligibilityPreviewLineItem.md#returneligibilitypreviewlineitem) | Eligibility of each line asked about. |
| `order_id` | Required | string | ID of the Order the units come from. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `policy_evaluation` | Required | [ReturnPolicyEvaluation](../models/ReturnPolicyEvaluation.md#returnpolicyevaluation) | How the active return policies judged the lines. How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results. |
| `selection` | Required | [ReturnEligibilitySelection](../models/ReturnEligibilitySelection.md#returneligibilityselection) | The selection the preview was run for. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. `selection`: [declared alternatives](../models/BuyerReturnEligibilityPreview.md#buyerreturneligibilitypreviewselection). |
| `status` | Required | string | Overall result for the selection. `review_required` when the lines differ. Values: `"eligible"`, `"ineligible"`, `"review_required"`. |

### ReturnEligibilityPreview.selection

Declared alternatives: [BuyerReturnEligibilityPreview.selection](../models/BuyerReturnEligibilityPreview.md#buyerreturneligibilitypreviewselection).

